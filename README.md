# Append Around

A jQuery plugin for responsive markup based on [FilamentGroup's script](https://github.com/filamentgroup/AppendAround).

## Installation

Install via [Bower](http://bower.io):
```
$ bower install websolutions/append-around --save
```

## Usage

The most basic example follows this DOM structure:
``` html
<!-- potential container for appendAround -->
<div class="foo" data-set="foobarbaz"></div>

<ul>
  <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
  <li>Aliquam tincidunt mauris eu risus.</li>
  <li>Vestibulum auctor dapibus neque.</li>
</ul>

<!-- potential container for appendAround -->
<div class="bar" data-set="foobarbaz"></div>

<ul>
  <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
  <li>Aliquam tincidunt mauris eu risus.</li>
  <li>Vestibulum auctor dapibus neque.</li>
</ul>


<!-- initial container for appendAround -->
<div class="baz" data-set="foobarbaz">
  <p class="sample">Sample appendAround Element</p>
</div>
```

Using the following CSS:
``` css
/* the sample appendaround element */
.sample {
    padding: 1em;
    background: tan;
}

.baz {
    display: block;
}
.foo,
.bar {
    display: none;
}

@media (min-width: 30em){
    .bar {
      display: block;
    }
    .foo, .baz {
      display: none;
    }
}

@media (min-width: 50em){
    div.foo {
      display: block;
    }
    div.bar, div.baz {
      display: none;
    }
}
```

And is initialized like so:
``` javascript
$(".sample").wsol_appendAround();
```

The plugin can also be removed afterwards:
``` javascript
$(".sample").data("wsol.appendAround").destroy();
```


### Configuring

The jQuery plugin supports configuration options:

Option                      | Type     | Description                                                      | Default
----------------------------|----------|------------------------------------------------------------------|--------
`setAttr`                   | String   | Attribute name for an element's set                              | `data-set`

