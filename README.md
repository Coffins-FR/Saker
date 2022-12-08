# saker

SakerJS a simple lib written in Typescript to generate random props inside your StoryBook or Ladle stories

## How to install

To install Saker in any project run.

```console
foo@bar: npm install saker
```

## How it works

To pick a random data inside an array :

```js
const sample = ['Onigiri', 'Saké', 'Sushi', 'Panco', 'Sashimi', 'Bun', 'Bao'];
const oneOf = Saker.oneOf(sample);
```

To pick many random data inside an array:

```js
const sample = ['Onigiri', 'Saké', 'Sushi', 'Panco', 'Sashimi', 'Bun', 'Bao'];
const manyOf = Saker.manyOf(20, sample);
```

To generate a complex random object :

```js
const log = Saker.repeat(10, {
  name: Saker.oneOf(sample),
  tags: Saker.manyOf(4, sample),
  adresses: Saker.repeat(2, {
    street: Saker.oneOf(['Wilson Street', 'King Road']),
  }),
})();
```

To generate a random text use the lorem function

```js
const lorem = Saker.lorem(2, 'paragraphs');
```

To get a random words, sentences or chars also use the lorem function

```js
const words = Saker.lorem(2, 'words');
const sentences = Saker.lorem(2, 'sentences');
const chars = Saker.lorem(2, 'chars');
```

## More to come

- [x] Inclusion of a compatibility with non regressing tools (static object generation)
- [] More random functions (Dates, Adresses, Basics Profils...)
