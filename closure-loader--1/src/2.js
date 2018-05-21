goog.provide('a.b.c.g');

goog.require('a.b.c');
goog.require('a.b.c.f');

a.b.c.g.bar = function () {
  return a.b.c.buz() + a.b.c.f.qux();
};