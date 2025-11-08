# React - Общие советы

// Best Practise props default values =>
Header.defaultProps = {
text: "Hello, world!",
};

// Оператор расширения {...params}
const params = {
className: "row",
title: "name",
};
кидает в аттрибуты тэга

// Props
const { value } = this.props // т.к. вытаскивает value из него
либо
const value = this.props.value

// Styles
render ( style={{ width: `${percentage}%` }})
или
const width = {
width: `${value}%`
}
style={ width }
