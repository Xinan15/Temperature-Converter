// 将温度值在摄氏度、华氏度和开尔文之间相互转换

// 获取摄氏度、华氏度和开尔文输入框的DOM元素
const celsiusInput = document.querySelector("#celsius > input");
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const kelvinInput = document.querySelector("#kelvin > input");

// 定义函数，用于将数值四舍五入到两位小数
const roundToTwoDP = (num) => {
  return num.toFixed(2);
};

// 定义函数，用于将摄氏度转换为华氏度和开尔文，并更新对应输入框的值
const celsiusToFaAndKe = () => {
  const celsiusTemp = parseFloat(celsiusInput.value); // 获取摄氏度值
  const fahrenheitTemp = celsiusTemp * 1.8 + 32;  // 计算华氏度
  const kelvinTemp = celsiusTemp + 273.15;        // 计算开尔文

  fahrenheitInput.value = roundToTwoDP(fahrenheitTemp);
  kelvinInput.value = roundToTwoDP(kelvinTemp);
};

// 将华氏度转换为摄氏度和开尔
const fahrenheitToCeAndKe = () => {
  const fahrenheitTemp = parseFloat(fahrenheitInput.value);
  const celsiusTemp = (fahrenheitTemp - 32) * (5 / 9);
  const kelvinTemp = (fahrenheitTemp + 459.67) * (5 / 9);

  celsiusInput.value = roundToTwoDP(celsiusTemp);
  kelvinInput.value = roundToTwoDP(kelvinTemp);
};

// 将开尔文转换为摄氏度和华氏度
const kelvinToCeAndFa = () => {
  const kelvinTemp = parseFloat(kelvinInput.value);
  const celsiusTemp = kelvinTemp - 273;
  const fahrenheitTemp = 1.8 * (kelvinTemp - 273) + 32;

  celsiusInput.value = roundToTwoDP(celsiusTemp);
  fahrenheitInput.value = roundToTwoDP(fahrenheitTemp);
};

// 定义一个主函数，用于初始化事件监听器，监听输入框的输入事件并调用相应的转换函数
const main = () => {
  celsiusInput.addEventListener("input", celsiusToFaAndKe);
  fahrenheitInput.addEventListener("input", fahrenheitToCeAndKe);
  kelvinInput.addEventListener("input", kelvinToCeAndFa);
};

// 调用主函数，启动温度转换器
main();
