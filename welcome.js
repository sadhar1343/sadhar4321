var day = new Date();
var hour = day.getHours();
var ss;
if (hour < 12)
{
  ss = "صباح الخير";
}
else if (hour > 18)
{
  ss = "مساء الخير";
}
else
{
  ss = "مرحبا";
}
document.write(ss);