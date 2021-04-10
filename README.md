# WPify Custom Fields

This library provides custom fields for WordPress and WooCommerce via simple API. The custom fields are stored in plain metadata so that you can access them via standard WordPress functionality. The frontend is written in React.js and has no dependencies in PHP. The library also doesn't include React itself but uses react as a dependency from WordPress. Therefore, the library is small and fast but requires at least WordPress 5.3.

[[_TOC_]]

## Overview

At the moment, you can add custom fields to the following locations:

* Post
* Taxonomy
* Options page
* WooCommerce product options
* WooCommerce settings section

The custom fields themselves use the standard HTML inputs, so it's recommended to use Google Chrome or Firefox to use the custom fields. This allows having a small footprint and a speedy frontend for the custom fields. You have available wide variety of custom field types:

* Attachment `attachment`: Files and images from Media library.
* Checkbox `checkbox`
* Code `code`: For CSS, javascript, HTML, PHP, and other dialects.
* Color `color`
* Date `date`
* Datetime `datetime`
* E-mail `email`
* Group `group`: To save multiple custom fields in one object.
* HTML `html`: To print some piece of HTML in the settings.
* Month `month`
* Number `number`
* Password `password`
* Post `post`: To select any post from any post type.
* Select `select`: Searchable select field.
* Phone number `tel`: The phone number input that enforces the user to put the standardized phone number in an
  international format.
* Textarea `textarea`
* Text `text`
* Time `time`
* Title `title`: To print the section title in the settings.
* Toggle `toggle`
* URL `url`
* Week `week`

Some fields also allow multiple values. You can also sort the values via drag&drop.

* Multiple Attachments `multi_attachment`
* Multiple Groups `multi_group`: The repeater allows you to have any custom fields repeated inside a group.
* Multiple Posts `multi_post`: Select multiple posts.
* Multiple Select `multi_select`: Select multiple values.

### Requirements

* PHP 7.3+ (we support only versions with security patches)
* Google Chrome/Firefox (the library uses native input fields that only some browsers support)
* WordPress 5.3 (the library requires React 16.8+ that was included in WordPress 5.2 and Gutenberg editor included in WordPress 5.3)

### Development requirements

If you want to help with the development of the library, feel free to extend that. In addition to the requirements above, you
will need also:

* Composer 2+
* Node 14+

## Example: Hello custom fields

The following example shows you how to add custom fields to a page and read the data.

1. Require the library in your plugin via composer:
   `composer require wpify/custom-fields`

2. Include composer autoloader in your plugin:
   `include_once __DIR__ . '/vendor/autoload.php';`

3. Create a new metabox with some text field:

```php
get_wpify_custom_fields()->add_metabox( array(
   // Metabox title
   'title'      => 'Hello custom fields',
   // Array of post types that will have the custom fields
   'post_types' => array( 'page' ),
   // Array of items for the metabox
   'items'      => array( 
      // Text field
      array(
         'type'  => 'text',
         'title' => 'Text label of the meta',
         'id'    => 'some_id_of_the_meta',
      ),
   ),
) );
```

That's it :)

# Implementations

## How to add custom fields to post type?

![Adding a metabox to the post](docs/images/wcf-metabox.png)

The example above shows the minimalistic example of how to add a metabox. Let's extend that with full list of options.
In snippet above, you can see all the options with their default values:

```php
get_wpify_custom_fields()->add_metabox( array(
   'id'            => null,
   'title'         => null,
   'screen'        => null,
   'context'       => 'advanced',
   'priority'      => 'default',
   'callback_args' => null,
   'items'         => array(),
   'post_types'    => array(),
) );
```

**Arguments**

* `id`, `title`, `screen`, `context`, `priority` and `callback_args`: See the WordPress documentation of `add_meta_box`
  function.
* `items`: array, required: List of the custom fields in the meta box.
* `post_types`: array, required: List of the post types with custom fields.

Please keep in mind that to have custom fields in the post type. For custom post type, add `custom-fields`
in `supports` array in `register_post_type` function, or use `add_post_type_support` function to add support to some
existing post type.

**Reading the custom fields**

To read the data, you can use simply built-in functions:

