import ClassRoom from './0-classroom';

/**
 * create an array of {@link ClassRoom}s with a size
 * @returns An array of {@link ClassRoom}s.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
