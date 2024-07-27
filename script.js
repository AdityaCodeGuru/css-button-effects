document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const htmlCode = button.getAttribute("data-html");
      const cssCode = button.getAttribute("data-css");
      const fullCode = `\n\/\* HTML Code \*\/\n${htmlCode}\n\n\/\* CSS Code \*\/\n${cssCode}\n`;
      copyToClipboard(fullCode);
    });
  });
});

function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
        // alert("Code copied to clipboard!");
      }).catch((err) => {
        console.error("Failed to copy: ", err);
      });
  } else {
    // Fallback for older browsers
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    // alert("Code copied to clipboard!");
  }
}