```php
$some_custom_field_value = get_post_meta( $post_id, 'some_id_of_the_meta', true );
```

**Links**

* `add_meta_box`: https://developer.wordpress.org/reference/functions/add_meta_box/
* `register_post_type`: https://developer.wordpress.org/reference/functions/register_post_type/
* `add_post_type_support`: https://developer.wordpress.org/reference/functions/add_post_type_support/
* `get_post_meta`: https://developer.wordpress.org/reference/functions/get_post_meta/

## How to add custom fields to the taxonomy term?

![Taxonomy custom fields](docs/images/wcf-taxonomy.png)

The functionality adds the meta box both on add and edit screen of taxonomy term:

```php
get_wpify_custom_fields()->add_metabox( array(
   'taxonomy' => null,
   'items'    => array(),
) );
```

**Arguments**

* `taxonomy` string, required. The taxonomy, to which terms you want to add custom fields, e.g. `category` for post category or `product_cat` for WooCommerce product category.
* `items`: array, required: List of the custom fields in the term.

**Reading the custom fields**

To read the data, you can use simply built-in functions:

```php
$some_custom_field_value = get_term_meta( $term_id, 'some_id_of_the_meta', true );
```

**Links**

* `get_term_meta`: https://developer.wordpress.org/reference/functions/get_term_meta/

## How to create an options page with custom fields?

![Options page](docs/images/wcf-options.png)

With this library, you can create options pages with ease on the top or second level. There are used core
function `add_menu_page` or `add_submenu_page` under the hood.

```php
get_wpify_custom_fields()->add_options_page( array(
   'type'        => 'normal',
   'parent_slug' => null,
   'page_title'  => '',
   'menu_title'  => '',
   'capability'  => 'manage_options',
   'menu_slug'   => null,
   'icon_url'    => null,
   'position'    => null,
   'items'       => array(),
) );
```

**Arguments**

* `type`: The only allowed value is `normal` (for standard option page) at the moment.
* `parent_slug`: If the options page is top-level, leave that `null`. If you want to add the page on second-level, add
  here the top-level page slug, e.g.:
	* `index.php` for Dashboard,
	* `edit.php` for Posts,
	* `upload.php` for Media,
	* `edit.php?post_type=page` for Pages,
	* `edit-comments.php` for Comments,
	* `edit.php?post_type=your_post_type` for your customs post types,
	* `themes.php` for Appearance,
	* `plugins.php` for Plugins,
	* `users.php` for Users,
	* `tools.php` for Tools,
	* `options-general.php` for Settings,
	* `settings.php` for Network Settings,
	* `woocommerce` for WooCommerce,
	* or any of your custom top-level menu slug.
* `page_title`: Title of the settings page.
* `menu_title`: Title of the settings page in the menu.
* `capability`: The capability the user needs to see the page.
* `menu_slug`: Unique menu slug of the page.
* `icon_url`: Icon for the top-level menu. Please see the documentation of `add_menu_page` to see how to add a menu
  icon.
* `position`: Position of the top-level menu page. Please see the documentation of `add_menu_page`.
* `items`: array, required: List of the custom fields in the options.

**Reading the custom fields**

```php
$some_custom_field_value = get_option( 'some_id_of_the_option' );
```

**Links**

* `add_submenu_page`: https://developer.wordpress.org/reference/functions/add_submenu_page/
* `add_menu_page`: https://developer.wordpress.org/reference/functions/add_menu_page/
* `get_option`: https://developer.wordpress.org/reference/functions/get_option/

## How to add custom fields to WooCommerce settings?

![WooCommerce settings](docs/images/wcf-woo-options.png)

If you want to easily add the settings tab or section to the WooCommerce → Settings, you can easily do that with the
following piece of code:

```php
get_wpify_custom_fields()->add_woocommerce_settings( array(
   'tab'     => array( 'id' => '', 'label' => null ),
   'section' => array( 'id' => '', 'label' => null ),
   'items'   => array(),
) );
```

**Arguments**

* `tab`: Identification of the tab. Please provide an array with `id` and `label` keys. If the tab doesn't exist, it will be created.
* `section`: Identification of the section. Please provide an array with `id` and `label` keys. If the section doesn't exist, it will be created.
* `items`: array, required: List of the custom fields in the settings.

