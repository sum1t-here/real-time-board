import { Layer, XYWH } from '@/types/canvas';
import { shallow, useSelf, useStorage } from '@liveblocks/react';

/**
 * Calculates the bounding box (the smallest rectangle that contains all given layers).
 * @param layers - Array of Layer objects with x, y, width, and height
 * @returns The bounding rectangle in {x, y, width, height} format, or null if no layers
 */
const boundingBox = (layers: Layer[]): XYWH | null => {
  // Return null if there are no layers
  const first = layers[0];
  if (!first) {
    return null;
  }

  // Initialize bounding edges with the first layer's values
  let left = first.x;
  let right = first.x + first.width;
  let top = first.y;
  let bottom = first.y + first.height;

  // Iterate through the remaining layers to expand the bounding box
  for (let i = 1; i < layers.length; i++) {
    const { x, y, width, height } = layers[i];

    // Update the left edge if a layer is further left
    if (left > x) {
      left = x;
    }

    // Update the right edge if a layer is further right
    if (right < x + width) {
      right = x + width;
    }

    // Update the top edge if a layer is higher (i.e. less y)
    if (top > y) {
      top = y;
    }

    // Update the bottom edge if a layer is lower (i.e. more y + height)
    if (bottom < y + height) {
      bottom = y + height;
    }
  }

  // Return the final bounding box
  return {
    x: left,
    y: top,
    width: right - left,
    height: bottom - top,
  };
};

export const useSelectionBounds = () => {
  // Get the current user's selected layer IDs from their presence
  const selection = useSelf((me) => me.presence.selection);

  // Read from Liveblocks storage to compute the bounding box of selected layers
  return useStorage((root) => {
    // Get the selected layers from storage using their IDs
    const selectedLayers = selection?.map((layerId) => root.layers.get(layerId)!).filter(Boolean);

    return boundingBox(selectedLayers!);
  }, shallow); // Use shallow comparison to avoid unnecessary re-renders
};
