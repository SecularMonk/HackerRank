function saveThePrisoner(numPrisoners, numSweets, startIndex) {
   //Find the number of sweets remaining after looping around all the chairs.
   const remaining = numSweets % numPrisoners;
   //Compare that to the index at which we started, subtract 1 to get the last chair.
   let result = remaining + startIndex - 1;
   //If we've gone over, subtract the number of prisoners.
   if (result > numPrisoners) result -= numPrisoners;
   if (result === 0) return numPrisoners;
   return result;
}