**Reading the settings fields**

The WooCommerce settings is stores as standard options and you can read it as follows:

```php
$some_custom_field_value = get_option( 'some_id_of_the_option' );
```

**Links**

* `get_option`: https://developer.wordpress.org/reference/functions/get_option/

## How to add custom fields to the product options?

![Product options](docs/images/wcf-product-options.png)

Product options is a great place where to put the custom fields. You can define it as follows:

```php
get_wpify_custom_fields()->add_woocommerce_settings( array(
   'tab'        => array(
      'id'       => 'general',
      'label'    => null,
      'priority' => 100,
      'class'    => array(),
   ),
   'items'   => array(),
) );
```

**Arguments**

* `tab`: An array with tab settings. If the tab ID doesn't exist, it will be created.
	- `id`: ID of the tab.
	- `label`: Label of the tab.
	- `priority`: Priority of the tab.
	- `class`: Classes for the tab. You can use any classes you want, but also some built-in: `hide_if_grouped`
	  , `show_if_simple`, `show_if_variable`, `show_if_grouped`, `show_if_external`, `hide_if_external`
	  , `hide_if_virtual`
* `items`: array, required: List of the custom fields in the options.

**Reading the custom fields**

The product options are stored as post meta, so you can read the data the same way as any other post meta:

```php
$some_custom_field_value = get_post_meta( $product_id, 'some_id_of_the_meta', true );
```

**Links**

* `get_post_meta`: https://developer.wordpress.org/reference/functions/get_post_meta/

## How to generate Gutenberg block with custom fields?

![Gutenberg Block](docs/images/wcf-block.png)

You can easily generate blocks that will use the custom fields interface. if you want to replace default custom fields interface with your own, simply set the `editor_script` and `editor_style` attributes with handle of your registered script and style. Every registered block also have `wcf` attribute, that contains the definition of the custom fields used in the block.

```php
get_wpify_custom_fields()->add_gutenberg_block( array(
	'name'             => null, // string
	'title'            => null, // string
	'category'         => 'common', // string
	'parent'           => null, // string
	'icon'             => null, // string
	'description'      => null, // string
	'keywords'         => array(), // array
	'textdomain'       => null, // string
	'styles'           => array(), // array
	'supports'         => null, // array
	'example'          => null, // array
	'render_callback'  => null, // callable
	'attributes'       => array(), // array
	'uses_context'     => array(), // array
	'provides_context' => null, // array
	'editor_script'    => null, // string
	'script'           => null, // string
	'editor_style'     => null, // string
	'style'            => null, // string
	'items'            => array(), // array
) );
```

**Arguments**

* `name`: Required name of the block in `namespace/block-name` format.
* `title`, `category`, `parent`, `icon`, `description`, `keywords`, `textdomain`, `styles`, `supports`, `example`, `render_callback`, `attributes`, `uses_context`, `provides_context`, `editor_script`, `script`, `editor_style` and `style` attributes are arguments described in `register_block_type` function.
* `items`: Required array: List of the custom fields in the options.

**Links**

* `register_block_type`: https://developer.wordpress.org/reference/functions/register_block_type/

**Example**

```php
get_wpify_custom_fields()->add_gutenberg_block( array(
	'name'        => 'wcf/test',
	'title'       => 'Test block',
	'items'       => array(
		array(
			'type'        => 'text',
			'title'       => 'Example text',
			'id'          => 'some_example_text',
			'description' => 'and example description',
			'label'       => 'with example label',
		),
		array(
			'type'        => 'text',
			'title'       => 'Example text 2',
			'id'          => 'some_example_text_2',
			'description' => 'and example description',
			'label'       => 'with example label',
		),
	),
	'render_callback' => function ( $attributes ) {
		return '<h2>' . $attributes['some_example_text'] . '</h2><p>' . $attributes['some_example_text'] . '</p>';
	},
) );
```

# Custom fields definition

In examples above, only one custom field were shown. But you can define more than just text fields. There are many field
types to use. All the fields has some the following attributes in common:

