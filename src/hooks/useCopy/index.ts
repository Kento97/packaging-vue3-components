export const useCopy = (text: string) => {
    //创建输入框
    const input = document.createElement('input');
    //给输入框value赋值
    input.value = text;
    //追加到body里面去
    document.body.appendChild(input);
    //选择输入框的操作
    input.select()
    //执行复制操作
    document.execCommand('copy')
    document.removeChild(input)
}
