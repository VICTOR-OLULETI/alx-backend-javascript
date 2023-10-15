from collections import deque

boxes2 = [[1, 4, 6], [2], [0, 4, 1], [], [4, 1], [5]]
boxes = [[1, 4, 6], [2], [0, 4, 1], [5, 6, 2], [3], [4, 1], [6]]
boxes1 = [[1], [2], [3], [4], []]
queue = deque([0])
while queue:
    box = queue.popleft()

def printbox(boxes):
    keys = list(set(boxes[0]))
    ktemp1 = [0]
    ktemp2 = []
    n = len(boxes)
    while (n != len(ktemp1)):
        for i in keys:
            if i not in ktemp1:
                ktemp1.append(i)
                try:
                    ktemp2.extend(boxes[i])
                except IndexError:
                    continue
        if keys == ktemp1:
            return False
        keys.extend(ktemp2)
        keys = list(set(keys))
        ktemp2 = list(set(ktemp2))
        ktemp1 = list(set(ktemp1))
    return True

def canUnlockAll(boxes):
    n = len(boxes)
    visited = [False] * n
    visited[0] = True  # Mark the first box as visited
    for box in range(0, n): 
        for key in boxes[box]:
            try:
                if not visited[key]:
                    visited[key] = True
            except:
                continue
    # Check if all boxes were visited
    return all(visited)

# Test cases
boxes2 = [[1, 4, 6], [2], [0, 4, 1], [], [4, 1], [5]]
boxes = [[1, 4, 6], [2], [0, 4, 1], [5, 6, 2], [3], [4, 1], [6]]
boxes1 = [[1], [2], [3], [4], []]

#print(canUnlockAll(boxes))  # True
#print(canUnlockAll(boxes1))
#print(canUnlockAll(boxes2))
#print(printbox(boxes1))
#print(printbox(boxes2))


   
type Vector = list[float]

def scale(scalar: float, vector: Vector) -> Vector:
    return [scalar * num for num in vector]

new_vector = scale(2.0, [1.0, -4.2, 5.4])

from collections.abc import Sequence

type ConnectionOptions = dict[str, str]
type Address = tuple