```php
$some_item = array(
   'type'              => '',
   'id'                => '',
   'title'             => '',
   'placeholder'       => '',
   'suffix'            => '',
   'custom_attributes' => array(),
   'description'       => '',
);

// Some dummy usage, use `add_*` methods listed above.
get_wpify_custom_fields()->add_some_custom_field_implementation( array(
   // some options
   'items'    => array( $some_item ),
) );
```

**Common attributes**

* `type`: Field type identification, e.g. `text`, `date` or `attachment`.
* `id`: Unique ID of the item. This ID will be directly used as a name of the meta field.
* `title`: Title that will be used as a label of the field.
* `placeholder`: Placeholder that will be shown if the value is not filled.
* `suffix`: Text behind the field.
* `custom_attributes`: array of custom attributes you want to add to the field.
* `description`: Description that will be shown below the field.

## Attachment field type `attachment`, `multi_attachment`

![Attachment field type](docs/images/wcf-attachment-type.png)

**Additional attributes**

* `attachment_type`: Optional type of the attachments. It can be e.g. `image`, `image/png`, etc.

## Checkbox field type `checkbox`

![Checkbox field type](docs/images/wcf-checkbox-type.png)

**Additional attributes**

* `label`: Optional label behind the checkbox.

## Code editor field type `code`

![Code field type](docs/images/wcf-code-type.png)


**Additional attributes**

* `mode`: Mode of code editor for highlights, e.g. `css`, `javascript`, `html`, `php`, `markdown`, etc.

## Color field type `color`

![Color field type](docs/images/wcf-color-type.png)


## Date field type `date`

![Date field type](docs/images/wcf-date-type.png)

## Date and time field type `datetime`

![Date and time field type](docs/images/wcf-datetime-type.png)

## E-mail field type `email`

![E-mail field type](docs/images/wcf-email-type.png)

## Group field type `group`, `multi_group`

### Singular groups `group`

Group field doesn't have any visual representation, but groups fields into one field. Here is an example of defining the group field in options page:

```php
get_wpify_custom_fields()->add_options_page( array(
   'id'          => 'example_options_page',
   'page_title'  => 'Hello custom fields',
   'menu_title'  => 'Hello WCF',
   'menu_slug'   => 'hello-wcf',
   'position'    => 1000,
   'items'       => array(
      array(
         'id'              => 'some_example_group',
         'type'            => 'group',
         'title'           => 'Group',
         'items'           => array(
            array(
               'type'            => 'text',
               'title'           => 'Text in group 1',
               'id'              => 'some_example_text_1',
            ),
            array(
               'type'            => 'text',
               'title'           => 'Text in group 2',
               'id'              => 'some_example_text_2',
            ),
         )
      ),
   ),
) );
```

The result is following:

![Group field](docs/images/wcf-group-type.png);

We can now set some values and access the data:

```php
$value = get_option('some_example_group');
```

The code above will generate following array:

```php
array(
  "some_example_text_1" => "Some value 1",
  "some_example_text_2" => "Some value 2",
);
```

The groups can also be nested to get much more complicated data structures than in the example above.

### Repeated groups `multi_group`

If we change the field type in example above to `multi_group`, we'll get a different result:

```php
get_wpify_custom_fields()->add_options_page( array(
   'id'          => 'example_options_page',
   'page_title'  => 'Hello custom fields',
   'menu_title'  => 'Hello WCF',
   'menu_slug'   => 'hello-wcf',
   'position'    => 1000,
   'items'       => array(
      array(
         'id'              => 'some_example_group',
         'type'            => 'multi_group',
         'title'           => 'Multi group',
         'items'           => array(
            array(
               'type'            => 'text',
               'title'           => 'Text in group 1',
               'id'              => 'some_example_text_1',
            ),
            array(
               'type'            => 'text',
               'title'           => 'Text in group 2',
               'id'              => 'some_example_text_2',
            ),
         )
      ),
   ),
) );
```

![Multi group field](docs/images/wcf-multi-group-type.png)

The value in the custom field will be as follows:

```php
array(
    array(
        "some_example_text_1" => "Some text 1",
        "some_example_text_2" => "Some value 2",   
    ),
    array(
        "some_example_text_1" => "Some text 2",
        "some_example_text_2" => "",   
    ),
);
```

