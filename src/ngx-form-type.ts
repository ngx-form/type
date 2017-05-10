
export type element = 'checkbox' | 'input' | 'select';
export type event = 'cancelled' | 'changed' | 'submitted';

/*
  With html specification
  http://w3c.github.io/html-reference/elements.html
*/
export type autocomplete = 'on' | 'off';
export type autofocus = 'autofocus' | '' | true | false;
export type disabled = 'disabled' | '' | true | false;
export type checked = 'checked' | '' | true | false;
export type input = 'button' | 'color' | 'checkbox' | 'date' | 'datetime' | 'datetime-local' | 'email' | 'file' | 'hidden' |
  'image' | 'month' | 'number' | 'password' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
export type readonly = 'readonly' | '' | true | false;
export type required = 'required' | '' | true | false;
