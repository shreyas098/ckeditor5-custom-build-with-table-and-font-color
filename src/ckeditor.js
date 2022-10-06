/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat.js';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Autoformat,
	AutoLink,
	Bold,
	Code,
	CodeBlock,
	Essentials,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	HorizontalLine,
	Image,
	Italic,
	Link,
	List,
	Paragraph,
	RemoveFormat,
	SpecialCharacters,
	Strikethrough,
	Table,
	TableCellProperties,
	TableProperties,
	TableToolbar,
	Underline
];

// Editor configuration.
Editor.defaultConfig = {
	toolbar: {
		items: [
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'insertTable',
			'fontBackgroundColor',
			'fontColor',
			'fontFamily',
			'fontSize',
			'removeFormat',
			'undo',
			'redo',
		]
	},
	language: 'en',
	fontSize: {
    options: [9, 11, 13, "default", 17, 19, 21],
  },
  fontColor: {
    colors: [{
        color: '#FF0000',
        label: 'Red'
      },
      {
        color: '#0000FF',
        label: 'Blue'
      },
      {
        color: '#FFFF00',
        label: 'Yellow'
      },
			{
        color: '#FFA500	',
        label: 'Orange'
      },
			{
        color: '#FFFFFF',
        label: 'White'
      },
			{
        color: '#000000',
        label: 'Black'
      },
			{
        color: '#FF00FF',
        label: 'Pink'
      },
			{
        color: '#800080',
        label: 'Purple'
      },
			{
        color: '#A9A9A9',
        label: 'Grey'
      },
			{
        color: '#008000',
        label: 'Green'
      },
			{
        color: '#00FFFF',
        label: 'Aqua'
      },
      {
        color: '#000099',
        label: 'Dark Blue'
      }
    ]
  },
	fontBackgroundColor: {
    colors: [{
        color: '#FF0000',
        label: 'Red'
      },
      {
        color: '#0000FF',
        label: 'Blue'
      },
      {
        color: '#FFFF00',
        label: 'Yellow'
      },
			{
        color: '#FFA500	',
        label: 'Orange'
      },
			{
        color: '#FFFFFF',
        label: 'White'
      },
			{
        color: '#000000',
        label: 'Black'
      },
			{
        color: '#FF00FF',
        label: 'Pink'
      },
			{
        color: '#800080',
        label: 'Purple'
      },
			{
        color: '#A9A9A9',
        label: 'Grey'
      },
			{
        color: '#008000',
        label: 'Green'
      },
			{
        color: '#00FFFF',
        label: 'Aqua'
      },
      {
        color: '#000099',
        label: 'Dark Blue'
      }
    ]
  },
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableCellProperties',
			'tableProperties'
		]
	}
};

export default Editor;