As you can see, you can add a new group with any fields inside it, move the group by drag&drop, and delete group items.

**Additional attributes**

* `items`: Array that holds the inner fields of the group.

## HTML field type `html`

![HTML Field](docs/images/wcf-html-type.png)

**Additional attributes**

* `content`: String with HTML to render.

## Month field type `month`

![Month field](docs/images/wcf-month-type.png)

## Number field type `number`

![Number field](docs/images/wcf-number-type.png)

## Password field type `password`

![Password field](docs/images/wcf-password-type.png)

## Post field type `post`, `multi_post`

![Post field](docs/images/wcf-post-type.png)
![Post field](docs/images/wcf-post-2-type.png)

Allows selecting posts from a particular post type. If you want more granular control over the posts that are shown in the select box, you can use the filter `wcf_get_posts_args`:

```php
/***
 * @var array $query_args Query arguments used in get_posts function
 * @var array $args Arguments passed to the field type 
 */
add_filter( 'wcf_get_posts_args', function ( array $query_args, array $args ) {
   return $query_args;
} );
```

**Additional attributes**

* string `post_type`
* You can also use any other attribute. Those attributes will be passed to the `wcf_get_posts_args` filter.

## Select field type `select`, `multi_select`

![Select field](docs/images/wcf-select-type.png)

The select field can accept options asynchronously from API (recommended) or inline from `option` attribute. Each option must be an associative array with `label` and `value` keys.

**Additional attributes**
* `list_type` if you use asynchronous option list from API.
* `options` if you use the inline list of options.
* You can also use any other attribute. Those attributes will be passed to the `wcf_list_{$list_type}` filter.

### Asynchronous options list

To define an asynchronous options list, you have first to define unique `list_type`. Then you can add a filter that will return the actual list. Arguments `$args` also contains the current phrase that the user typed into a select field.

```php
/***
 * @var array $list List of the options
 * @var array $args Arguments passed to the field type 
 */
add_filter( "wcf_list_{$list_type}", function ( array $list, array $args ) {
    $search = $args['search'];
    $list = array(
        array( 'label' => 'Option 1', 'value' => 1 ),
        array( 'label' => 'Option 2', 'value' => 2 ),
    );

    return array_filter( $list, function ( $option ) use ( $search ) {
        return strpos( $option['value'], $search ) !== false
            || strpos( $option['label'], $search ) !== false
    } );
} );
```

## Phone number field type `tel`

![Tel field](docs/images/wcf-tel-type.png)

## Textarea field type `textarea`

![Textarea field](docs/images/wcf-textarea-type.png)

## Text field type `text`

![Text field](docs/images/wcf-text-type.png)

## Time field type `time`

![Time field](docs/images/wcf-time-type.png)

## Title field type `title`

![Title field](docs/images/wcf-title-type.png)

## Toggle field type `toggle`

![Toggle field](docs/images/wcf-toggle-type.png)

**Additional attributes**

* `label` Label behind the toggle

## URL field type `url`

![URL field](docs/images/wcf-url-type.png)

## Week field type `week`

![Week field](docs/images/wcf-week-type.png)

# Extending the field types

You can extend the custom field types with your own:

1. Create a React component with the field:

```jsx
import React, { useState } from 'react';

const MyCustomField = (props) => {
   const { id, className, group_level = 0, value } = props;
   const [currentValue, setCurrentValue] = useState(value);
   
   return (
     <React.Fragment>
      {group_level === 0 && ( // We need to have the input with the name only if not in group
        <input type="hidden" name={id} value={currentValue}/>
      )} 
      <input
         id={id}
         type="text"
         className={classnames('regular-text', className)}
         onChange={(e) => setCurrentValue(e.target.value)}
         value={currentValue}
      />
     </React.Fragment>
   );
};

export default MyCustomField;
```

2. Register the field:

```javascript
import { addFilter } from '@wordpress/hooks';
import { MyCustomField } from './fields/MyCustomField.js';
const type = 'my_custom_field';
addFilter('wcf_field_' + type, 'my-plugin-slug', Component => MyCustomField);
```

3. Register the parser and sanitizer (if needed)

See the code in `src/Parser.php` and `src/Sanitizer.php` for filters.
