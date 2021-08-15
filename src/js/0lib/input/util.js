function linearMove(start,target,step) {
  var diff = target-start;
  if(Math.abs(diff)<step)return target;
  if(diff>0) return start + step;
  return start - step;
}