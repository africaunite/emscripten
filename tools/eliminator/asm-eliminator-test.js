function asm(x, y) {
  x = +x;
  y = y|0;
  var a = 0, b = +0, c = 0;
  var label = 0;
  a = cheez((y+~~x)|0)|0;
  b = a*a;
  fleefl(b|0, a|0);
}
function __Z11printResultPiS_j($needle, $haystack, $len) {
  $needle = $needle | 0;
  $haystack = $haystack | 0;
  $len = $len | 0;
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $puts = 0, $7 = 0, $8 = 0, $9 = 0;
  var label = 0;
  var __stackBase__ = 0;
  __stackBase__ = STACKTOP;
  $1 = $needle;
  $2 = $haystack;
  $3 = _bsearch($1, $2, $len, 4, 2);
  $4 = ($3 | 0) == 0;
  if ($4) {
    $puts = _puts(_str | 0);
    STACKTOP = __stackBase__;
    return;
  } else {
    $7 = $3;
    $8 = HEAP32[($7 & 16777215) >> 2] | 0;
    $9 = _printf(__str1 | 0, (tempInt = STACKTOP, STACKTOP = STACKTOP + 4 | 0, HEAP32[(tempInt & 16777215) >> 2] = $8, tempInt));
    STACKTOP = __stackBase__;
    return;
  }
}
function _segment_holding($addr) {
  $addr = $addr | 0;
  var $sp_0 = 0, $2 = 0, $3 = 0, $4 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
  var $11 = 0, $12 = 0, $13 = 0, $_0 = 0;
  var label = 0;
  $sp_0 = __gm_ + 444 | 0;
  while (1) {
    $2 = $sp_0 | 0;
    $3 = HEAP32[($2 & 16777215) >> 2] | 0;
    $4 = $3 >>> 0 > $addr >>> 0;
    if (!$4) {
      $6 = $sp_0 + 4 | 0;
      $7 = HEAP32[($6 & 16777215) >> 2] | 0;
      $8 = $3 + $7 | 0;
      $9 = $8 >>> 0 > $addr >>> 0;
      if ($9) {
        $_0 = $sp_0;
        label = 1658;
        break;
      }
    }
    $11 = $sp_0 + 8 | 0;
    $12 = HEAP32[($11 & 16777215) >> 2] | 0;
    $13 = ($12 | 0) == 0;
    if ($13) {
      $_0 = 0;
      label = 1659;
      break;
    } else {
      $sp_0 = $12;
    }
  }
  if (label == 1659) {
    return $_0;
  } else if (label == 1658) {
    return $_0;
  }
}
function __ZN5identC2EiPKcPci($this, $n, $a) {
  $this = $this | 0;
  $n = $n | 0;
  $a = $a | 0;
  HEAP32[($this & 16777215) >> 2] = __ZTV5ident + 8 | 0;
  HEAP32[($this + 4 & 16777215) >> 2] = 5;
  HEAP32[($this + 8 & 16777215) >> 2] = $n;
  HEAP32[($this + 20 & 16777215) >> 2] = 2147483647;
  HEAP32[($this + 24 & 16777215) >> 2] = 0;
  HEAP32[($this + 28 & 16777215) >> 2] = $a;
  HEAP32[($this + 32 & 16777215) >> 2] = 0;
  HEAP32[($this + 40 & 16777215) >> 2] = 1;
  return;
}
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["asm", "__Z11printResultPiS_j", "_segment_holding", "__ZN5identC2EiPKcPci"]

