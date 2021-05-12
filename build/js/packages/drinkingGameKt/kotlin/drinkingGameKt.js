(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root.drinkingGameKt = factory(typeof drinkingGameKt === 'undefined' ? {} : drinkingGameKt);
}(this, function (_) {
  'use strict';
  Exception.prototype = Object.create(Error.prototype);
  Exception.prototype.constructor = Exception;
  RuntimeException.prototype = Object.create(Exception.prototype);
  RuntimeException.prototype.constructor = RuntimeException;
  KotlinNothingValueException.prototype = Object.create(RuntimeException.prototype);
  KotlinNothingValueException.prototype.constructor = KotlinNothingValueException;
  Level.prototype = Object.create(Enum.prototype);
  Level.prototype.constructor = Level;
  Level_0.prototype = Object.create(Enum.prototype);
  Level_0.prototype.constructor = Level_0;
  AbstractList.prototype = Object.create(AbstractCollection.prototype);
  AbstractList.prototype.constructor = AbstractList;
  SubList.prototype = Object.create(AbstractList.prototype);
  SubList.prototype.constructor = SubList;
  ListIteratorImpl.prototype = Object.create(IteratorImpl.prototype);
  ListIteratorImpl.prototype.constructor = ListIteratorImpl;
  AbstractSet.prototype = Object.create(AbstractCollection.prototype);
  AbstractSet.prototype.constructor = AbstractSet;
  _no_name_provided__3.prototype = Object.create(AbstractSet.prototype);
  _no_name_provided__3.prototype.constructor = _no_name_provided__3;
  _no_name_provided__5.prototype = Object.create(AbstractCollection.prototype);
  _no_name_provided__5.prototype.constructor = _no_name_provided__5;
  InvocationKind.prototype = Object.create(Enum.prototype);
  InvocationKind.prototype.constructor = InvocationKind;
  CoroutineSingletons.prototype = Object.create(Enum.prototype);
  CoroutineSingletons.prototype.constructor = CoroutineSingletons;
  RequireKotlinVersionKind.prototype = Object.create(Enum.prototype);
  RequireKotlinVersionKind.prototype.constructor = RequireKotlinVersionKind;
  Default.prototype = Object.create(Random.prototype);
  Default.prototype.constructor = Default;
  XorWowRandom.prototype = Object.create(Random.prototype);
  XorWowRandom.prototype.constructor = XorWowRandom;
  KVariance.prototype = Object.create(Enum.prototype);
  KVariance.prototype.constructor = KVariance;
  Error_0.prototype = Object.create(Error.prototype);
  Error_0.prototype.constructor = Error_0;
  NotImplementedError.prototype = Object.create(Error_0.prototype);
  NotImplementedError.prototype.constructor = NotImplementedError;
  Iterator.prototype = Object.create(UByteIterator.prototype);
  Iterator.prototype.constructor = Iterator;
  Iterator_0.prototype = Object.create(UIntIterator.prototype);
  Iterator_0.prototype.constructor = Iterator_0;
  UIntRange.prototype = Object.create(UIntProgression.prototype);
  UIntRange.prototype.constructor = UIntRange;
  UIntProgressionIterator.prototype = Object.create(UIntIterator.prototype);
  UIntProgressionIterator.prototype.constructor = UIntProgressionIterator;
  Iterator_1.prototype = Object.create(ULongIterator.prototype);
  Iterator_1.prototype.constructor = Iterator_1;
  ULongRange_0.prototype = Object.create(ULongProgression.prototype);
  ULongRange_0.prototype.constructor = ULongRange_0;
  ULongProgressionIterator.prototype = Object.create(ULongIterator.prototype);
  ULongProgressionIterator.prototype.constructor = ULongProgressionIterator;
  Iterator_2.prototype = Object.create(UShortIterator.prototype);
  Iterator_2.prototype.constructor = Iterator_2;
  DeprecationLevel.prototype = Object.create(Enum.prototype);
  DeprecationLevel.prototype.constructor = DeprecationLevel;
  IntProgressionIterator.prototype = Object.create(IntIterator.prototype);
  IntProgressionIterator.prototype.constructor = IntProgressionIterator;
  LongProgressionIterator.prototype = Object.create(LongIterator.prototype);
  LongProgressionIterator.prototype.constructor = LongProgressionIterator;
  CharProgressionIterator.prototype = Object.create(CharIterator.prototype);
  CharProgressionIterator.prototype.constructor = CharProgressionIterator;
  IntRange.prototype = Object.create(IntProgression.prototype);
  IntRange.prototype.constructor = IntRange;
  LongRange.prototype = Object.create(LongProgression.prototype);
  LongRange.prototype.constructor = LongRange;
  CharRange.prototype = Object.create(CharProgression.prototype);
  CharRange.prototype.constructor = CharRange;
  AnnotationTarget.prototype = Object.create(Enum.prototype);
  AnnotationTarget.prototype.constructor = AnnotationTarget;
  AnnotationRetention.prototype = Object.create(Enum.prototype);
  AnnotationRetention.prototype.constructor = AnnotationRetention;
  AbstractMutableCollection.prototype = Object.create(AbstractCollection.prototype);
  AbstractMutableCollection.prototype.constructor = AbstractMutableCollection;
  ListIteratorImpl_0.prototype = Object.create(IteratorImpl_0.prototype);
  ListIteratorImpl_0.prototype.constructor = ListIteratorImpl_0;
  AbstractMutableList.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableList.prototype.constructor = AbstractMutableList;
  SubList_0.prototype = Object.create(AbstractMutableList.prototype);
  SubList_0.prototype.constructor = SubList_0;
  AbstractMutableSet.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableSet.prototype.constructor = AbstractMutableSet;
  AbstractEntrySet.prototype = Object.create(AbstractMutableSet.prototype);
  AbstractEntrySet.prototype.constructor = AbstractEntrySet;
  _no_name_provided__27.prototype = Object.create(AbstractMutableSet.prototype);
  _no_name_provided__27.prototype.constructor = _no_name_provided__27;
  _no_name_provided__28.prototype = Object.create(AbstractMutableCollection.prototype);
  _no_name_provided__28.prototype.constructor = _no_name_provided__28;
  AbstractMutableMap.prototype = Object.create(AbstractMap.prototype);
  AbstractMutableMap.prototype.constructor = AbstractMutableMap;
  ArrayList.prototype = Object.create(AbstractMutableList.prototype);
  ArrayList.prototype.constructor = ArrayList;
  EntrySet.prototype = Object.create(AbstractEntrySet.prototype);
  EntrySet.prototype.constructor = EntrySet;
  HashMap.prototype = Object.create(AbstractMutableMap.prototype);
  HashMap.prototype.constructor = HashMap;
  HashSet.prototype = Object.create(AbstractMutableSet.prototype);
  HashSet.prototype.constructor = HashSet;
  ChainEntry.prototype = Object.create(SimpleEntry.prototype);
  ChainEntry.prototype.constructor = ChainEntry;
  EntrySet_0.prototype = Object.create(AbstractEntrySet.prototype);
  EntrySet_0.prototype.constructor = EntrySet_0;
  LinkedHashMap.prototype = Object.create(HashMap.prototype);
  LinkedHashMap.prototype.constructor = LinkedHashMap;
  LinkedHashSet.prototype = Object.create(HashSet.prototype);
  LinkedHashSet.prototype.constructor = LinkedHashSet;
  NodeJsOutput_0.prototype = Object.create(BaseOutput.prototype);
  NodeJsOutput_0.prototype.constructor = NodeJsOutput_0;
  BufferedOutput_0.prototype = Object.create(BaseOutput.prototype);
  BufferedOutput_0.prototype.constructor = BufferedOutput_0;
  BufferedOutputToConsoleLog_0.prototype = Object.create(BufferedOutput_0.prototype);
  BufferedOutputToConsoleLog_0.prototype.constructor = BufferedOutputToConsoleLog_0;
  _no_name_provided__30.prototype = Object.create(AbstractList.prototype);
  _no_name_provided__30.prototype.constructor = _no_name_provided__30;
  PrimitiveKClassImpl.prototype = Object.create(KClassImpl.prototype);
  PrimitiveKClassImpl.prototype.constructor = PrimitiveKClassImpl;
  NothingKClassImpl.prototype = Object.create(KClassImpl.prototype);
  NothingKClassImpl.prototype.constructor = NothingKClassImpl;
  SimpleKClassImpl.prototype = Object.create(KClassImpl.prototype);
  SimpleKClassImpl.prototype.constructor = SimpleKClassImpl;
  RegexOption.prototype = Object.create(Enum.prototype);
  RegexOption.prototype.constructor = RegexOption;
  _no_name_provided__55.prototype = Object.create(AbstractCollection.prototype);
  _no_name_provided__55.prototype.constructor = _no_name_provided__55;
  _no_name_provided__56.prototype = Object.create(AbstractList.prototype);
  _no_name_provided__56.prototype.constructor = _no_name_provided__56;
  _no_name_provided__60.prototype = Object.create(BooleanIterator.prototype);
  _no_name_provided__60.prototype.constructor = _no_name_provided__60;
  _no_name_provided__61.prototype = Object.create(CharIterator.prototype);
  _no_name_provided__61.prototype.constructor = _no_name_provided__61;
  _no_name_provided__62.prototype = Object.create(ByteIterator.prototype);
  _no_name_provided__62.prototype.constructor = _no_name_provided__62;
  _no_name_provided__63.prototype = Object.create(ShortIterator.prototype);
  _no_name_provided__63.prototype.constructor = _no_name_provided__63;
  _no_name_provided__64.prototype = Object.create(IntIterator.prototype);
  _no_name_provided__64.prototype.constructor = _no_name_provided__64;
  _no_name_provided__65.prototype = Object.create(FloatIterator.prototype);
  _no_name_provided__65.prototype.constructor = _no_name_provided__65;
  _no_name_provided__66.prototype = Object.create(LongIterator.prototype);
  _no_name_provided__66.prototype.constructor = _no_name_provided__66;
  _no_name_provided__67.prototype = Object.create(DoubleIterator.prototype);
  _no_name_provided__67.prototype.constructor = _no_name_provided__67;
  Long.prototype = Object.create(Number_0.prototype);
  Long.prototype.constructor = Long;
  IllegalArgumentException.prototype = Object.create(RuntimeException.prototype);
  IllegalArgumentException.prototype.constructor = IllegalArgumentException;
  NoSuchElementException.prototype = Object.create(RuntimeException.prototype);
  NoSuchElementException.prototype.constructor = NoSuchElementException;
  IllegalStateException.prototype = Object.create(RuntimeException.prototype);
  IllegalStateException.prototype.constructor = IllegalStateException;
  IndexOutOfBoundsException.prototype = Object.create(RuntimeException.prototype);
  IndexOutOfBoundsException.prototype.constructor = IndexOutOfBoundsException;
  UnsupportedOperationException.prototype = Object.create(RuntimeException.prototype);
  UnsupportedOperationException.prototype.constructor = UnsupportedOperationException;
  ArithmeticException.prototype = Object.create(RuntimeException.prototype);
  ArithmeticException.prototype.constructor = ArithmeticException;
  NullPointerException.prototype = Object.create(RuntimeException.prototype);
  NullPointerException.prototype.constructor = NullPointerException;
  NoWhenBranchMatchedException.prototype = Object.create(RuntimeException.prototype);
  NoWhenBranchMatchedException.prototype.constructor = NoWhenBranchMatchedException;
  ClassCastException.prototype = Object.create(RuntimeException.prototype);
  ClassCastException.prototype.constructor = ClassCastException;
  UninitializedPropertyAccessException.prototype = Object.create(RuntimeException.prototype);
  UninitializedPropertyAccessException.prototype.constructor = UninitializedPropertyAccessException;
  StringAttribute.prototype = Object.create(Attribute.prototype);
  StringAttribute.prototype.constructor = StringAttribute;
  StringSetAttribute.prototype = Object.create(Attribute.prototype);
  StringSetAttribute.prototype.constructor = StringSetAttribute;
  BooleanAttribute.prototype = Object.create(Attribute.prototype);
  BooleanAttribute.prototype.constructor = BooleanAttribute;
  TickerAttribute.prototype = Object.create(Attribute.prototype);
  TickerAttribute.prototype.constructor = TickerAttribute;
  EnumAttribute.prototype = Object.create(Attribute.prototype);
  EnumAttribute.prototype.constructor = EnumAttribute;
  Entities.prototype = Object.create(Enum.prototype);
  Entities.prototype.constructor = Entities;
  ButtonFormEncType.prototype = Object.create(Enum.prototype);
  ButtonFormEncType.prototype.constructor = ButtonFormEncType;
  ButtonFormMethod.prototype = Object.create(Enum.prototype);
  ButtonFormMethod.prototype.constructor = ButtonFormMethod;
  ButtonType.prototype = Object.create(Enum.prototype);
  ButtonType.prototype.constructor = ButtonType;
  CommandType.prototype = Object.create(Enum.prototype);
  CommandType.prototype.constructor = CommandType;
  Dir.prototype = Object.create(Enum.prototype);
  Dir.prototype.constructor = Dir;
  Draggable.prototype = Object.create(Enum.prototype);
  Draggable.prototype.constructor = Draggable;
  FormEncType.prototype = Object.create(Enum.prototype);
  FormEncType.prototype.constructor = FormEncType;
  FormMethod.prototype = Object.create(Enum.prototype);
  FormMethod.prototype.constructor = FormMethod;
  IframeSandbox.prototype = Object.create(Enum.prototype);
  IframeSandbox.prototype.constructor = IframeSandbox;
  InputFormEncType.prototype = Object.create(Enum.prototype);
  InputFormEncType.prototype.constructor = InputFormEncType;
  InputFormMethod.prototype = Object.create(Enum.prototype);
  InputFormMethod.prototype.constructor = InputFormMethod;
  InputType.prototype = Object.create(Enum.prototype);
  InputType.prototype.constructor = InputType;
  KeyGenKeyType.prototype = Object.create(Enum.prototype);
  KeyGenKeyType.prototype.constructor = KeyGenKeyType;
  RunAt.prototype = Object.create(Enum.prototype);
  RunAt.prototype.constructor = RunAt;
  TextAreaWrap.prototype = Object.create(Enum.prototype);
  TextAreaWrap.prototype.constructor = TextAreaWrap;
  ThScope.prototype = Object.create(Enum.prototype);
  ThScope.prototype.constructor = ThScope;
  AreaShape.prototype = Object.create(Enum.prototype);
  AreaShape.prototype.constructor = AreaShape;
  BUTTON.prototype = Object.create(HTMLTag.prototype);
  BUTTON.prototype.constructor = BUTTON;
  DIV.prototype = Object.create(HTMLTag.prototype);
  DIV.prototype.constructor = DIV;
  INPUT.prototype = Object.create(HTMLTag.prototype);
  INPUT.prototype.constructor = INPUT;
  SPAN.prototype = Object.create(HTMLTag.prototype);
  SPAN.prototype.constructor = SPAN;
  function fold(_this_, initial, operation) {
    var accumulator = initial;
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator = operation(accumulator, element);
    }
    return accumulator;
  }
  function associateBy(_this_, keySelector) {
    var capacity = coerceAtLeast(mapCapacity(_this_.length), 16);
    var tmp0_associateByTo_0 = LinkedHashMap_init_$Create$_3(capacity);
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element_2 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      tmp0_associateByTo_0.put_5(keySelector(element_2), element_2);
      Unit_getInstance();
    }
    return tmp0_associateByTo_0;
  }
  function isEmpty(_this_) {
    return _this_.length === 0;
  }
  function shuffle(_this_) {
    shuffle_0(_this_, Default_getInstance());
  }
  function first(_this_) {
    if (_this_.length === 0)
      throw NoSuchElementException_init_$Create$_0('Array is empty.');
    else {
    }
    return _this_[0];
  }
  function drop(_this_, n) {
    var tmp0_require_0 = n >= 0;
    if (!tmp0_require_0) {
      var message_2 = '' + 'Requested element count ' + n + ' is less than zero.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_2));
    }return takeLast(_this_, coerceAtLeast(_this_.length - n | 0, 0));
  }
  function toMutableList(_this_) {
    return ArrayList_init_$Create$_2(asCollection(_this_));
  }
  function forEach(_this_, action) {
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      action(element);
    }
  }
  function associateByTo(_this_, destination, keySelector) {
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      destination.put_5(keySelector(element), element);
      Unit_getInstance();
    }
    return destination;
  }
  function shuffle_0(_this_, random) {
    var inductionVariable = _get_lastIndex_(_this_);
    if (1 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var j = random.nextInt_6(i + 1 | 0);
        var copy = _this_[i];
        _this_[i] = _this_[j];
        _this_[j] = copy;
      }
       while (1 <= inductionVariable);
  }
  function takeLast(_this_, n) {
    var tmp0_require_0 = n >= 0;
    if (!tmp0_require_0) {
      var message_2 = '' + 'Requested element count ' + n + ' is less than zero.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_2));
    }if (n === 0)
      return emptyList();
    var size_0 = _this_.length;
    if (n >= size_0)
      return toList(_this_);
    if (n === 1)
      return listOf(_this_[size_0 - 1 | 0]);
    var list = ArrayList_init_$Create$_0(n);
    var inductionVariable = size_0 - n | 0;
    if (inductionVariable < size_0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        list.add_25(_this_[index]);
        Unit_getInstance();
      }
       while (inductionVariable < size_0);
    return list;
  }
  function _get_lastIndex_(_this_) {
    return _this_.length - 1 | 0;
  }
  function toList(_this_) {
    var tmp0_subject = _this_.length;
    switch (tmp0_subject) {
      case 0:
        return emptyList();
      case 1:
        return listOf(_this_[0]);
      default:return toMutableList(_this_);
    }
  }
  function any(_this_, predicate) {
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (predicate(element))
        return true;
    }
    return false;
  }
  function toSet(_this_) {
    var tmp0_subject = _this_.length;
    switch (tmp0_subject) {
      case 0:
        return emptySet();
      case 1:
        return setOf(_this_[0]);
      default:return toCollection(_this_, LinkedHashSet_init_$Create$_4(mapCapacity(_this_.length)));
    }
  }
  function filterNot(_this_, predicate) {
    var tmp0_filterNotTo_0 = ArrayList_init_$Create$();
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element_2 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (!predicate(element_2)) {
        tmp0_filterNotTo_0.add_25(element_2);
        Unit_getInstance();
      }}
    return tmp0_filterNotTo_0;
  }
  function contains(_this_, element) {
    return indexOf(_this_, element) >= 0;
  }
  function _get_indices_(_this_) {
    return new IntRange(0, _get_lastIndex_(_this_));
  }
  function indexOf(_this_, element) {
    if (element == null) {
      var inductionVariable = 0;
      var last_0 = _this_.length - 1 | 0;
      if (inductionVariable <= last_0)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (_this_[index] == null) {
            return index;
          }}
         while (inductionVariable <= last_0);
    } else {
      var inductionVariable_0 = 0;
      var last_1 = _this_.length - 1 | 0;
      if (inductionVariable_0 <= last_1)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (equals_0(element, _this_[index_0])) {
            return index_0;
          }}
         while (inductionVariable_0 <= last_1);
    }
    return -1;
  }
  function lastIndexOf(_this_, element) {
    if (element == null) {
      var inductionVariable = _this_.length - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          if (_this_[index] == null) {
            return index;
          }}
         while (0 <= inductionVariable);
    } else {
      var inductionVariable_0 = _this_.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          if (equals_0(element, _this_[index_0])) {
            return index_0;
          }}
         while (0 <= inductionVariable_0);
    }
    return -1;
  }
  function toCollection(_this_, destination) {
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      destination.add_25(item);
      Unit_getInstance();
    }
    return destination;
  }
  function contains_0(_this_, element) {
    return indexOf_0(_this_, element) >= 0;
  }
  function filterNotTo(_this_, destination, predicate) {
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (!predicate(element)) {
        destination.add_25(element);
        Unit_getInstance();
      }}
    return destination;
  }
  function indexOf_0(_this_, element) {
    var inductionVariable = 0;
    var last_0 = _this_.length - 1 | 0;
    if (inductionVariable <= last_0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (element.equals(_this_[index])) {
          return index;
        }}
       while (inductionVariable <= last_0);
    return -1;
  }
  function _get_indices__0(_this_) {
    return new IntRange(0, _get_lastIndex__0(_this_));
  }
  function _get_lastIndex__0(_this_) {
    return _this_.length - 1 | 0;
  }
  function joinToString(_this_, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo(_this_, StringBuilder_init_$Create$_1(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default(_this_, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return joinToString(_this_, separator, prefix, postfix, limit, truncated, transform);
  }
  function firstOrNull(_this_, predicate) {
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (predicate(element))
        return element;
    }
    return null;
  }
  function joinTo(_this_, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_4(prefix);
    Unit_getInstance();
    var count = 0;
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    $l$break: while (inductionVariable < last_0) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_4(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$break;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_4(truncated);
      Unit_getInstance();
    }buffer.append_4(postfix);
    Unit_getInstance();
    return buffer;
  }
  function joinTo$default(_this_, buffer, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      separator = ', ';
    if (!(($mask0 & 4) === 0))
      prefix = '';
    if (!(($mask0 & 8) === 0))
      postfix = '';
    if (!(($mask0 & 16) === 0))
      limit = -1;
    if (!(($mask0 & 32) === 0))
      truncated = '...';
    if (!(($mask0 & 64) === 0))
      transform = null;
    return joinTo(_this_, buffer, separator, prefix, postfix, limit, truncated, transform);
  }
  function contains_1(_this_, element) {
    return indexOf_1(_this_, element) >= 0;
  }
  function indexOf_1(_this_, element) {
    var inductionVariable = 0;
    var last_0 = _this_.length - 1 | 0;
    if (inductionVariable <= last_0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (element === _this_[index]) {
          return index;
        }}
       while (inductionVariable <= last_0);
    return -1;
  }
  function _get_indices__1(_this_) {
    return new IntRange(0, _get_lastIndex__1(_this_));
  }
  function _get_lastIndex__1(_this_) {
    return _this_.length - 1 | 0;
  }
  function contains_2(_this_, element) {
    return indexOf_2(_this_, element) >= 0;
  }
  function indexOf_2(_this_, element) {
    var inductionVariable = 0;
    var last_0 = _this_.length - 1 | 0;
    if (inductionVariable <= last_0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (element === _this_[index]) {
          return index;
        }}
       while (inductionVariable <= last_0);
    return -1;
  }
  function _get_indices__2(_this_) {
    return new IntRange(0, _get_lastIndex__2(_this_));
  }
  function _get_lastIndex__2(_this_) {
    return _this_.length - 1 | 0;
  }
  function contains_3(_this_, element) {
    return indexOf_3(_this_, element) >= 0;
  }
  function indexOf_3(_this_, element) {
    var inductionVariable = 0;
    var last_0 = _this_.length - 1 | 0;
    if (inductionVariable <= last_0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (element === _this_[index]) {
          return index;
        }}
       while (inductionVariable <= last_0);
    return -1;
  }
  function _get_indices__3(_this_) {
    return new IntRange(0, _get_lastIndex__3(_this_));
  }
  function _get_lastIndex__3(_this_) {
    return _this_.length - 1 | 0;
  }
  function contains_4(_this_, element) {
    return indexOf_4(_this_, element) >= 0;
  }
  function indexOf_4(_this_, element) {
    var inductionVariable = 0;
    var last_0 = _this_.length - 1 | 0;
    if (inductionVariable <= last_0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (element.equals(_this_[index])) {
          return index;
        }}
       while (inductionVariable <= last_0);
    return -1;
  }
  function _get_indices__4(_this_) {
    return new IntRange(0, _get_lastIndex__4(_this_));
  }
  function _get_lastIndex__4(_this_) {
    return _this_.length - 1 | 0;
  }
  function max(_this_) {
    return maxOrNull(_this_);
  }
  function map(_this_, transform) {
    var tmp0_mapTo_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(_this_, 10));
    var tmp0_iterator_1 = _this_.iterator_69();
    while (tmp0_iterator_1.hasNext_49()) {
      var item_2 = tmp0_iterator_1.next_56();
      tmp0_mapTo_0.add_25(transform(item_2));
      Unit_getInstance();
    }
    return tmp0_mapTo_0;
  }
  function joinToString_0(_this_, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo_0(_this_, StringBuilder_init_$Create$_1(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default_0(_this_, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return joinToString_0(_this_, separator, prefix, postfix, limit, truncated, transform);
  }
  function filterNot_0(_this_, predicate) {
    var tmp0_filterNotTo_0 = ArrayList_init_$Create$();
    var tmp0_iterator_1 = _this_.iterator_69();
    while (tmp0_iterator_1.hasNext_49()) {
      var element_2 = tmp0_iterator_1.next_56();
      if (!predicate(element_2)) {
        tmp0_filterNotTo_0.add_25(element_2);
        Unit_getInstance();
      }}
    return tmp0_filterNotTo_0;
  }
  function toSet_0(_this_) {
    if (isInterface(_this_, Collection)) {
      var tmp0_subject = _this_._get_size__42();
      var tmp;
      switch (tmp0_subject) {
        case 0:
          tmp = emptySet();
          break;
        case 1:
          var tmp_0;
          if (isInterface(_this_, List)) {
            tmp_0 = _this_.get_44(0);
          } else {
            {
              tmp_0 = _this_.iterator_69().next_56();
            }
          }

          tmp = setOf(tmp_0);
          break;
        default:tmp = toCollection_0(_this_, LinkedHashSet_init_$Create$_4(mapCapacity(_this_._get_size__42())));
          break;
      }
      return tmp;
    } else {
    }
    return optimizeReadOnlySet(toCollection_0(_this_, LinkedHashSet_init_$Create$_0()));
  }
  function maxOrNull(_this_) {
    var iterator_0 = _this_.iterator_69();
    if (!iterator_0.hasNext_49())
      return null;
    var max_0 = iterator_0.next_56();
    while (iterator_0.hasNext_49()) {
      var e = iterator_0.next_56();
      if (compareTo_0(max_0, e) < 0)
        max_0 = e;
    }
    return max_0;
  }
  function mapTo(_this_, destination, transform) {
    var tmp0_iterator = _this_.iterator_69();
    while (tmp0_iterator.hasNext_49()) {
      var item = tmp0_iterator.next_56();
      destination.add_25(transform(item));
      Unit_getInstance();
    }
    return destination;
  }
  function joinTo_0(_this_, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_4(prefix);
    Unit_getInstance();
    var count = 0;
    var tmp0_iterator = _this_.iterator_69();
    $l$break: while (tmp0_iterator.hasNext_49()) {
      var element = tmp0_iterator.next_56();
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_4(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$break;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_4(truncated);
      Unit_getInstance();
    }buffer.append_4(postfix);
    Unit_getInstance();
    return buffer;
  }
  function joinTo$default_0(_this_, buffer, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      separator = ', ';
    if (!(($mask0 & 4) === 0))
      prefix = '';
    if (!(($mask0 & 8) === 0))
      postfix = '';
    if (!(($mask0 & 16) === 0))
      limit = -1;
    if (!(($mask0 & 32) === 0))
      truncated = '...';
    if (!(($mask0 & 64) === 0))
      transform = null;
    return joinTo_0(_this_, buffer, separator, prefix, postfix, limit, truncated, transform);
  }
  function filterNotTo_0(_this_, destination, predicate) {
    var tmp0_iterator = _this_.iterator_69();
    while (tmp0_iterator.hasNext_49()) {
      var element = tmp0_iterator.next_56();
      if (!predicate(element)) {
        destination.add_25(element);
        Unit_getInstance();
      }}
    return destination;
  }
  function toCollection_0(_this_, destination) {
    var tmp0_iterator = _this_.iterator_69();
    while (tmp0_iterator.hasNext_49()) {
      var item = tmp0_iterator.next_56();
      destination.add_25(item);
      Unit_getInstance();
    }
    return destination;
  }
  function asSequence(_this_) {
    return new _no_name_provided__1(_this_);
  }
  function minOrNull(_this_) {
    var iterator_0 = _this_.iterator_69();
    if (!iterator_0.hasNext_49())
      return null;
    var min = iterator_0.next_56();
    while (iterator_0.hasNext_49()) {
      var e = iterator_0.next_56();
      if (compareTo_0(min, e) > 0)
        min = e;
    }
    return min;
  }
  function filter(_this_, predicate) {
    var tmp0_filterTo_0 = ArrayList_init_$Create$();
    var tmp0_iterator_1 = _this_.iterator_69();
    while (tmp0_iterator_1.hasNext_49()) {
      var element_2 = tmp0_iterator_1.next_56();
      if (predicate(element_2)) {
        tmp0_filterTo_0.add_25(element_2);
        Unit_getInstance();
      }}
    return tmp0_filterTo_0;
  }
  function mapIndexedNotNull(_this_, transform) {
    var tmp1_mapIndexedNotNullTo_0 = ArrayList_init_$Create$();
    var index_1 = 0;
    var tmp0_iterator_2 = _this_.iterator_69();
    while (tmp0_iterator_2.hasNext_49()) {
      var item_3 = tmp0_iterator_2.next_56();
      var tmp1_4 = index_1;
      index_1 = tmp1_4 + 1 | 0;
      var tmp0__anonymous__1_5 = checkIndexOverflow(tmp1_4);
      var tmp0_safe_receiver_2_6 = transform(tmp0__anonymous__1_5, item_3);
      if (tmp0_safe_receiver_2_6 == null)
        null;
      else {
        tmp1_mapIndexedNotNullTo_0.add_25(tmp0_safe_receiver_2_6);
        Unit_getInstance();
      }
      Unit_getInstance();
    }
    return tmp1_mapIndexedNotNullTo_0;
  }
  function all(_this_, predicate) {
    var tmp;
    if (isInterface(_this_, Collection)) {
      tmp = _this_.isEmpty_51();
    } else {
      {
        tmp = false;
      }
    }
    if (tmp)
      return true;
    else {
    }
    var tmp0_iterator = _this_.iterator_69();
    while (tmp0_iterator.hasNext_49()) {
      var element = tmp0_iterator.next_56();
      if (!predicate(element))
        return false;
    }
    return true;
  }
  function filterTo(_this_, destination, predicate) {
    var tmp0_iterator = _this_.iterator_69();
    while (tmp0_iterator.hasNext_49()) {
      var element = tmp0_iterator.next_56();
      if (predicate(element)) {
        destination.add_25(element);
        Unit_getInstance();
      }}
    return destination;
  }
  function mapIndexedNotNullTo(_this_, destination, transform) {
    var index_1 = 0;
    var tmp0_iterator_2 = _this_.iterator_69();
    while (tmp0_iterator_2.hasNext_49()) {
      var item_3 = tmp0_iterator_2.next_56();
      var tmp1_4 = index_1;
      index_1 = tmp1_4 + 1 | 0;
      var tmp0__anonymous__5 = checkIndexOverflow(tmp1_4);
      var tmp0_safe_receiver_6 = transform(tmp0__anonymous__5, item_3);
      if (tmp0_safe_receiver_6 == null)
        null;
      else {
        destination.add_25(tmp0_safe_receiver_6);
        Unit_getInstance();
      }
      Unit_getInstance();
    }
    return destination;
  }
  function forEachIndexed(_this_, action) {
    var index = 0;
    var tmp0_iterator = _this_.iterator_69();
    while (tmp0_iterator.hasNext_49()) {
      var item = tmp0_iterator.next_56();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      action(checkIndexOverflow(tmp1), item);
    }
  }
  function single(_this_) {
    var tmp0_subject = _this_;
    if (isInterface(tmp0_subject, List))
      return single_0(_this_);
    else {
      {
        var iterator_0 = _this_.iterator_69();
        if (!iterator_0.hasNext_49())
          throw NoSuchElementException_init_$Create$_0('Collection is empty.');
        var single_1 = iterator_0.next_56();
        if (iterator_0.hasNext_49())
          throw IllegalArgumentException_init_$Create$_0('Collection has more than one element.');
        return single_1;
      }
    }
  }
  function firstOrNull_0(_this_, predicate) {
    var tmp0_iterator = _this_.iterator_69();
    while (tmp0_iterator.hasNext_49()) {
      var element = tmp0_iterator.next_56();
      if (predicate(element))
        return element;
    }
    return null;
  }
  function any_0(_this_, predicate) {
    var tmp;
    if (isInterface(_this_, Collection)) {
      tmp = _this_.isEmpty_51();
    } else {
      {
        tmp = false;
      }
    }
    if (tmp)
      return false;
    else {
    }
    var tmp0_iterator = _this_.iterator_69();
    while (tmp0_iterator.hasNext_49()) {
      var element = tmp0_iterator.next_56();
      if (predicate(element))
        return true;
    }
    return false;
  }
  function indexOfFirst(_this_, predicate) {
    var index = 0;
    var tmp0_iterator = _this_.iterator_69();
    while (tmp0_iterator.hasNext_49()) {
      var item = tmp0_iterator.next_56();
      if (predicate(item))
        return index;
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      Unit_getInstance();
    }
    return -1;
  }
  function indexOfLast(_this_, predicate) {
    var iterator_0 = _this_.listIterator_18(_this_._get_size__42());
    while (iterator_0.hasPrevious_3()) {
      if (predicate(iterator_0.previous_3())) {
        return iterator_0.nextIndex_3();
      }}
    return -1;
  }
  function single_0(_this_) {
    var tmp0_subject = _this_._get_size__42();
    var tmp;
    switch (tmp0_subject) {
      case 0:
        throw NoSuchElementException_init_$Create$_0('List is empty.');
      case 1:
        tmp = _this_.get_44(0);
        break;
      default:throw IllegalArgumentException_init_$Create$_0('List has more than one element.');
    }
    return tmp;
  }
  function forEach_0(_this_, action) {
    var tmp0_iterator = _this_.iterator_69();
    while (tmp0_iterator.hasNext_49()) {
      var element = tmp0_iterator.next_56();
      action(element);
    }
  }
  function last(_this_) {
    if (_this_.isEmpty_51())
      throw NoSuchElementException_init_$Create$_0('List is empty.');
    return _this_.get_44(_get_lastIndex__5(_this_));
  }
  function first_0(_this_) {
    if (_this_.isEmpty_51())
      throw NoSuchElementException_init_$Create$_0('List is empty.');
    return _this_.get_44(0);
  }
  function _no_name_provided__1($this_asSequence) {
    this._$this_asSequence = $this_asSequence;
  }
  _no_name_provided__1.prototype.iterator_2 = function () {
    return this._$this_asSequence.iterator_69();
  };
  _no_name_provided__1.prototype.iterator_69 = function () {
    return this.iterator_2();
  };
  _no_name_provided__1.$metadata$ = {
    simpleName: '<no name provided>_1',
    kind: 'class',
    interfaces: [Sequence]
  };
  function forEach_1(_this_, action) {
    var tmp0_iterator = _this_._get_entries__5().iterator_69();
    while (tmp0_iterator.hasNext_49()) {
      var element = tmp0_iterator.next_56();
      action(element);
    }
  }
  function coerceAtLeast(_this_, minimumValue) {
    return _this_ < minimumValue ? minimumValue : _this_;
  }
  function downTo(_this_, to_0) {
    return Companion_getInstance_13().fromClosedRange_1(_this_, to_0, -1);
  }
  function until(_this_, to_0) {
    if (to_0 <= IntCompanionObject_getInstance()._MIN_VALUE_5)
      return Companion_getInstance_16()._EMPTY_1;
    return numberRangeToNumber(_this_, to_0 - 1 | 0);
  }
  function until_0(_this_, to_0) {
    if (to_0.compareTo_57(new Long(0, -2147483648)) <= 0)
      return Companion_getInstance_17()._EMPTY_2;
    var tmp0_minus_0 = 1;
    return _this_.rangeTo_15(to_0.minus_34(toLong(tmp0_minus_0)).toLong_6());
  }
  function reversed(_this_) {
    return Companion_getInstance_13().fromClosedRange_1(_this_._last_1, _this_._first_2, -_this_._step_6 | 0);
  }
  function coerceIn(_this_, minimumValue, maximumValue) {
    if (minimumValue > maximumValue)
      throw IllegalArgumentException_init_$Create$_0('' + 'Cannot coerce value to an empty range: maximum ' + maximumValue + ' is less than minimum ' + minimumValue + '.');
    if (_this_ < minimumValue)
      return minimumValue;
    if (_this_ > maximumValue)
      return maximumValue;
    return _this_;
  }
  function coerceAtMost(_this_, maximumValue) {
    return _this_ > maximumValue ? maximumValue : _this_;
  }
  function step(_this_, step_0) {
    checkStepIsPositive(step_0 > 0, step_0);
    return Companion_getInstance_13().fromClosedRange_1(_this_._first_2, _this_._last_1, _this_._step_6 > 0 ? step_0 : -step_0 | 0);
  }
  function toList_0(_this_) {
    return optimizeReadOnlyList(toMutableList_0(_this_));
  }
  function take(_this_, n) {
    var tmp0_require_0 = n >= 0;
    if (!tmp0_require_0) {
      var message_2 = '' + 'Requested element count ' + n + ' is less than zero.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_2));
    }var tmp;
    if (n === 0) {
      tmp = emptySequence();
    } else {
      if (isInterface(_this_, DropTakeSequence)) {
        tmp = _this_.take_2(n);
      } else {
        {
          tmp = new TakeSequence(_this_, n);
        }
      }
    }
    return tmp;
  }
  function map_0(_this_, transform) {
    return new TransformingSequence(_this_, transform);
  }
  function toMutableList_0(_this_) {
    return toCollection_1(_this_, ArrayList_init_$Create$());
  }
  function toCollection_1(_this_, destination) {
    var tmp0_iterator = _this_.iterator_69();
    while (tmp0_iterator.hasNext_49()) {
      var item = tmp0_iterator.next_56();
      destination.add_25(item);
      Unit_getInstance();
    }
    return destination;
  }
  function plus(_this_, element) {
    var result = LinkedHashSet_init_$Create$_4(mapCapacity(_this_._get_size__42() + 1 | 0));
    result.addAll_18(_this_);
    Unit_getInstance();
    result.add_25(element);
    Unit_getInstance();
    return result;
  }
  function drop_0(_this_, n) {
    var tmp0_require_0 = n >= 0;
    if (!tmp0_require_0) {
      var message_2 = '' + 'Requested character count ' + n + ' is less than zero.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_2));
    }var tmp1_substring_0 = coerceAtMost(n, _this_.length);
    return _this_.substring(tmp1_substring_0);
  }
  function indexOfFirst_0(_this_, predicate) {
    var inductionVariable = 0;
    var last_0 = charSequenceLength(_this_) - 1 | 0;
    if (inductionVariable <= last_0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (predicate(charSequenceGet(_this_, index))) {
          return index;
        }}
       while (inductionVariable <= last_0);
    return -1;
  }
  function getOrElse(_this_, index, defaultValue) {
    return (index >= 0 ? index <= _get_lastIndex__6(_this_) : false) ? charSequenceGet(_this_, index) : defaultValue(index);
  }
  function KotlinNothingValueException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    KotlinNothingValueException.call($this);
    return $this;
  }
  function KotlinNothingValueException_init_$Create$() {
    var tmp = KotlinNothingValueException_init_$Init$(Object.create(KotlinNothingValueException.prototype));
    captureStack(tmp, KotlinNothingValueException_init_$Create$);
    return tmp;
  }
  function KotlinNothingValueException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    KotlinNothingValueException.call($this);
    return $this;
  }
  function KotlinNothingValueException_init_$Create$_0(message) {
    var tmp = KotlinNothingValueException_init_$Init$_0(message, Object.create(KotlinNothingValueException.prototype));
    captureStack(tmp, KotlinNothingValueException_init_$Create$_0);
    return tmp;
  }
  function KotlinNothingValueException_init_$Init$_1(message, cause, $this) {
    RuntimeException_init_$Init$_1(message, cause, $this);
    KotlinNothingValueException.call($this);
    return $this;
  }
  function KotlinNothingValueException_init_$Create$_1(message, cause) {
    var tmp = KotlinNothingValueException_init_$Init$_1(message, cause, Object.create(KotlinNothingValueException.prototype));
    captureStack(tmp, KotlinNothingValueException_init_$Create$_1);
    return tmp;
  }
  function KotlinNothingValueException_init_$Init$_2(cause, $this) {
    RuntimeException_init_$Init$_2(cause, $this);
    KotlinNothingValueException.call($this);
    return $this;
  }
  function KotlinNothingValueException_init_$Create$_2(cause) {
    var tmp = KotlinNothingValueException_init_$Init$_2(cause, Object.create(KotlinNothingValueException.prototype));
    captureStack(tmp, KotlinNothingValueException_init_$Create$_2);
    return tmp;
  }
  function KotlinNothingValueException() {
    captureStack(this, KotlinNothingValueException);
  }
  KotlinNothingValueException.$metadata$ = {
    simpleName: 'KotlinNothingValueException',
    kind: 'class',
    interfaces: []
  };
  function _get_PI_() {
    return PI;
  }
  var PI;
  function Char(code) {
    var tmp;
    var tmp0__get_code__0 = new Char_0(0);
    if (code < tmp0__get_code__0.toInt_6()) {
      tmp = true;
    } else {
      {
        var tmp1__get_code__0 = new Char_0(65535);
        tmp = code > tmp1__get_code__0.toInt_6();
      }
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$_0('' + 'Invalid Char code: ' + code);
    } else {
    }
    return new Char_0(_UShort___init__impl_(toShort(code)));
  }
  function _get_code_(_this_) {
    return _this_.toInt_6();
  }
  var Level_WARNING_instance;
  var Level_ERROR_instance;
  function values() {
    return [Level_WARNING_getInstance(), Level_ERROR_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'WARNING':
        return Level_WARNING_getInstance();
      case 'ERROR':
        return Level_ERROR_getInstance();
      default:return THROW_ISE();
    }
  }
  var Level_entriesInitialized;
  function Level_initEntries() {
    if (Level_entriesInitialized)
      return Unit_getInstance();
    Level_entriesInitialized = true;
    Level_WARNING_instance = new Level('WARNING', 0);
    Level_ERROR_instance = new Level('ERROR', 1);
  }
  function Experimental_init_$Init$(level, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      level = Level_ERROR_getInstance();
    Experimental.call($this, level);
    return $this;
  }
  function Experimental_init_$Create$(level, $mask0, $marker) {
    return Experimental_init_$Init$(level, $mask0, $marker, Object.create(Experimental.prototype));
  }
  function Level(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  Level.$metadata$ = {
    simpleName: 'Level',
    kind: 'class',
    interfaces: []
  };
  function Level_WARNING_getInstance() {
    Level_initEntries();
    return Level_WARNING_instance;
  }
  function Level_ERROR_getInstance() {
    Level_initEntries();
    return Level_ERROR_instance;
  }
  function Experimental(level) {
    this._level = level;
  }
  Experimental.prototype._get_level__2 = function () {
    return this._level;
  };
  Experimental.$metadata$ = {
    simpleName: 'Experimental',
    kind: 'class',
    interfaces: [Annotation]
  };
  function WasExperimental(markerClass) {
    this._markerClass = markerClass;
  }
  WasExperimental.prototype._get_markerClass__0 = function () {
    return this._markerClass;
  };
  WasExperimental.$metadata$ = {
    simpleName: 'WasExperimental',
    kind: 'class',
    interfaces: [Annotation]
  };
  function ExperimentalStdlibApi() {
  }
  ExperimentalStdlibApi.$metadata$ = {
    simpleName: 'ExperimentalStdlibApi',
    kind: 'class',
    interfaces: [Annotation]
  };
  function OptionalExpectation() {
  }
  OptionalExpectation.$metadata$ = {
    simpleName: 'OptionalExpectation',
    kind: 'class',
    interfaces: [Annotation]
  };
  function ExperimentalMultiplatform() {
  }
  ExperimentalMultiplatform.$metadata$ = {
    simpleName: 'ExperimentalMultiplatform',
    kind: 'class',
    interfaces: [Annotation]
  };
  var Level_WARNING_instance_0;
  var Level_ERROR_instance_0;
  function values_0() {
    return [Level_WARNING_getInstance_0(), Level_ERROR_getInstance_0()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'WARNING':
        return Level_WARNING_getInstance_0();
      case 'ERROR':
        return Level_ERROR_getInstance_0();
      default:return THROW_ISE();
    }
  }
  var Level_entriesInitialized_0;
  function Level_initEntries_0() {
    if (Level_entriesInitialized_0)
      return Unit_getInstance();
    Level_entriesInitialized_0 = true;
    Level_WARNING_instance_0 = new Level_0('WARNING', 0);
    Level_ERROR_instance_0 = new Level_0('ERROR', 1);
  }
  function RequiresOptIn_init_$Init$(message, level, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      message = '';
    if (!(($mask0 & 2) === 0))
      level = Level_ERROR_getInstance_0();
    RequiresOptIn.call($this, message, level);
    return $this;
  }
  function RequiresOptIn_init_$Create$(message, level, $mask0, $marker) {
    return RequiresOptIn_init_$Init$(message, level, $mask0, $marker, Object.create(RequiresOptIn.prototype));
  }
  function Level_0(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  Level_0.$metadata$ = {
    simpleName: 'Level',
    kind: 'class',
    interfaces: []
  };
  function Level_WARNING_getInstance_0() {
    Level_initEntries_0();
    return Level_WARNING_instance_0;
  }
  function Level_ERROR_getInstance_0() {
    Level_initEntries_0();
    return Level_ERROR_instance_0;
  }
  function RequiresOptIn(message, level) {
    this._message = message;
    this._level_0 = level;
  }
  RequiresOptIn.prototype._get_message__16 = function () {
    return this._message;
  };
  RequiresOptIn.prototype._get_level__2 = function () {
    return this._level_0;
  };
  RequiresOptIn.$metadata$ = {
    simpleName: 'RequiresOptIn',
    kind: 'class',
    interfaces: [Annotation]
  };
  function OptIn(markerClass) {
    this._markerClass_0 = markerClass;
  }
  OptIn.prototype._get_markerClass__0 = function () {
    return this._markerClass_0;
  };
  OptIn.$metadata$ = {
    simpleName: 'OptIn',
    kind: 'class',
    interfaces: [Annotation]
  };
  function _no_name_provided_(this$0) {
    this._this$0 = this$0;
  }
  _no_name_provided_.prototype.invoke_23 = function (it) {
    return it === this._this$0 ? '(this Collection)' : toString_0(it);
  };
  _no_name_provided_.prototype.invoke_81 = function (p1) {
    return this.invoke_23((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided_.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractCollection() {
  }
  AbstractCollection.prototype.contains_58 = function (element) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp;
      if (isInterface(this, Collection)) {
        tmp = this.isEmpty_51();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = false;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = this.iterator_69();
      while (tmp0_iterator_1.hasNext_49()) {
        var element_2 = tmp0_iterator_1.next_56();
        if (equals_0(element_2, element)) {
          tmp$ret$0 = true;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = false;
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractCollection.prototype.containsAll_40 = function (elements) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.isEmpty_51();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = elements.iterator_69();
      while (tmp0_iterator_1.hasNext_49()) {
        var element_2 = tmp0_iterator_1.next_56();
        if (!this.contains_58(element_2)) {
          tmp$ret$0 = false;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractCollection.prototype.isEmpty_51 = function () {
    return this._get_size__42() === 0;
  };
  AbstractCollection.prototype.toString = function () {
    return joinToString$default_0(this, ', ', '[', ']', 0, null, _no_name_provided_$factory(this), 24, null);
  };
  AbstractCollection.prototype.toArray = function () {
    return copyToArrayImpl_0(this);
  };
  AbstractCollection.prototype.toArray_22 = function (array) {
    return copyToArrayImpl_1(this, array);
  };
  AbstractCollection.$metadata$ = {
    simpleName: 'AbstractCollection',
    kind: 'class',
    interfaces: [Collection]
  };
  function _no_name_provided_$factory(this$0) {
    var i = new _no_name_provided_(this$0);
    return function (p1) {
      return i.invoke_23(p1);
    };
  }
  function _get_list_($this) {
    return $this._list;
  }
  function _get_fromIndex_($this) {
    return $this._fromIndex;
  }
  function _set__size_($this, _set___) {
    $this.__size = _set___;
  }
  function _get__size_($this) {
    return $this.__size;
  }
  function SubList(list, fromIndex, toIndex) {
    AbstractList.call(this);
    this._list = list;
    this._fromIndex = fromIndex;
    this.__size = 0;
    Companion_getInstance().checkRangeIndexes(this._fromIndex, toIndex, this._list._get_size__42());
    this.__size = toIndex - this._fromIndex | 0;
  }
  SubList.prototype.get_44 = function (index) {
    Companion_getInstance().checkElementIndex(index, this.__size);
    return this._list.get_44(this._fromIndex + index | 0);
  };
  SubList.prototype._get_size__42 = function () {
    return this.__size;
  };
  SubList.$metadata$ = {
    simpleName: 'SubList',
    kind: 'class',
    interfaces: [RandomAccess]
  };
  function IteratorImpl($outer) {
    this._$this = $outer;
    this._index = 0;
  }
  IteratorImpl.prototype._set_index__11 = function (_set___) {
    this._index = _set___;
  };
  IteratorImpl.prototype._get_index__11 = function () {
    return this._index;
  };
  IteratorImpl.prototype.hasNext_49 = function () {
    return this._index < this._$this._get_size__42();
  };
  IteratorImpl.prototype.next_56 = function () {
    if (!this.hasNext_49())
      throw NoSuchElementException_init_$Create$();
    var tmp0_this = this;
    var tmp1 = tmp0_this._index;
    tmp0_this._index = tmp1 + 1 | 0;
    return this._$this.get_44(tmp1);
  };
  IteratorImpl.$metadata$ = {
    simpleName: 'IteratorImpl',
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function ListIteratorImpl($outer, index) {
    this._$this_0 = $outer;
    IteratorImpl.call(this, $outer);
    Companion_getInstance().checkPositionIndex(index, this._$this_0._get_size__42());
    this._set_index__11(index);
  }
  ListIteratorImpl.prototype.hasPrevious_3 = function () {
    return this._get_index__11() > 0;
  };
  ListIteratorImpl.prototype.nextIndex_3 = function () {
    return this._get_index__11();
  };
  ListIteratorImpl.prototype.previous_3 = function () {
    if (!this.hasPrevious_3())
      throw NoSuchElementException_init_$Create$();
    var tmp0_this = this;
    tmp0_this._set_index__11(tmp0_this._get_index__11() - 1 | 0);
    return this._$this_0.get_44(tmp0_this._get_index__11());
  };
  ListIteratorImpl.prototype.previousIndex_3 = function () {
    return this._get_index__11() - 1 | 0;
  };
  ListIteratorImpl.$metadata$ = {
    simpleName: 'ListIteratorImpl',
    kind: 'class',
    interfaces: [ListIterator]
  };
  function Companion_0() {
    Companion_instance = this;
  }
  Companion_0.prototype.checkElementIndex = function (index, size_0) {
    if (index < 0 ? true : index >= size_0) {
      throw IndexOutOfBoundsException_init_$Create$_0('' + 'index: ' + index + ', size: ' + size_0);
    }};
  Companion_0.prototype.checkPositionIndex = function (index, size_0) {
    if (index < 0 ? true : index > size_0) {
      throw IndexOutOfBoundsException_init_$Create$_0('' + 'index: ' + index + ', size: ' + size_0);
    }};
  Companion_0.prototype.checkRangeIndexes = function (fromIndex, toIndex, size_0) {
    if (fromIndex < 0 ? true : toIndex > size_0) {
      throw IndexOutOfBoundsException_init_$Create$_0('' + 'fromIndex: ' + fromIndex + ', toIndex: ' + toIndex + ', size: ' + size_0);
    }if (fromIndex > toIndex) {
      throw IllegalArgumentException_init_$Create$_0('' + 'fromIndex: ' + fromIndex + ' > toIndex: ' + toIndex);
    }};
  Companion_0.prototype.checkBoundsIndexes = function (startIndex, endIndex, size_0) {
    if (startIndex < 0 ? true : endIndex > size_0) {
      throw IndexOutOfBoundsException_init_$Create$_0('' + 'startIndex: ' + startIndex + ', endIndex: ' + endIndex + ', size: ' + size_0);
    }if (startIndex > endIndex) {
      throw IllegalArgumentException_init_$Create$_0('' + 'startIndex: ' + startIndex + ' > endIndex: ' + endIndex);
    }};
  Companion_0.prototype.orderedHashCode = function (c) {
    var hashCode_1 = 1;
    var tmp0_iterator = c.iterator_69();
    while (tmp0_iterator.hasNext_49()) {
      var e = tmp0_iterator.next_56();
      var tmp = imul(31, hashCode_1);
      var tmp1_safe_receiver = e;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_1 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_1;
  };
  Companion_0.prototype.orderedEquals = function (c, other) {
    if (!(c._get_size__42() === other._get_size__42()))
      return false;
    var otherIterator = other.iterator_69();
    var tmp0_iterator = c.iterator_69();
    while (tmp0_iterator.hasNext_49()) {
      var elem = tmp0_iterator.next_56();
      var elemOther = otherIterator.next_56();
      if (!equals_0(elem, elemOther)) {
        return false;
      }}
    return true;
  };
  Companion_0.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion_0();
    return Companion_instance;
  }
  function AbstractList() {
    Companion_getInstance();
    AbstractCollection.call(this);
  }
  AbstractList.prototype.iterator_69 = function () {
    return new IteratorImpl(this);
  };
  AbstractList.prototype.indexOf_11 = function (element) {
    var tmp$ret$0;
    l$ret$1: do {
      var index_1 = 0;
      var tmp0_iterator_2 = this.iterator_69();
      while (tmp0_iterator_2.hasNext_49()) {
        var item_3 = tmp0_iterator_2.next_56();
        if (equals_0(item_3, element)) {
          tmp$ret$0 = index_1;
          break l$ret$1;
        } else {
        }
        var tmp1_4 = index_1;
        index_1 = tmp1_4 + 1 | 0;
        Unit_getInstance();
      }
      tmp$ret$0 = -1;
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractList.prototype.lastIndexOf_11 = function (element) {
    var tmp$ret$0;
    l$ret$1: do {
      var iterator_1 = this.listIterator_18(this._get_size__42());
      while (iterator_1.hasPrevious_3()) {
        var tmp0__anonymous__2 = iterator_1.previous_3();
        if (equals_0(tmp0__anonymous__2, element)) {
          tmp$ret$0 = iterator_1.nextIndex_3();
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = -1;
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractList.prototype.listIterator_17 = function () {
    return new ListIteratorImpl(this, 0);
  };
  AbstractList.prototype.listIterator_18 = function (index) {
    return new ListIteratorImpl(this, index);
  };
  AbstractList.prototype.subList_8 = function (fromIndex, toIndex) {
    return new SubList(this, fromIndex, toIndex);
  };
  AbstractList.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, List) : false))
      return false;
    else {
    }
    return Companion_getInstance().orderedEquals(this, other);
  };
  AbstractList.prototype.hashCode = function () {
    return Companion_getInstance().orderedHashCode(this);
  };
  AbstractList.$metadata$ = {
    simpleName: 'AbstractList',
    kind: 'class',
    interfaces: [List]
  };
  function _no_name_provided__0($entryIterator) {
    this._$entryIterator = $entryIterator;
  }
  _no_name_provided__0.prototype.hasNext_49 = function () {
    return this._$entryIterator.hasNext_49();
  };
  _no_name_provided__0.prototype.next_56 = function () {
    return this._$entryIterator.next_56()._get_key__4();
  };
  _no_name_provided__0.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function _no_name_provided__2($entryIterator) {
    this._$entryIterator_0 = $entryIterator;
  }
  _no_name_provided__2.prototype.hasNext_49 = function () {
    return this._$entryIterator_0.hasNext_49();
  };
  _no_name_provided__2.prototype.next_56 = function () {
    return this._$entryIterator_0.next_56()._get_value__7();
  };
  _no_name_provided__2.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function _set__keys_($this, _set___) {
    $this.__keys = _set___;
  }
  function _get__keys_($this) {
    return $this.__keys;
  }
  function toString($this, o) {
    return o === $this ? '(this Map)' : toString_0(o);
  }
  function implFindEntry($this, key) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_firstOrNull_0 = $this._get_entries__5();
      var tmp0_iterator_1 = tmp0_firstOrNull_0.iterator_69();
      while (tmp0_iterator_1.hasNext_49()) {
        var element_2 = tmp0_iterator_1.next_56();
        if (equals_0(element_2._get_key__4(), key)) {
          tmp$ret$0 = element_2;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = null;
    }
     while (false);
    return tmp$ret$0;
  }
  function Companion_1() {
    Companion_instance_0 = this;
  }
  Companion_1.prototype.entryHashCode = function (e) {
    var tmp2_safe_receiver_4 = e._get_key__4();
    var tmp3_elvis_lhs_3 = tmp2_safe_receiver_4 == null ? null : hashCode(tmp2_safe_receiver_4);
    var tmp = tmp3_elvis_lhs_3 == null ? 0 : tmp3_elvis_lhs_3;
    var tmp0_safe_receiver_6 = e._get_value__7();
    var tmp1_elvis_lhs_5 = tmp0_safe_receiver_6 == null ? null : hashCode(tmp0_safe_receiver_6);
    return tmp ^ (tmp1_elvis_lhs_5 == null ? 0 : tmp1_elvis_lhs_5);
  };
  Companion_1.prototype.entryToString = function (e) {
    return '' + e._get_key__4() + '=' + e._get_value__7();
  };
  Companion_1.prototype.entryEquals = function (e, other) {
    if (!(!(other == null) ? isInterface(other, Entry) : false))
      return false;
    else {
    }
    return equals_0(e._get_key__4(), other._get_key__4()) ? equals_0(e._get_value__7(), other._get_value__7()) : false;
  };
  Companion_1.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_1();
    return Companion_instance_0;
  }
  function _no_name_provided__3(this$0) {
    this._this$0_0 = this$0;
    AbstractSet.call(this);
  }
  _no_name_provided__3.prototype.contains_47 = function (element) {
    return this._this$0_0.containsKey_6(element);
  };
  _no_name_provided__3.prototype.contains_58 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    else {
    }
    return this.contains_47((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  _no_name_provided__3.prototype.iterator_69 = function () {
    var entryIterator = this._this$0_0._get_entries__5().iterator_69();
    return new _no_name_provided__0(entryIterator);
  };
  _no_name_provided__3.prototype._get_size__42 = function () {
    return this._this$0_0._get_size__42();
  };
  _no_name_provided__3.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__4(this$0) {
    this._this$0_1 = this$0;
  }
  _no_name_provided__4.prototype.invoke_1 = function (it) {
    return this._this$0_1.toString_0(it);
  };
  _no_name_provided__4.prototype.invoke_81 = function (p1) {
    return this.invoke_1((!(p1 == null) ? isInterface(p1, Entry) : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__4.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__5(this$0) {
    this._this$0_2 = this$0;
    AbstractCollection.call(this);
  }
  _no_name_provided__5.prototype.contains_40 = function (element) {
    return this._this$0_2.containsValue_6(element);
  };
  _no_name_provided__5.prototype.contains_58 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    else {
    }
    return this.contains_40((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  _no_name_provided__5.prototype.iterator_69 = function () {
    var entryIterator = this._this$0_2._get_entries__5().iterator_69();
    return new _no_name_provided__2(entryIterator);
  };
  _no_name_provided__5.prototype._get_size__42 = function () {
    return this._this$0_2._get_size__42();
  };
  _no_name_provided__5.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractMap() {
    Companion_getInstance_0();
    this.__keys = null;
    this.__values = null;
  }
  AbstractMap.prototype.containsKey_6 = function (key) {
    return !(implFindEntry(this, key) == null);
  };
  AbstractMap.prototype.containsValue_6 = function (value) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_any_0 = this._get_entries__5();
      var tmp;
      if (isInterface(tmp0_any_0, Collection)) {
        tmp = tmp0_any_0.isEmpty_51();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = false;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = tmp0_any_0.iterator_69();
      while (tmp0_iterator_1.hasNext_49()) {
        var element_2 = tmp0_iterator_1.next_56();
        if (equals_0(element_2._get_value__7(), value)) {
          tmp$ret$0 = true;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = false;
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractMap.prototype.containsEntry_5 = function (entry) {
    if (!(!(entry == null) ? isInterface(entry, Entry) : false))
      return false;
    else {
    }
    var key = entry._get_key__4();
    var value = entry._get_value__7();
    var ourValue = (isInterface(this, Map_0) ? this : THROW_CCE()).get_33(key);
    if (!equals_0(value, ourValue)) {
      return false;
    }var tmp;
    if (ourValue == null) {
      tmp = !(isInterface(this, Map_0) ? this : THROW_CCE()).containsKey_6(key);
    } else {
      tmp = false;
    }
    if (tmp) {
      return false;
    } else {
    }
    return true;
  };
  AbstractMap.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Map_0) : false))
      return false;
    else {
    }
    if (!(this._get_size__42() === other._get_size__42()))
      return false;
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_all_0 = other._get_entries__5();
      var tmp;
      if (isInterface(tmp0_all_0, Collection)) {
        tmp = tmp0_all_0.isEmpty_51();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = tmp0_all_0.iterator_69();
      while (tmp0_iterator_1.hasNext_49()) {
        var element_2 = tmp0_iterator_1.next_56();
        if (!this.containsEntry_5(element_2)) {
          tmp$ret$0 = false;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractMap.prototype.get_33 = function (key) {
    var tmp0_safe_receiver = implFindEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__7();
  };
  AbstractMap.prototype.hashCode = function () {
    return hashCode(this._get_entries__5());
  };
  AbstractMap.prototype.isEmpty_51 = function () {
    return this._get_size__42() === 0;
  };
  AbstractMap.prototype._get_size__42 = function () {
    return this._get_entries__5()._get_size__42();
  };
  AbstractMap.prototype._get_keys__6 = function () {
    if (this.__keys == null) {
      var tmp = this;
      tmp.__keys = new _no_name_provided__3(this);
    }return ensureNotNull(this.__keys);
  };
  AbstractMap.prototype.toString = function () {
    var tmp = this._get_entries__5();
    return joinToString$default_0(tmp, ', ', '{', '}', 0, null, _no_name_provided_$factory_0(this), 24, null);
  };
  AbstractMap.prototype.toString_0 = function (entry) {
    return toString(this, entry._get_key__4()) + '=' + toString(this, entry._get_value__7());
  };
  AbstractMap.prototype._get_values__6 = function () {
    if (this.__values == null) {
      var tmp = this;
      tmp.__values = new _no_name_provided__5(this);
    }return ensureNotNull(this.__values);
  };
  AbstractMap.prototype._set__values_ = function (_set___) {
    this.__values = _set___;
  };
  AbstractMap.prototype._get__values_ = function () {
    return this.__values;
  };
  AbstractMap.$metadata$ = {
    simpleName: 'AbstractMap',
    kind: 'class',
    interfaces: [Map_0]
  };
  function _no_name_provided_$factory_0(this$0) {
    var i = new _no_name_provided__4(this$0);
    return function (p1) {
      return i.invoke_1(p1);
    };
  }
  function Companion_2() {
    Companion_instance_1 = this;
  }
  Companion_2.prototype.unorderedHashCode = function (c) {
    var hashCode_1 = 0;
    var tmp0_iterator = c.iterator_69();
    while (tmp0_iterator.hasNext_49()) {
      var element = tmp0_iterator.next_56();
      var tmp = hashCode_1;
      var tmp1_safe_receiver = element;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_1 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_1;
  };
  Companion_2.prototype.setEquals = function (c, other) {
    if (!(c._get_size__42() === other._get_size__42()))
      return false;
    return c.containsAll_40(other);
  };
  Companion_2.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_2();
    return Companion_instance_1;
  }
  function AbstractSet() {
    Companion_getInstance_1();
    AbstractCollection.call(this);
  }
  AbstractSet.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Set) : false))
      return false;
    else {
    }
    return Companion_getInstance_1().setEquals(this, other);
  };
  AbstractSet.prototype.hashCode = function () {
    return Companion_getInstance_1().unorderedHashCode(this);
  };
  AbstractSet.$metadata$ = {
    simpleName: 'AbstractSet',
    kind: 'class',
    interfaces: [Set]
  };
  function _get_serialVersionUID_($this) {
    return $this._serialVersionUID;
  }
  function readResolve($this) {
    return EmptyList_getInstance();
  }
  function EmptyList() {
    EmptyList_instance = this;
    this._serialVersionUID = new Long(-1478467534, -1720727600);
  }
  EmptyList.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, List) : false) {
      tmp = other.isEmpty_51();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  EmptyList.prototype.hashCode = function () {
    return 1;
  };
  EmptyList.prototype.toString = function () {
    return '[]';
  };
  EmptyList.prototype._get_size__42 = function () {
    return 0;
  };
  EmptyList.prototype.isEmpty_51 = function () {
    return true;
  };
  EmptyList.prototype.contains_12 = function (element) {
    return false;
  };
  EmptyList.prototype.contains_58 = function (element) {
    if (!false)
      return false;
    else {
    }
    var tmp;
    if (false) {
      tmp = element;
    } else {
      {
        tmp = THROW_CCE();
      }
    }
    return this.contains_12(tmp);
  };
  EmptyList.prototype.containsAll_9 = function (elements) {
    return elements.isEmpty_51();
  };
  EmptyList.prototype.containsAll_40 = function (elements) {
    return this.containsAll_9(elements);
  };
  EmptyList.prototype.get_44 = function (index) {
    throw IndexOutOfBoundsException_init_$Create$_0('' + "Empty list doesn't contain element at index " + index + '.');
  };
  EmptyList.prototype.indexOf_1 = function (element) {
    return -1;
  };
  EmptyList.prototype.indexOf_11 = function (element) {
    if (!false)
      return -1;
    else {
    }
    var tmp;
    if (false) {
      tmp = element;
    } else {
      {
        tmp = THROW_CCE();
      }
    }
    return this.indexOf_1(tmp);
  };
  EmptyList.prototype.lastIndexOf_1 = function (element) {
    return -1;
  };
  EmptyList.prototype.lastIndexOf_11 = function (element) {
    if (!false)
      return -1;
    else {
    }
    var tmp;
    if (false) {
      tmp = element;
    } else {
      {
        tmp = THROW_CCE();
      }
    }
    return this.lastIndexOf_1(tmp);
  };
  EmptyList.prototype.iterator_69 = function () {
    return EmptyIterator_getInstance();
  };
  EmptyList.prototype.listIterator_17 = function () {
    return EmptyIterator_getInstance();
  };
  EmptyList.prototype.listIterator_18 = function (index) {
    if (!(index === 0))
      throw IndexOutOfBoundsException_init_$Create$_0('' + 'Index: ' + index);
    return EmptyIterator_getInstance();
  };
  EmptyList.prototype.subList_8 = function (fromIndex, toIndex) {
    if (fromIndex === 0 ? toIndex === 0 : false)
      return this;
    throw IndexOutOfBoundsException_init_$Create$_0('' + 'fromIndex: ' + fromIndex + ', toIndex: ' + toIndex);
  };
  EmptyList.$metadata$ = {
    simpleName: 'EmptyList',
    kind: 'object',
    interfaces: [List, Serializable, RandomAccess]
  };
  var EmptyList_instance;
  function EmptyList_getInstance() {
    if (EmptyList_instance == null)
      new EmptyList();
    return EmptyList_instance;
  }
  function asCollection(_this_) {
    return new ArrayAsCollection(_this_, false);
  }
  function emptyList() {
    return EmptyList_getInstance();
  }
  function EmptyIterator() {
    EmptyIterator_instance = this;
  }
  EmptyIterator.prototype.hasNext_49 = function () {
    return false;
  };
  EmptyIterator.prototype.hasPrevious_3 = function () {
    return false;
  };
  EmptyIterator.prototype.nextIndex_3 = function () {
    return 0;
  };
  EmptyIterator.prototype.previousIndex_3 = function () {
    return -1;
  };
  EmptyIterator.prototype.next_56 = function () {
    throw NoSuchElementException_init_$Create$();
  };
  EmptyIterator.prototype.previous_3 = function () {
    throw NoSuchElementException_init_$Create$();
  };
  EmptyIterator.$metadata$ = {
    simpleName: 'EmptyIterator',
    kind: 'object',
    interfaces: [ListIterator]
  };
  var EmptyIterator_instance;
  function EmptyIterator_getInstance() {
    if (EmptyIterator_instance == null)
      new EmptyIterator();
    return EmptyIterator_instance;
  }
  function mutableListOf() {
    return ArrayList_init_$Create$();
  }
  function _get_indices__5(_this_) {
    return numberRangeToNumber(0, _this_._get_size__42() - 1 | 0);
  }
  function _get_lastIndex__5(_this_) {
    return _this_._get_size__42() - 1 | 0;
  }
  function isNotEmpty(_this_) {
    return !_this_.isEmpty_51();
  }
  function arrayListOf(elements) {
    return elements.length === 0 ? ArrayList_init_$Create$() : ArrayList_init_$Create$_2(new ArrayAsCollection(elements, true));
  }
  function optimizeReadOnlyList(_this_) {
    var tmp0_subject = _this_._get_size__42();
    switch (tmp0_subject) {
      case 0:
        return emptyList();
      case 1:
        return listOf(_this_.get_44(0));
      default:return _this_;
    }
  }
  function ArrayAsCollection(values_9, isVarargs) {
    this._values_0 = values_9;
    this._isVarargs = isVarargs;
  }
  ArrayAsCollection.prototype._get_values__6 = function () {
    return this._values_0;
  };
  ArrayAsCollection.prototype._get_isVarargs_ = function () {
    return this._isVarargs;
  };
  ArrayAsCollection.prototype._get_size__42 = function () {
    return this._values_0.length;
  };
  ArrayAsCollection.prototype.isEmpty_51 = function () {
    var tmp0_isEmpty_0 = this._values_0;
    return tmp0_isEmpty_0.length === 0;
  };
  ArrayAsCollection.prototype.contains_50 = function (element) {
    return contains(this._values_0, element);
  };
  ArrayAsCollection.prototype.contains_58 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    else {
    }
    return this.contains_50((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ArrayAsCollection.prototype.containsAll_32 = function (elements) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.isEmpty_51();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = elements.iterator_69();
      while (tmp0_iterator_1.hasNext_49()) {
        var element_2 = tmp0_iterator_1.next_56();
        if (!this.contains_50(element_2)) {
          tmp$ret$0 = false;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  };
  ArrayAsCollection.prototype.containsAll_40 = function (elements) {
    return this.containsAll_32(elements);
  };
  ArrayAsCollection.prototype.iterator_69 = function () {
    return arrayIterator(this._values_0);
  };
  ArrayAsCollection.prototype.toArray_14 = function () {
    var tmp0_copyToArrayOfAny_0 = this._values_0;
    var tmp1_copyToArrayOfAny_0 = this._isVarargs;
    var tmp;
    if (tmp1_copyToArrayOfAny_0) {
      tmp = tmp0_copyToArrayOfAny_0;
    } else {
      tmp = tmp0_copyToArrayOfAny_0.slice();
    }
    return tmp;
  };
  ArrayAsCollection.$metadata$ = {
    simpleName: 'ArrayAsCollection',
    kind: 'class',
    interfaces: [Collection]
  };
  function throwIndexOverflow() {
    throw ArithmeticException_init_$Create$_0('Index overflow has happened.');
  }
  function containsAll(_this_, elements) {
    return _this_.containsAll_40(elements);
  }
  function arrayListOf_0() {
    return ArrayList_init_$Create$();
  }
  function collectionSizeOrDefault(_this_, default_0) {
    var tmp;
    if (isInterface(_this_, Collection)) {
      tmp = _this_._get_size__42();
    } else {
      {
        tmp = default_0;
      }
    }
    return tmp;
  }
  function emptyMap() {
    var tmp = EmptyMap_getInstance();
    return isInterface(tmp, Map_0) ? tmp : THROW_CCE();
  }
  function mapOf(pairs) {
    return pairs.length > 0 ? toMap(pairs, LinkedHashMap_init_$Create$_3(mapCapacity(pairs.length))) : emptyMap();
  }
  function set(_this_, key, value) {
    _this_.put_5(key, value);
    Unit_getInstance();
  }
  function _get_serialVersionUID__0($this) {
    return $this._serialVersionUID_0;
  }
  function readResolve_0($this) {
    return EmptyMap_getInstance();
  }
  function EmptyMap() {
    EmptyMap_instance = this;
    this._serialVersionUID_0 = new Long(-888910638, 1920087921);
  }
  EmptyMap.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Map_0) : false) {
      tmp = other.isEmpty_51();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  EmptyMap.prototype.hashCode = function () {
    return 0;
  };
  EmptyMap.prototype.toString = function () {
    return '{}';
  };
  EmptyMap.prototype._get_size__42 = function () {
    return 0;
  };
  EmptyMap.prototype.isEmpty_51 = function () {
    return true;
  };
  EmptyMap.prototype.containsKey_0 = function (key) {
    return false;
  };
  EmptyMap.prototype.containsKey_6 = function (key) {
    if (!(key == null ? true : isObject(key)))
      return false;
    else {
    }
    return this.containsKey_0((key == null ? true : isObject(key)) ? key : THROW_CCE());
  };
  EmptyMap.prototype.containsValue_0 = function (value) {
    return false;
  };
  EmptyMap.prototype.containsValue_6 = function (value) {
    if (!false)
      return false;
    else {
    }
    var tmp;
    if (false) {
      tmp = value;
    } else {
      {
        tmp = THROW_CCE();
      }
    }
    return this.containsValue_0(tmp);
  };
  EmptyMap.prototype.get_4 = function (key) {
    return null;
  };
  EmptyMap.prototype.get_33 = function (key) {
    if (!(key == null ? true : isObject(key)))
      return null;
    else {
    }
    return this.get_4((key == null ? true : isObject(key)) ? key : THROW_CCE());
  };
  EmptyMap.prototype._get_entries__5 = function () {
    return EmptySet_getInstance();
  };
  EmptyMap.prototype._get_keys__6 = function () {
    return EmptySet_getInstance();
  };
  EmptyMap.prototype._get_values__6 = function () {
    return EmptyList_getInstance();
  };
  EmptyMap.$metadata$ = {
    simpleName: 'EmptyMap',
    kind: 'object',
    interfaces: [Map_0, Serializable]
  };
  var EmptyMap_instance;
  function EmptyMap_getInstance() {
    if (EmptyMap_instance == null)
      new EmptyMap();
    return EmptyMap_instance;
  }
  function toMap(_this_, destination) {
    putAll(destination, _this_);
    return destination;
  }
  function putAll(_this_, pairs) {
    var indexedObject = pairs;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var tmp1_loop_parameter = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var key = tmp1_loop_parameter.component1_3();
      var value = tmp1_loop_parameter.component2_2();
      _this_.put_5(key, value);
      Unit_getInstance();
    }
  }
  function iterator(_this_) {
    return _this_._get_entries__5().iterator_69();
  }
  function component1(_this_) {
    return _this_._get_key__4();
  }
  function component2(_this_) {
    return _this_._get_value__7();
  }
  function get(_this_, key) {
    return (isInterface(_this_, Map_0) ? _this_ : THROW_CCE()).get_33(key);
  }
  function containsKey(_this_, key) {
    return (isInterface(_this_, Map_0) ? _this_ : THROW_CCE()).containsKey_6(key);
  }
  function linkedMapOf() {
    return LinkedHashMap_init_$Create$();
  }
  function removeAll(_this_, predicate) {
    return filterInPlace(_this_, predicate, true);
  }
  function removeAll_0(_this_, predicate) {
    return filterInPlace_0(_this_, predicate, true);
  }
  function filterInPlace(_this_, predicate, predicateResultToRemove) {
    var result = false;
    var tmp0_with_0 = _this_.iterator_69();
    while (tmp0_with_0.hasNext_49())
      if (predicate(tmp0_with_0.next_56()) === predicateResultToRemove) {
        tmp0_with_0.remove_23();
        result = true;
      }return result;
  }
  function filterInPlace_0(_this_, predicate, predicateResultToRemove) {
    if (!isInterface(_this_, RandomAccess)) {
      return filterInPlace(isInterface(_this_, MutableIterable) ? _this_ : THROW_CCE(), predicate, predicateResultToRemove);
    } else {
    }
    var writeIndex = 0;
    var inductionVariable = 0;
    var last_0 = _get_lastIndex__5(_this_);
    if (inductionVariable <= last_0)
      do {
        var readIndex = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this_.get_44(readIndex);
        if (predicate(element) === predicateResultToRemove)
          continue;
        if (!(writeIndex === readIndex)) {
          _this_.set_10(writeIndex, element);
          Unit_getInstance();
        }var tmp1 = writeIndex;
        writeIndex = tmp1 + 1 | 0;
        Unit_getInstance();
      }
       while (!(readIndex === last_0));
    if (writeIndex < _this_._get_size__42()) {
      var inductionVariable_0 = _get_lastIndex__5(_this_);
      if (writeIndex <= inductionVariable_0)
        do {
          var removeIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          _this_.removeAt_2(removeIndex);
          Unit_getInstance();
        }
         while (!(removeIndex === writeIndex));
      return true;
    } else {
      return false;
    }
  }
  function Sequence() {
  }
  Sequence.$metadata$ = {
    simpleName: 'Sequence',
    kind: 'interface',
    interfaces: []
  };
  function generateSequence(seedFunction, nextFunction) {
    return new GeneratorSequence(seedFunction, nextFunction);
  }
  function emptySequence() {
    return EmptySequence_getInstance();
  }
  function DropTakeSequence() {
  }
  DropTakeSequence.$metadata$ = {
    simpleName: 'DropTakeSequence',
    kind: 'interface',
    interfaces: [Sequence]
  };
  function _get_sequence_($this) {
    return $this._sequence;
  }
  function _get_count_($this) {
    return $this._count;
  }
  function _no_name_provided__6(this$0) {
    this._this$0_3 = this$0;
    this._left = this._this$0_3._count;
    this._iterator = this._this$0_3._sequence.iterator_69();
  }
  _no_name_provided__6.prototype._set_left_ = function (_set___) {
    this._left = _set___;
  };
  _no_name_provided__6.prototype._get_left_ = function () {
    return this._left;
  };
  _no_name_provided__6.prototype._get_iterator__2 = function () {
    return this._iterator;
  };
  _no_name_provided__6.prototype.next_56 = function () {
    if (this._left === 0)
      throw NoSuchElementException_init_$Create$();
    var tmp0_this = this;
    var tmp1 = tmp0_this._left;
    tmp0_this._left = tmp1 - 1 | 0;
    Unit_getInstance();
    return this._iterator.next_56();
  };
  _no_name_provided__6.prototype.hasNext_49 = function () {
    return this._left > 0 ? this._iterator.hasNext_49() : false;
  };
  _no_name_provided__6.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function TakeSequence(sequence, count) {
    this._sequence = sequence;
    this._count = count;
    var tmp0_require_0 = this._count >= 0;
    if (!tmp0_require_0) {
      var message_2 = '' + 'count must be non-negative, but was ' + this._count + '.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_2));
    }}
  TakeSequence.prototype.drop_2 = function (n) {
    return n >= this._count ? emptySequence() : new SubSequence(this._sequence, n, this._count);
  };
  TakeSequence.prototype.take_2 = function (n) {
    return n >= this._count ? this : new TakeSequence(this._sequence, n);
  };
  TakeSequence.prototype.iterator_69 = function () {
    return new _no_name_provided__6(this);
  };
  TakeSequence.$metadata$ = {
    simpleName: 'TakeSequence',
    kind: 'class',
    interfaces: [Sequence, DropTakeSequence]
  };
  function _get_sequence__0($this) {
    return $this._sequence_0;
  }
  function _get_transformer_($this) {
    return $this._transformer;
  }
  function _no_name_provided__7(this$0) {
    this._this$0_4 = this$0;
    this._iterator_0 = this._this$0_4._sequence_0.iterator_69();
  }
  _no_name_provided__7.prototype._get_iterator__2 = function () {
    return this._iterator_0;
  };
  _no_name_provided__7.prototype.next_56 = function () {
    return this._this$0_4._transformer(this._iterator_0.next_56());
  };
  _no_name_provided__7.prototype.hasNext_49 = function () {
    return this._iterator_0.hasNext_49();
  };
  _no_name_provided__7.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function TransformingSequence(sequence, transformer) {
    this._sequence_0 = sequence;
    this._transformer = transformer;
  }
  TransformingSequence.prototype.iterator_69 = function () {
    return new _no_name_provided__7(this);
  };
  TransformingSequence.prototype.flatten_0 = function (iterator_0) {
    return new FlatteningSequence(this._sequence_0, this._transformer, iterator_0);
  };
  TransformingSequence.$metadata$ = {
    simpleName: 'TransformingSequence',
    kind: 'class',
    interfaces: [Sequence]
  };
  function Sequence_0(iterator_0) {
    return new _no_name_provided__11(iterator_0);
  }
  function calcNext($this) {
    $this._nextItem = $this._nextState === -2 ? $this._this$0_5._getInitialValue() : $this._this$0_5._getNextValue(ensureNotNull($this._nextItem));
    $this._nextState = $this._nextItem == null ? 0 : 1;
  }
  function _get_getInitialValue_($this) {
    return $this._getInitialValue;
  }
  function _get_getNextValue_($this) {
    return $this._getNextValue;
  }
  function _no_name_provided__8(this$0) {
    this._this$0_5 = this$0;
    this._nextItem = null;
    this._nextState = -2;
  }
  _no_name_provided__8.prototype._set_nextItem_ = function (_set___) {
    this._nextItem = _set___;
  };
  _no_name_provided__8.prototype._get_nextItem__0 = function () {
    return this._nextItem;
  };
  _no_name_provided__8.prototype._set_nextState__0 = function (_set___) {
    this._nextState = _set___;
  };
  _no_name_provided__8.prototype._get_nextState__0 = function () {
    return this._nextState;
  };
  _no_name_provided__8.prototype.next_56 = function () {
    if (this._nextState < 0)
      calcNext(this);
    if (this._nextState === 0)
      throw NoSuchElementException_init_$Create$();
    var tmp = this._nextItem;
    var result = isObject(tmp) ? tmp : THROW_CCE();
    this._nextState = -1;
    return result;
  };
  _no_name_provided__8.prototype.hasNext_49 = function () {
    if (this._nextState < 0)
      calcNext(this);
    return this._nextState === 1;
  };
  _no_name_provided__8.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function GeneratorSequence(getInitialValue, getNextValue) {
    this._getInitialValue = getInitialValue;
    this._getNextValue = getNextValue;
  }
  GeneratorSequence.prototype.iterator_69 = function () {
    return new _no_name_provided__8(this);
  };
  GeneratorSequence.$metadata$ = {
    simpleName: 'GeneratorSequence',
    kind: 'class',
    interfaces: [Sequence]
  };
  function EmptySequence() {
    EmptySequence_instance = this;
  }
  EmptySequence.prototype.iterator_69 = function () {
    return EmptyIterator_getInstance();
  };
  EmptySequence.prototype.drop_2 = function (n) {
    return EmptySequence_getInstance();
  };
  EmptySequence.prototype.take_2 = function (n) {
    return EmptySequence_getInstance();
  };
  EmptySequence.$metadata$ = {
    simpleName: 'EmptySequence',
    kind: 'object',
    interfaces: [Sequence, DropTakeSequence]
  };
  var EmptySequence_instance;
  function EmptySequence_getInstance() {
    if (EmptySequence_instance == null)
      new EmptySequence();
    return EmptySequence_instance;
  }
  function drop_1($this) {
    while ($this._position < $this._this$0_6._startIndex ? $this._iterator_1.hasNext_49() : false) {
      $this._iterator_1.next_56();
      Unit_getInstance();
      var tmp0_this = $this;
      var tmp1 = tmp0_this._position;
      tmp0_this._position = tmp1 + 1 | 0;
      Unit_getInstance();
    }
  }
  function _get_sequence__1($this) {
    return $this._sequence_1;
  }
  function _get_startIndex_($this) {
    return $this._startIndex;
  }
  function _get_endIndex_($this) {
    return $this._endIndex;
  }
  function _get_count__0($this) {
    return $this._endIndex - $this._startIndex | 0;
  }
  function _no_name_provided__9(this$0) {
    this._this$0_6 = this$0;
    this._iterator_1 = this._this$0_6._sequence_1.iterator_69();
    this._position = 0;
  }
  _no_name_provided__9.prototype._get_iterator__2 = function () {
    return this._iterator_1;
  };
  _no_name_provided__9.prototype._set_position_ = function (_set___) {
    this._position = _set___;
  };
  _no_name_provided__9.prototype._get_position_ = function () {
    return this._position;
  };
  _no_name_provided__9.prototype.hasNext_49 = function () {
    drop_1(this);
    return this._position < this._this$0_6._endIndex ? this._iterator_1.hasNext_49() : false;
  };
  _no_name_provided__9.prototype.next_56 = function () {
    drop_1(this);
    if (this._position >= this._this$0_6._endIndex)
      throw NoSuchElementException_init_$Create$();
    var tmp0_this = this;
    var tmp1 = tmp0_this._position;
    tmp0_this._position = tmp1 + 1 | 0;
    Unit_getInstance();
    return this._iterator_1.next_56();
  };
  _no_name_provided__9.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function SubSequence(sequence, startIndex, endIndex) {
    this._sequence_1 = sequence;
    this._startIndex = startIndex;
    this._endIndex = endIndex;
    var tmp0_require_0 = this._startIndex >= 0;
    if (!tmp0_require_0) {
      var message_2 = '' + 'startIndex should be non-negative, but is ' + this._startIndex;
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_2));
    }var tmp1_require_0 = this._endIndex >= 0;
    if (!tmp1_require_0) {
      var message_2_0 = '' + 'endIndex should be non-negative, but is ' + this._endIndex;
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_2_0));
    }var tmp2_require_0 = this._endIndex >= this._startIndex;
    if (!tmp2_require_0) {
      var message_2_1 = '' + 'endIndex should be not less than startIndex, but was ' + this._endIndex + ' < ' + this._startIndex;
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_2_1));
    }}
  SubSequence.prototype.drop_2 = function (n) {
    return n >= _get_count__0(this) ? emptySequence() : new SubSequence(this._sequence_1, this._startIndex + n | 0, this._endIndex);
  };
  SubSequence.prototype.take_2 = function (n) {
    return n >= _get_count__0(this) ? this : new SubSequence(this._sequence_1, this._startIndex, this._startIndex + n | 0);
  };
  SubSequence.prototype.iterator_69 = function () {
    return new _no_name_provided__9(this);
  };
  SubSequence.$metadata$ = {
    simpleName: 'SubSequence',
    kind: 'class',
    interfaces: [Sequence, DropTakeSequence]
  };
  function ensureItemIterator($this) {
    var tmp0_safe_receiver = $this._itemIterator;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hasNext_49()) === false)
      $this._itemIterator = null;
    else {
    }
    while ($this._itemIterator == null) {
      if (!$this._iterator_2.hasNext_49()) {
        return false;
      } else {
        var element = $this._iterator_2.next_56();
        var nextItemIterator = $this._this$0_7._iterator_3($this._this$0_7._transformer_0(element));
        if (nextItemIterator.hasNext_49()) {
          $this._itemIterator = nextItemIterator;
          return true;
        }}
    }
    return true;
  }
  function _get_sequence__2($this) {
    return $this._sequence_2;
  }
  function _get_transformer__0($this) {
    return $this._transformer_0;
  }
  function _get_iterator_($this) {
    return $this._iterator_3;
  }
  function _no_name_provided__10(this$0) {
    this._this$0_7 = this$0;
    this._iterator_2 = this._this$0_7._sequence_2.iterator_69();
    this._itemIterator = null;
  }
  _no_name_provided__10.prototype._get_iterator__2 = function () {
    return this._iterator_2;
  };
  _no_name_provided__10.prototype._set_itemIterator_ = function (_set___) {
    this._itemIterator = _set___;
  };
  _no_name_provided__10.prototype._get_itemIterator_ = function () {
    return this._itemIterator;
  };
  _no_name_provided__10.prototype.next_56 = function () {
    if (!ensureItemIterator(this))
      throw NoSuchElementException_init_$Create$();
    return ensureNotNull(this._itemIterator).next_56();
  };
  _no_name_provided__10.prototype.hasNext_49 = function () {
    return ensureItemIterator(this);
  };
  _no_name_provided__10.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function FlatteningSequence(sequence, transformer, iterator_0) {
    this._sequence_2 = sequence;
    this._transformer_0 = transformer;
    this._iterator_3 = iterator_0;
  }
  FlatteningSequence.prototype.iterator_69 = function () {
    return new _no_name_provided__10(this);
  };
  FlatteningSequence.$metadata$ = {
    simpleName: 'FlatteningSequence',
    kind: 'class',
    interfaces: [Sequence]
  };
  function _no_name_provided__11($iterator) {
    this._$iterator = $iterator;
  }
  _no_name_provided__11.prototype.iterator_69 = function () {
    return this._$iterator();
  };
  _no_name_provided__11.$metadata$ = {
    kind: 'class',
    interfaces: [Sequence]
  };
  function emptySet() {
    return EmptySet_getInstance();
  }
  function _get_serialVersionUID__1($this) {
    return $this._serialVersionUID_1;
  }
  function readResolve_1($this) {
    return EmptySet_getInstance();
  }
  function EmptySet() {
    EmptySet_instance = this;
    this._serialVersionUID_1 = new Long(1993859828, 793161749);
  }
  EmptySet.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Set) : false) {
      tmp = other.isEmpty_51();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  EmptySet.prototype.hashCode = function () {
    return 0;
  };
  EmptySet.prototype.toString = function () {
    return '[]';
  };
  EmptySet.prototype._get_size__42 = function () {
    return 0;
  };
  EmptySet.prototype.isEmpty_51 = function () {
    return true;
  };
  EmptySet.prototype.contains_12 = function (element) {
    return false;
  };
  EmptySet.prototype.contains_58 = function (element) {
    if (!false)
      return false;
    else {
    }
    var tmp;
    if (false) {
      tmp = element;
    } else {
      {
        tmp = THROW_CCE();
      }
    }
    return this.contains_12(tmp);
  };
  EmptySet.prototype.containsAll_9 = function (elements) {
    return elements.isEmpty_51();
  };
  EmptySet.prototype.containsAll_40 = function (elements) {
    return this.containsAll_9(elements);
  };
  EmptySet.prototype.iterator_69 = function () {
    return EmptyIterator_getInstance();
  };
  EmptySet.$metadata$ = {
    simpleName: 'EmptySet',
    kind: 'object',
    interfaces: [Set, Serializable]
  };
  var EmptySet_instance;
  function EmptySet_getInstance() {
    if (EmptySet_instance == null)
      new EmptySet();
    return EmptySet_instance;
  }
  function optimizeReadOnlySet(_this_) {
    var tmp0_subject = _this_._get_size__42();
    switch (tmp0_subject) {
      case 0:
        return emptySet();
      case 1:
        return setOf(_this_.iterator_69().next_56());
      default:return _this_;
    }
  }
  function hashSetOf(elements) {
    return toCollection(elements, HashSet_init_$Create$_3(mapCapacity(elements.length)));
  }
  function contract(builder) {
  }
  ContractBuilder.prototype.callsInPlace$default = function (lambda, kind, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      kind = InvocationKind_UNKNOWN_getInstance();
    return $handler == null ? this.callsInPlace(lambda, kind) : $handler(lambda, kind);
  };
  function ContractBuilder() {
  }
  ContractBuilder.$metadata$ = {
    simpleName: 'ContractBuilder',
    kind: 'interface',
    interfaces: []
  };
  var InvocationKind_AT_MOST_ONCE_instance;
  var InvocationKind_AT_LEAST_ONCE_instance;
  var InvocationKind_EXACTLY_ONCE_instance;
  var InvocationKind_UNKNOWN_instance;
  function values_1() {
    return [InvocationKind_AT_MOST_ONCE_getInstance(), InvocationKind_AT_LEAST_ONCE_getInstance(), InvocationKind_EXACTLY_ONCE_getInstance(), InvocationKind_UNKNOWN_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'AT_MOST_ONCE':
        return InvocationKind_AT_MOST_ONCE_getInstance();
      case 'AT_LEAST_ONCE':
        return InvocationKind_AT_LEAST_ONCE_getInstance();
      case 'EXACTLY_ONCE':
        return InvocationKind_EXACTLY_ONCE_getInstance();
      case 'UNKNOWN':
        return InvocationKind_UNKNOWN_getInstance();
      default:return THROW_ISE();
    }
  }
  var InvocationKind_entriesInitialized;
  function InvocationKind_initEntries() {
    if (InvocationKind_entriesInitialized)
      return Unit_getInstance();
    InvocationKind_entriesInitialized = true;
    InvocationKind_AT_MOST_ONCE_instance = new InvocationKind('AT_MOST_ONCE', 0);
    InvocationKind_AT_LEAST_ONCE_instance = new InvocationKind('AT_LEAST_ONCE', 1);
    InvocationKind_EXACTLY_ONCE_instance = new InvocationKind('EXACTLY_ONCE', 2);
    InvocationKind_UNKNOWN_instance = new InvocationKind('UNKNOWN', 3);
  }
  function InvocationKind(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  InvocationKind.$metadata$ = {
    simpleName: 'InvocationKind',
    kind: 'class',
    interfaces: []
  };
  function ExperimentalContracts() {
  }
  ExperimentalContracts.$metadata$ = {
    simpleName: 'ExperimentalContracts',
    kind: 'class',
    interfaces: [Annotation]
  };
  function InvocationKind_AT_MOST_ONCE_getInstance() {
    InvocationKind_initEntries();
    return InvocationKind_AT_MOST_ONCE_instance;
  }
  function InvocationKind_AT_LEAST_ONCE_getInstance() {
    InvocationKind_initEntries();
    return InvocationKind_AT_LEAST_ONCE_instance;
  }
  function InvocationKind_EXACTLY_ONCE_getInstance() {
    InvocationKind_initEntries();
    return InvocationKind_EXACTLY_ONCE_instance;
  }
  function InvocationKind_UNKNOWN_getInstance() {
    InvocationKind_initEntries();
    return InvocationKind_UNKNOWN_instance;
  }
  function CallsInPlace() {
  }
  CallsInPlace.$metadata$ = {
    simpleName: 'CallsInPlace',
    kind: 'interface',
    interfaces: [Effect]
  };
  function Returns() {
  }
  Returns.$metadata$ = {
    simpleName: 'Returns',
    kind: 'interface',
    interfaces: [SimpleEffect]
  };
  function ReturnsNotNull() {
  }
  ReturnsNotNull.$metadata$ = {
    simpleName: 'ReturnsNotNull',
    kind: 'interface',
    interfaces: [SimpleEffect]
  };
  function Effect() {
  }
  Effect.$metadata$ = {
    simpleName: 'Effect',
    kind: 'interface',
    interfaces: []
  };
  function SimpleEffect() {
  }
  SimpleEffect.$metadata$ = {
    simpleName: 'SimpleEffect',
    kind: 'interface',
    interfaces: [Effect]
  };
  function ConditionalEffect() {
  }
  ConditionalEffect.$metadata$ = {
    simpleName: 'ConditionalEffect',
    kind: 'interface',
    interfaces: [Effect]
  };
  function Continuation() {
  }
  Continuation.$metadata$ = {
    simpleName: 'Continuation',
    kind: 'interface',
    interfaces: []
  };
  function Continuation_0(context, resumeWith) {
    return new _no_name_provided__12(context, resumeWith);
  }
  function resumeWithException(_this_, exception) {
    var tmp0_failure_0 = Companion_getInstance_4();
    return _this_.resumeWith_6(_Result___init__impl_(createFailure(exception)));
  }
  function resume(_this_, value) {
    var tmp0_success_0 = Companion_getInstance_4();
    return _this_.resumeWith_6(_Result___init__impl_(value));
  }
  function _get_coroutineContext_() {
    throw new NotImplementedError('Implemented as intrinsic');
  }
  function _no_name_provided__12($context, $resumeWith) {
    this._$context = $context;
    this._$resumeWith = $resumeWith;
  }
  _no_name_provided__12.prototype._get_context__4 = function () {
    return this._$context;
  };
  _no_name_provided__12.prototype.resumeWith_6 = function (result) {
    return this._$resumeWith(new Result(result));
  };
  _no_name_provided__12.$metadata$ = {
    kind: 'class',
    interfaces: [Continuation]
  };
  function Key() {
    Key_instance = this;
  }
  Key.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key_0]
  };
  var Key_instance;
  function Key_getInstance() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  ContinuationInterceptor.prototype.releaseInterceptedContinuation = function (continuation) {
  };
  ContinuationInterceptor.prototype.get_10 = function (key) {
    if (key instanceof AbstractCoroutineContextKey) {
      var tmp;
      if (key.isSubKey(this._get_key__4())) {
        var tmp_0 = key.tryCast(this);
        tmp = (!(tmp_0 == null) ? isInterface(tmp_0, Element_0) : false) ? tmp_0 : null;
      } else {
        tmp = null;
      }
      return tmp;
    } else {
    }
    var tmp_1;
    if (Key_getInstance() === key) {
      tmp_1 = isInterface(this, Element_0) ? this : THROW_CCE();
    } else {
      tmp_1 = null;
    }
    return tmp_1;
  };
  ContinuationInterceptor.prototype.minusKey_3 = function (key) {
    if (key instanceof AbstractCoroutineContextKey) {
      return (key.isSubKey(this._get_key__4()) ? !(key.tryCast(this) == null) : false) ? EmptyCoroutineContext_getInstance() : this;
    } else {
    }
    return Key_getInstance() === key ? EmptyCoroutineContext_getInstance() : this;
  };
  function ContinuationInterceptor() {
    Key_getInstance();
  }
  ContinuationInterceptor.$metadata$ = {
    simpleName: 'ContinuationInterceptor',
    kind: 'interface',
    interfaces: [Element_0]
  };
  function Key_0() {
  }
  Key_0.$metadata$ = {
    simpleName: 'Key',
    kind: 'interface',
    interfaces: []
  };
  Element_0.prototype.get_10 = function (key) {
    var tmp;
    if (equals_0(this._get_key__4(), key)) {
      tmp = isInterface(this, Element_0) ? this : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  Element_0.prototype.fold_3 = function (initial, operation) {
    return operation(initial, this);
  };
  Element_0.prototype.minusKey_3 = function (key) {
    return equals_0(this._get_key__4(), key) ? EmptyCoroutineContext_getInstance() : this;
  };
  function Element_0() {
  }
  Element_0.$metadata$ = {
    simpleName: 'Element',
    kind: 'interface',
    interfaces: [CoroutineContext]
  };
  function _no_name_provided__13() {
  }
  _no_name_provided__13.prototype.invoke_3 = function (acc, element) {
    var removed = acc.minusKey_3(element._get_key__4());
    var tmp;
    if (removed === EmptyCoroutineContext_getInstance()) {
      tmp = element;
    } else {
      var interceptor = removed.get_10(Key_getInstance());
      var tmp_0;
      if (interceptor == null) {
        tmp_0 = new CombinedContext(removed, element);
      } else {
        var left = removed.minusKey_3(Key_getInstance());
        tmp_0 = left === EmptyCoroutineContext_getInstance() ? new CombinedContext(element, interceptor) : new CombinedContext(new CombinedContext(left, element), interceptor);
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  _no_name_provided__13.prototype.invoke_79 = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineContext) : false) ? p1 : THROW_CCE();
    return this.invoke_3(tmp, (!(p2 == null) ? isInterface(p2, Element_0) : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__13.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  CoroutineContext.prototype.plus_3 = function (context) {
    var tmp;
    if (context === EmptyCoroutineContext_getInstance()) {
      tmp = this;
    } else {
      tmp = context.fold_3(this, _no_name_provided_$factory_1());
    }
    return tmp;
  };
  function CoroutineContext() {
  }
  CoroutineContext.$metadata$ = {
    simpleName: 'CoroutineContext',
    kind: 'interface',
    interfaces: []
  };
  function _no_name_provided_$factory_1() {
    var i = new _no_name_provided__13();
    return function (p1, p2) {
      return i.invoke_3(p1, p2);
    };
  }
  function _get_serialVersionUID__2($this) {
    return $this._serialVersionUID_2;
  }
  function readResolve_2($this) {
    return EmptyCoroutineContext_getInstance();
  }
  function EmptyCoroutineContext() {
    EmptyCoroutineContext_instance = this;
    this._serialVersionUID_2 = new Long(0, 0);
  }
  EmptyCoroutineContext.prototype.get_10 = function (key) {
    return null;
  };
  EmptyCoroutineContext.prototype.fold_3 = function (initial, operation) {
    return initial;
  };
  EmptyCoroutineContext.prototype.plus_3 = function (context) {
    return context;
  };
  EmptyCoroutineContext.prototype.minusKey_3 = function (key) {
    return this;
  };
  EmptyCoroutineContext.prototype.hashCode = function () {
    return 0;
  };
  EmptyCoroutineContext.prototype.toString = function () {
    return 'EmptyCoroutineContext';
  };
  EmptyCoroutineContext.$metadata$ = {
    simpleName: 'EmptyCoroutineContext',
    kind: 'object',
    interfaces: [CoroutineContext, Serializable]
  };
  var EmptyCoroutineContext_instance;
  function EmptyCoroutineContext_getInstance() {
    if (EmptyCoroutineContext_instance == null)
      new EmptyCoroutineContext();
    return EmptyCoroutineContext_instance;
  }
  function _get_serialVersionUID__3($this) {
    return $this._serialVersionUID_3;
  }
  function Companion_3() {
    Companion_instance_2 = this;
    this._serialVersionUID_3 = new Long(0, 0);
  }
  Companion_3.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_3();
    return Companion_instance_2;
  }
  function readResolve_3($this) {
    var tmp0_fold_0 = $this._elements;
    var tmp1_fold_0 = EmptyCoroutineContext_getInstance();
    var accumulator_1 = tmp1_fold_0;
    var indexedObject = tmp0_fold_0;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element_3 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator_1 = accumulator_1.plus_3(element_3);
    }
    return accumulator_1;
  }
  function _get_left_($this) {
    return $this._left_0;
  }
  function _get_element_($this) {
    return $this._element;
  }
  function size($this) {
    var cur = $this;
    var size_0 = 2;
    while (true) {
      var tmp = cur._left_0;
      var tmp0_elvis_lhs = tmp instanceof CombinedContext ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        return size_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      cur = tmp_0;
      var tmp1 = size_0;
      size_0 = tmp1 + 1 | 0;
      Unit_getInstance();
    }
  }
  function contains_5($this, element) {
    return equals_0($this.get_10(element._get_key__4()), element);
  }
  function containsAll_0($this, context) {
    var cur = context;
    while (true) {
      if (!contains_5($this, cur._element))
        return false;
      var next = cur._left_0;
      if (next instanceof CombinedContext) {
        cur = next;
      } else {
        {
          return contains_5($this, isInterface(next, Element_0) ? next : THROW_CCE());
        }
      }
    }
  }
  function writeReplace($this) {
    var n = size($this);
    var elements = fillArrayVal(Array(n), null);
    var index = {_v: 0};
    $this.fold_3(Unit_getInstance(), _no_name_provided_$factory_3(elements, index));
    var tmp0_check_0 = index._v === n;
    if (!tmp0_check_0) {
      var message_2 = 'Check failed.';
      throw IllegalStateException_init_$Create$_0(toString_1(message_2));
    }return new Serialized(isArray(elements) ? elements : THROW_CCE());
  }
  function Serialized(elements) {
    Companion_getInstance_2();
    this._elements = elements;
  }
  Serialized.prototype._get_elements_ = function () {
    return this._elements;
  };
  Serialized.$metadata$ = {
    simpleName: 'Serialized',
    kind: 'class',
    interfaces: [Serializable]
  };
  function _no_name_provided__14() {
  }
  _no_name_provided__14.prototype.invoke_5 = function (acc, element) {
    var tmp;
    if (charSequenceLength(acc) === 0) {
      tmp = toString_1(element);
    } else {
      {
        tmp = '' + acc + ', ' + element;
      }
    }
    return tmp;
  };
  _no_name_provided__14.prototype.invoke_79 = function (p1, p2) {
    var tmp = (!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE();
    return this.invoke_5(tmp, (!(p2 == null) ? isInterface(p2, Element_0) : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__14.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__15($elements, $index) {
    this._$elements = $elements;
    this._$index = $index;
  }
  _no_name_provided__15.prototype.invoke_7 = function (_anonymous_parameter_0_, element) {
    var tmp0 = this._$index._v;
    this._$index._v = tmp0 + 1 | 0;
    this._$elements[tmp0] = element;
  };
  _no_name_provided__15.prototype.invoke_79 = function (p1, p2) {
    var tmp = p1 instanceof Unit ? p1 : THROW_CCE();
    this.invoke_7(tmp, (!(p2 == null) ? isInterface(p2, Element_0) : false) ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__15.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function CombinedContext(left, element) {
    this._left_0 = left;
    this._element = element;
  }
  CombinedContext.prototype.get_10 = function (key) {
    var cur = this;
    while (true) {
      var tmp0_safe_receiver = cur._element.get_10(key);
      if (tmp0_safe_receiver == null)
        null;
      else {
        return tmp0_safe_receiver;
      }
      Unit_getInstance();
      var next = cur._left_0;
      if (next instanceof CombinedContext) {
        cur = next;
      } else {
        {
          return next.get_10(key);
        }
      }
    }
  };
  CombinedContext.prototype.fold_3 = function (initial, operation) {
    return operation(this._left_0.fold_3(initial, operation), this._element);
  };
  CombinedContext.prototype.minusKey_3 = function (key) {
    var tmp0_safe_receiver = this._element.get_10(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      return this._left_0;
    }
    Unit_getInstance();
    var newLeft = this._left_0.minusKey_3(key);
    return newLeft === this._left_0 ? this : newLeft === EmptyCoroutineContext_getInstance() ? this._element : new CombinedContext(newLeft, this._element);
  };
  CombinedContext.prototype.equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      if (other instanceof CombinedContext) {
        tmp_1 = size(other) === size(this);
      } else {
        {
          tmp_1 = false;
        }
      }
      if (tmp_1) {
        tmp_0 = containsAll_0(other, this);
      } else {
        {
          tmp_0 = false;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  CombinedContext.prototype.hashCode = function () {
    return hashCode(this._left_0) + hashCode(this._element) | 0;
  };
  CombinedContext.prototype.toString = function () {
    return '[' + this.fold_3('', _no_name_provided_$factory_2()) + ']';
  };
  CombinedContext.$metadata$ = {
    simpleName: 'CombinedContext',
    kind: 'class',
    interfaces: [CoroutineContext, Serializable]
  };
  function _get_safeCast_($this) {
    return $this._safeCast;
  }
  function _get_topmostKey_($this) {
    return $this._topmostKey;
  }
  function AbstractCoroutineContextKey(baseKey, safeCast) {
    this._safeCast = safeCast;
    var tmp = this;
    var tmp_0;
    if (baseKey instanceof AbstractCoroutineContextKey) {
      tmp_0 = baseKey._topmostKey;
    } else {
      {
        tmp_0 = baseKey;
      }
    }
    tmp._topmostKey = tmp_0;
  }
  AbstractCoroutineContextKey.prototype.tryCast = function (element) {
    return this._safeCast(element);
  };
  AbstractCoroutineContextKey.prototype.isSubKey = function (key) {
    return key === this ? true : this._topmostKey === key;
  };
  AbstractCoroutineContextKey.$metadata$ = {
    simpleName: 'AbstractCoroutineContextKey',
    kind: 'class',
    interfaces: [Key_0]
  };
  function _no_name_provided_$factory_2() {
    var i = new _no_name_provided__14();
    return function (p1, p2) {
      return i.invoke_5(p1, p2);
    };
  }
  function _no_name_provided_$factory_3($elements, $index) {
    var i = new _no_name_provided__15($elements, $index);
    return function (p1, p2) {
      i.invoke_7(p1, p2);
      return Unit_getInstance();
    };
  }
  function _get_COROUTINE_SUSPENDED_() {
    return CoroutineSingletons_COROUTINE_SUSPENDED_getInstance();
  }
  var CoroutineSingletons_COROUTINE_SUSPENDED_instance;
  var CoroutineSingletons_UNDECIDED_instance;
  var CoroutineSingletons_RESUMED_instance;
  function values_2() {
    return [CoroutineSingletons_COROUTINE_SUSPENDED_getInstance(), CoroutineSingletons_UNDECIDED_getInstance(), CoroutineSingletons_RESUMED_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'COROUTINE_SUSPENDED':
        return CoroutineSingletons_COROUTINE_SUSPENDED_getInstance();
      case 'UNDECIDED':
        return CoroutineSingletons_UNDECIDED_getInstance();
      case 'RESUMED':
        return CoroutineSingletons_RESUMED_getInstance();
      default:return THROW_ISE();
    }
  }
  var CoroutineSingletons_entriesInitialized;
  function CoroutineSingletons_initEntries() {
    if (CoroutineSingletons_entriesInitialized)
      return Unit_getInstance();
    CoroutineSingletons_entriesInitialized = true;
    CoroutineSingletons_COROUTINE_SUSPENDED_instance = new CoroutineSingletons('COROUTINE_SUSPENDED', 0);
    CoroutineSingletons_UNDECIDED_instance = new CoroutineSingletons('UNDECIDED', 1);
    CoroutineSingletons_RESUMED_instance = new CoroutineSingletons('RESUMED', 2);
  }
  function CoroutineSingletons(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  CoroutineSingletons.$metadata$ = {
    simpleName: 'CoroutineSingletons',
    kind: 'class',
    interfaces: []
  };
  function CoroutineSingletons_COROUTINE_SUSPENDED_getInstance() {
    CoroutineSingletons_initEntries();
    return CoroutineSingletons_COROUTINE_SUSPENDED_instance;
  }
  function CoroutineSingletons_UNDECIDED_getInstance() {
    CoroutineSingletons_initEntries();
    return CoroutineSingletons_UNDECIDED_instance;
  }
  function CoroutineSingletons_RESUMED_getInstance() {
    CoroutineSingletons_initEntries();
    return CoroutineSingletons_RESUMED_instance;
  }
  function and(_this_, other) {
    return toShort(_this_ & other);
  }
  function or(_this_, other) {
    return toShort(_this_ | other);
  }
  function xor(_this_, other) {
    return toShort(_this_ ^ other);
  }
  function inv(_this_) {
    return toShort(~_this_);
  }
  function and_0(_this_, other) {
    return toByte(_this_ & other);
  }
  function or_0(_this_, other) {
    return toByte(_this_ | other);
  }
  function xor_0(_this_, other) {
    return toByte(_this_ ^ other);
  }
  function inv_0(_this_) {
    return toByte(~_this_);
  }
  function ExperimentalTypeInference() {
  }
  ExperimentalTypeInference.$metadata$ = {
    simpleName: 'ExperimentalTypeInference',
    kind: 'class',
    interfaces: [Annotation]
  };
  function RequireKotlin_init_$Init$(version, message, level, versionKind, errorCode, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      message = '';
    if (!(($mask0 & 4) === 0))
      level = DeprecationLevel_ERROR_getInstance();
    if (!(($mask0 & 8) === 0))
      versionKind = RequireKotlinVersionKind_LANGUAGE_VERSION_getInstance();
    if (!(($mask0 & 16) === 0))
      errorCode = -1;
    RequireKotlin.call($this, version, message, level, versionKind, errorCode);
    return $this;
  }
  function RequireKotlin_init_$Create$(version, message, level, versionKind, errorCode, $mask0, $marker) {
    return RequireKotlin_init_$Init$(version, message, level, versionKind, errorCode, $mask0, $marker, Object.create(RequireKotlin.prototype));
  }
  function RequireKotlin(version, message, level, versionKind, errorCode) {
    this._version = version;
    this._message_0 = message;
    this._level_1 = level;
    this._versionKind = versionKind;
    this._errorCode = errorCode;
  }
  RequireKotlin.prototype._get_version__0 = function () {
    return this._version;
  };
  RequireKotlin.prototype._get_message__16 = function () {
    return this._message_0;
  };
  RequireKotlin.prototype._get_level__2 = function () {
    return this._level_1;
  };
  RequireKotlin.prototype._get_versionKind_ = function () {
    return this._versionKind;
  };
  RequireKotlin.prototype._get_errorCode_ = function () {
    return this._errorCode;
  };
  RequireKotlin.$metadata$ = {
    simpleName: 'RequireKotlin',
    kind: 'class',
    interfaces: [Annotation]
  };
  var RequireKotlinVersionKind_LANGUAGE_VERSION_instance;
  var RequireKotlinVersionKind_COMPILER_VERSION_instance;
  var RequireKotlinVersionKind_API_VERSION_instance;
  function values_3() {
    return [RequireKotlinVersionKind_LANGUAGE_VERSION_getInstance(), RequireKotlinVersionKind_COMPILER_VERSION_getInstance(), RequireKotlinVersionKind_API_VERSION_getInstance()];
  }
  function valueOf_3(value) {
    switch (value) {
      case 'LANGUAGE_VERSION':
        return RequireKotlinVersionKind_LANGUAGE_VERSION_getInstance();
      case 'COMPILER_VERSION':
        return RequireKotlinVersionKind_COMPILER_VERSION_getInstance();
      case 'API_VERSION':
        return RequireKotlinVersionKind_API_VERSION_getInstance();
      default:return THROW_ISE();
    }
  }
  var RequireKotlinVersionKind_entriesInitialized;
  function RequireKotlinVersionKind_initEntries() {
    if (RequireKotlinVersionKind_entriesInitialized)
      return Unit_getInstance();
    RequireKotlinVersionKind_entriesInitialized = true;
    RequireKotlinVersionKind_LANGUAGE_VERSION_instance = new RequireKotlinVersionKind('LANGUAGE_VERSION', 0);
    RequireKotlinVersionKind_COMPILER_VERSION_instance = new RequireKotlinVersionKind('COMPILER_VERSION', 1);
    RequireKotlinVersionKind_API_VERSION_instance = new RequireKotlinVersionKind('API_VERSION', 2);
  }
  function RequireKotlinVersionKind(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  RequireKotlinVersionKind.$metadata$ = {
    simpleName: 'RequireKotlinVersionKind',
    kind: 'class',
    interfaces: []
  };
  function InlineOnly() {
  }
  InlineOnly.$metadata$ = {
    simpleName: 'InlineOnly',
    kind: 'class',
    interfaces: [Annotation]
  };
  function NoInfer() {
  }
  NoInfer.$metadata$ = {
    simpleName: 'NoInfer',
    kind: 'class',
    interfaces: [Annotation]
  };
  function DynamicExtension() {
  }
  DynamicExtension.$metadata$ = {
    simpleName: 'DynamicExtension',
    kind: 'class',
    interfaces: [Annotation]
  };
  function ContractsDsl() {
  }
  ContractsDsl.$metadata$ = {
    simpleName: 'ContractsDsl',
    kind: 'class',
    interfaces: [Annotation]
  };
  function LowPriorityInOverloadResolution() {
  }
  LowPriorityInOverloadResolution.$metadata$ = {
    simpleName: 'LowPriorityInOverloadResolution',
    kind: 'class',
    interfaces: [Annotation]
  };
  function OnlyInputTypes() {
  }
  OnlyInputTypes.$metadata$ = {
    simpleName: 'OnlyInputTypes',
    kind: 'class',
    interfaces: [Annotation]
  };
  function HidesMembers() {
  }
  HidesMembers.$metadata$ = {
    simpleName: 'HidesMembers',
    kind: 'class',
    interfaces: [Annotation]
  };
  function RequireKotlinVersionKind_LANGUAGE_VERSION_getInstance() {
    RequireKotlinVersionKind_initEntries();
    return RequireKotlinVersionKind_LANGUAGE_VERSION_instance;
  }
  function RequireKotlinVersionKind_COMPILER_VERSION_getInstance() {
    RequireKotlinVersionKind_initEntries();
    return RequireKotlinVersionKind_COMPILER_VERSION_instance;
  }
  function RequireKotlinVersionKind_API_VERSION_getInstance() {
    RequireKotlinVersionKind_initEntries();
    return RequireKotlinVersionKind_API_VERSION_instance;
  }
  function _get_defaultRandom_($this) {
    return $this._defaultRandom;
  }
  function Default() {
    Default_instance = this;
    Random.call(this);
    this._defaultRandom = defaultPlatformRandom();
  }
  Default.prototype.nextBits_1 = function (bitCount) {
    return this._defaultRandom.nextBits_1(bitCount);
  };
  Default.prototype.nextInt_10 = function () {
    return this._defaultRandom.nextInt_10();
  };
  Default.prototype.nextInt_6 = function (until_1) {
    return this._defaultRandom.nextInt_6(until_1);
  };
  Default.prototype.nextInt_7 = function (from, until_1) {
    return this._defaultRandom.nextInt_7(from, until_1);
  };
  Default.prototype.nextLong_10 = function () {
    return this._defaultRandom.nextLong_10();
  };
  Default.prototype.nextLong_6 = function (until_1) {
    return this._defaultRandom.nextLong_6(until_1);
  };
  Default.prototype.nextLong_7 = function (from, until_1) {
    return this._defaultRandom.nextLong_7(from, until_1);
  };
  Default.prototype.nextBoolean_3 = function () {
    return this._defaultRandom.nextBoolean_3();
  };
  Default.prototype.nextDouble_9 = function () {
    return this._defaultRandom.nextDouble_9();
  };
  Default.prototype.nextDouble_6 = function (until_1) {
    return this._defaultRandom.nextDouble_6(until_1);
  };
  Default.prototype.nextDouble_7 = function (from, until_1) {
    return this._defaultRandom.nextDouble_7(from, until_1);
  };
  Default.prototype.nextFloat_3 = function () {
    return this._defaultRandom.nextFloat_3();
  };
  Default.prototype.nextBytes_6 = function (array) {
    return this._defaultRandom.nextBytes_6(array);
  };
  Default.prototype.nextBytes_7 = function (size_0) {
    return this._defaultRandom.nextBytes_7(size_0);
  };
  Default.prototype.nextBytes_5 = function (array, fromIndex, toIndex) {
    return this._defaultRandom.nextBytes_5(array, fromIndex, toIndex);
  };
  Default.$metadata$ = {
    simpleName: 'Default',
    kind: 'object',
    interfaces: []
  };
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Random() {
    Default_getInstance();
  }
  Random.prototype.nextInt_10 = function () {
    return this.nextBits_1(32);
  };
  Random.prototype.nextInt_6 = function (until_1) {
    return this.nextInt_7(0, until_1);
  };
  Random.prototype.nextInt_7 = function (from, until_1) {
    checkRangeBounds(from, until_1);
    var n = until_1 - from | 0;
    if (n > 0 ? true : n === IntCompanionObject_getInstance()._MIN_VALUE_5) {
      var tmp;
      if ((n & (-n | 0)) === n) {
        var bitCount = fastLog2(n);
        tmp = this.nextBits_1(bitCount);
      } else {
        var v;
        do {
          var bits = this.nextInt_10() >>> 1;
          v = bits % n;
        }
         while (((bits - v | 0) + (n - 1 | 0) | 0) < 0);
        tmp = v;
      }
      var rnd = tmp;
      return from + rnd | 0;
    } else {
      while (true) {
        var rnd_0 = this.nextInt_10();
        if (from <= rnd_0 ? rnd_0 < until_1 : false)
          return rnd_0;
      }
    }
  };
  Random.prototype.nextLong_10 = function () {
    var tmp0_plus_0 = toLong(this.nextInt_10()).shl_0(32);
    var tmp1_plus_0 = this.nextInt_10();
    return tmp0_plus_0.plus_38(toLong(tmp1_plus_0));
  };
  Random.prototype.nextLong_6 = function (until_1) {
    return this.nextLong_7(new Long(0, 0), until_1);
  };
  Random.prototype.nextLong_7 = function (from, until_1) {
    checkRangeBounds_0(from, until_1);
    var n = until_1.minus_34(from);
    if (n.compareTo_57(new Long(0, 0)) > 0) {
      var rnd;
      if (n.and(n.unaryMinus_4()).equals(n)) {
        var nLow = n.toInt_6();
        var nHigh = n.ushr_0(32).toInt_6();
        var tmp;
        if (!(nLow === 0)) {
          var bitCount = fastLog2(nLow);
          tmp = toLong(this.nextBits_1(bitCount)).and(new Long(-1, 0));
        } else if (nHigh === 1) {
          tmp = toLong(this.nextInt_10()).and(new Long(-1, 0));
        } else {
          var bitCount_0 = fastLog2(nHigh);
          var tmp0_plus_0 = toLong(this.nextBits_1(bitCount_0)).shl_0(32);
          var tmp1_plus_0 = this.nextInt_10();
          tmp = tmp0_plus_0.plus_38(toLong(tmp1_plus_0));
        }
        rnd = tmp;
      } else {
        var v;
        $l$1: do {
          $l$0: do {
            var bits = this.nextLong_10().ushr_0(1);
            v = bits.rem_32(n);
          }
           while (false);
          var tmp_0 = bits.minus_34(v);
          var tmp2_minus_0 = 1;
        }
         while (tmp_0.plus_38(n.minus_34(toLong(tmp2_minus_0))).compareTo_57(new Long(0, 0)) < 0);
        rnd = v;
      }
      return from.plus_38(rnd);
    } else {
      while (true) {
        var rnd_0 = this.nextLong_10();
        if (from.compareTo_57(rnd_0) <= 0 ? rnd_0.compareTo_57(until_1) < 0 : false)
          return rnd_0;
      }
    }
  };
  Random.prototype.nextBoolean_3 = function () {
    return !(this.nextBits_1(1) === 0);
  };
  Random.prototype.nextDouble_9 = function () {
    return doubleFromParts(this.nextBits_1(26), this.nextBits_1(27));
  };
  Random.prototype.nextDouble_6 = function (until_1) {
    return this.nextDouble_7(0.0, until_1);
  };
  Random.prototype.nextDouble_7 = function (from, until_1) {
    checkRangeBounds_1(from, until_1);
    var size_0 = until_1 - from;
    var tmp;
    if ((isInfinite(size_0) ? isFinite(from) : false) ? isFinite(until_1) : false) {
      var r1 = this.nextDouble_9() * (until_1 / 2 - from / 2);
      tmp = from + r1 + r1;
    } else {
      tmp = from + this.nextDouble_9() * size_0;
    }
    var r = tmp;
    return r >= until_1 ? nextDown(until_1) : r;
  };
  Random.prototype.nextFloat_3 = function () {
    return this.nextBits_1(24) / 16777216;
  };
  Random.prototype.nextBytes_5 = function (array, fromIndex, toIndex) {
    var tmp0_require_0 = (0 <= fromIndex ? fromIndex <= array.length : false) ? 0 <= toIndex ? toIndex <= array.length : false : false;
    if (!tmp0_require_0) {
      var message_2 = '' + 'fromIndex (' + fromIndex + ') or toIndex (' + toIndex + ') are out of range: 0..' + array.length + '.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_2));
    }var tmp1_require_0 = fromIndex <= toIndex;
    if (!tmp1_require_0) {
      var message_2_0 = '' + 'fromIndex (' + fromIndex + ') must be not greater than toIndex (' + toIndex + ').';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_2_0));
    }var steps = (toIndex - fromIndex | 0) / 4 | 0;
    var position = fromIndex;
    var inductionVariable = 0;
    if (inductionVariable < steps)
      do {
        var index_3 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var v_5 = this.nextInt_10();
        array[position] = toByte(v_5);
        array[position + 1 | 0] = toByte(v_5 >>> 8);
        array[position + 2 | 0] = toByte(v_5 >>> 16);
        array[position + 3 | 0] = toByte(v_5 >>> 24);
        position = position + 4 | 0;
      }
       while (inductionVariable < steps);
    var remainder = toIndex - position | 0;
    var vr = this.nextBits_1(imul(remainder, 8));
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < remainder)
      do {
        var i = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        array[position + i | 0] = toByte(vr >>> imul(i, 8));
      }
       while (inductionVariable_0 < remainder);
    return array;
  };
  Random.prototype.nextBytes$default_1 = function (array, fromIndex, toIndex, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      fromIndex = 0;
    if (!(($mask0 & 4) === 0))
      toIndex = array.length;
    return $handler == null ? this.nextBytes_5(array, fromIndex, toIndex) : $handler(array, fromIndex, toIndex);
  };
  Random.prototype.nextBytes_6 = function (array) {
    return this.nextBytes_5(array, 0, array.length);
  };
  Random.prototype.nextBytes_7 = function (size_0) {
    return this.nextBytes_6(new Int8Array(size_0));
  };
  Random.$metadata$ = {
    simpleName: 'Random',
    kind: 'class',
    interfaces: []
  };
  function checkRangeBounds(from, until_1) {
    var tmp0_require_0 = until_1 > from;
    var tmp;
    if (!tmp0_require_0) {
      var message_2 = boundsErrorMessage(from, until_1);
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_2));
    }return tmp;
  }
  function fastLog2(value) {
    return 31 - Math.clz32(value) | 0;
  }
  function checkRangeBounds_0(from, until_1) {
    var tmp0_require_0 = until_1.compareTo_57(from) > 0;
    var tmp;
    if (!tmp0_require_0) {
      var message_2 = boundsErrorMessage(from, until_1);
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_2));
    }return tmp;
  }
  function checkRangeBounds_1(from, until_1) {
    var tmp0_require_0 = until_1 > from;
    var tmp;
    if (!tmp0_require_0) {
      var message_2 = boundsErrorMessage(from, until_1);
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_2));
    }return tmp;
  }
  function boundsErrorMessage(from, until_1) {
    return '' + 'Random range is empty: [' + from + ', ' + until_1 + ').';
  }
  function Random_0(seed) {
    return XorWowRandom_init_$Create$(seed, seed >> 31);
  }
  function takeUpperBits(_this_, bitCount) {
    return _this_ >>> (32 - bitCount | 0) & (-bitCount | 0) >> 31;
  }
  function _set_x_($this, _set___) {
    $this._x = _set___;
  }
  function _get_x_($this) {
    return $this._x;
  }
  function _set_y_($this, _set___) {
    $this._y = _set___;
  }
  function _get_y_($this) {
    return $this._y;
  }
  function _set_z_($this, _set___) {
    $this._z = _set___;
  }
  function _get_z_($this) {
    return $this._z;
  }
  function _set_w_($this, _set___) {
    $this._w = _set___;
  }
  function _get_w_($this) {
    return $this._w;
  }
  function _set_v_($this, _set___) {
    $this._v = _set___;
  }
  function _get_v_($this) {
    return $this._v;
  }
  function _set_addend_($this, _set___) {
    $this._addend = _set___;
  }
  function _get_addend_($this) {
    return $this._addend;
  }
  function XorWowRandom_init_$Init$(seed1, seed2, $this) {
    XorWowRandom.call($this, seed1, seed2, 0, 0, ~seed1, seed1 << 10 ^ seed2 >>> 4);
    return $this;
  }
  function XorWowRandom_init_$Create$(seed1, seed2) {
    return XorWowRandom_init_$Init$(seed1, seed2, Object.create(XorWowRandom.prototype));
  }
  function XorWowRandom(x, y, z, w, v, addend) {
    Random.call(this);
    this._x = x;
    this._y = y;
    this._z = z;
    this._w = w;
    this._v = v;
    this._addend = addend;
    var tmp0_require_0 = !((this._x | this._y | this._z | this._w | this._v) === 0);
    if (!tmp0_require_0) {
      var message_2 = 'Initial state must have at least one non-zero element.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_2));
    }var tmp1_repeat_0 = 64;
    var inductionVariable = 0;
    if (inductionVariable < tmp1_repeat_0)
      do {
        var index_3 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.nextInt_10();
        Unit_getInstance();
      }
       while (inductionVariable < tmp1_repeat_0);
  }
  XorWowRandom.prototype.nextInt_10 = function () {
    var t = this._x;
    t = t ^ t >>> 2;
    this._x = this._y;
    this._y = this._z;
    this._z = this._w;
    var v0 = this._v;
    this._w = v0;
    t = t ^ t << 1 ^ v0 ^ v0 << 4;
    this._v = t;
    var tmp0_this = this;
    tmp0_this._addend = tmp0_this._addend + 362437 | 0;
    return t + this._addend | 0;
  };
  XorWowRandom.prototype.nextBits_1 = function (bitCount) {
    return takeUpperBits(this.nextInt_10(), bitCount);
  };
  XorWowRandom.$metadata$ = {
    simpleName: 'XorWowRandom',
    kind: 'class',
    interfaces: []
  };
  function checkStepIsPositive(isPositive, step_0) {
    if (!isPositive)
      throw IllegalArgumentException_init_$Create$_0('' + 'Step must be positive, was: ' + step_0 + '.');
  }
  function KClassifier() {
  }
  KClassifier.$metadata$ = {
    simpleName: 'KClassifier',
    kind: 'interface',
    interfaces: []
  };
  function KTypeParameter() {
  }
  KTypeParameter.$metadata$ = {
    simpleName: 'KTypeParameter',
    kind: 'interface',
    interfaces: [KClassifier]
  };
  function Companion_4() {
    Companion_instance_3 = this;
    this._star = new KTypeProjection(null, null);
  }
  Companion_4.prototype._get_star_ = function () {
    return this._star;
  };
  Companion_4.prototype._get_STAR_ = function () {
    return this._star;
  };
  Companion_4.prototype.invariant = function (type) {
    return new KTypeProjection(KVariance_INVARIANT_getInstance(), type);
  };
  Companion_4.prototype.contravariant = function (type) {
    return new KTypeProjection(KVariance_IN_getInstance(), type);
  };
  Companion_4.prototype.covariant = function (type) {
    return new KTypeProjection(KVariance_OUT_getInstance(), type);
  };
  Companion_4.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_4();
    return Companion_instance_3;
  }
  function KTypeProjection(variance, type) {
    Companion_getInstance_3();
    this._variance = variance;
    this._type = type;
    var tmp0_require_0 = this._variance == null === (this._type == null);
    if (!tmp0_require_0) {
      var message_2 = this._variance == null ? 'Star projection must have no type specified.' : '' + 'The projection variance ' + this._variance + ' requires type to be specified.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_2));
    }}
  KTypeProjection.prototype._get_variance__1 = function () {
    return this._variance;
  };
  KTypeProjection.prototype._get_type_ = function () {
    return this._type;
  };
  KTypeProjection.prototype.toString = function () {
    var tmp0_subject = this._variance;
    var tmp;
    if (tmp0_subject == null) {
      tmp = '*';
    } else if (equals_0(tmp0_subject, KVariance_INVARIANT_getInstance())) {
      tmp = toString_0(this._type);
    } else if (equals_0(tmp0_subject, KVariance_IN_getInstance())) {
      tmp = '' + 'in ' + this._type;
    } else if (equals_0(tmp0_subject, KVariance_OUT_getInstance())) {
      tmp = '' + 'out ' + this._type;
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  };
  KTypeProjection.prototype.component1_3 = function () {
    return this._variance;
  };
  KTypeProjection.prototype.component2_2 = function () {
    return this._type;
  };
  KTypeProjection.prototype.copy = function (variance, type) {
    return new KTypeProjection(variance, type);
  };
  KTypeProjection.prototype.copy$default = function (variance, type, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      variance = this._variance;
    if (!(($mask0 & 2) === 0))
      type = this._type;
    return this.copy(variance, type);
  };
  KTypeProjection.prototype.hashCode = function () {
    var result = this._variance == null ? 0 : this._variance.hashCode();
    result = imul(result, 31) + (this._type == null ? 0 : hashCode(this._type)) | 0;
    return result;
  };
  KTypeProjection.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KTypeProjection))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof KTypeProjection ? other : THROW_CCE();
    if (!equals_0(this._variance, tmp0_other_with_cast._variance))
      return false;
    if (!equals_0(this._type, tmp0_other_with_cast._type))
      return false;
    return true;
  };
  KTypeProjection.$metadata$ = {
    simpleName: 'KTypeProjection',
    kind: 'class',
    interfaces: []
  };
  var KVariance_INVARIANT_instance;
  var KVariance_IN_instance;
  var KVariance_OUT_instance;
  function values_4() {
    return [KVariance_INVARIANT_getInstance(), KVariance_IN_getInstance(), KVariance_OUT_getInstance()];
  }
  function valueOf_4(value) {
    switch (value) {
      case 'INVARIANT':
        return KVariance_INVARIANT_getInstance();
      case 'IN':
        return KVariance_IN_getInstance();
      case 'OUT':
        return KVariance_OUT_getInstance();
      default:return THROW_ISE();
    }
  }
  var KVariance_entriesInitialized;
  function KVariance_initEntries() {
    if (KVariance_entriesInitialized)
      return Unit_getInstance();
    KVariance_entriesInitialized = true;
    KVariance_INVARIANT_instance = new KVariance('INVARIANT', 0);
    KVariance_IN_instance = new KVariance('IN', 1);
    KVariance_OUT_instance = new KVariance('OUT', 2);
  }
  function KVariance(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  KVariance.$metadata$ = {
    simpleName: 'KVariance',
    kind: 'class',
    interfaces: []
  };
  function KVariance_INVARIANT_getInstance() {
    KVariance_initEntries();
    return KVariance_INVARIANT_instance;
  }
  function KVariance_IN_getInstance() {
    KVariance_initEntries();
    return KVariance_IN_instance;
  }
  function KVariance_OUT_getInstance() {
    KVariance_initEntries();
    return KVariance_OUT_instance;
  }
  function appendElement(_this_, element, transform) {
    if (!(transform == null)) {
      _this_.append_4(transform(element));
      Unit_getInstance();
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this_.append_4(element);
        Unit_getInstance();
      } else {
        if (element instanceof Char_0) {
          _this_.append_3(element);
          Unit_getInstance();
        } else {
          {
            _this_.append_4(toString_0(element));
            Unit_getInstance();
          }
        }
      }
    }
  }
  function equals(_this_, other, ignoreCase) {
    if (_this_.equals(other))
      return true;
    if (!ignoreCase)
      return false;
    if (uppercaseChar(_this_).equals(uppercaseChar(other)))
      return true;
    var tmp0_asDynamic_0 = _this_.toString();
    var tmp1_unsafeCast_0 = tmp0_asDynamic_0.toLowerCase().charCodeAt(0);
    var tmp = numberToChar(tmp1_unsafeCast_0);
    var tmp2_asDynamic_0 = other.toString();
    var tmp3_unsafeCast_0 = tmp2_asDynamic_0.toLowerCase().charCodeAt(0);
    if (tmp.equals(numberToChar(tmp3_unsafeCast_0)))
      return true;
    else {
    }
    return false;
  }
  function equals$default(_this_, other, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      ignoreCase = false;
    return equals(_this_, other, ignoreCase);
  }
  function trimIndent(_this_) {
    return replaceIndent(_this_, '');
  }
  function replaceIndent(_this_, newIndent) {
    var lines_0 = lines(_this_);
    var tmp0_filterTo_0_1 = ArrayList_init_$Create$();
    var tmp0_iterator_1_2 = lines_0.iterator_69();
    while (tmp0_iterator_1_2.hasNext_49()) {
      var element_2_3 = tmp0_iterator_1_2.next_56();
      if (isNotBlank(element_2_3)) {
        tmp0_filterTo_0_1.add_25(element_2_3);
        Unit_getInstance();
      }}
    var tmp0_map_0 = tmp0_filterTo_0_1;
    var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map_0, 10));
    var tmp0_iterator_1_2_0 = tmp0_map_0.iterator_69();
    while (tmp0_iterator_1_2_0.hasNext_49()) {
      var item_2_3 = tmp0_iterator_1_2_0.next_56();
      tmp0_mapTo_0_1.add_25(indentWidth(item_2_3));
      Unit_getInstance();
    }
    var tmp0_elvis_lhs = minOrNull(tmp0_mapTo_0_1);
    var minCommonIndent = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    var tmp1_reindent_0 = _this_.length + imul(newIndent.length, lines_0._get_size__42()) | 0;
    var tmp2_reindent_0 = getIndentFunction(newIndent);
    var lastIndex_1 = _get_lastIndex__5(lines_0);
    var tmp1_mapIndexedNotNullTo_0_1 = ArrayList_init_$Create$();
    var index_1_2 = 0;
    var tmp0_iterator_2_3 = lines_0.iterator_69();
    while (tmp0_iterator_2_3.hasNext_49()) {
      var item_3_4 = tmp0_iterator_2_3.next_56();
      var tmp1_4_6 = index_1_2;
      index_1_2 = tmp1_4_6 + 1 | 0;
      var tmp0__anonymous__1_5_5 = checkIndexOverflow(tmp1_4_6);
      var tmp;
      if ((tmp0__anonymous__1_5_5 === 0 ? true : tmp0__anonymous__1_5_5 === lastIndex_1) ? isBlank(item_3_4) : false) {
        tmp = null;
      } else {
        var tmp0_safe_receiver_4_10 = drop_0(item_3_4, minCommonIndent);
        var tmp_0;
        if (tmp0_safe_receiver_4_10 == null) {
          tmp_0 = null;
        } else {
          tmp_0 = tmp2_reindent_0(tmp0_safe_receiver_4_10);
        }
        var tmp1_elvis_lhs_3_9 = tmp_0;
        tmp = tmp1_elvis_lhs_3_9 == null ? item_3_4 : tmp1_elvis_lhs_3_9;
      }
      var tmp0_safe_receiver_2_6_7 = tmp;
      if (tmp0_safe_receiver_2_6_7 == null)
        null;
      else {
        tmp1_mapIndexedNotNullTo_0_1.add_25(tmp0_safe_receiver_2_6_7);
        Unit_getInstance();
      }
      Unit_getInstance();
    }
    var tmp_1 = StringBuilder_init_$Create$(tmp1_reindent_0);
    return joinTo$default_0(tmp1_mapIndexedNotNullTo_0_1, tmp_1, '\n', null, null, 0, null, null, 124, null).toString();
  }
  function replaceIndent$default(_this_, newIndent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      newIndent = '';
    return replaceIndent(_this_, newIndent);
  }
  function indentWidth(_this_) {
    var tmp$ret$0;
    l$ret$1: do {
      var inductionVariable = 0;
      var last_0 = charSequenceLength(_this_) - 1 | 0;
      if (inductionVariable <= last_0)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp0__anonymous__3 = charSequenceGet(_this_, index_2);
          if (!isWhitespace(tmp0__anonymous__3)) {
            tmp$ret$0 = index_2;
            break l$ret$1;
          } else {
          }
        }
         while (inductionVariable <= last_0);
      tmp$ret$0 = -1;
    }
     while (false);
    var tmp1_let_0 = tmp$ret$0;
    return tmp1_let_0 === -1 ? _this_.length : tmp1_let_0;
  }
  function reindent(_this_, resultSizeEstimate, indentAddFunction, indentCutFunction) {
    var lastIndex = _get_lastIndex__5(_this_);
    var tmp1_mapIndexedNotNullTo_0_1 = ArrayList_init_$Create$();
    var index_1_2 = 0;
    var tmp0_iterator_2_3 = _this_.iterator_69();
    while (tmp0_iterator_2_3.hasNext_49()) {
      var item_3_4 = tmp0_iterator_2_3.next_56();
      var tmp1_4_6 = index_1_2;
      index_1_2 = tmp1_4_6 + 1 | 0;
      var tmp0__anonymous__1_5_5 = checkIndexOverflow(tmp1_4_6);
      var tmp;
      if ((tmp0__anonymous__1_5_5 === 0 ? true : tmp0__anonymous__1_5_5 === lastIndex) ? isBlank(item_3_4) : false) {
        tmp = null;
      } else {
        var tmp0_safe_receiver_10 = indentCutFunction(item_3_4);
        var tmp_0;
        if (tmp0_safe_receiver_10 == null) {
          tmp_0 = null;
        } else {
          tmp_0 = indentAddFunction(tmp0_safe_receiver_10);
        }
        var tmp1_elvis_lhs_9 = tmp_0;
        tmp = tmp1_elvis_lhs_9 == null ? item_3_4 : tmp1_elvis_lhs_9;
      }
      var tmp0_safe_receiver_2_6_7 = tmp;
      if (tmp0_safe_receiver_2_6_7 == null)
        null;
      else {
        tmp1_mapIndexedNotNullTo_0_1.add_25(tmp0_safe_receiver_2_6_7);
        Unit_getInstance();
      }
      Unit_getInstance();
    }
    var tmp_1 = StringBuilder_init_$Create$(resultSizeEstimate);
    return joinTo$default_0(tmp1_mapIndexedNotNullTo_0_1, tmp_1, '\n', null, null, 0, null, null, 124, null).toString();
  }
  function getIndentFunction(indent) {
    var tmp;
    if (charSequenceLength(indent) === 0) {
      tmp = _no_name_provided_$factory_4();
    } else {
      {
        tmp = _no_name_provided_$factory_5(indent);
      }
    }
    return tmp;
  }
  function _no_name_provided__16() {
  }
  _no_name_provided__16.prototype.invoke_11 = function (line) {
    return line;
  };
  _no_name_provided__16.prototype.invoke_81 = function (p1) {
    return this.invoke_11((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__16.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__17($indent) {
    this._$indent = $indent;
  }
  _no_name_provided__17.prototype.invoke_11 = function (line) {
    return this._$indent + line;
  };
  _no_name_provided__17.prototype.invoke_81 = function (p1) {
    return this.invoke_11((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__17.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_4() {
    var i = new _no_name_provided__16();
    return function (p1) {
      return i.invoke_11(p1);
    };
  }
  function _no_name_provided_$factory_5($indent) {
    var i = new _no_name_provided__17($indent);
    return function (p1) {
      return i.invoke_11(p1);
    };
  }
  function buildString(builderAction) {
    var tmp0_apply_0 = StringBuilder_init_$Create$_1();
    builderAction(tmp0_apply_0);
    return tmp0_apply_0.toString();
  }
  function isEmpty_0(_this_) {
    return charSequenceLength(_this_) === 0;
  }
  function split(_this_, regex, limit) {
    return regex.split(_this_, limit);
  }
  function trim(_this_) {
    return toString_1(trim_0(isCharSequence(_this_) ? _this_ : THROW_CCE()));
  }
  function replaceFirst(_this_, regex, replacement) {
    return regex.replaceFirst(_this_, replacement);
  }
  function trim_0(_this_) {
    var startIndex_1 = 0;
    var endIndex_2 = charSequenceLength(_this_) - 1 | 0;
    var startFound_3 = false;
    $l$break: while (startIndex_1 <= endIndex_2) {
      var index_4 = !startFound_3 ? startIndex_1 : endIndex_2;
      var match_5 = isWhitespace(charSequenceGet(_this_, index_4));
      if (!startFound_3) {
        if (!match_5)
          startFound_3 = true;
        else
          startIndex_1 = startIndex_1 + 1 | 0;
      } else {
        if (!match_5)
          break $l$break;
        else
          endIndex_2 = endIndex_2 - 1 | 0;
      }
    }
    return charSequenceSubSequence(_this_, startIndex_1, endIndex_2 + 1 | 0);
  }
  function trim_1(_this_, predicate) {
    var startIndex = 0;
    var endIndex = charSequenceLength(_this_) - 1 | 0;
    var startFound = false;
    $l$break: while (startIndex <= endIndex) {
      var index = !startFound ? startIndex : endIndex;
      var match_0 = predicate(charSequenceGet(_this_, index));
      if (!startFound) {
        if (!match_0)
          startFound = true;
        else
          startIndex = startIndex + 1 | 0;
      } else {
        if (!match_0)
          break $l$break;
        else
          endIndex = endIndex - 1 | 0;
      }
    }
    return charSequenceSubSequence(_this_, startIndex, endIndex + 1 | 0);
  }
  function startsWith(_this_, char, ignoreCase) {
    return charSequenceLength(_this_) > 0 ? equals(charSequenceGet(_this_, 0), char, ignoreCase) : false;
  }
  function startsWith$default(_this_, char, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      ignoreCase = false;
    return startsWith(_this_, char, ignoreCase);
  }
  function endsWith(_this_, char, ignoreCase) {
    return charSequenceLength(_this_) > 0 ? equals(charSequenceGet(_this_, _get_lastIndex__6(_this_)), char, ignoreCase) : false;
  }
  function endsWith$default(_this_, char, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      ignoreCase = false;
    return endsWith(_this_, char, ignoreCase);
  }
  function trimEnd(_this_, chars) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_trimEnd_0 = isCharSequence(_this_) ? _this_ : THROW_CCE();
      var inductionVariable = charSequenceLength(tmp0_trimEnd_0) - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp1__anonymous__1 = charSequenceGet(tmp0_trimEnd_0, index_2);
          if (!contains_0(chars, tmp1__anonymous__1)) {
            tmp$ret$0 = charSequenceSubSequence(tmp0_trimEnd_0, 0, index_2 + 1 | 0);
            break l$ret$1;
          } else {
          }
        }
         while (0 <= inductionVariable);
      tmp$ret$0 = '';
    }
     while (false);
    return toString_1(tmp$ret$0);
  }
  function trimStart(_this_, chars) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_trimStart_0 = isCharSequence(_this_) ? _this_ : THROW_CCE();
      var inductionVariable = 0;
      var last_0 = charSequenceLength(tmp0_trimStart_0) - 1 | 0;
      if (inductionVariable <= last_0)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp1__anonymous__1 = charSequenceGet(tmp0_trimStart_0, index_2);
          if (!contains_0(chars, tmp1__anonymous__1)) {
            tmp$ret$0 = charSequenceSubSequence(tmp0_trimStart_0, index_2, charSequenceLength(tmp0_trimStart_0));
            break l$ret$1;
          } else {
          }
        }
         while (inductionVariable <= last_0);
      tmp$ret$0 = '';
    }
     while (false);
    return toString_1(tmp$ret$0);
  }
  function lines(_this_) {
    return toList_0(lineSequence(_this_));
  }
  function isNotBlank(_this_) {
    return !isBlank(_this_);
  }
  function isNotEmpty_0(_this_) {
    return charSequenceLength(_this_) > 0;
  }
  function matches(_this_, regex) {
    return regex.matches_0(_this_);
  }
  function _get_lastIndex__6(_this_) {
    return charSequenceLength(_this_) - 1 | 0;
  }
  function trimEnd_0(_this_, predicate) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_trimEnd_0 = isCharSequence(_this_) ? _this_ : THROW_CCE();
      var inductionVariable = charSequenceLength(tmp0_trimEnd_0) - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          if (!predicate(charSequenceGet(tmp0_trimEnd_0, index_2))) {
            tmp$ret$0 = charSequenceSubSequence(tmp0_trimEnd_0, 0, index_2 + 1 | 0);
            break l$ret$1;
          }}
         while (0 <= inductionVariable);
      tmp$ret$0 = '';
    }
     while (false);
    return toString_1(tmp$ret$0);
  }
  function trimStart_0(_this_, predicate) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_trimStart_0 = isCharSequence(_this_) ? _this_ : THROW_CCE();
      var inductionVariable = 0;
      var last_0 = charSequenceLength(tmp0_trimStart_0) - 1 | 0;
      if (inductionVariable <= last_0)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!predicate(charSequenceGet(tmp0_trimStart_0, index_2))) {
            tmp$ret$0 = charSequenceSubSequence(tmp0_trimStart_0, index_2, charSequenceLength(tmp0_trimStart_0));
            break l$ret$1;
          }}
         while (inductionVariable <= last_0);
      tmp$ret$0 = '';
    }
     while (false);
    return toString_1(tmp$ret$0);
  }
  function lineSequence(_this_) {
    var tmp = ['\r\n', '\n', '\r'];
    return splitToSequence$default(_this_, tmp, false, 0, 6, null);
  }
  function trimEnd_1(_this_, predicate) {
    var inductionVariable = charSequenceLength(_this_) - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (!predicate(charSequenceGet(_this_, index)))
          return charSequenceSubSequence(_this_, 0, index + 1 | 0);
      }
       while (0 <= inductionVariable);
    return '';
  }
  function trimStart_1(_this_, predicate) {
    var inductionVariable = 0;
    var last_0 = charSequenceLength(_this_) - 1 | 0;
    if (inductionVariable <= last_0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!predicate(charSequenceGet(_this_, index)))
          return charSequenceSubSequence(_this_, index, charSequenceLength(_this_));
      }
       while (inductionVariable <= last_0);
    return '';
  }
  function splitToSequence(_this_, delimiters, ignoreCase, limit) {
    var tmp = rangesDelimitedBy$default(_this_, delimiters, 0, ignoreCase, limit, 2, null);
    return map_0(tmp, _no_name_provided_$factory_6(_this_));
  }
  function splitToSequence$default(_this_, delimiters, ignoreCase, limit, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      ignoreCase = false;
    if (!(($mask0 & 4) === 0))
      limit = 0;
    return splitToSequence(_this_, delimiters, ignoreCase, limit);
  }
  function _get_indices__6(_this_) {
    return numberRangeToNumber(0, charSequenceLength(_this_) - 1 | 0);
  }
  function substring(_this_, range) {
    return toString_1(charSequenceSubSequence(_this_, range._get_start__6(), range._get_endInclusive__6() + 1 | 0));
  }
  function rangesDelimitedBy(_this_, delimiters, startIndex, ignoreCase, limit) {
    var tmp0_require_0 = limit >= 0;
    if (!tmp0_require_0) {
      var message_2 = '' + 'Limit must be non-negative, but was ' + limit + '.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_2));
    }var delimitersList = asList_0(delimiters);
    return new DelimitedRangesSequence(_this_, startIndex, limit, _no_name_provided_$factory_7(delimitersList, ignoreCase));
  }
  function rangesDelimitedBy$default(_this_, delimiters, startIndex, ignoreCase, limit, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    if (!(($mask0 & 8) === 0))
      limit = 0;
    return rangesDelimitedBy(_this_, delimiters, startIndex, ignoreCase, limit);
  }
  function calcNext_0($this) {
    if ($this._nextSearchIndex < 0) {
      $this._nextState_0 = 0;
      $this._nextItem_0 = null;
    } else {
      var tmp;
      var tmp_0;
      if ($this._this$0_8._limit > 0) {
        var tmp0_this = $this;
        tmp0_this._counter = tmp0_this._counter + 1 | 0;
        tmp_0 = tmp0_this._counter >= $this._this$0_8._limit;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = true;
      } else {
        {
          tmp = $this._nextSearchIndex > charSequenceLength($this._this$0_8._input);
        }
      }
      if (tmp) {
        $this._nextItem_0 = numberRangeToNumber($this._currentStartIndex, _get_lastIndex__6($this._this$0_8._input));
        $this._nextSearchIndex = -1;
      } else {
        {
          var match_0 = $this._this$0_8._getNextMatch($this._this$0_8._input, $this._nextSearchIndex);
          if (match_0 == null) {
            $this._nextItem_0 = numberRangeToNumber($this._currentStartIndex, _get_lastIndex__6($this._this$0_8._input));
            $this._nextSearchIndex = -1;
          } else {
            var tmp1_container = match_0;
            var index = tmp1_container.component1_3();
            var length = tmp1_container.component2_2();
            $this._nextItem_0 = until($this._currentStartIndex, index);
            $this._currentStartIndex = index + length | 0;
            $this._nextSearchIndex = $this._currentStartIndex + (length === 0 ? 1 : 0) | 0;
          }
        }
      }
      $this._nextState_0 = 1;
    }
  }
  function _get_input_($this) {
    return $this._input;
  }
  function _get_startIndex__0($this) {
    return $this._startIndex_0;
  }
  function _get_limit_($this) {
    return $this._limit;
  }
  function _get_getNextMatch_($this) {
    return $this._getNextMatch;
  }
  function _no_name_provided__18(this$0) {
    this._this$0_8 = this$0;
    this._nextState_0 = -1;
    this._currentStartIndex = coerceIn(this._this$0_8._startIndex_0, 0, charSequenceLength(this._this$0_8._input));
    this._nextSearchIndex = this._currentStartIndex;
    this._nextItem_0 = null;
    this._counter = 0;
  }
  _no_name_provided__18.prototype._set_nextState__0 = function (_set___) {
    this._nextState_0 = _set___;
  };
  _no_name_provided__18.prototype._get_nextState__0 = function () {
    return this._nextState_0;
  };
  _no_name_provided__18.prototype._set_currentStartIndex_ = function (_set___) {
    this._currentStartIndex = _set___;
  };
  _no_name_provided__18.prototype._get_currentStartIndex_ = function () {
    return this._currentStartIndex;
  };
  _no_name_provided__18.prototype._set_nextSearchIndex_ = function (_set___) {
    this._nextSearchIndex = _set___;
  };
  _no_name_provided__18.prototype._get_nextSearchIndex_ = function () {
    return this._nextSearchIndex;
  };
  _no_name_provided__18.prototype._set_nextItem__0 = function (_set___) {
    this._nextItem_0 = _set___;
  };
  _no_name_provided__18.prototype._get_nextItem__0 = function () {
    return this._nextItem_0;
  };
  _no_name_provided__18.prototype._set_counter_ = function (_set___) {
    this._counter = _set___;
  };
  _no_name_provided__18.prototype._get_counter_ = function () {
    return this._counter;
  };
  _no_name_provided__18.prototype.next_56 = function () {
    if (this._nextState_0 === -1)
      calcNext_0(this);
    if (this._nextState_0 === 0)
      throw NoSuchElementException_init_$Create$();
    var tmp = this._nextItem_0;
    var result = tmp instanceof IntRange ? tmp : THROW_CCE();
    this._nextItem_0 = null;
    this._nextState_0 = -1;
    return result;
  };
  _no_name_provided__18.prototype.hasNext_49 = function () {
    if (this._nextState_0 === -1)
      calcNext_0(this);
    return this._nextState_0 === 1;
  };
  _no_name_provided__18.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function DelimitedRangesSequence(input, startIndex, limit, getNextMatch) {
    this._input = input;
    this._startIndex_0 = startIndex;
    this._limit = limit;
    this._getNextMatch = getNextMatch;
  }
  DelimitedRangesSequence.prototype.iterator_69 = function () {
    return new _no_name_provided__18(this);
  };
  DelimitedRangesSequence.$metadata$ = {
    simpleName: 'DelimitedRangesSequence',
    kind: 'class',
    interfaces: [Sequence]
  };
  function findAnyOf(_this_, strings, startIndex, ignoreCase, last_0) {
    if (!ignoreCase ? strings._get_size__42() === 1 : false) {
      var string = single(strings);
      var tmp;
      if (!last_0) {
        tmp = indexOf$default(_this_, string, startIndex, false, 4, null);
      } else {
        tmp = lastIndexOf$default(_this_, string, startIndex, false, 4, null);
      }
      var index = tmp;
      return index < 0 ? null : to(index, string);
    }var indices = !last_0 ? numberRangeToNumber(coerceAtLeast(startIndex, 0), charSequenceLength(_this_)) : downTo(coerceAtMost(startIndex, _get_lastIndex__6(_this_)), 0);
    if (typeof _this_ === 'string') {
      var inductionVariable = indices._first_2;
      var last_1 = indices._last_1;
      var step_0 = indices._step_6;
      if ((step_0 > 0 ? inductionVariable <= last_1 : false) ? true : step_0 < 0 ? last_1 <= inductionVariable : false)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + step_0 | 0;
          var tmp$ret$0;
          l$ret$1: do {
            var tmp0_iterator_1 = strings.iterator_69();
            while (tmp0_iterator_1.hasNext_49()) {
              var element_2 = tmp0_iterator_1.next_56();
              if (regionMatches(element_2, 0, _this_, index_0, element_2.length, ignoreCase)) {
                tmp$ret$0 = element_2;
                break l$ret$1;
              } else {
              }
            }
            tmp$ret$0 = null;
          }
           while (false);
          var matchingString = tmp$ret$0;
          if (!(matchingString == null))
            return to(index_0, matchingString);
        }
         while (!(index_0 === last_1));
    } else {
      {
        var inductionVariable_0 = indices._first_2;
        var last_2 = indices._last_1;
        var step_1 = indices._step_6;
        if ((step_1 > 0 ? inductionVariable_0 <= last_2 : false) ? true : step_1 < 0 ? last_2 <= inductionVariable_0 : false)
          do {
            var index_1 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + step_1 | 0;
            var tmp$ret$2;
            l$ret$3: do {
              var tmp0_iterator_1_0 = strings.iterator_69();
              while (tmp0_iterator_1_0.hasNext_49()) {
                var element_2_0 = tmp0_iterator_1_0.next_56();
                if (regionMatchesImpl(element_2_0, 0, _this_, index_1, element_2_0.length, ignoreCase)) {
                  tmp$ret$2 = element_2_0;
                  break l$ret$3;
                } else {
                }
              }
              tmp$ret$2 = null;
            }
             while (false);
            var matchingString_0 = tmp$ret$2;
            if (!(matchingString_0 == null))
              return to(index_1, matchingString_0);
          }
           while (!(index_1 === last_2));
      }
    }
    return null;
  }
  function indexOf_5(_this_, string, startIndex, ignoreCase) {
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this_ === 'string');
    }
    if (tmp_0) {
      var tmp_1 = charSequenceLength(_this_);
      tmp = indexOf$default_0(_this_, string, startIndex, tmp_1, ignoreCase, false, 16, null);
    } else {
      {
        var tmp0_nativeIndexOf_0 = _this_;
        tmp = tmp0_nativeIndexOf_0.indexOf(string, startIndex);
      }
    }
    return tmp;
  }
  function indexOf$default(_this_, string, startIndex, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    return indexOf_5(_this_, string, startIndex, ignoreCase);
  }
  function lastIndexOf_0(_this_, string, startIndex, ignoreCase) {
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this_ === 'string');
    }
    if (tmp_0) {
      tmp = indexOf_6(_this_, string, startIndex, 0, ignoreCase, true);
    } else {
      {
        var tmp0_nativeLastIndexOf_0 = _this_;
        tmp = tmp0_nativeLastIndexOf_0.lastIndexOf(string, startIndex);
      }
    }
    return tmp;
  }
  function lastIndexOf$default(_this_, string, startIndex, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = _get_lastIndex__6(_this_);
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    return lastIndexOf_0(_this_, string, startIndex, ignoreCase);
  }
  function regionMatchesImpl(_this_, thisOffset, other, otherOffset, length, ignoreCase) {
    if (((otherOffset < 0 ? true : thisOffset < 0) ? true : thisOffset > (charSequenceLength(_this_) - length | 0)) ? true : otherOffset > (charSequenceLength(other) - length | 0)) {
      return false;
    }var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(charSequenceGet(_this_, thisOffset + index | 0), charSequenceGet(other, otherOffset + index | 0), ignoreCase))
          return false;
      }
       while (inductionVariable < length);
    return true;
  }
  function indexOf_6(_this_, other, startIndex, endIndex, ignoreCase, last_0) {
    var indices = !last_0 ? numberRangeToNumber(coerceAtLeast(startIndex, 0), coerceAtMost(endIndex, charSequenceLength(_this_))) : downTo(coerceAtMost(startIndex, _get_lastIndex__6(_this_)), coerceAtLeast(endIndex, 0));
    var tmp;
    if (typeof _this_ === 'string') {
      tmp = typeof other === 'string';
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      var inductionVariable = indices._first_2;
      var last_1 = indices._last_1;
      var step_0 = indices._step_6;
      if ((step_0 > 0 ? inductionVariable <= last_1 : false) ? true : step_0 < 0 ? last_1 <= inductionVariable : false)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + step_0 | 0;
          if (regionMatches(other, 0, _this_, index, charSequenceLength(other), ignoreCase))
            return index;
        }
         while (!(index === last_1));
    } else {
      {
        var inductionVariable_0 = indices._first_2;
        var last_2 = indices._last_1;
        var step_1 = indices._step_6;
        if ((step_1 > 0 ? inductionVariable_0 <= last_2 : false) ? true : step_1 < 0 ? last_2 <= inductionVariable_0 : false)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + step_1 | 0;
            if (regionMatchesImpl(other, 0, _this_, index_0, charSequenceLength(other), ignoreCase))
              return index_0;
          }
           while (!(index_0 === last_2));
      }
    }
    return -1;
  }
  function indexOf$default_0(_this_, other, startIndex, endIndex, ignoreCase, last_0, $mask0, $handler) {
    if (!(($mask0 & 16) === 0))
      last_0 = false;
    return indexOf_6(_this_, other, startIndex, endIndex, ignoreCase, last_0);
  }
  function _no_name_provided__19($this_splitToSequence) {
    this._$this_splitToSequence = $this_splitToSequence;
  }
  _no_name_provided__19.prototype.invoke_13 = function (it) {
    return substring(this._$this_splitToSequence, it);
  };
  _no_name_provided__19.prototype.invoke_81 = function (p1) {
    return this.invoke_13(p1 instanceof IntRange ? p1 : THROW_CCE());
  };
  _no_name_provided__19.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__20($delimitersList, $ignoreCase) {
    this._$delimitersList = $delimitersList;
    this._$ignoreCase = $ignoreCase;
  }
  _no_name_provided__20.prototype.invoke_15 = function (_this__0, currentIndex) {
    var tmp0_safe_receiver = findAnyOf(_this__0, this._$delimitersList, currentIndex, this._$ignoreCase, false);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = to(tmp0_safe_receiver._first, tmp0_safe_receiver._second.length);
    }
    return tmp;
  };
  _no_name_provided__20.prototype.invoke_79 = function (p1, p2) {
    var tmp = (!(p1 == null) ? isCharSequence(p1) : false) ? p1 : THROW_CCE();
    return this.invoke_15(tmp, (!(p2 == null) ? typeof p2 === 'number' : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__20.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_6($this_splitToSequence) {
    var i = new _no_name_provided__19($this_splitToSequence);
    return function (p1) {
      return i.invoke_13(p1);
    };
  }
  function _no_name_provided_$factory_7($delimitersList, $ignoreCase) {
    var i = new _no_name_provided__20($delimitersList, $ignoreCase);
    return function (p1, p2) {
      return i.invoke_15(p1, p2);
    };
  }
  function Destructured(match_0) {
    this._match = match_0;
  }
  Destructured.prototype._get_match_ = function () {
    return this._match;
  };
  Destructured.prototype.component1_3 = function () {
    return this._match._get_groupValues__0().get_44(1);
  };
  Destructured.prototype.component2_2 = function () {
    return this._match._get_groupValues__0().get_44(2);
  };
  Destructured.prototype.component3_0 = function () {
    return this._match._get_groupValues__0().get_44(3);
  };
  Destructured.prototype.component4_0 = function () {
    return this._match._get_groupValues__0().get_44(4);
  };
  Destructured.prototype.component5 = function () {
    return this._match._get_groupValues__0().get_44(5);
  };
  Destructured.prototype.component6 = function () {
    return this._match._get_groupValues__0().get_44(6);
  };
  Destructured.prototype.component7 = function () {
    return this._match._get_groupValues__0().get_44(7);
  };
  Destructured.prototype.component8 = function () {
    return this._match._get_groupValues__0().get_44(8);
  };
  Destructured.prototype.component9 = function () {
    return this._match._get_groupValues__0().get_44(9);
  };
  Destructured.prototype.component10 = function () {
    return this._match._get_groupValues__0().get_44(10);
  };
  Destructured.prototype.toList = function () {
    return this._match._get_groupValues__0().subList_8(1, this._match._get_groupValues__0()._get_size__42());
  };
  Destructured.$metadata$ = {
    simpleName: 'Destructured',
    kind: 'class',
    interfaces: []
  };
  MatchResult.prototype._get_destructured__0 = function () {
    return new Destructured(this);
  };
  function MatchResult() {
  }
  MatchResult.$metadata$ = {
    simpleName: 'MatchResult',
    kind: 'interface',
    interfaces: []
  };
  function MatchGroupCollection() {
  }
  MatchGroupCollection.$metadata$ = {
    simpleName: 'MatchGroupCollection',
    kind: 'interface',
    interfaces: [Collection]
  };
  function toRegex(_this_) {
    return Regex_init_$Create$_0(_this_);
  }
  function _get_UNDEFINED_RESULT_() {
    return UNDEFINED_RESULT;
  }
  var UNDEFINED_RESULT;
  function UNDEFINED_RESULT$init$() {
    var tmp0_success_0 = Companion_getInstance_4();
    var tmp1_success_0 = _get_COROUTINE_SUSPENDED_();
    return _Result___init__impl_(tmp1_success_0);
  }
  function check(value) {
    if (!value) {
      var message_2 = 'Check failed.';
      throw IllegalStateException_init_$Create$_0(toString_1(message_2));
    }}
  function check_0(value, lazyMessage) {
    if (!value) {
      var message = lazyMessage();
      throw IllegalStateException_init_$Create$_0(toString_1(message));
    }}
  function require_0(value, lazyMessage) {
    if (!value) {
      var message = lazyMessage();
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }}
  function checkNotNull(value) {
    var tmp$ret$0;
    l$ret$1: do {
      if (value == null) {
        var message_2 = 'Required value was null.';
        throw IllegalStateException_init_$Create$_0(toString_1(message_2));
      } else {
        tmp$ret$0 = value;
        break l$ret$1;
      }
    }
     while (false);
    return tmp$ret$0;
  }
  function checkNotNull_0(value, lazyMessage) {
    if (value == null) {
      var message = lazyMessage();
      throw IllegalStateException_init_$Create$_0(toString_1(message));
    } else {
      return value;
    }
  }
  function error(message) {
    throw IllegalStateException_init_$Create$_0(toString_1(message));
  }
  function _Result___init__impl_(value) {
    return value;
  }
  function _Result___get_value__impl_(this_0) {
    return this_0;
  }
  function _Result___get_isSuccess__impl_(this_0) {
    var tmp = _Result___get_value__impl_(this_0);
    return !(tmp instanceof Failure);
  }
  function _Result___get_isFailure__impl_(this_0) {
    var tmp = _Result___get_value__impl_(this_0);
    return tmp instanceof Failure;
  }
  function Result__getOrNull_impl(this_0) {
    var tmp;
    if (_Result___get_isFailure__impl_(this_0)) {
      tmp = null;
    } else {
      var tmp_0 = _Result___get_value__impl_(this_0);
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    }
    return tmp;
  }
  function Result__exceptionOrNull_impl(this_0) {
    var tmp0_subject = _Result___get_value__impl_(this_0);
    var tmp;
    if (tmp0_subject instanceof Failure) {
      tmp = _Result___get_value__impl_(this_0)._exception;
    } else {
      {
        tmp = null;
      }
    }
    return tmp;
  }
  function Result__toString_impl(this_0) {
    var tmp0_subject = _Result___get_value__impl_(this_0);
    var tmp;
    if (tmp0_subject instanceof Failure) {
      tmp = toString_1(_Result___get_value__impl_(this_0));
    } else {
      {
        tmp = '' + 'Success(' + _Result___get_value__impl_(this_0) + ')';
      }
    }
    return tmp;
  }
  function Companion_5() {
    Companion_instance_4 = this;
  }
  Companion_5.prototype.success = function (value) {
    return _Result___init__impl_(value);
  };
  Companion_5.prototype.failure = function (exception) {
    return _Result___init__impl_(createFailure(exception));
  };
  Companion_5.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_5();
    return Companion_instance_4;
  }
  function Failure(exception) {
    this._exception = exception;
  }
  Failure.prototype._get_exception__0 = function () {
    return this._exception;
  };
  Failure.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Failure) {
      tmp = equals_0(this._exception, other._exception);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  Failure.prototype.hashCode = function () {
    return hashCode(this._exception);
  };
  Failure.prototype.toString = function () {
    return '' + 'Failure(' + this._exception + ')';
  };
  Failure.$metadata$ = {
    simpleName: 'Failure',
    kind: 'class',
    interfaces: [Serializable]
  };
  function Result__hashCode_impl(this_0) {
    return this_0 == null ? 0 : hashCode(this_0);
  }
  function Result__equals_impl(this_0, other) {
    if (!(other instanceof Result))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Result ? other._value : THROW_CCE();
    if (!equals_0(this_0, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Result(value) {
    Companion_getInstance_4();
    this._value = value;
  }
  Result.prototype.toString = function () {
    return Result__toString_impl(this._value);
  };
  Result.prototype.hashCode = function () {
    return Result__hashCode_impl(this._value);
  };
  Result.prototype.equals = function (other) {
    return Result__equals_impl(this._value, other);
  };
  Result.$metadata$ = {
    simpleName: 'Result',
    kind: 'class',
    interfaces: [Serializable]
  };
  function createFailure(exception) {
    return new Failure(exception);
  }
  function getOrThrow(_this_) {
    throwOnFailure(_this_);
    var tmp = _Result___get_value__impl_(_this_);
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function throwOnFailure(_this_) {
    var tmp = _Result___get_value__impl_(_this_);
    if (tmp instanceof Failure)
      throw _Result___get_value__impl_(_this_)._exception;
    else {
    }
  }
  function run(block) {
    return block();
  }
  function TODO() {
    throw NotImplementedError_init_$Create$(null, 1, null);
  }
  function NotImplementedError_init_$Init$(message, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      message = 'An operation is not implemented.';
    NotImplementedError.call($this, message);
    return $this;
  }
  function NotImplementedError_init_$Create$(message, $mask0, $marker) {
    var tmp = NotImplementedError_init_$Init$(message, $mask0, $marker, Object.create(NotImplementedError.prototype));
    captureStack(tmp, NotImplementedError_init_$Create$);
    return tmp;
  }
  function NotImplementedError(message) {
    Error_init_$Init$_0(message, this);
    captureStack(this, NotImplementedError);
  }
  NotImplementedError.$metadata$ = {
    simpleName: 'NotImplementedError',
    kind: 'class',
    interfaces: []
  };
  function let_0(_this_, block) {
    return block(_this_);
  }
  function also(_this_, block) {
    block(_this_);
    return _this_;
  }
  function repeat(times, action) {
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        action(index);
      }
       while (inductionVariable < times);
  }
  function run_0(_this_, block) {
    return block(_this_);
  }
  function apply(_this_, block) {
    block(_this_);
    return _this_;
  }
  function takeIf(_this_, predicate) {
    return predicate(_this_) ? _this_ : null;
  }
  function with_0(receiver, block) {
    return block(receiver);
  }
  function Pair(first_1, second) {
    this._first = first_1;
    this._second = second;
  }
  Pair.prototype._get_first__9 = function () {
    return this._first;
  };
  Pair.prototype._get_second_ = function () {
    return this._second;
  };
  Pair.prototype.toString = function () {
    return '' + '(' + this._first + ', ' + this._second + ')';
  };
  Pair.prototype.component1_3 = function () {
    return this._first;
  };
  Pair.prototype.component2_2 = function () {
    return this._second;
  };
  Pair.prototype.copy_0 = function (first_1, second) {
    return new Pair(first_1, second);
  };
  Pair.prototype.copy$default_0 = function (first_1, second, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      first_1 = this._first;
    if (!(($mask0 & 2) === 0))
      second = this._second;
    return this.copy_0(first_1, second);
  };
  Pair.prototype.hashCode = function () {
    var result = this._first == null ? 0 : hashCode(this._first);
    result = imul(result, 31) + (this._second == null ? 0 : hashCode(this._second)) | 0;
    return result;
  };
  Pair.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Pair))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Pair ? other : THROW_CCE();
    if (!equals_0(this._first, tmp0_other_with_cast._first))
      return false;
    if (!equals_0(this._second, tmp0_other_with_cast._second))
      return false;
    return true;
  };
  Pair.$metadata$ = {
    simpleName: 'Pair',
    kind: 'class',
    interfaces: [Serializable]
  };
  function to(_this_, that) {
    return new Pair(_this_, that);
  }
  function _UByte___init__impl_(data) {
    return data;
  }
  function _UByte___get_data__impl_(this_0) {
    return this_0;
  }
  function Companion_6() {
    Companion_instance_5 = this;
    this._MIN_VALUE = _UByte___init__impl_(0);
    this._MAX_VALUE = _UByte___init__impl_(-1);
    this._SIZE_BYTES = 1;
    this._SIZE_BITS = 8;
  }
  Companion_6.prototype._get_MIN_VALUE_ = function () {
    return this._MIN_VALUE;
  };
  Companion_6.prototype._get_MAX_VALUE_ = function () {
    return this._MAX_VALUE;
  };
  Companion_6.prototype._get_SIZE_BYTES__9 = function () {
    return this._SIZE_BYTES;
  };
  Companion_6.prototype._get_SIZE_BITS__9 = function () {
    return this._SIZE_BITS;
  };
  Companion_6.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_6();
    return Companion_instance_5;
  }
  function UByte__compareTo_impl(this_0, other) {
    var tmp = _UByte___get_data__impl_(this_0) & 255;
    return compareTo_0(tmp, _UByte___get_data__impl_(other) & 255);
  }
  function UByte__compareTo_impl_0(this_0, other) {
    var tmp = this_0._data;
    return UByte__compareTo_impl(tmp, other instanceof UByte ? other._data : THROW_CCE());
  }
  function UByte__compareTo_impl_1(this_0, other) {
    var tmp = _UByte___get_data__impl_(this_0) & 255;
    return compareTo_0(tmp, _UShort___get_data__impl_(other) & 65535);
  }
  function UByte__compareTo_impl_2(this_0, other) {
    var tmp0_compareTo_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    return uintCompare(_UInt___get_data__impl_(tmp0_compareTo_0), _UInt___get_data__impl_(other));
  }
  function UByte__compareTo_impl_3(this_0, other) {
    var tmp0_compareTo_0 = _ULong___init__impl_(toLong(_UByte___get_data__impl_(this_0)).and(new Long(255, 0)));
    return ulongCompare(_ULong___get_data__impl_(tmp0_compareTo_0), _ULong___get_data__impl_(other));
  }
  function UByte__plus_impl(this_0, other) {
    var tmp0_plus_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    var tmp1_plus_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return _UInt___init__impl_(_UInt___get_data__impl_(tmp0_plus_0) + _UInt___get_data__impl_(tmp1_plus_0) | 0);
  }
  function UByte__plus_impl_0(this_0, other) {
    var tmp0_plus_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    var tmp1_plus_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return _UInt___init__impl_(_UInt___get_data__impl_(tmp0_plus_0) + _UInt___get_data__impl_(tmp1_plus_0) | 0);
  }
  function UByte__plus_impl_1(this_0, other) {
    var tmp0_plus_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    return _UInt___init__impl_(_UInt___get_data__impl_(tmp0_plus_0) + _UInt___get_data__impl_(other) | 0);
  }
  function UByte__plus_impl_2(this_0, other) {
    var tmp0_plus_0 = _ULong___init__impl_(toLong(_UByte___get_data__impl_(this_0)).and(new Long(255, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(tmp0_plus_0).plus_38(_ULong___get_data__impl_(other)));
  }
  function UByte__minus_impl(this_0, other) {
    var tmp0_minus_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    var tmp1_minus_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return _UInt___init__impl_(_UInt___get_data__impl_(tmp0_minus_0) - _UInt___get_data__impl_(tmp1_minus_0) | 0);
  }
  function UByte__minus_impl_0(this_0, other) {
    var tmp0_minus_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    var tmp1_minus_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return _UInt___init__impl_(_UInt___get_data__impl_(tmp0_minus_0) - _UInt___get_data__impl_(tmp1_minus_0) | 0);
  }
  function UByte__minus_impl_1(this_0, other) {
    var tmp0_minus_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    return _UInt___init__impl_(_UInt___get_data__impl_(tmp0_minus_0) - _UInt___get_data__impl_(other) | 0);
  }
  function UByte__minus_impl_2(this_0, other) {
    var tmp0_minus_0 = _ULong___init__impl_(toLong(_UByte___get_data__impl_(this_0)).and(new Long(255, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(tmp0_minus_0).minus_34(_ULong___get_data__impl_(other)));
  }
  function UByte__times_impl(this_0, other) {
    var tmp0_times_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    var tmp1_times_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return _UInt___init__impl_(imul(_UInt___get_data__impl_(tmp0_times_0), _UInt___get_data__impl_(tmp1_times_0)));
  }
  function UByte__times_impl_0(this_0, other) {
    var tmp0_times_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    var tmp1_times_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return _UInt___init__impl_(imul(_UInt___get_data__impl_(tmp0_times_0), _UInt___get_data__impl_(tmp1_times_0)));
  }
  function UByte__times_impl_1(this_0, other) {
    var tmp0_times_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    return _UInt___init__impl_(imul(_UInt___get_data__impl_(tmp0_times_0), _UInt___get_data__impl_(other)));
  }
  function UByte__times_impl_2(this_0, other) {
    var tmp0_times_0 = _ULong___init__impl_(toLong(_UByte___get_data__impl_(this_0)).and(new Long(255, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(tmp0_times_0).times_32(_ULong___get_data__impl_(other)));
  }
  function UByte__div_impl(this_0, other) {
    var tmp0_div_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    var tmp1_div_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return uintDivide(tmp0_div_0, tmp1_div_0);
  }
  function UByte__div_impl_0(this_0, other) {
    var tmp0_div_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    var tmp1_div_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return uintDivide(tmp0_div_0, tmp1_div_0);
  }
  function UByte__div_impl_1(this_0, other) {
    var tmp0_div_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    return uintDivide(tmp0_div_0, other);
  }
  function UByte__div_impl_2(this_0, other) {
    var tmp0_div_0 = _ULong___init__impl_(toLong(_UByte___get_data__impl_(this_0)).and(new Long(255, 0)));
    return ulongDivide(tmp0_div_0, other);
  }
  function UByte__rem_impl(this_0, other) {
    var tmp0_rem_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    var tmp1_rem_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return uintRemainder(tmp0_rem_0, tmp1_rem_0);
  }
  function UByte__rem_impl_0(this_0, other) {
    var tmp0_rem_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    var tmp1_rem_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return uintRemainder(tmp0_rem_0, tmp1_rem_0);
  }
  function UByte__rem_impl_1(this_0, other) {
    var tmp0_rem_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    return uintRemainder(tmp0_rem_0, other);
  }
  function UByte__rem_impl_2(this_0, other) {
    var tmp0_rem_0 = _ULong___init__impl_(toLong(_UByte___get_data__impl_(this_0)).and(new Long(255, 0)));
    return ulongRemainder(tmp0_rem_0, other);
  }
  function UByte__inc_impl(this_0) {
    return _UByte___init__impl_(numberToByte(_UByte___get_data__impl_(this_0) + 1));
  }
  function UByte__dec_impl(this_0) {
    return _UByte___init__impl_(numberToByte(_UByte___get_data__impl_(this_0) - 1));
  }
  function UByte__rangeTo_impl(this_0, other) {
    var tmp = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    return new UIntRange(tmp, _UInt___init__impl_(_UByte___get_data__impl_(other) & 255));
  }
  function UByte__and_impl(this_0, other) {
    var tmp0_and_0 = _UByte___get_data__impl_(this_0);
    var tmp1_and_0 = _UByte___get_data__impl_(other);
    return _UByte___init__impl_(toByte(tmp0_and_0 & tmp1_and_0));
  }
  function UByte__or_impl(this_0, other) {
    var tmp0_or_0 = _UByte___get_data__impl_(this_0);
    var tmp1_or_0 = _UByte___get_data__impl_(other);
    return _UByte___init__impl_(toByte(tmp0_or_0 | tmp1_or_0));
  }
  function UByte__xor_impl(this_0, other) {
    var tmp0_xor_0 = _UByte___get_data__impl_(this_0);
    var tmp1_xor_0 = _UByte___get_data__impl_(other);
    return _UByte___init__impl_(toByte(tmp0_xor_0 ^ tmp1_xor_0));
  }
  function UByte__inv_impl(this_0) {
    var tmp0_inv_0 = _UByte___get_data__impl_(this_0);
    return _UByte___init__impl_(toByte(~tmp0_inv_0));
  }
  function UByte__toByte_impl(this_0) {
    return _UByte___get_data__impl_(this_0);
  }
  function UByte__toShort_impl(this_0) {
    var tmp0_and_0 = _UByte___get_data__impl_(this_0);
    var tmp1_and_0 = 255;
    return toShort(tmp0_and_0 & tmp1_and_0);
  }
  function UByte__toInt_impl(this_0) {
    return _UByte___get_data__impl_(this_0) & 255;
  }
  function UByte__toLong_impl(this_0) {
    return toLong(_UByte___get_data__impl_(this_0)).and(new Long(255, 0));
  }
  function UByte__toUByte_impl(this_0) {
    return this_0;
  }
  function UByte__toUShort_impl(this_0) {
    var tmp0_and_0 = _UByte___get_data__impl_(this_0);
    var tmp1_and_0 = 255;
    return _UShort___init__impl_(toShort(tmp0_and_0 & tmp1_and_0));
  }
  function UByte__toUInt_impl(this_0) {
    return _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
  }
  function UByte__toULong_impl(this_0) {
    return _ULong___init__impl_(toLong(_UByte___get_data__impl_(this_0)).and(new Long(255, 0)));
  }
  function UByte__toFloat_impl(this_0) {
    return _UByte___get_data__impl_(this_0) & 255;
  }
  function UByte__toDouble_impl(this_0) {
    return _UByte___get_data__impl_(this_0) & 255;
  }
  function UByte__toString_impl(this_0) {
    return (_UByte___get_data__impl_(this_0) & 255).toString();
  }
  function UByte__hashCode_impl(this_0) {
    return this_0;
  }
  function UByte__equals_impl(this_0, other) {
    if (!(other instanceof UByte))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof UByte ? other._data : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function UByte(data) {
    Companion_getInstance_5();
    this._data = data;
  }
  UByte.prototype.compareTo_5 = function (other) {
    return UByte__compareTo_impl(this._data, other);
  };
  UByte.prototype.compareTo_26 = function (other) {
    return UByte__compareTo_impl_0(this, other);
  };
  UByte.prototype.toString = function () {
    return UByte__toString_impl(this._data);
  };
  UByte.prototype.hashCode = function () {
    return UByte__hashCode_impl(this._data);
  };
  UByte.prototype.equals = function (other) {
    return UByte__equals_impl(this._data, other);
  };
  UByte.$metadata$ = {
    simpleName: 'UByte',
    kind: 'class',
    interfaces: [Comparable]
  };
  function toUByte(_this_) {
    return _UByte___init__impl_(toByte(_this_));
  }
  function toUByte_0(_this_) {
    return _UByte___init__impl_(toByte(_this_));
  }
  function toUByte_1(_this_) {
    return _UByte___init__impl_(_this_.toByte_6());
  }
  function toUByte_2(_this_) {
    return _UByte___init__impl_(_this_);
  }
  function _get_array_($this) {
    return $this._array;
  }
  function _set_index_($this, _set___) {
    $this._index_0 = _set___;
  }
  function _get_index_($this) {
    return $this._index_0;
  }
  function _UByteArray___init__impl_(storage) {
    return storage;
  }
  function _UByteArray___get_storage__impl_(this_0) {
    return this_0;
  }
  function _UByteArray___init__impl__0(size_0) {
    var tmp = _UByteArray___init__impl_(new Int8Array(size_0));
    return tmp;
  }
  function UByteArray__get_impl(this_0, index) {
    var tmp0_toUByte_0 = _UByteArray___get_storage__impl_(this_0)[index];
    return _UByte___init__impl_(tmp0_toUByte_0);
  }
  function UByteArray__set_impl(this_0, index, value) {
    var tmp = _UByteArray___get_storage__impl_(this_0);
    tmp[index] = _UByte___get_data__impl_(value);
  }
  function _UByteArray___get_size__impl_(this_0) {
    return _UByteArray___get_storage__impl_(this_0).length;
  }
  function UByteArray__iterator_impl(this_0) {
    return new Iterator(_UByteArray___get_storage__impl_(this_0));
  }
  function Iterator(array) {
    UByteIterator.call(this);
    this._array = array;
    this._index_0 = 0;
  }
  Iterator.prototype.hasNext_49 = function () {
    return this._index_0 < this._array.length;
  };
  Iterator.prototype.nextUByte_0 = function () {
    var tmp;
    if (this._index_0 < this._array.length) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_0;
      tmp0_this._index_0 = tmp1 + 1 | 0;
      var tmp0_toUByte_0 = this._array[tmp1];
      tmp = _UByte___init__impl_(tmp0_toUByte_0);
    } else {
      throw NoSuchElementException_init_$Create$_0(this._index_0.toString());
    }
    return tmp;
  };
  Iterator.$metadata$ = {
    simpleName: 'Iterator',
    kind: 'class',
    interfaces: []
  };
  function UByteArray__contains_impl(this_0, element) {
    var tmp = isObject(new UByte(element)) ? new UByte(element) : THROW_CCE();
    if (!(tmp instanceof UByte))
      return false;
    else {
    }
    var tmp_0 = _UByteArray___get_storage__impl_(this_0);
    return contains_1(tmp_0, _UByte___get_data__impl_(element));
  }
  function UByteArray__contains_impl_0(this_0, element) {
    if (!(element instanceof UByte))
      return false;
    else {
    }
    var tmp = this_0._storage;
    return UByteArray__contains_impl(tmp, element instanceof UByte ? element._data : THROW_CCE());
  }
  function UByteArray__containsAll_impl(this_0, elements) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_all_0 = isInterface(elements, Collection) ? elements : THROW_CCE();
      var tmp;
      if (isInterface(tmp0_all_0, Collection)) {
        tmp = tmp0_all_0.isEmpty_51();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = tmp0_all_0.iterator_69();
      while (tmp0_iterator_1.hasNext_49()) {
        var element_2 = tmp0_iterator_1.next_56();
        var tmp_0;
        if (element_2 instanceof UByte) {
          var tmp_1 = _UByteArray___get_storage__impl_(this_0);
          var tmp0_toByte_0_4 = element_2._data;
          tmp_0 = contains_1(tmp_1, _UByte___get_data__impl_(tmp0_toByte_0_4));
        } else {
          {
            tmp_0 = false;
          }
        }
        if (!tmp_0) {
          tmp$ret$0 = false;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  }
  function UByteArray__containsAll_impl_0(this_0, elements) {
    return UByteArray__containsAll_impl(this_0._storage, elements);
  }
  function UByteArray__isEmpty_impl(this_0) {
    return _UByteArray___get_storage__impl_(this_0).length === 0;
  }
  function UByteArray__toString_impl(this_0) {
    return '' + 'UByteArray(storage=' + toString_1(this_0) + ')';
  }
  function UByteArray__hashCode_impl(this_0) {
    return hashCode(this_0);
  }
  function UByteArray__equals_impl(this_0, other) {
    if (!(other instanceof UByteArray))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof UByteArray ? other._storage : THROW_CCE();
    if (!equals_0(this_0, tmp0_other_with_cast))
      return false;
    return true;
  }
  function UByteArray(storage) {
    this._storage = storage;
  }
  UByteArray.prototype._get_size__42 = function () {
    return _UByteArray___get_size__impl_(this._storage);
  };
  UByteArray.prototype.iterator_69 = function () {
    return UByteArray__iterator_impl(this._storage);
  };
  UByteArray.prototype.contains_15 = function (element) {
    return UByteArray__contains_impl(this._storage, element);
  };
  UByteArray.prototype.contains_58 = function (element) {
    return UByteArray__contains_impl_0(this, element);
  };
  UByteArray.prototype.containsAll_12 = function (elements) {
    return UByteArray__containsAll_impl(this._storage, elements);
  };
  UByteArray.prototype.containsAll_40 = function (elements) {
    return UByteArray__containsAll_impl_0(this, elements);
  };
  UByteArray.prototype.isEmpty_51 = function () {
    return UByteArray__isEmpty_impl(this._storage);
  };
  UByteArray.prototype.toString = function () {
    return UByteArray__toString_impl(this._storage);
  };
  UByteArray.prototype.hashCode = function () {
    return UByteArray__hashCode_impl(this._storage);
  };
  UByteArray.prototype.equals = function (other) {
    return UByteArray__equals_impl(this._storage, other);
  };
  UByteArray.$metadata$ = {
    simpleName: 'UByteArray',
    kind: 'class',
    interfaces: [Collection]
  };
  function _UInt___init__impl_(data) {
    return data;
  }
  function _UInt___get_data__impl_(this_0) {
    return this_0;
  }
  function Companion_7() {
    Companion_instance_6 = this;
    this._MIN_VALUE_0 = _UInt___init__impl_(0);
    this._MAX_VALUE_0 = _UInt___init__impl_(-1);
    this._SIZE_BYTES_0 = 4;
    this._SIZE_BITS_0 = 32;
  }
  Companion_7.prototype._get_MIN_VALUE__0 = function () {
    return this._MIN_VALUE_0;
  };
  Companion_7.prototype._get_MAX_VALUE__0 = function () {
    return this._MAX_VALUE_0;
  };
  Companion_7.prototype._get_SIZE_BYTES__9 = function () {
    return this._SIZE_BYTES_0;
  };
  Companion_7.prototype._get_SIZE_BITS__9 = function () {
    return this._SIZE_BITS_0;
  };
  Companion_7.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_7();
    return Companion_instance_6;
  }
  function UInt__compareTo_impl(this_0, other) {
    var tmp0_compareTo_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return uintCompare(_UInt___get_data__impl_(this_0), _UInt___get_data__impl_(tmp0_compareTo_0));
  }
  function UInt__compareTo_impl_0(this_0, other) {
    var tmp0_compareTo_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return uintCompare(_UInt___get_data__impl_(this_0), _UInt___get_data__impl_(tmp0_compareTo_0));
  }
  function UInt__compareTo_impl_1(this_0, other) {
    return uintCompare(_UInt___get_data__impl_(this_0), _UInt___get_data__impl_(other));
  }
  function UInt__compareTo_impl_2(this_0, other) {
    var tmp = this_0._data_0;
    return UInt__compareTo_impl_1(tmp, other instanceof UInt ? other._data_0 : THROW_CCE());
  }
  function UInt__compareTo_impl_3(this_0, other) {
    var tmp0_compareTo_0 = _ULong___init__impl_(toLong(_UInt___get_data__impl_(this_0)).and(new Long(-1, 0)));
    return ulongCompare(_ULong___get_data__impl_(tmp0_compareTo_0), _ULong___get_data__impl_(other));
  }
  function UInt__plus_impl(this_0, other) {
    var tmp0_plus_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return _UInt___init__impl_(_UInt___get_data__impl_(this_0) + _UInt___get_data__impl_(tmp0_plus_0) | 0);
  }
  function UInt__plus_impl_0(this_0, other) {
    var tmp0_plus_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return _UInt___init__impl_(_UInt___get_data__impl_(this_0) + _UInt___get_data__impl_(tmp0_plus_0) | 0);
  }
  function UInt__plus_impl_1(this_0, other) {
    return _UInt___init__impl_(_UInt___get_data__impl_(this_0) + _UInt___get_data__impl_(other) | 0);
  }
  function UInt__plus_impl_2(this_0, other) {
    var tmp0_plus_0 = _ULong___init__impl_(toLong(_UInt___get_data__impl_(this_0)).and(new Long(-1, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(tmp0_plus_0).plus_38(_ULong___get_data__impl_(other)));
  }
  function UInt__minus_impl(this_0, other) {
    var tmp0_minus_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return _UInt___init__impl_(_UInt___get_data__impl_(this_0) - _UInt___get_data__impl_(tmp0_minus_0) | 0);
  }
  function UInt__minus_impl_0(this_0, other) {
    var tmp0_minus_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return _UInt___init__impl_(_UInt___get_data__impl_(this_0) - _UInt___get_data__impl_(tmp0_minus_0) | 0);
  }
  function UInt__minus_impl_1(this_0, other) {
    return _UInt___init__impl_(_UInt___get_data__impl_(this_0) - _UInt___get_data__impl_(other) | 0);
  }
  function UInt__minus_impl_2(this_0, other) {
    var tmp0_minus_0 = _ULong___init__impl_(toLong(_UInt___get_data__impl_(this_0)).and(new Long(-1, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(tmp0_minus_0).minus_34(_ULong___get_data__impl_(other)));
  }
  function UInt__times_impl(this_0, other) {
    var tmp0_times_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return _UInt___init__impl_(imul(_UInt___get_data__impl_(this_0), _UInt___get_data__impl_(tmp0_times_0)));
  }
  function UInt__times_impl_0(this_0, other) {
    var tmp0_times_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return _UInt___init__impl_(imul(_UInt___get_data__impl_(this_0), _UInt___get_data__impl_(tmp0_times_0)));
  }
  function UInt__times_impl_1(this_0, other) {
    return _UInt___init__impl_(imul(_UInt___get_data__impl_(this_0), _UInt___get_data__impl_(other)));
  }
  function UInt__times_impl_2(this_0, other) {
    var tmp0_times_0 = _ULong___init__impl_(toLong(_UInt___get_data__impl_(this_0)).and(new Long(-1, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(tmp0_times_0).times_32(_ULong___get_data__impl_(other)));
  }
  function UInt__div_impl(this_0, other) {
    var tmp0_div_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return uintDivide(this_0, tmp0_div_0);
  }
  function UInt__div_impl_0(this_0, other) {
    var tmp0_div_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return uintDivide(this_0, tmp0_div_0);
  }
  function UInt__div_impl_1(this_0, other) {
    return uintDivide(this_0, other);
  }
  function UInt__div_impl_2(this_0, other) {
    var tmp0_div_0 = _ULong___init__impl_(toLong(_UInt___get_data__impl_(this_0)).and(new Long(-1, 0)));
    return ulongDivide(tmp0_div_0, other);
  }
  function UInt__rem_impl(this_0, other) {
    var tmp0_rem_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return uintRemainder(this_0, tmp0_rem_0);
  }
  function UInt__rem_impl_0(this_0, other) {
    var tmp0_rem_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return uintRemainder(this_0, tmp0_rem_0);
  }
  function UInt__rem_impl_1(this_0, other) {
    return uintRemainder(this_0, other);
  }
  function UInt__rem_impl_2(this_0, other) {
    var tmp0_rem_0 = _ULong___init__impl_(toLong(_UInt___get_data__impl_(this_0)).and(new Long(-1, 0)));
    return ulongRemainder(tmp0_rem_0, other);
  }
  function UInt__inc_impl(this_0) {
    return _UInt___init__impl_(_UInt___get_data__impl_(this_0) + 1 | 0);
  }
  function UInt__dec_impl(this_0) {
    return _UInt___init__impl_(_UInt___get_data__impl_(this_0) - 1 | 0);
  }
  function UInt__rangeTo_impl(this_0, other) {
    return new UIntRange(this_0, other);
  }
  function UInt__shl_impl(this_0, bitCount) {
    return _UInt___init__impl_(_UInt___get_data__impl_(this_0) << bitCount);
  }
  function UInt__shr_impl(this_0, bitCount) {
    return _UInt___init__impl_(_UInt___get_data__impl_(this_0) >>> bitCount);
  }
  function UInt__and_impl(this_0, other) {
    return _UInt___init__impl_(_UInt___get_data__impl_(this_0) & _UInt___get_data__impl_(other));
  }
  function UInt__or_impl(this_0, other) {
    return _UInt___init__impl_(_UInt___get_data__impl_(this_0) | _UInt___get_data__impl_(other));
  }
  function UInt__xor_impl(this_0, other) {
    return _UInt___init__impl_(_UInt___get_data__impl_(this_0) ^ _UInt___get_data__impl_(other));
  }
  function UInt__inv_impl(this_0) {
    return _UInt___init__impl_(~_UInt___get_data__impl_(this_0));
  }
  function UInt__toByte_impl(this_0) {
    return toByte(_UInt___get_data__impl_(this_0));
  }
  function UInt__toShort_impl(this_0) {
    return toShort(_UInt___get_data__impl_(this_0));
  }
  function UInt__toInt_impl(this_0) {
    return _UInt___get_data__impl_(this_0);
  }
  function UInt__toLong_impl(this_0) {
    return toLong(_UInt___get_data__impl_(this_0)).and(new Long(-1, 0));
  }
  function UInt__toUByte_impl(this_0) {
    var tmp0_toUByte_0 = _UInt___get_data__impl_(this_0);
    return _UByte___init__impl_(toByte(tmp0_toUByte_0));
  }
  function UInt__toUShort_impl(this_0) {
    var tmp0_toUShort_0 = _UInt___get_data__impl_(this_0);
    return _UShort___init__impl_(toShort(tmp0_toUShort_0));
  }
  function UInt__toUInt_impl(this_0) {
    return this_0;
  }
  function UInt__toULong_impl(this_0) {
    return _ULong___init__impl_(toLong(_UInt___get_data__impl_(this_0)).and(new Long(-1, 0)));
  }
  function UInt__toFloat_impl(this_0) {
    return uintToDouble(_UInt___get_data__impl_(this_0));
  }
  function UInt__toDouble_impl(this_0) {
    return uintToDouble(_UInt___get_data__impl_(this_0));
  }
  function UInt__toString_impl(this_0) {
    return toLong(_UInt___get_data__impl_(this_0)).and(new Long(-1, 0)).toString();
  }
  function UInt__hashCode_impl(this_0) {
    return this_0;
  }
  function UInt__equals_impl(this_0, other) {
    if (!(other instanceof UInt))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof UInt ? other._data_0 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function UInt(data) {
    Companion_getInstance_6();
    this._data_0 = data;
  }
  UInt.prototype.compareTo_7 = function (other) {
    return UInt__compareTo_impl_1(this._data_0, other);
  };
  UInt.prototype.compareTo_26 = function (other) {
    return UInt__compareTo_impl_2(this, other);
  };
  UInt.prototype.toString = function () {
    return UInt__toString_impl(this._data_0);
  };
  UInt.prototype.hashCode = function () {
    return UInt__hashCode_impl(this._data_0);
  };
  UInt.prototype.equals = function (other) {
    return UInt__equals_impl(this._data_0, other);
  };
  UInt.$metadata$ = {
    simpleName: 'UInt',
    kind: 'class',
    interfaces: [Comparable]
  };
  function toUInt(_this_) {
    return _UInt___init__impl_(_this_.toInt_6());
  }
  function toUInt_0(_this_) {
    return _UInt___init__impl_(_this_);
  }
  function toUInt_1(_this_) {
    return _UInt___init__impl_(_this_);
  }
  function toUInt_2(_this_) {
    return doubleToUInt(_this_);
  }
  function toUInt_3(_this_) {
    return doubleToUInt(_this_);
  }
  function toUInt_4(_this_) {
    return _UInt___init__impl_(_this_);
  }
  function _get_array__0($this) {
    return $this._array_0;
  }
  function _set_index__0($this, _set___) {
    $this._index_1 = _set___;
  }
  function _get_index__0($this) {
    return $this._index_1;
  }
  function _UIntArray___init__impl_(storage) {
    return storage;
  }
  function _UIntArray___get_storage__impl_(this_0) {
    return this_0;
  }
  function _UIntArray___init__impl__0(size_0) {
    var tmp = _UIntArray___init__impl_(new Int32Array(size_0));
    return tmp;
  }
  function UIntArray__get_impl(this_0, index) {
    var tmp0_toUInt_0 = _UIntArray___get_storage__impl_(this_0)[index];
    return _UInt___init__impl_(tmp0_toUInt_0);
  }
  function UIntArray__set_impl(this_0, index, value) {
    var tmp = _UIntArray___get_storage__impl_(this_0);
    tmp[index] = _UInt___get_data__impl_(value);
  }
  function _UIntArray___get_size__impl_(this_0) {
    return _UIntArray___get_storage__impl_(this_0).length;
  }
  function UIntArray__iterator_impl(this_0) {
    return new Iterator_0(_UIntArray___get_storage__impl_(this_0));
  }
  function Iterator_0(array) {
    UIntIterator.call(this);
    this._array_0 = array;
    this._index_1 = 0;
  }
  Iterator_0.prototype.hasNext_49 = function () {
    return this._index_1 < this._array_0.length;
  };
  Iterator_0.prototype.nextUInt_1 = function () {
    var tmp;
    if (this._index_1 < this._array_0.length) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_1;
      tmp0_this._index_1 = tmp1 + 1 | 0;
      var tmp0_toUInt_0 = this._array_0[tmp1];
      tmp = _UInt___init__impl_(tmp0_toUInt_0);
    } else {
      throw NoSuchElementException_init_$Create$_0(this._index_1.toString());
    }
    return tmp;
  };
  Iterator_0.$metadata$ = {
    simpleName: 'Iterator',
    kind: 'class',
    interfaces: []
  };
  function UIntArray__contains_impl(this_0, element) {
    var tmp = isObject(new UInt(element)) ? new UInt(element) : THROW_CCE();
    if (!(tmp instanceof UInt))
      return false;
    else {
    }
    var tmp_0 = _UIntArray___get_storage__impl_(this_0);
    return contains_3(tmp_0, _UInt___get_data__impl_(element));
  }
  function UIntArray__contains_impl_0(this_0, element) {
    if (!(element instanceof UInt))
      return false;
    else {
    }
    var tmp = this_0._storage_0;
    return UIntArray__contains_impl(tmp, element instanceof UInt ? element._data_0 : THROW_CCE());
  }
  function UIntArray__containsAll_impl(this_0, elements) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_all_0 = isInterface(elements, Collection) ? elements : THROW_CCE();
      var tmp;
      if (isInterface(tmp0_all_0, Collection)) {
        tmp = tmp0_all_0.isEmpty_51();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = tmp0_all_0.iterator_69();
      while (tmp0_iterator_1.hasNext_49()) {
        var element_2 = tmp0_iterator_1.next_56();
        var tmp_0;
        if (element_2 instanceof UInt) {
          var tmp_1 = _UIntArray___get_storage__impl_(this_0);
          var tmp0_toInt_0_4 = element_2._data_0;
          tmp_0 = contains_3(tmp_1, _UInt___get_data__impl_(tmp0_toInt_0_4));
        } else {
          {
            tmp_0 = false;
          }
        }
        if (!tmp_0) {
          tmp$ret$0 = false;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  }
  function UIntArray__containsAll_impl_0(this_0, elements) {
    return UIntArray__containsAll_impl(this_0._storage_0, elements);
  }
  function UIntArray__isEmpty_impl(this_0) {
    return _UIntArray___get_storage__impl_(this_0).length === 0;
  }
  function UIntArray__toString_impl(this_0) {
    return '' + 'UIntArray(storage=' + toString_1(this_0) + ')';
  }
  function UIntArray__hashCode_impl(this_0) {
    return hashCode(this_0);
  }
  function UIntArray__equals_impl(this_0, other) {
    if (!(other instanceof UIntArray))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof UIntArray ? other._storage_0 : THROW_CCE();
    if (!equals_0(this_0, tmp0_other_with_cast))
      return false;
    return true;
  }
  function UIntArray(storage) {
    this._storage_0 = storage;
  }
  UIntArray.prototype._get_size__42 = function () {
    return _UIntArray___get_size__impl_(this._storage_0);
  };
  UIntArray.prototype.iterator_69 = function () {
    return UIntArray__iterator_impl(this._storage_0);
  };
  UIntArray.prototype.contains_19 = function (element) {
    return UIntArray__contains_impl(this._storage_0, element);
  };
  UIntArray.prototype.contains_58 = function (element) {
    return UIntArray__contains_impl_0(this, element);
  };
  UIntArray.prototype.containsAll_14 = function (elements) {
    return UIntArray__containsAll_impl(this._storage_0, elements);
  };
  UIntArray.prototype.containsAll_40 = function (elements) {
    return UIntArray__containsAll_impl_0(this, elements);
  };
  UIntArray.prototype.isEmpty_51 = function () {
    return UIntArray__isEmpty_impl(this._storage_0);
  };
  UIntArray.prototype.toString = function () {
    return UIntArray__toString_impl(this._storage_0);
  };
  UIntArray.prototype.hashCode = function () {
    return UIntArray__hashCode_impl(this._storage_0);
  };
  UIntArray.prototype.equals = function (other) {
    return UIntArray__equals_impl(this._storage_0, other);
  };
  UIntArray.$metadata$ = {
    simpleName: 'UIntArray',
    kind: 'class',
    interfaces: [Collection]
  };
  function Companion_8() {
    Companion_instance_7 = this;
    this._EMPTY = new UIntRange(_UInt___init__impl_(-1), _UInt___init__impl_(0));
  }
  Companion_8.prototype._get_EMPTY__3 = function () {
    return this._EMPTY;
  };
  Companion_8.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_8();
    return Companion_instance_7;
  }
  function UIntRange(start, endInclusive) {
    Companion_getInstance_7();
    UIntProgression.call(this, start, endInclusive, 1);
  }
  UIntRange.prototype._get_start_ = function () {
    return this._get_first__1();
  };
  UIntRange.prototype._get_start__6 = function () {
    return new UInt(this._get_start_());
  };
  UIntRange.prototype._get_endInclusive_ = function () {
    return this._get_last__0();
  };
  UIntRange.prototype._get_endInclusive__6 = function () {
    return new UInt(this._get_endInclusive_());
  };
  UIntRange.prototype.contains_19 = function (value) {
    var tmp;
    var tmp0_compareTo_0 = this._get_first__1();
    if (uintCompare(_UInt___get_data__impl_(tmp0_compareTo_0), _UInt___get_data__impl_(value)) <= 0) {
      var tmp1_compareTo_0 = this._get_last__0();
      tmp = uintCompare(_UInt___get_data__impl_(value), _UInt___get_data__impl_(tmp1_compareTo_0)) <= 0;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  UIntRange.prototype.contains_50 = function (value) {
    return this.contains_19(value instanceof UInt ? value._data_0 : THROW_CCE());
  };
  UIntRange.prototype.isEmpty_51 = function () {
    var tmp0_compareTo_0 = this._get_first__1();
    var tmp1_compareTo_0 = this._get_last__0();
    return uintCompare(_UInt___get_data__impl_(tmp0_compareTo_0), _UInt___get_data__impl_(tmp1_compareTo_0)) > 0;
  };
  UIntRange.prototype.equals = function (other) {
    var tmp;
    if (other instanceof UIntRange) {
      tmp = (this.isEmpty_51() ? other.isEmpty_51() : false) ? true : equals_0(new UInt(this._get_first__1()), new UInt(other._get_first__1())) ? equals_0(new UInt(this._get_last__0()), new UInt(other._get_last__0())) : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  UIntRange.prototype.hashCode = function () {
    var tmp;
    if (this.isEmpty_51()) {
      tmp = -1;
    } else {
      var tmp0_toInt_0 = this._get_first__1();
      var tmp_0 = imul(31, _UInt___get_data__impl_(tmp0_toInt_0));
      var tmp1_toInt_0 = this._get_last__0();
      tmp = tmp_0 + _UInt___get_data__impl_(tmp1_toInt_0) | 0;
    }
    return tmp;
  };
  UIntRange.prototype.toString = function () {
    return '' + new UInt(this._get_first__1()) + '..' + new UInt(this._get_last__0());
  };
  UIntRange.$metadata$ = {
    simpleName: 'UIntRange',
    kind: 'class',
    interfaces: [ClosedRange]
  };
  function Companion_9() {
    Companion_instance_8 = this;
  }
  Companion_9.prototype.fromClosedRange = function (rangeStart, rangeEnd, step_0) {
    return new UIntProgression(rangeStart, rangeEnd, step_0);
  };
  Companion_9.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_9();
    return Companion_instance_8;
  }
  function UIntProgression(start, endInclusive, step_0) {
    Companion_getInstance_8();
    if (step_0 === 0)
      throw IllegalArgumentException_init_$Create$_0('Step must be non-zero.');
    if (step_0 === IntCompanionObject_getInstance()._MIN_VALUE_5)
      throw IllegalArgumentException_init_$Create$_0('Step must be greater than Int.MIN_VALUE to avoid overflow on negation.');
    this._first_0 = start;
    this._last = getProgressionLastElement(start, endInclusive, step_0);
    this._step = step_0;
  }
  UIntProgression.prototype._get_first__1 = function () {
    return this._first_0;
  };
  UIntProgression.prototype._get_last__0 = function () {
    return this._last;
  };
  UIntProgression.prototype._get_step__11 = function () {
    return this._step;
  };
  UIntProgression.prototype.iterator_69 = function () {
    return new UIntProgressionIterator(this._first_0, this._last, this._step);
  };
  UIntProgression.prototype.isEmpty_51 = function () {
    var tmp;
    if (this._step > 0) {
      var tmp0_compareTo_0 = this._first_0;
      var tmp1_compareTo_0 = this._last;
      tmp = uintCompare(_UInt___get_data__impl_(tmp0_compareTo_0), _UInt___get_data__impl_(tmp1_compareTo_0)) > 0;
    } else {
      var tmp2_compareTo_0 = this._first_0;
      var tmp3_compareTo_0 = this._last;
      tmp = uintCompare(_UInt___get_data__impl_(tmp2_compareTo_0), _UInt___get_data__impl_(tmp3_compareTo_0)) < 0;
    }
    return tmp;
  };
  UIntProgression.prototype.equals = function (other) {
    var tmp;
    if (other instanceof UIntProgression) {
      tmp = (this.isEmpty_51() ? other.isEmpty_51() : false) ? true : (equals_0(new UInt(this._first_0), new UInt(other._first_0)) ? equals_0(new UInt(this._last), new UInt(other._last)) : false) ? this._step === other._step : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  UIntProgression.prototype.hashCode = function () {
    var tmp;
    if (this.isEmpty_51()) {
      tmp = -1;
    } else {
      var tmp0_toInt_0 = this._first_0;
      var tmp_0 = imul(31, _UInt___get_data__impl_(tmp0_toInt_0));
      var tmp1_toInt_0 = this._last;
      tmp = imul(31, tmp_0 + _UInt___get_data__impl_(tmp1_toInt_0) | 0) + this._step | 0;
    }
    return tmp;
  };
  UIntProgression.prototype.toString = function () {
    return this._step > 0 ? '' + new UInt(this._first_0) + '..' + new UInt(this._last) + ' step ' + this._step : '' + new UInt(this._first_0) + ' downTo ' + new UInt(this._last) + ' step ' + (-this._step | 0);
  };
  UIntProgression.$metadata$ = {
    simpleName: 'UIntProgression',
    kind: 'class',
    interfaces: [Iterable]
  };
  function _get_finalElement_($this) {
    return $this._finalElement;
  }
  function _set_hasNext_($this, _set___) {
    $this._hasNext = _set___;
  }
  function _get_hasNext_($this) {
    return $this._hasNext;
  }
  function _get_step_($this) {
    return $this._step_0;
  }
  function _set_next_($this, _set___) {
    $this._next = _set___;
  }
  function _get_next_($this) {
    return $this._next;
  }
  function UIntProgressionIterator(first_1, last_0, step_0) {
    UIntIterator.call(this);
    this._finalElement = last_0;
    var tmp = this;
    var tmp_0;
    if (step_0 > 0) {
      tmp_0 = uintCompare(_UInt___get_data__impl_(first_1), _UInt___get_data__impl_(last_0)) <= 0;
    } else {
      tmp_0 = uintCompare(_UInt___get_data__impl_(first_1), _UInt___get_data__impl_(last_0)) >= 0;
    }
    tmp._hasNext = tmp_0;
    var tmp_1 = this;
    tmp_1._step_0 = _UInt___init__impl_(step_0);
    this._next = this._hasNext ? first_1 : this._finalElement;
  }
  UIntProgressionIterator.prototype.hasNext_49 = function () {
    return this._hasNext;
  };
  UIntProgressionIterator.prototype.nextUInt_1 = function () {
    var value = this._next;
    if (equals_0(new UInt(value), new UInt(this._finalElement))) {
      if (!this._hasNext)
        throw NoSuchElementException_init_$Create$();
      this._hasNext = false;
    } else {
      var tmp0_this = this;
      var tmp = tmp0_this;
      var tmp0_plus_0 = tmp0_this._next;
      var tmp1_plus_0 = this._step_0;
      tmp._next = _UInt___init__impl_(_UInt___get_data__impl_(tmp0_plus_0) + _UInt___get_data__impl_(tmp1_plus_0) | 0);
    }
    return value;
  };
  UIntProgressionIterator.$metadata$ = {
    simpleName: 'UIntProgressionIterator',
    kind: 'class',
    interfaces: []
  };
  function UIntIterator() {
  }
  UIntIterator.prototype.next_15 = function () {
    return this.nextUInt_1();
  };
  UIntIterator.prototype.next_56 = function () {
    return new UInt(this.next_15());
  };
  UIntIterator.$metadata$ = {
    simpleName: 'UIntIterator',
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function ULongIterator() {
  }
  ULongIterator.prototype.next_24 = function () {
    return this.nextULong_1();
  };
  ULongIterator.prototype.next_56 = function () {
    return new ULong(this.next_24());
  };
  ULongIterator.$metadata$ = {
    simpleName: 'ULongIterator',
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function UByteIterator() {
  }
  UByteIterator.prototype.next_19 = function () {
    return this.nextUByte_0();
  };
  UByteIterator.prototype.next_56 = function () {
    return new UByte(this.next_19());
  };
  UByteIterator.$metadata$ = {
    simpleName: 'UByteIterator',
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function UShortIterator() {
  }
  UShortIterator.prototype.next_25 = function () {
    return this.nextUShort_0();
  };
  UShortIterator.prototype.next_56 = function () {
    return new UShort(this.next_25());
  };
  UShortIterator.$metadata$ = {
    simpleName: 'UShortIterator',
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function _ULong___init__impl_(data) {
    return data;
  }
  function _ULong___get_data__impl_(this_0) {
    return this_0;
  }
  function Companion_10() {
    Companion_instance_9 = this;
    this._MIN_VALUE_1 = _ULong___init__impl_(new Long(0, 0));
    this._MAX_VALUE_1 = _ULong___init__impl_(new Long(-1, -1));
    this._SIZE_BYTES_1 = 8;
    this._SIZE_BITS_1 = 64;
  }
  Companion_10.prototype._get_MIN_VALUE__1 = function () {
    return this._MIN_VALUE_1;
  };
  Companion_10.prototype._get_MAX_VALUE__1 = function () {
    return this._MAX_VALUE_1;
  };
  Companion_10.prototype._get_SIZE_BYTES__9 = function () {
    return this._SIZE_BYTES_1;
  };
  Companion_10.prototype._get_SIZE_BITS__9 = function () {
    return this._SIZE_BITS_1;
  };
  Companion_10.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_10();
    return Companion_instance_9;
  }
  function ULong__compareTo_impl(this_0, other) {
    var tmp0_compareTo_0 = _ULong___init__impl_(toLong(_UByte___get_data__impl_(other)).and(new Long(255, 0)));
    return ulongCompare(_ULong___get_data__impl_(this_0), _ULong___get_data__impl_(tmp0_compareTo_0));
  }
  function ULong__compareTo_impl_0(this_0, other) {
    var tmp0_compareTo_0 = _ULong___init__impl_(toLong(_UShort___get_data__impl_(other)).and(new Long(65535, 0)));
    return ulongCompare(_ULong___get_data__impl_(this_0), _ULong___get_data__impl_(tmp0_compareTo_0));
  }
  function ULong__compareTo_impl_1(this_0, other) {
    var tmp0_compareTo_0 = _ULong___init__impl_(toLong(_UInt___get_data__impl_(other)).and(new Long(-1, 0)));
    return ulongCompare(_ULong___get_data__impl_(this_0), _ULong___get_data__impl_(tmp0_compareTo_0));
  }
  function ULong__compareTo_impl_2(this_0, other) {
    return ulongCompare(_ULong___get_data__impl_(this_0), _ULong___get_data__impl_(other));
  }
  function ULong__compareTo_impl_3(this_0, other) {
    var tmp = this_0._data_1;
    return ULong__compareTo_impl_2(tmp, other instanceof ULong ? other._data_1 : THROW_CCE());
  }
  function ULong__plus_impl(this_0, other) {
    var tmp0_plus_0 = _ULong___init__impl_(toLong(_UByte___get_data__impl_(other)).and(new Long(255, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).plus_38(_ULong___get_data__impl_(tmp0_plus_0)));
  }
  function ULong__plus_impl_0(this_0, other) {
    var tmp0_plus_0 = _ULong___init__impl_(toLong(_UShort___get_data__impl_(other)).and(new Long(65535, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).plus_38(_ULong___get_data__impl_(tmp0_plus_0)));
  }
  function ULong__plus_impl_1(this_0, other) {
    var tmp0_plus_0 = _ULong___init__impl_(toLong(_UInt___get_data__impl_(other)).and(new Long(-1, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).plus_38(_ULong___get_data__impl_(tmp0_plus_0)));
  }
  function ULong__plus_impl_2(this_0, other) {
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).plus_38(_ULong___get_data__impl_(other)));
  }
  function ULong__minus_impl(this_0, other) {
    var tmp0_minus_0 = _ULong___init__impl_(toLong(_UByte___get_data__impl_(other)).and(new Long(255, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).minus_34(_ULong___get_data__impl_(tmp0_minus_0)));
  }
  function ULong__minus_impl_0(this_0, other) {
    var tmp0_minus_0 = _ULong___init__impl_(toLong(_UShort___get_data__impl_(other)).and(new Long(65535, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).minus_34(_ULong___get_data__impl_(tmp0_minus_0)));
  }
  function ULong__minus_impl_1(this_0, other) {
    var tmp0_minus_0 = _ULong___init__impl_(toLong(_UInt___get_data__impl_(other)).and(new Long(-1, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).minus_34(_ULong___get_data__impl_(tmp0_minus_0)));
  }
  function ULong__minus_impl_2(this_0, other) {
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).minus_34(_ULong___get_data__impl_(other)));
  }
  function ULong__times_impl(this_0, other) {
    var tmp0_times_0 = _ULong___init__impl_(toLong(_UByte___get_data__impl_(other)).and(new Long(255, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).times_32(_ULong___get_data__impl_(tmp0_times_0)));
  }
  function ULong__times_impl_0(this_0, other) {
    var tmp0_times_0 = _ULong___init__impl_(toLong(_UShort___get_data__impl_(other)).and(new Long(65535, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).times_32(_ULong___get_data__impl_(tmp0_times_0)));
  }
  function ULong__times_impl_1(this_0, other) {
    var tmp0_times_0 = _ULong___init__impl_(toLong(_UInt___get_data__impl_(other)).and(new Long(-1, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).times_32(_ULong___get_data__impl_(tmp0_times_0)));
  }
  function ULong__times_impl_2(this_0, other) {
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).times_32(_ULong___get_data__impl_(other)));
  }
  function ULong__div_impl(this_0, other) {
    var tmp0_div_0 = _ULong___init__impl_(toLong(_UByte___get_data__impl_(other)).and(new Long(255, 0)));
    return ulongDivide(this_0, tmp0_div_0);
  }
  function ULong__div_impl_0(this_0, other) {
    var tmp0_div_0 = _ULong___init__impl_(toLong(_UShort___get_data__impl_(other)).and(new Long(65535, 0)));
    return ulongDivide(this_0, tmp0_div_0);
  }
  function ULong__div_impl_1(this_0, other) {
    var tmp0_div_0 = _ULong___init__impl_(toLong(_UInt___get_data__impl_(other)).and(new Long(-1, 0)));
    return ulongDivide(this_0, tmp0_div_0);
  }
  function ULong__div_impl_2(this_0, other) {
    return ulongDivide(this_0, other);
  }
  function ULong__rem_impl(this_0, other) {
    var tmp0_rem_0 = _ULong___init__impl_(toLong(_UByte___get_data__impl_(other)).and(new Long(255, 0)));
    return ulongRemainder(this_0, tmp0_rem_0);
  }
  function ULong__rem_impl_0(this_0, other) {
    var tmp0_rem_0 = _ULong___init__impl_(toLong(_UShort___get_data__impl_(other)).and(new Long(65535, 0)));
    return ulongRemainder(this_0, tmp0_rem_0);
  }
  function ULong__rem_impl_1(this_0, other) {
    var tmp0_rem_0 = _ULong___init__impl_(toLong(_UInt___get_data__impl_(other)).and(new Long(-1, 0)));
    return ulongRemainder(this_0, tmp0_rem_0);
  }
  function ULong__rem_impl_2(this_0, other) {
    return ulongRemainder(this_0, other);
  }
  function ULong__inc_impl(this_0) {
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).inc_5());
  }
  function ULong__dec_impl(this_0) {
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).dec_5());
  }
  function ULong__rangeTo_impl(this_0, other) {
    return new ULongRange_0(this_0, other);
  }
  function ULong__shl_impl(this_0, bitCount) {
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).shl_0(bitCount));
  }
  function ULong__shr_impl(this_0, bitCount) {
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).ushr_0(bitCount));
  }
  function ULong__and_impl(this_0, other) {
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).and(_ULong___get_data__impl_(other)));
  }
  function ULong__or_impl(this_0, other) {
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).or(_ULong___get_data__impl_(other)));
  }
  function ULong__xor_impl(this_0, other) {
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).xor(_ULong___get_data__impl_(other)));
  }
  function ULong__inv_impl(this_0) {
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).inv_0());
  }
  function ULong__toByte_impl(this_0) {
    return _ULong___get_data__impl_(this_0).toByte_6();
  }
  function ULong__toShort_impl(this_0) {
    return _ULong___get_data__impl_(this_0).toShort_6();
  }
  function ULong__toInt_impl(this_0) {
    return _ULong___get_data__impl_(this_0).toInt_6();
  }
  function ULong__toLong_impl(this_0) {
    return _ULong___get_data__impl_(this_0);
  }
  function ULong__toUByte_impl(this_0) {
    var tmp0_toUByte_0 = _ULong___get_data__impl_(this_0);
    return _UByte___init__impl_(tmp0_toUByte_0.toByte_6());
  }
  function ULong__toUShort_impl(this_0) {
    var tmp0_toUShort_0 = _ULong___get_data__impl_(this_0);
    return _UShort___init__impl_(tmp0_toUShort_0.toShort_6());
  }
  function ULong__toUInt_impl(this_0) {
    var tmp0_toUInt_0 = _ULong___get_data__impl_(this_0);
    return _UInt___init__impl_(tmp0_toUInt_0.toInt_6());
  }
  function ULong__toULong_impl(this_0) {
    return this_0;
  }
  function ULong__toFloat_impl(this_0) {
    return ulongToDouble(_ULong___get_data__impl_(this_0));
  }
  function ULong__toDouble_impl(this_0) {
    return ulongToDouble(_ULong___get_data__impl_(this_0));
  }
  function ULong__toString_impl(this_0) {
    return ulongToString(_ULong___get_data__impl_(this_0));
  }
  function ULong__hashCode_impl(this_0) {
    return this_0.hashCode();
  }
  function ULong__equals_impl(this_0, other) {
    if (!(other instanceof ULong))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ULong ? other._data_1 : THROW_CCE();
    if (!this_0.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function ULong(data) {
    Companion_getInstance_9();
    this._data_1 = data;
  }
  ULong.prototype.compareTo_9 = function (other) {
    return ULong__compareTo_impl_2(this._data_1, other);
  };
  ULong.prototype.compareTo_26 = function (other) {
    return ULong__compareTo_impl_3(this, other);
  };
  ULong.prototype.toString = function () {
    return ULong__toString_impl(this._data_1);
  };
  ULong.prototype.hashCode = function () {
    return ULong__hashCode_impl(this._data_1);
  };
  ULong.prototype.equals = function (other) {
    return ULong__equals_impl(this._data_1, other);
  };
  ULong.$metadata$ = {
    simpleName: 'ULong',
    kind: 'class',
    interfaces: [Comparable]
  };
  function toULong(_this_) {
    return _ULong___init__impl_(_this_);
  }
  function toULong_0(_this_) {
    return _ULong___init__impl_(toLong(_this_));
  }
  function toULong_1(_this_) {
    return doubleToULong(_this_);
  }
  function toULong_2(_this_) {
    return doubleToULong(_this_);
  }
  function toULong_3(_this_) {
    return _ULong___init__impl_(toLong(_this_));
  }
  function toULong_4(_this_) {
    return _ULong___init__impl_(toLong(_this_));
  }
  function _get_array__1($this) {
    return $this._array_1;
  }
  function _set_index__1($this, _set___) {
    $this._index_2 = _set___;
  }
  function _get_index__1($this) {
    return $this._index_2;
  }
  function _ULongArray___init__impl_(storage) {
    return storage;
  }
  function _ULongArray___get_storage__impl_(this_0) {
    return this_0;
  }
  function _ULongArray___init__impl__0(size_0) {
    var tmp = _ULongArray___init__impl_(longArray(size_0));
    return tmp;
  }
  function ULongArray__get_impl(this_0, index) {
    var tmp0_toULong_0 = _ULongArray___get_storage__impl_(this_0)[index];
    return _ULong___init__impl_(tmp0_toULong_0);
  }
  function ULongArray__set_impl(this_0, index, value) {
    var tmp = _ULongArray___get_storage__impl_(this_0);
    tmp[index] = _ULong___get_data__impl_(value);
  }
  function _ULongArray___get_size__impl_(this_0) {
    return _ULongArray___get_storage__impl_(this_0).length;
  }
  function ULongArray__iterator_impl(this_0) {
    return new Iterator_1(_ULongArray___get_storage__impl_(this_0));
  }
  function Iterator_1(array) {
    ULongIterator.call(this);
    this._array_1 = array;
    this._index_2 = 0;
  }
  Iterator_1.prototype.hasNext_49 = function () {
    return this._index_2 < this._array_1.length;
  };
  Iterator_1.prototype.nextULong_1 = function () {
    var tmp;
    if (this._index_2 < this._array_1.length) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_2;
      tmp0_this._index_2 = tmp1 + 1 | 0;
      var tmp0_toULong_0 = this._array_1[tmp1];
      tmp = _ULong___init__impl_(tmp0_toULong_0);
    } else {
      throw NoSuchElementException_init_$Create$_0(this._index_2.toString());
    }
    return tmp;
  };
  Iterator_1.$metadata$ = {
    simpleName: 'Iterator',
    kind: 'class',
    interfaces: []
  };
  function ULongArray__contains_impl(this_0, element) {
    var tmp = isObject(new ULong(element)) ? new ULong(element) : THROW_CCE();
    if (!(tmp instanceof ULong))
      return false;
    else {
    }
    var tmp_0 = _ULongArray___get_storage__impl_(this_0);
    return contains_4(tmp_0, _ULong___get_data__impl_(element));
  }
  function ULongArray__contains_impl_0(this_0, element) {
    if (!(element instanceof ULong))
      return false;
    else {
    }
    var tmp = this_0._storage_1;
    return ULongArray__contains_impl(tmp, element instanceof ULong ? element._data_1 : THROW_CCE());
  }
  function ULongArray__containsAll_impl(this_0, elements) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_all_0 = isInterface(elements, Collection) ? elements : THROW_CCE();
      var tmp;
      if (isInterface(tmp0_all_0, Collection)) {
        tmp = tmp0_all_0.isEmpty_51();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = tmp0_all_0.iterator_69();
      while (tmp0_iterator_1.hasNext_49()) {
        var element_2 = tmp0_iterator_1.next_56();
        var tmp_0;
        if (element_2 instanceof ULong) {
          var tmp_1 = _ULongArray___get_storage__impl_(this_0);
          var tmp0_toLong_0_4 = element_2._data_1;
          tmp_0 = contains_4(tmp_1, _ULong___get_data__impl_(tmp0_toLong_0_4));
        } else {
          {
            tmp_0 = false;
          }
        }
        if (!tmp_0) {
          tmp$ret$0 = false;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  }
  function ULongArray__containsAll_impl_0(this_0, elements) {
    return ULongArray__containsAll_impl(this_0._storage_1, elements);
  }
  function ULongArray__isEmpty_impl(this_0) {
    return _ULongArray___get_storage__impl_(this_0).length === 0;
  }
  function ULongArray__toString_impl(this_0) {
    return '' + 'ULongArray(storage=' + toString_1(this_0) + ')';
  }
  function ULongArray__hashCode_impl(this_0) {
    return hashCode(this_0);
  }
  function ULongArray__equals_impl(this_0, other) {
    if (!(other instanceof ULongArray))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ULongArray ? other._storage_1 : THROW_CCE();
    if (!equals_0(this_0, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ULongArray(storage) {
    this._storage_1 = storage;
  }
  ULongArray.prototype._get_size__42 = function () {
    return _ULongArray___get_size__impl_(this._storage_1);
  };
  ULongArray.prototype.iterator_69 = function () {
    return ULongArray__iterator_impl(this._storage_1);
  };
  ULongArray.prototype.contains_23 = function (element) {
    return ULongArray__contains_impl(this._storage_1, element);
  };
  ULongArray.prototype.contains_58 = function (element) {
    return ULongArray__contains_impl_0(this, element);
  };
  ULongArray.prototype.containsAll_16 = function (elements) {
    return ULongArray__containsAll_impl(this._storage_1, elements);
  };
  ULongArray.prototype.containsAll_40 = function (elements) {
    return ULongArray__containsAll_impl_0(this, elements);
  };
  ULongArray.prototype.isEmpty_51 = function () {
    return ULongArray__isEmpty_impl(this._storage_1);
  };
  ULongArray.prototype.toString = function () {
    return ULongArray__toString_impl(this._storage_1);
  };
  ULongArray.prototype.hashCode = function () {
    return ULongArray__hashCode_impl(this._storage_1);
  };
  ULongArray.prototype.equals = function (other) {
    return ULongArray__equals_impl(this._storage_1, other);
  };
  ULongArray.$metadata$ = {
    simpleName: 'ULongArray',
    kind: 'class',
    interfaces: [Collection]
  };
  function Companion_11() {
    Companion_instance_10 = this;
    this._EMPTY_0 = new ULongRange_0(_ULong___init__impl_(new Long(-1, -1)), _ULong___init__impl_(new Long(0, 0)));
  }
  Companion_11.prototype._get_EMPTY__3 = function () {
    return this._EMPTY_0;
  };
  Companion_11.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    if (Companion_instance_10 == null)
      new Companion_11();
    return Companion_instance_10;
  }
  function ULongRange_0(start, endInclusive) {
    Companion_getInstance_10();
    ULongProgression.call(this, start, endInclusive, new Long(1, 0));
  }
  ULongRange_0.prototype._get_start__1 = function () {
    return this._get_first__3();
  };
  ULongRange_0.prototype._get_start__6 = function () {
    return new ULong(this._get_start__1());
  };
  ULongRange_0.prototype._get_endInclusive__1 = function () {
    return this._get_last__2();
  };
  ULongRange_0.prototype._get_endInclusive__6 = function () {
    return new ULong(this._get_endInclusive__1());
  };
  ULongRange_0.prototype.contains_23 = function (value) {
    var tmp;
    var tmp0_compareTo_0 = this._get_first__3();
    if (ulongCompare(_ULong___get_data__impl_(tmp0_compareTo_0), _ULong___get_data__impl_(value)) <= 0) {
      var tmp1_compareTo_0 = this._get_last__2();
      tmp = ulongCompare(_ULong___get_data__impl_(value), _ULong___get_data__impl_(tmp1_compareTo_0)) <= 0;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  ULongRange_0.prototype.contains_50 = function (value) {
    return this.contains_23(value instanceof ULong ? value._data_1 : THROW_CCE());
  };
  ULongRange_0.prototype.isEmpty_51 = function () {
    var tmp0_compareTo_0 = this._get_first__3();
    var tmp1_compareTo_0 = this._get_last__2();
    return ulongCompare(_ULong___get_data__impl_(tmp0_compareTo_0), _ULong___get_data__impl_(tmp1_compareTo_0)) > 0;
  };
  ULongRange_0.prototype.equals = function (other) {
    var tmp;
    if (other instanceof ULongRange_0) {
      tmp = (this.isEmpty_51() ? other.isEmpty_51() : false) ? true : equals_0(new ULong(this._get_first__3()), new ULong(other._get_first__3())) ? equals_0(new ULong(this._get_last__2()), new ULong(other._get_last__2())) : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  ULongRange_0.prototype.hashCode = function () {
    var tmp;
    if (this.isEmpty_51()) {
      tmp = -1;
    } else {
      var tmp2_xor_0 = this._get_first__3();
      var tmp0_shr_0 = this._get_first__3();
      var tmp1_shr_0 = 32;
      var tmp3_xor_0 = _ULong___init__impl_(_ULong___get_data__impl_(tmp0_shr_0).ushr_0(tmp1_shr_0));
      var tmp4_toInt_0 = _ULong___init__impl_(_ULong___get_data__impl_(tmp2_xor_0).xor(_ULong___get_data__impl_(tmp3_xor_0)));
      var tmp_0 = imul(31, _ULong___get_data__impl_(tmp4_toInt_0).toInt_6());
      var tmp7_xor_0 = this._get_last__2();
      var tmp5_shr_0 = this._get_last__2();
      var tmp6_shr_0 = 32;
      var tmp8_xor_0 = _ULong___init__impl_(_ULong___get_data__impl_(tmp5_shr_0).ushr_0(tmp6_shr_0));
      var tmp9_toInt_0 = _ULong___init__impl_(_ULong___get_data__impl_(tmp7_xor_0).xor(_ULong___get_data__impl_(tmp8_xor_0)));
      tmp = tmp_0 + _ULong___get_data__impl_(tmp9_toInt_0).toInt_6() | 0;
    }
    return tmp;
  };
  ULongRange_0.prototype.toString = function () {
    return '' + new ULong(this._get_first__3()) + '..' + new ULong(this._get_last__2());
  };
  ULongRange_0.$metadata$ = {
    simpleName: 'ULongRange',
    kind: 'class',
    interfaces: [ClosedRange]
  };
  function Companion_12() {
    Companion_instance_11 = this;
  }
  Companion_12.prototype.fromClosedRange_0 = function (rangeStart, rangeEnd, step_0) {
    return new ULongProgression(rangeStart, rangeEnd, step_0);
  };
  Companion_12.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    if (Companion_instance_11 == null)
      new Companion_12();
    return Companion_instance_11;
  }
  function ULongProgression(start, endInclusive, step_0) {
    Companion_getInstance_11();
    if (step_0.equals(new Long(0, 0)))
      throw IllegalArgumentException_init_$Create$_0('Step must be non-zero.');
    if (step_0.equals(new Long(0, -2147483648)))
      throw IllegalArgumentException_init_$Create$_0('Step must be greater than Long.MIN_VALUE to avoid overflow on negation.');
    this._first_1 = start;
    this._last_0 = getProgressionLastElement_0(start, endInclusive, step_0);
    this._step_1 = step_0;
  }
  ULongProgression.prototype._get_first__3 = function () {
    return this._first_1;
  };
  ULongProgression.prototype._get_last__2 = function () {
    return this._last_0;
  };
  ULongProgression.prototype._get_step__11 = function () {
    return this._step_1;
  };
  ULongProgression.prototype.iterator_69 = function () {
    return new ULongProgressionIterator(this._first_1, this._last_0, this._step_1);
  };
  ULongProgression.prototype.isEmpty_51 = function () {
    var tmp;
    if (this._step_1.compareTo_57(new Long(0, 0)) > 0) {
      var tmp0_compareTo_0 = this._first_1;
      var tmp1_compareTo_0 = this._last_0;
      tmp = ulongCompare(_ULong___get_data__impl_(tmp0_compareTo_0), _ULong___get_data__impl_(tmp1_compareTo_0)) > 0;
    } else {
      var tmp2_compareTo_0 = this._first_1;
      var tmp3_compareTo_0 = this._last_0;
      tmp = ulongCompare(_ULong___get_data__impl_(tmp2_compareTo_0), _ULong___get_data__impl_(tmp3_compareTo_0)) < 0;
    }
    return tmp;
  };
  ULongProgression.prototype.equals = function (other) {
    var tmp;
    if (other instanceof ULongProgression) {
      tmp = (this.isEmpty_51() ? other.isEmpty_51() : false) ? true : (equals_0(new ULong(this._first_1), new ULong(other._first_1)) ? equals_0(new ULong(this._last_0), new ULong(other._last_0)) : false) ? this._step_1.equals(other._step_1) : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  ULongProgression.prototype.hashCode = function () {
    var tmp;
    if (this.isEmpty_51()) {
      tmp = -1;
    } else {
      var tmp2_xor_0 = this._first_1;
      var tmp0_shr_0 = this._first_1;
      var tmp1_shr_0 = 32;
      var tmp3_xor_0 = _ULong___init__impl_(_ULong___get_data__impl_(tmp0_shr_0).ushr_0(tmp1_shr_0));
      var tmp4_toInt_0 = _ULong___init__impl_(_ULong___get_data__impl_(tmp2_xor_0).xor(_ULong___get_data__impl_(tmp3_xor_0)));
      var tmp_0 = imul(31, _ULong___get_data__impl_(tmp4_toInt_0).toInt_6());
      var tmp7_xor_0 = this._last_0;
      var tmp5_shr_0 = this._last_0;
      var tmp6_shr_0 = 32;
      var tmp8_xor_0 = _ULong___init__impl_(_ULong___get_data__impl_(tmp5_shr_0).ushr_0(tmp6_shr_0));
      var tmp9_toInt_0 = _ULong___init__impl_(_ULong___get_data__impl_(tmp7_xor_0).xor(_ULong___get_data__impl_(tmp8_xor_0)));
      tmp = imul(31, tmp_0 + _ULong___get_data__impl_(tmp9_toInt_0).toInt_6() | 0) + this._step_1.xor(this._step_1.ushr_0(32)).toInt_6() | 0;
    }
    return tmp;
  };
  ULongProgression.prototype.toString = function () {
    return this._step_1.compareTo_57(new Long(0, 0)) > 0 ? '' + new ULong(this._first_1) + '..' + new ULong(this._last_0) + ' step ' + this._step_1 : '' + new ULong(this._first_1) + ' downTo ' + new ULong(this._last_0) + ' step ' + this._step_1.unaryMinus_4();
  };
  ULongProgression.$metadata$ = {
    simpleName: 'ULongProgression',
    kind: 'class',
    interfaces: [Iterable]
  };
  function _get_finalElement__0($this) {
    return $this._finalElement_0;
  }
  function _set_hasNext__0($this, _set___) {
    $this._hasNext_0 = _set___;
  }
  function _get_hasNext__0($this) {
    return $this._hasNext_0;
  }
  function _get_step__0($this) {
    return $this._step_2;
  }
  function _set_next__0($this, _set___) {
    $this._next_0 = _set___;
  }
  function _get_next__0($this) {
    return $this._next_0;
  }
  function ULongProgressionIterator(first_1, last_0, step_0) {
    ULongIterator.call(this);
    this._finalElement_0 = last_0;
    var tmp = this;
    var tmp_0;
    if (step_0.compareTo_57(new Long(0, 0)) > 0) {
      tmp_0 = ulongCompare(_ULong___get_data__impl_(first_1), _ULong___get_data__impl_(last_0)) <= 0;
    } else {
      tmp_0 = ulongCompare(_ULong___get_data__impl_(first_1), _ULong___get_data__impl_(last_0)) >= 0;
    }
    tmp._hasNext_0 = tmp_0;
    var tmp_1 = this;
    tmp_1._step_2 = _ULong___init__impl_(step_0);
    this._next_0 = this._hasNext_0 ? first_1 : this._finalElement_0;
  }
  ULongProgressionIterator.prototype.hasNext_49 = function () {
    return this._hasNext_0;
  };
  ULongProgressionIterator.prototype.nextULong_1 = function () {
    var value = this._next_0;
    if (equals_0(new ULong(value), new ULong(this._finalElement_0))) {
      if (!this._hasNext_0)
        throw NoSuchElementException_init_$Create$();
      this._hasNext_0 = false;
    } else {
      var tmp0_this = this;
      var tmp = tmp0_this;
      var tmp0_plus_0 = tmp0_this._next_0;
      var tmp1_plus_0 = this._step_2;
      tmp._next_0 = _ULong___init__impl_(_ULong___get_data__impl_(tmp0_plus_0).plus_38(_ULong___get_data__impl_(tmp1_plus_0)));
    }
    return value;
  };
  ULongProgressionIterator.$metadata$ = {
    simpleName: 'ULongProgressionIterator',
    kind: 'class',
    interfaces: []
  };
  function getProgressionLastElement(start, end, step_0) {
    var tmp;
    if (step_0 > 0) {
      var tmp_0;
      if (uintCompare(_UInt___get_data__impl_(start), _UInt___get_data__impl_(end)) >= 0) {
        tmp_0 = end;
      } else {
        {
          var tmp0_minus_0 = differenceModulo(end, start, _UInt___init__impl_(step_0));
          tmp_0 = _UInt___init__impl_(_UInt___get_data__impl_(end) - _UInt___get_data__impl_(tmp0_minus_0) | 0);
        }
      }
      tmp = tmp_0;
    } else if (step_0 < 0) {
      var tmp_1;
      if (uintCompare(_UInt___get_data__impl_(start), _UInt___get_data__impl_(end)) <= 0) {
        tmp_1 = end;
      } else {
        {
          var tmp1_toUInt_0 = -step_0 | 0;
          var tmp2_plus_0 = differenceModulo(start, end, _UInt___init__impl_(tmp1_toUInt_0));
          tmp_1 = _UInt___init__impl_(_UInt___get_data__impl_(end) + _UInt___get_data__impl_(tmp2_plus_0) | 0);
        }
      }
      tmp = tmp_1;
    } else {
      throw IllegalArgumentException_init_$Create$_0('Step is zero.');
    }
    return tmp;
  }
  function getProgressionLastElement_0(start, end, step_0) {
    var tmp;
    if (step_0.compareTo_57(new Long(0, 0)) > 0) {
      var tmp_0;
      if (ulongCompare(_ULong___get_data__impl_(start), _ULong___get_data__impl_(end)) >= 0) {
        tmp_0 = end;
      } else {
        {
          var tmp0_minus_0 = differenceModulo_0(end, start, _ULong___init__impl_(step_0));
          tmp_0 = _ULong___init__impl_(_ULong___get_data__impl_(end).minus_34(_ULong___get_data__impl_(tmp0_minus_0)));
        }
      }
      tmp = tmp_0;
    } else if (step_0.compareTo_57(new Long(0, 0)) < 0) {
      var tmp_1;
      if (ulongCompare(_ULong___get_data__impl_(start), _ULong___get_data__impl_(end)) <= 0) {
        tmp_1 = end;
      } else {
        {
          var tmp1_toULong_0 = step_0.unaryMinus_4();
          var tmp2_plus_0 = differenceModulo_0(start, end, _ULong___init__impl_(tmp1_toULong_0));
          tmp_1 = _ULong___init__impl_(_ULong___get_data__impl_(end).plus_38(_ULong___get_data__impl_(tmp2_plus_0)));
        }
      }
      tmp = tmp_1;
    } else {
      throw IllegalArgumentException_init_$Create$_0('Step is zero.');
    }
    return tmp;
  }
  function differenceModulo(a, b, c) {
    var ac = uintRemainder(a, c);
    var bc = uintRemainder(b, c);
    var tmp;
    if (uintCompare(_UInt___get_data__impl_(ac), _UInt___get_data__impl_(bc)) >= 0) {
      tmp = _UInt___init__impl_(_UInt___get_data__impl_(ac) - _UInt___get_data__impl_(bc) | 0);
    } else {
      {
        var tmp0_plus_0 = _UInt___init__impl_(_UInt___get_data__impl_(ac) - _UInt___get_data__impl_(bc) | 0);
        tmp = _UInt___init__impl_(_UInt___get_data__impl_(tmp0_plus_0) + _UInt___get_data__impl_(c) | 0);
      }
    }
    return tmp;
  }
  function differenceModulo_0(a, b, c) {
    var ac = ulongRemainder(a, c);
    var bc = ulongRemainder(b, c);
    var tmp;
    if (ulongCompare(_ULong___get_data__impl_(ac), _ULong___get_data__impl_(bc)) >= 0) {
      tmp = _ULong___init__impl_(_ULong___get_data__impl_(ac).minus_34(_ULong___get_data__impl_(bc)));
    } else {
      {
        var tmp0_plus_0 = _ULong___init__impl_(_ULong___get_data__impl_(ac).minus_34(_ULong___get_data__impl_(bc)));
        tmp = _ULong___init__impl_(_ULong___get_data__impl_(tmp0_plus_0).plus_38(_ULong___get_data__impl_(c)));
      }
    }
    return tmp;
  }
  function _UShort___init__impl_(data) {
    return data;
  }
  function _UShort___get_data__impl_(this_0) {
    return this_0;
  }
  function Companion_13() {
    Companion_instance_12 = this;
    this._MIN_VALUE_2 = _UShort___init__impl_(0);
    this._MAX_VALUE_2 = _UShort___init__impl_(-1);
    this._SIZE_BYTES_2 = 2;
    this._SIZE_BITS_2 = 16;
  }
  Companion_13.prototype._get_MIN_VALUE__2 = function () {
    return this._MIN_VALUE_2;
  };
  Companion_13.prototype._get_MAX_VALUE__2 = function () {
    return this._MAX_VALUE_2;
  };
  Companion_13.prototype._get_SIZE_BYTES__9 = function () {
    return this._SIZE_BYTES_2;
  };
  Companion_13.prototype._get_SIZE_BITS__9 = function () {
    return this._SIZE_BITS_2;
  };
  Companion_13.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_12;
  function Companion_getInstance_12() {
    if (Companion_instance_12 == null)
      new Companion_13();
    return Companion_instance_12;
  }
  function UShort__compareTo_impl(this_0, other) {
    var tmp = _UShort___get_data__impl_(this_0) & 65535;
    return compareTo_0(tmp, _UByte___get_data__impl_(other) & 255);
  }
  function UShort__compareTo_impl_0(this_0, other) {
    var tmp = _UShort___get_data__impl_(this_0) & 65535;
    return compareTo_0(tmp, _UShort___get_data__impl_(other) & 65535);
  }
  function UShort__compareTo_impl_1(this_0, other) {
    var tmp = this_0._data_2;
    return UShort__compareTo_impl_0(tmp, other instanceof UShort ? other._data_2 : THROW_CCE());
  }
  function UShort__compareTo_impl_2(this_0, other) {
    var tmp0_compareTo_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    return uintCompare(_UInt___get_data__impl_(tmp0_compareTo_0), _UInt___get_data__impl_(other));
  }
  function UShort__compareTo_impl_3(this_0, other) {
    var tmp0_compareTo_0 = _ULong___init__impl_(toLong(_UShort___get_data__impl_(this_0)).and(new Long(65535, 0)));
    return ulongCompare(_ULong___get_data__impl_(tmp0_compareTo_0), _ULong___get_data__impl_(other));
  }
  function UShort__plus_impl(this_0, other) {
    var tmp0_plus_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    var tmp1_plus_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return _UInt___init__impl_(_UInt___get_data__impl_(tmp0_plus_0) + _UInt___get_data__impl_(tmp1_plus_0) | 0);
  }
  function UShort__plus_impl_0(this_0, other) {
    var tmp0_plus_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    var tmp1_plus_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return _UInt___init__impl_(_UInt___get_data__impl_(tmp0_plus_0) + _UInt___get_data__impl_(tmp1_plus_0) | 0);
  }
  function UShort__plus_impl_1(this_0, other) {
    var tmp0_plus_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    return _UInt___init__impl_(_UInt___get_data__impl_(tmp0_plus_0) + _UInt___get_data__impl_(other) | 0);
  }
  function UShort__plus_impl_2(this_0, other) {
    var tmp0_plus_0 = _ULong___init__impl_(toLong(_UShort___get_data__impl_(this_0)).and(new Long(65535, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(tmp0_plus_0).plus_38(_ULong___get_data__impl_(other)));
  }
  function UShort__minus_impl(this_0, other) {
    var tmp0_minus_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    var tmp1_minus_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return _UInt___init__impl_(_UInt___get_data__impl_(tmp0_minus_0) - _UInt___get_data__impl_(tmp1_minus_0) | 0);
  }
  function UShort__minus_impl_0(this_0, other) {
    var tmp0_minus_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    var tmp1_minus_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return _UInt___init__impl_(_UInt___get_data__impl_(tmp0_minus_0) - _UInt___get_data__impl_(tmp1_minus_0) | 0);
  }
  function UShort__minus_impl_1(this_0, other) {
    var tmp0_minus_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    return _UInt___init__impl_(_UInt___get_data__impl_(tmp0_minus_0) - _UInt___get_data__impl_(other) | 0);
  }
  function UShort__minus_impl_2(this_0, other) {
    var tmp0_minus_0 = _ULong___init__impl_(toLong(_UShort___get_data__impl_(this_0)).and(new Long(65535, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(tmp0_minus_0).minus_34(_ULong___get_data__impl_(other)));
  }
  function UShort__times_impl(this_0, other) {
    var tmp0_times_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    var tmp1_times_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return _UInt___init__impl_(imul(_UInt___get_data__impl_(tmp0_times_0), _UInt___get_data__impl_(tmp1_times_0)));
  }
  function UShort__times_impl_0(this_0, other) {
    var tmp0_times_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    var tmp1_times_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return _UInt___init__impl_(imul(_UInt___get_data__impl_(tmp0_times_0), _UInt___get_data__impl_(tmp1_times_0)));
  }
  function UShort__times_impl_1(this_0, other) {
    var tmp0_times_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    return _UInt___init__impl_(imul(_UInt___get_data__impl_(tmp0_times_0), _UInt___get_data__impl_(other)));
  }
  function UShort__times_impl_2(this_0, other) {
    var tmp0_times_0 = _ULong___init__impl_(toLong(_UShort___get_data__impl_(this_0)).and(new Long(65535, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(tmp0_times_0).times_32(_ULong___get_data__impl_(other)));
  }
  function UShort__div_impl(this_0, other) {
    var tmp0_div_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    var tmp1_div_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return uintDivide(tmp0_div_0, tmp1_div_0);
  }
  function UShort__div_impl_0(this_0, other) {
    var tmp0_div_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    var tmp1_div_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return uintDivide(tmp0_div_0, tmp1_div_0);
  }
  function UShort__div_impl_1(this_0, other) {
    var tmp0_div_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    return uintDivide(tmp0_div_0, other);
  }
  function UShort__div_impl_2(this_0, other) {
    var tmp0_div_0 = _ULong___init__impl_(toLong(_UShort___get_data__impl_(this_0)).and(new Long(65535, 0)));
    return ulongDivide(tmp0_div_0, other);
  }
  function UShort__rem_impl(this_0, other) {
    var tmp0_rem_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    var tmp1_rem_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return uintRemainder(tmp0_rem_0, tmp1_rem_0);
  }
  function UShort__rem_impl_0(this_0, other) {
    var tmp0_rem_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    var tmp1_rem_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return uintRemainder(tmp0_rem_0, tmp1_rem_0);
  }
  function UShort__rem_impl_1(this_0, other) {
    var tmp0_rem_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    return uintRemainder(tmp0_rem_0, other);
  }
  function UShort__rem_impl_2(this_0, other) {
    var tmp0_rem_0 = _ULong___init__impl_(toLong(_UShort___get_data__impl_(this_0)).and(new Long(65535, 0)));
    return ulongRemainder(tmp0_rem_0, other);
  }
  function UShort__inc_impl(this_0) {
    return _UShort___init__impl_(numberToShort(_UShort___get_data__impl_(this_0) + 1));
  }
  function UShort__dec_impl(this_0) {
    return _UShort___init__impl_(numberToShort(_UShort___get_data__impl_(this_0) - 1));
  }
  function UShort__rangeTo_impl(this_0, other) {
    var tmp = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    return new UIntRange(tmp, _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535));
  }
  function UShort__and_impl(this_0, other) {
    var tmp0_and_0 = _UShort___get_data__impl_(this_0);
    var tmp1_and_0 = _UShort___get_data__impl_(other);
    return _UShort___init__impl_(toShort(tmp0_and_0 & tmp1_and_0));
  }
  function UShort__or_impl(this_0, other) {
    var tmp0_or_0 = _UShort___get_data__impl_(this_0);
    var tmp1_or_0 = _UShort___get_data__impl_(other);
    return _UShort___init__impl_(toShort(tmp0_or_0 | tmp1_or_0));
  }
  function UShort__xor_impl(this_0, other) {
    var tmp0_xor_0 = _UShort___get_data__impl_(this_0);
    var tmp1_xor_0 = _UShort___get_data__impl_(other);
    return _UShort___init__impl_(toShort(tmp0_xor_0 ^ tmp1_xor_0));
  }
  function UShort__inv_impl(this_0) {
    var tmp0_inv_0 = _UShort___get_data__impl_(this_0);
    return _UShort___init__impl_(toShort(~tmp0_inv_0));
  }
  function UShort__toByte_impl(this_0) {
    return toByte(_UShort___get_data__impl_(this_0));
  }
  function UShort__toShort_impl(this_0) {
    return _UShort___get_data__impl_(this_0);
  }
  function UShort__toInt_impl(this_0) {
    return _UShort___get_data__impl_(this_0) & 65535;
  }
  function UShort__toLong_impl(this_0) {
    return toLong(_UShort___get_data__impl_(this_0)).and(new Long(65535, 0));
  }
  function UShort__toUByte_impl(this_0) {
    var tmp0_toUByte_0 = _UShort___get_data__impl_(this_0);
    return _UByte___init__impl_(toByte(tmp0_toUByte_0));
  }
  function UShort__toUShort_impl(this_0) {
    return this_0;
  }
  function UShort__toUInt_impl(this_0) {
    return _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
  }
  function UShort__toULong_impl(this_0) {
    return _ULong___init__impl_(toLong(_UShort___get_data__impl_(this_0)).and(new Long(65535, 0)));
  }
  function UShort__toFloat_impl(this_0) {
    return _UShort___get_data__impl_(this_0) & 65535;
  }
  function UShort__toDouble_impl(this_0) {
    return _UShort___get_data__impl_(this_0) & 65535;
  }
  function UShort__toString_impl(this_0) {
    return (_UShort___get_data__impl_(this_0) & 65535).toString();
  }
  function UShort__hashCode_impl(this_0) {
    return this_0;
  }
  function UShort__equals_impl(this_0, other) {
    if (!(other instanceof UShort))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof UShort ? other._data_2 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function UShort(data) {
    Companion_getInstance_12();
    this._data_2 = data;
  }
  UShort.prototype.compareTo_11 = function (other) {
    return UShort__compareTo_impl_0(this._data_2, other);
  };
  UShort.prototype.compareTo_26 = function (other) {
    return UShort__compareTo_impl_1(this, other);
  };
  UShort.prototype.toString = function () {
    return UShort__toString_impl(this._data_2);
  };
  UShort.prototype.hashCode = function () {
    return UShort__hashCode_impl(this._data_2);
  };
  UShort.prototype.equals = function (other) {
    return UShort__equals_impl(this._data_2, other);
  };
  UShort.$metadata$ = {
    simpleName: 'UShort',
    kind: 'class',
    interfaces: [Comparable]
  };
  function toUShort(_this_) {
    return _UShort___init__impl_(toShort(_this_));
  }
  function toUShort_0(_this_) {
    return _UShort___init__impl_(_this_.toShort_6());
  }
  function toUShort_1(_this_) {
    return _UShort___init__impl_(_this_);
  }
  function _get_array__2($this) {
    return $this._array_2;
  }
  function _set_index__2($this, _set___) {
    $this._index_3 = _set___;
  }
  function _get_index__2($this) {
    return $this._index_3;
  }
  function _UShortArray___init__impl_(storage) {
    return storage;
  }
  function _UShortArray___get_storage__impl_(this_0) {
    return this_0;
  }
  function _UShortArray___init__impl__0(size_0) {
    var tmp = _UShortArray___init__impl_(new Int16Array(size_0));
    return tmp;
  }
  function UShortArray__get_impl(this_0, index) {
    var tmp0_toUShort_0 = _UShortArray___get_storage__impl_(this_0)[index];
    return _UShort___init__impl_(tmp0_toUShort_0);
  }
  function UShortArray__set_impl(this_0, index, value) {
    var tmp = _UShortArray___get_storage__impl_(this_0);
    tmp[index] = _UShort___get_data__impl_(value);
  }
  function _UShortArray___get_size__impl_(this_0) {
    return _UShortArray___get_storage__impl_(this_0).length;
  }
  function UShortArray__iterator_impl(this_0) {
    return new Iterator_2(_UShortArray___get_storage__impl_(this_0));
  }
  function Iterator_2(array) {
    UShortIterator.call(this);
    this._array_2 = array;
    this._index_3 = 0;
  }
  Iterator_2.prototype.hasNext_49 = function () {
    return this._index_3 < this._array_2.length;
  };
  Iterator_2.prototype.nextUShort_0 = function () {
    var tmp;
    if (this._index_3 < this._array_2.length) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_3;
      tmp0_this._index_3 = tmp1 + 1 | 0;
      var tmp0_toUShort_0 = this._array_2[tmp1];
      tmp = _UShort___init__impl_(tmp0_toUShort_0);
    } else {
      throw NoSuchElementException_init_$Create$_0(this._index_3.toString());
    }
    return tmp;
  };
  Iterator_2.$metadata$ = {
    simpleName: 'Iterator',
    kind: 'class',
    interfaces: []
  };
  function UShortArray__contains_impl(this_0, element) {
    var tmp = isObject(new UShort(element)) ? new UShort(element) : THROW_CCE();
    if (!(tmp instanceof UShort))
      return false;
    else {
    }
    var tmp_0 = _UShortArray___get_storage__impl_(this_0);
    return contains_2(tmp_0, _UShort___get_data__impl_(element));
  }
  function UShortArray__contains_impl_0(this_0, element) {
    if (!(element instanceof UShort))
      return false;
    else {
    }
    var tmp = this_0._storage_2;
    return UShortArray__contains_impl(tmp, element instanceof UShort ? element._data_2 : THROW_CCE());
  }
  function UShortArray__containsAll_impl(this_0, elements) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_all_0 = isInterface(elements, Collection) ? elements : THROW_CCE();
      var tmp;
      if (isInterface(tmp0_all_0, Collection)) {
        tmp = tmp0_all_0.isEmpty_51();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = tmp0_all_0.iterator_69();
      while (tmp0_iterator_1.hasNext_49()) {
        var element_2 = tmp0_iterator_1.next_56();
        var tmp_0;
        if (element_2 instanceof UShort) {
          var tmp_1 = _UShortArray___get_storage__impl_(this_0);
          var tmp0_toShort_0_4 = element_2._data_2;
          tmp_0 = contains_2(tmp_1, _UShort___get_data__impl_(tmp0_toShort_0_4));
        } else {
          {
            tmp_0 = false;
          }
        }
        if (!tmp_0) {
          tmp$ret$0 = false;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  }
  function UShortArray__containsAll_impl_0(this_0, elements) {
    return UShortArray__containsAll_impl(this_0._storage_2, elements);
  }
  function UShortArray__isEmpty_impl(this_0) {
    return _UShortArray___get_storage__impl_(this_0).length === 0;
  }
  function UShortArray__toString_impl(this_0) {
    return '' + 'UShortArray(storage=' + toString_1(this_0) + ')';
  }
  function UShortArray__hashCode_impl(this_0) {
    return hashCode(this_0);
  }
  function UShortArray__equals_impl(this_0, other) {
    if (!(other instanceof UShortArray))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof UShortArray ? other._storage_2 : THROW_CCE();
    if (!equals_0(this_0, tmp0_other_with_cast))
      return false;
    return true;
  }
  function UShortArray(storage) {
    this._storage_2 = storage;
  }
  UShortArray.prototype._get_size__42 = function () {
    return _UShortArray___get_size__impl_(this._storage_2);
  };
  UShortArray.prototype.iterator_69 = function () {
    return UShortArray__iterator_impl(this._storage_2);
  };
  UShortArray.prototype.contains_25 = function (element) {
    return UShortArray__contains_impl(this._storage_2, element);
  };
  UShortArray.prototype.contains_58 = function (element) {
    return UShortArray__contains_impl_0(this, element);
  };
  UShortArray.prototype.containsAll_18 = function (elements) {
    return UShortArray__containsAll_impl(this._storage_2, elements);
  };
  UShortArray.prototype.containsAll_40 = function (elements) {
    return UShortArray__containsAll_impl_0(this, elements);
  };
  UShortArray.prototype.isEmpty_51 = function () {
    return UShortArray__isEmpty_impl(this._storage_2);
  };
  UShortArray.prototype.toString = function () {
    return UShortArray__toString_impl(this._storage_2);
  };
  UShortArray.prototype.hashCode = function () {
    return UShortArray__hashCode_impl(this._storage_2);
  };
  UShortArray.prototype.equals = function (other) {
    return UShortArray__equals_impl(this._storage_2, other);
  };
  UShortArray.$metadata$ = {
    simpleName: 'UShortArray',
    kind: 'class',
    interfaces: [Collection]
  };
  function uintCompare(v1, v2) {
    return compareTo_0(v1 ^ IntCompanionObject_getInstance()._MIN_VALUE_5, v2 ^ IntCompanionObject_getInstance()._MIN_VALUE_5);
  }
  function uintDivide(v1, v2) {
    var tmp = toLong(_UInt___get_data__impl_(v1)).and(new Long(-1, 0));
    var tmp0_toUInt_0 = tmp.div_32(toLong(_UInt___get_data__impl_(v2)).and(new Long(-1, 0)));
    return _UInt___init__impl_(tmp0_toUInt_0.toInt_6());
  }
  function uintRemainder(v1, v2) {
    var tmp = toLong(_UInt___get_data__impl_(v1)).and(new Long(-1, 0));
    var tmp0_toUInt_0 = tmp.rem_32(toLong(_UInt___get_data__impl_(v2)).and(new Long(-1, 0)));
    return _UInt___init__impl_(tmp0_toUInt_0.toInt_6());
  }
  function uintToDouble(v) {
    return (v & IntCompanionObject_getInstance()._MAX_VALUE_5) + (v >>> 31 << 30) * 2;
  }
  function ulongCompare(v1, v2) {
    return v1.xor(new Long(0, -2147483648)).compareTo_57(v2.xor(new Long(0, -2147483648)));
  }
  function ulongDivide(v1, v2) {
    var dividend = _ULong___get_data__impl_(v1);
    var divisor = _ULong___get_data__impl_(v2);
    if (divisor.compareTo_57(new Long(0, 0)) < 0) {
      var tmp;
      if (ulongCompare(_ULong___get_data__impl_(v1), _ULong___get_data__impl_(v2)) < 0) {
        tmp = _ULong___init__impl_(new Long(0, 0));
      } else {
        {
          tmp = _ULong___init__impl_(new Long(1, 0));
        }
      }
      return tmp;
    }if (dividend.compareTo_57(new Long(0, 0)) >= 0) {
      return _ULong___init__impl_(dividend.div_32(divisor));
    }var quotient = dividend.ushr_0(1).div_32(divisor).shl_0(1);
    var rem = dividend.minus_34(quotient.times_32(divisor));
    var tmp_0;
    var tmp0_compareTo_0 = _ULong___init__impl_(rem);
    var tmp1_compareTo_0 = _ULong___init__impl_(divisor);
    if (ulongCompare(_ULong___get_data__impl_(tmp0_compareTo_0), _ULong___get_data__impl_(tmp1_compareTo_0)) >= 0) {
      tmp_0 = 1;
    } else {
      {
        tmp_0 = 0;
      }
    }
    var tmp2_plus_0 = tmp_0;
    return _ULong___init__impl_(quotient.plus_38(toLong(tmp2_plus_0)));
  }
  function ulongRemainder(v1, v2) {
    var dividend = _ULong___get_data__impl_(v1);
    var divisor = _ULong___get_data__impl_(v2);
    if (divisor.compareTo_57(new Long(0, 0)) < 0) {
      var tmp;
      if (ulongCompare(_ULong___get_data__impl_(v1), _ULong___get_data__impl_(v2)) < 0) {
        tmp = v1;
      } else {
        {
          tmp = _ULong___init__impl_(_ULong___get_data__impl_(v1).minus_34(_ULong___get_data__impl_(v2)));
        }
      }
      return tmp;
    }if (dividend.compareTo_57(new Long(0, 0)) >= 0) {
      return _ULong___init__impl_(dividend.rem_32(divisor));
    }var quotient = dividend.ushr_0(1).div_32(divisor).shl_0(1);
    var rem = dividend.minus_34(quotient.times_32(divisor));
    var tmp_0;
    var tmp0_compareTo_0 = _ULong___init__impl_(rem);
    var tmp1_compareTo_0 = _ULong___init__impl_(divisor);
    if (ulongCompare(_ULong___get_data__impl_(tmp0_compareTo_0), _ULong___get_data__impl_(tmp1_compareTo_0)) >= 0) {
      tmp_0 = divisor;
    } else {
      {
        tmp_0 = new Long(0, 0);
      }
    }
    return _ULong___init__impl_(rem.minus_34(tmp_0));
  }
  function ulongToDouble(v) {
    return v.ushr_0(11).toDouble_6() * 2048 + v.and(new Long(2047, 0)).toDouble_6();
  }
  function ulongToString(v) {
    return ulongToString_0(v, 10);
  }
  function ulongToString_0(v, base) {
    if (v.compareTo_57(new Long(0, 0)) >= 0)
      return toString_2(v, base);
    var tmp0_div_0 = v.ushr_0(1);
    var quotient = tmp0_div_0.div_32(toLong(base)).shl_0(1);
    var tmp1_times_0 = quotient;
    var rem = v.minus_34(tmp1_times_0.times_32(toLong(base)));
    if (rem.compareTo_57(toLong(base)) >= 0) {
      var tmp2_minus_0 = rem;
      rem = tmp2_minus_0.minus_34(toLong(base));
      var tmp3_plus_0 = quotient;
      var tmp4_plus_0 = 1;
      quotient = tmp3_plus_0.plus_38(toLong(tmp4_plus_0));
    }return toString_2(quotient, base) + toString_2(rem, base);
  }
  function doubleToUInt(v) {
    var tmp;
    if (isNaN_0(v)) {
      tmp = _UInt___init__impl_(0);
    } else {
      var tmp0_toDouble_0 = _UInt___init__impl_(0);
      if (v <= uintToDouble(_UInt___get_data__impl_(tmp0_toDouble_0))) {
        tmp = _UInt___init__impl_(0);
      } else {
        var tmp1_toDouble_0 = _UInt___init__impl_(-1);
        if (v >= uintToDouble(_UInt___get_data__impl_(tmp1_toDouble_0))) {
          tmp = _UInt___init__impl_(-1);
        } else {
          if (v <= IntCompanionObject_getInstance()._MAX_VALUE_5) {
            var tmp2_toUInt_0 = numberToInt(v);
            tmp = _UInt___init__impl_(tmp2_toUInt_0);
          } else {
            {
              var tmp3_toUInt_0 = numberToInt(v - IntCompanionObject_getInstance()._MAX_VALUE_5);
              var tmp5_plus_0 = _UInt___init__impl_(tmp3_toUInt_0);
              var tmp4_toUInt_0 = IntCompanionObject_getInstance()._MAX_VALUE_5;
              var tmp6_plus_0 = _UInt___init__impl_(tmp4_toUInt_0);
              tmp = _UInt___init__impl_(_UInt___get_data__impl_(tmp5_plus_0) + _UInt___get_data__impl_(tmp6_plus_0) | 0);
            }
          }
        }
      }
    }
    return tmp;
  }
  function doubleToULong(v) {
    var tmp;
    if (isNaN_0(v)) {
      tmp = _ULong___init__impl_(new Long(0, 0));
    } else {
      var tmp0_toDouble_0 = _ULong___init__impl_(new Long(0, 0));
      if (v <= ulongToDouble(_ULong___get_data__impl_(tmp0_toDouble_0))) {
        tmp = _ULong___init__impl_(new Long(0, 0));
      } else {
        var tmp1_toDouble_0 = _ULong___init__impl_(new Long(-1, -1));
        if (v >= ulongToDouble(_ULong___get_data__impl_(tmp1_toDouble_0))) {
          tmp = _ULong___init__impl_(new Long(-1, -1));
        } else {
          if (v < 9.223372036854776E18) {
            var tmp2_toULong_0 = numberToLong(v);
            tmp = _ULong___init__impl_(tmp2_toULong_0);
          } else {
            {
              var tmp3_toULong_0 = numberToLong(v - 9.223372036854776E18);
              var tmp4_plus_0 = _ULong___init__impl_(tmp3_toULong_0);
              var tmp5_plus_0 = _ULong___init__impl_(new Long(0, -2147483648));
              tmp = _ULong___init__impl_(_ULong___get_data__impl_(tmp4_plus_0).plus_38(_ULong___get_data__impl_(tmp5_plus_0)));
            }
          }
        }
      }
    }
    return tmp;
  }
  function ExperimentalUnsignedTypes() {
  }
  ExperimentalUnsignedTypes.$metadata$ = {
    simpleName: 'ExperimentalUnsignedTypes',
    kind: 'class',
    interfaces: [Annotation]
  };
  function Annotation() {
  }
  Annotation.$metadata$ = {
    simpleName: 'Annotation',
    kind: 'interface',
    interfaces: []
  };
  function CharSequence() {
  }
  CharSequence.$metadata$ = {
    simpleName: 'CharSequence',
    kind: 'interface',
    interfaces: []
  };
  function Comparable() {
  }
  Comparable.$metadata$ = {
    simpleName: 'Comparable',
    kind: 'interface',
    interfaces: []
  };
  function Iterator_3() {
  }
  Iterator_3.$metadata$ = {
    simpleName: 'Iterator',
    kind: 'interface',
    interfaces: []
  };
  function ListIterator() {
  }
  ListIterator.$metadata$ = {
    simpleName: 'ListIterator',
    kind: 'interface',
    interfaces: [Iterator_3]
  };
  function MutableListIterator() {
  }
  MutableListIterator.$metadata$ = {
    simpleName: 'MutableListIterator',
    kind: 'interface',
    interfaces: [ListIterator, MutableIterator]
  };
  function MutableIterator() {
  }
  MutableIterator.$metadata$ = {
    simpleName: 'MutableIterator',
    kind: 'interface',
    interfaces: [Iterator_3]
  };
  function Number_0() {
  }
  Number_0.$metadata$ = {
    simpleName: 'Number',
    kind: 'class',
    interfaces: []
  };
  function SinceKotlin(version) {
    this._version_0 = version;
  }
  SinceKotlin.prototype._get_version__0 = function () {
    return this._version_0;
  };
  SinceKotlin.$metadata$ = {
    simpleName: 'SinceKotlin',
    kind: 'class',
    interfaces: [Annotation]
  };
  function Suppress(names) {
    this._names = names;
  }
  Suppress.prototype._get_names_ = function () {
    return this._names;
  };
  Suppress.$metadata$ = {
    simpleName: 'Suppress',
    kind: 'class',
    interfaces: [Annotation]
  };
  var DeprecationLevel_WARNING_instance;
  var DeprecationLevel_ERROR_instance;
  var DeprecationLevel_HIDDEN_instance;
  function values_5() {
    return [DeprecationLevel_WARNING_getInstance(), DeprecationLevel_ERROR_getInstance(), DeprecationLevel_HIDDEN_getInstance()];
  }
  function valueOf_5(value) {
    switch (value) {
      case 'WARNING':
        return DeprecationLevel_WARNING_getInstance();
      case 'ERROR':
        return DeprecationLevel_ERROR_getInstance();
      case 'HIDDEN':
        return DeprecationLevel_HIDDEN_getInstance();
      default:return THROW_ISE();
    }
  }
  var DeprecationLevel_entriesInitialized;
  function DeprecationLevel_initEntries() {
    if (DeprecationLevel_entriesInitialized)
      return Unit_getInstance();
    DeprecationLevel_entriesInitialized = true;
    DeprecationLevel_WARNING_instance = new DeprecationLevel('WARNING', 0);
    DeprecationLevel_ERROR_instance = new DeprecationLevel('ERROR', 1);
    DeprecationLevel_HIDDEN_instance = new DeprecationLevel('HIDDEN', 2);
  }
  function DeprecationLevel(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  DeprecationLevel.$metadata$ = {
    simpleName: 'DeprecationLevel',
    kind: 'class',
    interfaces: []
  };
  function PublishedApi() {
  }
  PublishedApi.$metadata$ = {
    simpleName: 'PublishedApi',
    kind: 'class',
    interfaces: [Annotation]
  };
  function ParameterName(name) {
    this._name = name;
  }
  ParameterName.prototype._get_name__23 = function () {
    return this._name;
  };
  ParameterName.$metadata$ = {
    simpleName: 'ParameterName',
    kind: 'class',
    interfaces: [Annotation]
  };
  function Deprecated_init_$Init$(message, replaceWith, level, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      replaceWith = new ReplaceWith('', []);
    if (!(($mask0 & 4) === 0))
      level = DeprecationLevel_WARNING_getInstance();
    Deprecated.call($this, message, replaceWith, level);
    return $this;
  }
  function Deprecated_init_$Create$(message, replaceWith, level, $mask0, $marker) {
    return Deprecated_init_$Init$(message, replaceWith, level, $mask0, $marker, Object.create(Deprecated.prototype));
  }
  function Deprecated(message, replaceWith, level) {
    this._message_1 = message;
    this._replaceWith = replaceWith;
    this._level_2 = level;
  }
  Deprecated.prototype._get_message__16 = function () {
    return this._message_1;
  };
  Deprecated.prototype._get_replaceWith_ = function () {
    return this._replaceWith;
  };
  Deprecated.prototype._get_level__2 = function () {
    return this._level_2;
  };
  Deprecated.$metadata$ = {
    simpleName: 'Deprecated',
    kind: 'class',
    interfaces: [Annotation]
  };
  function ReplaceWith(expression, imports) {
    this._expression = expression;
    this._imports = imports;
  }
  ReplaceWith.prototype._get_expression_ = function () {
    return this._expression;
  };
  ReplaceWith.prototype._get_imports_ = function () {
    return this._imports;
  };
  ReplaceWith.$metadata$ = {
    simpleName: 'ReplaceWith',
    kind: 'class',
    interfaces: [Annotation]
  };
  function ExtensionFunctionType() {
  }
  ExtensionFunctionType.$metadata$ = {
    simpleName: 'ExtensionFunctionType',
    kind: 'class',
    interfaces: [Annotation]
  };
  function DslMarker() {
  }
  DslMarker.$metadata$ = {
    simpleName: 'DslMarker',
    kind: 'class',
    interfaces: [Annotation]
  };
  function UnsafeVariance() {
  }
  UnsafeVariance.$metadata$ = {
    simpleName: 'UnsafeVariance',
    kind: 'class',
    interfaces: [Annotation]
  };
  function DeprecatedSinceKotlin_init_$Init$(warningSince, errorSince, hiddenSince, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      warningSince = '';
    if (!(($mask0 & 2) === 0))
      errorSince = '';
    if (!(($mask0 & 4) === 0))
      hiddenSince = '';
    DeprecatedSinceKotlin.call($this, warningSince, errorSince, hiddenSince);
    return $this;
  }
  function DeprecatedSinceKotlin_init_$Create$(warningSince, errorSince, hiddenSince, $mask0, $marker) {
    return DeprecatedSinceKotlin_init_$Init$(warningSince, errorSince, hiddenSince, $mask0, $marker, Object.create(DeprecatedSinceKotlin.prototype));
  }
  function DeprecatedSinceKotlin(warningSince, errorSince, hiddenSince) {
    this._warningSince = warningSince;
    this._errorSince = errorSince;
    this._hiddenSince = hiddenSince;
  }
  DeprecatedSinceKotlin.prototype._get_warningSince_ = function () {
    return this._warningSince;
  };
  DeprecatedSinceKotlin.prototype._get_errorSince_ = function () {
    return this._errorSince;
  };
  DeprecatedSinceKotlin.prototype._get_hiddenSince_ = function () {
    return this._hiddenSince;
  };
  DeprecatedSinceKotlin.$metadata$ = {
    simpleName: 'DeprecatedSinceKotlin',
    kind: 'class',
    interfaces: [Annotation]
  };
  function DeprecationLevel_WARNING_getInstance() {
    DeprecationLevel_initEntries();
    return DeprecationLevel_WARNING_instance;
  }
  function DeprecationLevel_ERROR_getInstance() {
    DeprecationLevel_initEntries();
    return DeprecationLevel_ERROR_instance;
  }
  function DeprecationLevel_HIDDEN_getInstance() {
    DeprecationLevel_initEntries();
    return DeprecationLevel_HIDDEN_instance;
  }
  function ByteIterator() {
  }
  ByteIterator.prototype.next_56 = function () {
    return this.nextByte_0();
  };
  ByteIterator.$metadata$ = {
    simpleName: 'ByteIterator',
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function IntIterator() {
  }
  IntIterator.prototype.next_56 = function () {
    return this.nextInt_10();
  };
  IntIterator.$metadata$ = {
    simpleName: 'IntIterator',
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function DoubleIterator() {
  }
  DoubleIterator.prototype.next_56 = function () {
    return this.nextDouble_9();
  };
  DoubleIterator.$metadata$ = {
    simpleName: 'DoubleIterator',
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function FloatIterator() {
  }
  FloatIterator.prototype.next_56 = function () {
    return this.nextFloat_3();
  };
  FloatIterator.$metadata$ = {
    simpleName: 'FloatIterator',
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function LongIterator() {
  }
  LongIterator.prototype.next_56 = function () {
    return this.nextLong_10();
  };
  LongIterator.$metadata$ = {
    simpleName: 'LongIterator',
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function CharIterator() {
  }
  CharIterator.prototype.next_56 = function () {
    return this.nextChar_1();
  };
  CharIterator.$metadata$ = {
    simpleName: 'CharIterator',
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function BooleanIterator() {
  }
  BooleanIterator.prototype.next_56 = function () {
    return this.nextBoolean_3();
  };
  BooleanIterator.$metadata$ = {
    simpleName: 'BooleanIterator',
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function ShortIterator() {
  }
  ShortIterator.prototype.next_56 = function () {
    return this.nextShort_0();
  };
  ShortIterator.$metadata$ = {
    simpleName: 'ShortIterator',
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function _get_finalElement__1($this) {
    return $this._finalElement_1;
  }
  function _set_hasNext__1($this, _set___) {
    $this._hasNext_1 = _set___;
  }
  function _get_hasNext__1($this) {
    return $this._hasNext_1;
  }
  function _set_next__1($this, _set___) {
    $this._next_1 = _set___;
  }
  function _get_next__1($this) {
    return $this._next_1;
  }
  function IntProgressionIterator(first_1, last_0, step_0) {
    IntIterator.call(this);
    this._step_3 = step_0;
    this._finalElement_1 = last_0;
    this._hasNext_1 = this._step_3 > 0 ? first_1 <= last_0 : first_1 >= last_0;
    this._next_1 = this._hasNext_1 ? first_1 : this._finalElement_1;
  }
  IntProgressionIterator.prototype._get_step__11 = function () {
    return this._step_3;
  };
  IntProgressionIterator.prototype.hasNext_49 = function () {
    return this._hasNext_1;
  };
  IntProgressionIterator.prototype.nextInt_10 = function () {
    var value = this._next_1;
    if (value === this._finalElement_1) {
      if (!this._hasNext_1)
        throw NoSuchElementException_init_$Create$();
      this._hasNext_1 = false;
    } else {
      var tmp0_this = this;
      tmp0_this._next_1 = tmp0_this._next_1 + this._step_3 | 0;
    }
    return value;
  };
  IntProgressionIterator.$metadata$ = {
    simpleName: 'IntProgressionIterator',
    kind: 'class',
    interfaces: []
  };
  function _get_finalElement__2($this) {
    return $this._finalElement_2;
  }
  function _set_hasNext__2($this, _set___) {
    $this._hasNext_2 = _set___;
  }
  function _get_hasNext__2($this) {
    return $this._hasNext_2;
  }
  function _set_next__2($this, _set___) {
    $this._next_2 = _set___;
  }
  function _get_next__2($this) {
    return $this._next_2;
  }
  function LongProgressionIterator(first_1, last_0, step_0) {
    LongIterator.call(this);
    this._step_4 = step_0;
    this._finalElement_2 = last_0;
    this._hasNext_2 = this._step_4.compareTo_57(new Long(0, 0)) > 0 ? first_1.compareTo_57(last_0) <= 0 : first_1.compareTo_57(last_0) >= 0;
    this._next_2 = this._hasNext_2 ? first_1 : this._finalElement_2;
  }
  LongProgressionIterator.prototype._get_step__11 = function () {
    return this._step_4;
  };
  LongProgressionIterator.prototype.hasNext_49 = function () {
    return this._hasNext_2;
  };
  LongProgressionIterator.prototype.nextLong_10 = function () {
    var value = this._next_2;
    if (value.equals(this._finalElement_2)) {
      if (!this._hasNext_2)
        throw NoSuchElementException_init_$Create$();
      this._hasNext_2 = false;
    } else {
      var tmp0_this = this;
      tmp0_this._next_2 = tmp0_this._next_2.plus_38(this._step_4);
    }
    return value;
  };
  LongProgressionIterator.$metadata$ = {
    simpleName: 'LongProgressionIterator',
    kind: 'class',
    interfaces: []
  };
  function _get_finalElement__3($this) {
    return $this._finalElement_3;
  }
  function _set_hasNext__3($this, _set___) {
    $this._hasNext_3 = _set___;
  }
  function _get_hasNext__3($this) {
    return $this._hasNext_3;
  }
  function _set_next__3($this, _set___) {
    $this._next_3 = _set___;
  }
  function _get_next__3($this) {
    return $this._next_3;
  }
  function CharProgressionIterator(first_1, last_0, step_0) {
    CharIterator.call(this);
    this._step_5 = step_0;
    this._finalElement_3 = last_0.toInt_6();
    this._hasNext_3 = this._step_5 > 0 ? first_1.compareTo_18(last_0) <= 0 : first_1.compareTo_18(last_0) >= 0;
    this._next_3 = this._hasNext_3 ? first_1.toInt_6() : this._finalElement_3;
  }
  CharProgressionIterator.prototype._get_step__11 = function () {
    return this._step_5;
  };
  CharProgressionIterator.prototype.hasNext_49 = function () {
    return this._hasNext_3;
  };
  CharProgressionIterator.prototype.nextChar_1 = function () {
    var value = this._next_3;
    if (value === this._finalElement_3) {
      if (!this._hasNext_3)
        throw NoSuchElementException_init_$Create$();
      this._hasNext_3 = false;
    } else {
      var tmp0_this = this;
      tmp0_this._next_3 = tmp0_this._next_3 + this._step_5 | 0;
    }
    return numberToChar(value);
  };
  CharProgressionIterator.$metadata$ = {
    simpleName: 'CharProgressionIterator',
    kind: 'class',
    interfaces: []
  };
  function Companion_14() {
    Companion_instance_13 = this;
  }
  Companion_14.prototype.fromClosedRange_1 = function (rangeStart, rangeEnd, step_0) {
    return new IntProgression(rangeStart, rangeEnd, step_0);
  };
  Companion_14.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_13;
  function Companion_getInstance_13() {
    if (Companion_instance_13 == null)
      new Companion_14();
    return Companion_instance_13;
  }
  function IntProgression(start, endInclusive, step_0) {
    Companion_getInstance_13();
    if (step_0 === 0)
      throw IllegalArgumentException_init_$Create$_0('Step must be non-zero.');
    if (step_0 === IntCompanionObject_getInstance()._MIN_VALUE_5)
      throw IllegalArgumentException_init_$Create$_0('Step must be greater than Int.MIN_VALUE to avoid overflow on negation.');
    this._first_2 = start;
    this._last_1 = getProgressionLastElement_1(start, endInclusive, step_0);
    this._step_6 = step_0;
  }
  IntProgression.prototype._get_first__9 = function () {
    return this._first_2;
  };
  IntProgression.prototype._get_last__10 = function () {
    return this._last_1;
  };
  IntProgression.prototype._get_step__11 = function () {
    return this._step_6;
  };
  IntProgression.prototype.iterator_69 = function () {
    return new IntProgressionIterator(this._first_2, this._last_1, this._step_6);
  };
  IntProgression.prototype.isEmpty_51 = function () {
    return this._step_6 > 0 ? this._first_2 > this._last_1 : this._first_2 < this._last_1;
  };
  IntProgression.prototype.equals = function (other) {
    var tmp;
    if (other instanceof IntProgression) {
      tmp = (this.isEmpty_51() ? other.isEmpty_51() : false) ? true : (this._first_2 === other._first_2 ? this._last_1 === other._last_1 : false) ? this._step_6 === other._step_6 : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  IntProgression.prototype.hashCode = function () {
    return this.isEmpty_51() ? -1 : imul(31, imul(31, this._first_2) + this._last_1 | 0) + this._step_6 | 0;
  };
  IntProgression.prototype.toString = function () {
    return this._step_6 > 0 ? '' + this._first_2 + '..' + this._last_1 + ' step ' + this._step_6 : '' + this._first_2 + ' downTo ' + this._last_1 + ' step ' + (-this._step_6 | 0);
  };
  IntProgression.$metadata$ = {
    simpleName: 'IntProgression',
    kind: 'class',
    interfaces: [Iterable]
  };
  function Companion_15() {
    Companion_instance_14 = this;
  }
  Companion_15.prototype.fromClosedRange_2 = function (rangeStart, rangeEnd, step_0) {
    return new LongProgression(rangeStart, rangeEnd, step_0);
  };
  Companion_15.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_14;
  function Companion_getInstance_14() {
    if (Companion_instance_14 == null)
      new Companion_15();
    return Companion_instance_14;
  }
  function LongProgression(start, endInclusive, step_0) {
    Companion_getInstance_14();
    if (step_0.equals(new Long(0, 0)))
      throw IllegalArgumentException_init_$Create$_0('Step must be non-zero.');
    if (step_0.equals(new Long(0, -2147483648)))
      throw IllegalArgumentException_init_$Create$_0('Step must be greater than Long.MIN_VALUE to avoid overflow on negation.');
    this._first_3 = start;
    this._last_2 = getProgressionLastElement_2(start.toLong_6(), endInclusive.toLong_6(), step_0).toLong_6();
    this._step_7 = step_0;
  }
  LongProgression.prototype._get_first__9 = function () {
    return this._first_3;
  };
  LongProgression.prototype._get_last__10 = function () {
    return this._last_2;
  };
  LongProgression.prototype._get_step__11 = function () {
    return this._step_7;
  };
  LongProgression.prototype.iterator_69 = function () {
    return new LongProgressionIterator(this._first_3, this._last_2, this._step_7);
  };
  LongProgression.prototype.isEmpty_51 = function () {
    return this._step_7.compareTo_57(new Long(0, 0)) > 0 ? this._first_3.compareTo_57(this._last_2) > 0 : this._first_3.compareTo_57(this._last_2) < 0;
  };
  LongProgression.prototype.equals = function (other) {
    var tmp;
    if (other instanceof LongProgression) {
      tmp = (this.isEmpty_51() ? other.isEmpty_51() : false) ? true : (this._first_3.equals(other._first_3) ? this._last_2.equals(other._last_2) : false) ? this._step_7.equals(other._step_7) : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  LongProgression.prototype.hashCode = function () {
    return this.isEmpty_51() ? -1 : numberToLong(31).times_32(numberToLong(31).times_32(this._first_3.xor(this._first_3.ushr_0(32))).plus_38(this._last_2.xor(this._last_2.ushr_0(32)))).plus_38(this._step_7.xor(this._step_7.ushr_0(32))).toInt_6();
  };
  LongProgression.prototype.toString = function () {
    return this._step_7.compareTo_57(new Long(0, 0)) > 0 ? '' + this._first_3 + '..' + this._last_2 + ' step ' + this._step_7 : '' + this._first_3 + ' downTo ' + this._last_2 + ' step ' + this._step_7.unaryMinus_4();
  };
  LongProgression.$metadata$ = {
    simpleName: 'LongProgression',
    kind: 'class',
    interfaces: [Iterable]
  };
  function Companion_16() {
    Companion_instance_15 = this;
  }
  Companion_16.prototype.fromClosedRange_3 = function (rangeStart, rangeEnd, step_0) {
    return new CharProgression(rangeStart, rangeEnd, step_0);
  };
  Companion_16.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_15;
  function Companion_getInstance_15() {
    if (Companion_instance_15 == null)
      new Companion_16();
    return Companion_instance_15;
  }
  function CharProgression(start, endInclusive, step_0) {
    Companion_getInstance_15();
    if (step_0 === 0)
      throw IllegalArgumentException_init_$Create$_0('Step must be non-zero.');
    if (step_0 === IntCompanionObject_getInstance()._MIN_VALUE_5)
      throw IllegalArgumentException_init_$Create$_0('Step must be greater than Int.MIN_VALUE to avoid overflow on negation.');
    this._first_4 = start;
    this._last_3 = numberToChar(getProgressionLastElement_1(start.toInt_6(), endInclusive.toInt_6(), step_0));
    this._step_8 = step_0;
  }
  CharProgression.prototype._get_first__9 = function () {
    return this._first_4;
  };
  CharProgression.prototype._get_last__10 = function () {
    return this._last_3;
  };
  CharProgression.prototype._get_step__11 = function () {
    return this._step_8;
  };
  CharProgression.prototype.iterator_69 = function () {
    return new CharProgressionIterator(this._first_4, this._last_3, this._step_8);
  };
  CharProgression.prototype.isEmpty_51 = function () {
    return this._step_8 > 0 ? this._first_4.compareTo_18(this._last_3) > 0 : this._first_4.compareTo_18(this._last_3) < 0;
  };
  CharProgression.prototype.equals = function (other) {
    var tmp;
    if (other instanceof CharProgression) {
      tmp = (this.isEmpty_51() ? other.isEmpty_51() : false) ? true : (this._first_4.equals(other._first_4) ? this._last_3.equals(other._last_3) : false) ? this._step_8 === other._step_8 : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  CharProgression.prototype.hashCode = function () {
    return this.isEmpty_51() ? -1 : imul(31, imul(31, this._first_4.toInt_6()) + this._last_3.toInt_6() | 0) + this._step_8 | 0;
  };
  CharProgression.prototype.toString = function () {
    return this._step_8 > 0 ? '' + this._first_4 + '..' + this._last_3 + ' step ' + this._step_8 : '' + this._first_4 + ' downTo ' + this._last_3 + ' step ' + (-this._step_8 | 0);
  };
  CharProgression.$metadata$ = {
    simpleName: 'CharProgression',
    kind: 'class',
    interfaces: [Iterable]
  };
  ClosedRange.prototype.contains_50 = function (value) {
    return compareTo_0(value, this._get_start__6()) >= 0 ? compareTo_0(value, this._get_endInclusive__6()) <= 0 : false;
  };
  ClosedRange.prototype.isEmpty_51 = function () {
    return compareTo_0(this._get_start__6(), this._get_endInclusive__6()) > 0;
  };
  function ClosedRange() {
  }
  ClosedRange.$metadata$ = {
    simpleName: 'ClosedRange',
    kind: 'interface',
    interfaces: []
  };
  function Companion_17() {
    Companion_instance_16 = this;
    this._EMPTY_1 = new IntRange(1, 0);
  }
  Companion_17.prototype._get_EMPTY__3 = function () {
    return this._EMPTY_1;
  };
  Companion_17.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_16;
  function Companion_getInstance_16() {
    if (Companion_instance_16 == null)
      new Companion_17();
    return Companion_instance_16;
  }
  function IntRange(start, endInclusive) {
    Companion_getInstance_16();
    IntProgression.call(this, start, endInclusive, 1);
  }
  IntRange.prototype._get_start__6 = function () {
    return this._get_first__9();
  };
  IntRange.prototype._get_endInclusive__6 = function () {
    return this._get_last__10();
  };
  IntRange.prototype.contains_28 = function (value) {
    return this._get_first__9() <= value ? value <= this._get_last__10() : false;
  };
  IntRange.prototype.contains_50 = function (value) {
    return this.contains_28(typeof value === 'number' ? value : THROW_CCE());
  };
  IntRange.prototype.isEmpty_51 = function () {
    return this._get_first__9() > this._get_last__10();
  };
  IntRange.prototype.equals = function (other) {
    var tmp;
    if (other instanceof IntRange) {
      tmp = (this.isEmpty_51() ? other.isEmpty_51() : false) ? true : this._get_first__9() === other._get_first__9() ? this._get_last__10() === other._get_last__10() : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  IntRange.prototype.hashCode = function () {
    return this.isEmpty_51() ? -1 : imul(31, this._get_first__9()) + this._get_last__10() | 0;
  };
  IntRange.prototype.toString = function () {
    return '' + this._get_first__9() + '..' + this._get_last__10();
  };
  IntRange.$metadata$ = {
    simpleName: 'IntRange',
    kind: 'class',
    interfaces: [ClosedRange]
  };
  function Companion_18() {
    Companion_instance_17 = this;
    this._EMPTY_2 = new LongRange(new Long(1, 0), new Long(0, 0));
  }
  Companion_18.prototype._get_EMPTY__3 = function () {
    return this._EMPTY_2;
  };
  Companion_18.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_17;
  function Companion_getInstance_17() {
    if (Companion_instance_17 == null)
      new Companion_18();
    return Companion_instance_17;
  }
  function LongRange(start, endInclusive) {
    Companion_getInstance_17();
    LongProgression.call(this, start, endInclusive, new Long(1, 0));
  }
  LongRange.prototype._get_start__6 = function () {
    return this._get_first__9();
  };
  LongRange.prototype._get_endInclusive__6 = function () {
    return this._get_last__10();
  };
  LongRange.prototype.contains_30 = function (value) {
    return this._get_first__9().compareTo_57(value) <= 0 ? value.compareTo_57(this._get_last__10()) <= 0 : false;
  };
  LongRange.prototype.contains_50 = function (value) {
    return this.contains_30(value instanceof Long ? value : THROW_CCE());
  };
  LongRange.prototype.isEmpty_51 = function () {
    return this._get_first__9().compareTo_57(this._get_last__10()) > 0;
  };
  LongRange.prototype.equals = function (other) {
    var tmp;
    if (other instanceof LongRange) {
      tmp = (this.isEmpty_51() ? other.isEmpty_51() : false) ? true : this._get_first__9().equals(other._get_first__9()) ? this._get_last__10().equals(other._get_last__10()) : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  LongRange.prototype.hashCode = function () {
    return this.isEmpty_51() ? -1 : numberToLong(31).times_32(this._get_first__9().xor(this._get_first__9().ushr_0(32))).plus_38(this._get_last__10().xor(this._get_last__10().ushr_0(32))).toInt_6();
  };
  LongRange.prototype.toString = function () {
    return '' + this._get_first__9() + '..' + this._get_last__10();
  };
  LongRange.$metadata$ = {
    simpleName: 'LongRange',
    kind: 'class',
    interfaces: [ClosedRange]
  };
  function Companion_19() {
    Companion_instance_18 = this;
    this._EMPTY_3 = new CharRange(new Char_0(1), new Char_0(0));
  }
  Companion_19.prototype._get_EMPTY__3 = function () {
    return this._EMPTY_3;
  };
  Companion_19.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_18;
  function Companion_getInstance_18() {
    if (Companion_instance_18 == null)
      new Companion_19();
    return Companion_instance_18;
  }
  function CharRange(start, endInclusive) {
    Companion_getInstance_18();
    CharProgression.call(this, start, endInclusive, 1);
  }
  CharRange.prototype._get_start__6 = function () {
    return this._get_first__9();
  };
  CharRange.prototype._get_endInclusive__6 = function () {
    return this._get_last__10();
  };
  CharRange.prototype.contains_32 = function (value) {
    return this._get_first__9().compareTo_18(value) <= 0 ? value.compareTo_18(this._get_last__10()) <= 0 : false;
  };
  CharRange.prototype.contains_50 = function (value) {
    return this.contains_32(value instanceof Char_0 ? value : THROW_CCE());
  };
  CharRange.prototype.isEmpty_51 = function () {
    return this._get_first__9().compareTo_18(this._get_last__10()) > 0;
  };
  CharRange.prototype.equals = function (other) {
    var tmp;
    if (other instanceof CharRange) {
      tmp = (this.isEmpty_51() ? other.isEmpty_51() : false) ? true : this._get_first__9().equals(other._get_first__9()) ? this._get_last__10().equals(other._get_last__10()) : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  CharRange.prototype.hashCode = function () {
    return this.isEmpty_51() ? -1 : imul(31, this._get_first__9().toInt_6()) + this._get_last__10().toInt_6() | 0;
  };
  CharRange.prototype.toString = function () {
    return '' + this._get_first__9() + '..' + this._get_last__10();
  };
  CharRange.$metadata$ = {
    simpleName: 'CharRange',
    kind: 'class',
    interfaces: [ClosedRange]
  };
  function Unit() {
    Unit_instance = this;
  }
  Unit.prototype.toString = function () {
    return 'kotlin.Unit';
  };
  Unit.$metadata$ = {
    simpleName: 'Unit',
    kind: 'object',
    interfaces: []
  };
  var Unit_instance;
  function Unit_getInstance() {
    if (Unit_instance == null)
      new Unit();
    return Unit_instance;
  }
  function Target(allowedTargets) {
    this._allowedTargets = allowedTargets;
  }
  Target.prototype._get_allowedTargets_ = function () {
    return this._allowedTargets;
  };
  Target.$metadata$ = {
    simpleName: 'Target',
    kind: 'class',
    interfaces: [Annotation]
  };
  var AnnotationTarget_CLASS_instance;
  var AnnotationTarget_ANNOTATION_CLASS_instance;
  var AnnotationTarget_TYPE_PARAMETER_instance;
  var AnnotationTarget_PROPERTY_instance;
  var AnnotationTarget_FIELD_instance;
  var AnnotationTarget_LOCAL_VARIABLE_instance;
  var AnnotationTarget_VALUE_PARAMETER_instance;
  var AnnotationTarget_CONSTRUCTOR_instance;
  var AnnotationTarget_FUNCTION_instance;
  var AnnotationTarget_PROPERTY_GETTER_instance;
  var AnnotationTarget_PROPERTY_SETTER_instance;
  var AnnotationTarget_TYPE_instance;
  var AnnotationTarget_EXPRESSION_instance;
  var AnnotationTarget_FILE_instance;
  var AnnotationTarget_TYPEALIAS_instance;
  function values_6() {
    return [AnnotationTarget_CLASS_getInstance(), AnnotationTarget_ANNOTATION_CLASS_getInstance(), AnnotationTarget_TYPE_PARAMETER_getInstance(), AnnotationTarget_PROPERTY_getInstance(), AnnotationTarget_FIELD_getInstance(), AnnotationTarget_LOCAL_VARIABLE_getInstance(), AnnotationTarget_VALUE_PARAMETER_getInstance(), AnnotationTarget_CONSTRUCTOR_getInstance(), AnnotationTarget_FUNCTION_getInstance(), AnnotationTarget_PROPERTY_GETTER_getInstance(), AnnotationTarget_PROPERTY_SETTER_getInstance(), AnnotationTarget_TYPE_getInstance(), AnnotationTarget_EXPRESSION_getInstance(), AnnotationTarget_FILE_getInstance(), AnnotationTarget_TYPEALIAS_getInstance()];
  }
  function valueOf_6(value) {
    switch (value) {
      case 'CLASS':
        return AnnotationTarget_CLASS_getInstance();
      case 'ANNOTATION_CLASS':
        return AnnotationTarget_ANNOTATION_CLASS_getInstance();
      case 'TYPE_PARAMETER':
        return AnnotationTarget_TYPE_PARAMETER_getInstance();
      case 'PROPERTY':
        return AnnotationTarget_PROPERTY_getInstance();
      case 'FIELD':
        return AnnotationTarget_FIELD_getInstance();
      case 'LOCAL_VARIABLE':
        return AnnotationTarget_LOCAL_VARIABLE_getInstance();
      case 'VALUE_PARAMETER':
        return AnnotationTarget_VALUE_PARAMETER_getInstance();
      case 'CONSTRUCTOR':
        return AnnotationTarget_CONSTRUCTOR_getInstance();
      case 'FUNCTION':
        return AnnotationTarget_FUNCTION_getInstance();
      case 'PROPERTY_GETTER':
        return AnnotationTarget_PROPERTY_GETTER_getInstance();
      case 'PROPERTY_SETTER':
        return AnnotationTarget_PROPERTY_SETTER_getInstance();
      case 'TYPE':
        return AnnotationTarget_TYPE_getInstance();
      case 'EXPRESSION':
        return AnnotationTarget_EXPRESSION_getInstance();
      case 'FILE':
        return AnnotationTarget_FILE_getInstance();
      case 'TYPEALIAS':
        return AnnotationTarget_TYPEALIAS_getInstance();
      default:return THROW_ISE();
    }
  }
  var AnnotationTarget_entriesInitialized;
  function AnnotationTarget_initEntries() {
    if (AnnotationTarget_entriesInitialized)
      return Unit_getInstance();
    AnnotationTarget_entriesInitialized = true;
    AnnotationTarget_CLASS_instance = new AnnotationTarget('CLASS', 0);
    AnnotationTarget_ANNOTATION_CLASS_instance = new AnnotationTarget('ANNOTATION_CLASS', 1);
    AnnotationTarget_TYPE_PARAMETER_instance = new AnnotationTarget('TYPE_PARAMETER', 2);
    AnnotationTarget_PROPERTY_instance = new AnnotationTarget('PROPERTY', 3);
    AnnotationTarget_FIELD_instance = new AnnotationTarget('FIELD', 4);
    AnnotationTarget_LOCAL_VARIABLE_instance = new AnnotationTarget('LOCAL_VARIABLE', 5);
    AnnotationTarget_VALUE_PARAMETER_instance = new AnnotationTarget('VALUE_PARAMETER', 6);
    AnnotationTarget_CONSTRUCTOR_instance = new AnnotationTarget('CONSTRUCTOR', 7);
    AnnotationTarget_FUNCTION_instance = new AnnotationTarget('FUNCTION', 8);
    AnnotationTarget_PROPERTY_GETTER_instance = new AnnotationTarget('PROPERTY_GETTER', 9);
    AnnotationTarget_PROPERTY_SETTER_instance = new AnnotationTarget('PROPERTY_SETTER', 10);
    AnnotationTarget_TYPE_instance = new AnnotationTarget('TYPE', 11);
    AnnotationTarget_EXPRESSION_instance = new AnnotationTarget('EXPRESSION', 12);
    AnnotationTarget_FILE_instance = new AnnotationTarget('FILE', 13);
    AnnotationTarget_TYPEALIAS_instance = new AnnotationTarget('TYPEALIAS', 14);
  }
  function AnnotationTarget(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  AnnotationTarget.$metadata$ = {
    simpleName: 'AnnotationTarget',
    kind: 'class',
    interfaces: []
  };
  function MustBeDocumented() {
  }
  MustBeDocumented.$metadata$ = {
    simpleName: 'MustBeDocumented',
    kind: 'class',
    interfaces: [Annotation]
  };
  function Retention_init_$Init$(value, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      value = AnnotationRetention_RUNTIME_getInstance();
    Retention.call($this, value);
    return $this;
  }
  function Retention_init_$Create$(value, $mask0, $marker) {
    return Retention_init_$Init$(value, $mask0, $marker, Object.create(Retention.prototype));
  }
  function Retention(value) {
    this._value_0 = value;
  }
  Retention.prototype._get_value__7 = function () {
    return this._value_0;
  };
  Retention.$metadata$ = {
    simpleName: 'Retention',
    kind: 'class',
    interfaces: [Annotation]
  };
  var AnnotationRetention_SOURCE_instance;
  var AnnotationRetention_BINARY_instance;
  var AnnotationRetention_RUNTIME_instance;
  function values_7() {
    return [AnnotationRetention_SOURCE_getInstance(), AnnotationRetention_BINARY_getInstance(), AnnotationRetention_RUNTIME_getInstance()];
  }
  function valueOf_7(value) {
    switch (value) {
      case 'SOURCE':
        return AnnotationRetention_SOURCE_getInstance();
      case 'BINARY':
        return AnnotationRetention_BINARY_getInstance();
      case 'RUNTIME':
        return AnnotationRetention_RUNTIME_getInstance();
      default:return THROW_ISE();
    }
  }
  var AnnotationRetention_entriesInitialized;
  function AnnotationRetention_initEntries() {
    if (AnnotationRetention_entriesInitialized)
      return Unit_getInstance();
    AnnotationRetention_entriesInitialized = true;
    AnnotationRetention_SOURCE_instance = new AnnotationRetention('SOURCE', 0);
    AnnotationRetention_BINARY_instance = new AnnotationRetention('BINARY', 1);
    AnnotationRetention_RUNTIME_instance = new AnnotationRetention('RUNTIME', 2);
  }
  function AnnotationRetention(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  AnnotationRetention.$metadata$ = {
    simpleName: 'AnnotationRetention',
    kind: 'class',
    interfaces: []
  };
  function Repeatable() {
  }
  Repeatable.$metadata$ = {
    simpleName: 'Repeatable',
    kind: 'class',
    interfaces: [Annotation]
  };
  function AnnotationTarget_CLASS_getInstance() {
    AnnotationTarget_initEntries();
    return AnnotationTarget_CLASS_instance;
  }
  function AnnotationTarget_ANNOTATION_CLASS_getInstance() {
    AnnotationTarget_initEntries();
    return AnnotationTarget_ANNOTATION_CLASS_instance;
  }
  function AnnotationTarget_TYPE_PARAMETER_getInstance() {
    AnnotationTarget_initEntries();
    return AnnotationTarget_TYPE_PARAMETER_instance;
  }
  function AnnotationTarget_PROPERTY_getInstance() {
    AnnotationTarget_initEntries();
    return AnnotationTarget_PROPERTY_instance;
  }
  function AnnotationTarget_FIELD_getInstance() {
    AnnotationTarget_initEntries();
    return AnnotationTarget_FIELD_instance;
  }
  function AnnotationTarget_LOCAL_VARIABLE_getInstance() {
    AnnotationTarget_initEntries();
    return AnnotationTarget_LOCAL_VARIABLE_instance;
  }
  function AnnotationTarget_VALUE_PARAMETER_getInstance() {
    AnnotationTarget_initEntries();
    return AnnotationTarget_VALUE_PARAMETER_instance;
  }
  function AnnotationTarget_CONSTRUCTOR_getInstance() {
    AnnotationTarget_initEntries();
    return AnnotationTarget_CONSTRUCTOR_instance;
  }
  function AnnotationTarget_FUNCTION_getInstance() {
    AnnotationTarget_initEntries();
    return AnnotationTarget_FUNCTION_instance;
  }
  function AnnotationTarget_PROPERTY_GETTER_getInstance() {
    AnnotationTarget_initEntries();
    return AnnotationTarget_PROPERTY_GETTER_instance;
  }
  function AnnotationTarget_PROPERTY_SETTER_getInstance() {
    AnnotationTarget_initEntries();
    return AnnotationTarget_PROPERTY_SETTER_instance;
  }
  function AnnotationTarget_TYPE_getInstance() {
    AnnotationTarget_initEntries();
    return AnnotationTarget_TYPE_instance;
  }
  function AnnotationTarget_EXPRESSION_getInstance() {
    AnnotationTarget_initEntries();
    return AnnotationTarget_EXPRESSION_instance;
  }
  function AnnotationTarget_FILE_getInstance() {
    AnnotationTarget_initEntries();
    return AnnotationTarget_FILE_instance;
  }
  function AnnotationTarget_TYPEALIAS_getInstance() {
    AnnotationTarget_initEntries();
    return AnnotationTarget_TYPEALIAS_instance;
  }
  function AnnotationRetention_SOURCE_getInstance() {
    AnnotationRetention_initEntries();
    return AnnotationRetention_SOURCE_instance;
  }
  function AnnotationRetention_BINARY_getInstance() {
    AnnotationRetention_initEntries();
    return AnnotationRetention_BINARY_instance;
  }
  function AnnotationRetention_RUNTIME_getInstance() {
    AnnotationRetention_initEntries();
    return AnnotationRetention_RUNTIME_instance;
  }
  function getProgressionLastElement_1(start, end, step_0) {
    var tmp;
    if (step_0 > 0) {
      tmp = start >= end ? end : end - differenceModulo_1(end, start, step_0) | 0;
    } else if (step_0 < 0) {
      tmp = start <= end ? end : end + differenceModulo_1(start, end, -step_0 | 0) | 0;
    } else {
      throw IllegalArgumentException_init_$Create$_0('Step is zero.');
    }
    return tmp;
  }
  function getProgressionLastElement_2(start, end, step_0) {
    var tmp;
    if (step_0.compareTo_57(new Long(0, 0)) > 0) {
      tmp = start.compareTo_57(end) >= 0 ? end : end.minus_34(differenceModulo_2(end, start, step_0));
    } else if (step_0.compareTo_57(new Long(0, 0)) < 0) {
      tmp = start.compareTo_57(end) <= 0 ? end : end.plus_38(differenceModulo_2(start, end, step_0.unaryMinus_4()));
    } else {
      throw IllegalArgumentException_init_$Create$_0('Step is zero.');
    }
    return tmp;
  }
  function differenceModulo_1(a, b, c) {
    return mod(mod(a, c) - mod(b, c) | 0, c);
  }
  function differenceModulo_2(a, b, c) {
    return mod_0(mod_0(a, c).minus_34(mod_0(b, c)), c);
  }
  function mod(a, b) {
    var mod_1 = a % b;
    return mod_1 >= 0 ? mod_1 : mod_1 + b | 0;
  }
  function mod_0(a, b) {
    var mod_1 = a.rem_32(b);
    return mod_1.compareTo_57(new Long(0, 0)) >= 0 ? mod_1 : mod_1.plus_38(b);
  }
  function ByteCompanionObject_0() {
    ByteCompanionObject_instance = this;
    this._MIN_VALUE_3 = -128;
    this._MAX_VALUE_3 = 127;
    this._SIZE_BYTES_3 = 1;
    this._SIZE_BITS_3 = 8;
  }
  ByteCompanionObject_0.prototype._get_MIN_VALUE__9 = function () {
    return this._MIN_VALUE_3;
  };
  ByteCompanionObject_0.prototype._get_MAX_VALUE__9 = function () {
    return this._MAX_VALUE_3;
  };
  ByteCompanionObject_0.prototype._get_SIZE_BYTES__9 = function () {
    return this._SIZE_BYTES_3;
  };
  ByteCompanionObject_0.prototype._get_SIZE_BITS__9 = function () {
    return this._SIZE_BITS_3;
  };
  ByteCompanionObject_0.$metadata$ = {
    simpleName: 'ByteCompanionObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(ByteCompanionObject_0.prototype, 'MIN_VALUE', {
    configurable: true,
    get: ByteCompanionObject_0.prototype._get_MIN_VALUE__9
  });
  Object.defineProperty(ByteCompanionObject_0.prototype, 'MAX_VALUE', {
    configurable: true,
    get: ByteCompanionObject_0.prototype._get_MAX_VALUE__9
  });
  Object.defineProperty(ByteCompanionObject_0.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: ByteCompanionObject_0.prototype._get_SIZE_BYTES__9
  });
  Object.defineProperty(ByteCompanionObject_0.prototype, 'SIZE_BITS', {
    configurable: true,
    get: ByteCompanionObject_0.prototype._get_SIZE_BITS__9
  });
  var ByteCompanionObject_instance;
  function ByteCompanionObject_getInstance() {
    if (ByteCompanionObject_instance == null)
      new ByteCompanionObject_0();
    return ByteCompanionObject_instance;
  }
  function ShortCompanionObject_0() {
    ShortCompanionObject_instance = this;
    this._MIN_VALUE_4 = -32768;
    this._MAX_VALUE_4 = 32767;
    this._SIZE_BYTES_4 = 2;
    this._SIZE_BITS_4 = 16;
  }
  ShortCompanionObject_0.prototype._get_MIN_VALUE__9 = function () {
    return this._MIN_VALUE_4;
  };
  ShortCompanionObject_0.prototype._get_MAX_VALUE__9 = function () {
    return this._MAX_VALUE_4;
  };
  ShortCompanionObject_0.prototype._get_SIZE_BYTES__9 = function () {
    return this._SIZE_BYTES_4;
  };
  ShortCompanionObject_0.prototype._get_SIZE_BITS__9 = function () {
    return this._SIZE_BITS_4;
  };
  ShortCompanionObject_0.$metadata$ = {
    simpleName: 'ShortCompanionObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(ShortCompanionObject_0.prototype, 'MIN_VALUE', {
    configurable: true,
    get: ShortCompanionObject_0.prototype._get_MIN_VALUE__9
  });
  Object.defineProperty(ShortCompanionObject_0.prototype, 'MAX_VALUE', {
    configurable: true,
    get: ShortCompanionObject_0.prototype._get_MAX_VALUE__9
  });
  Object.defineProperty(ShortCompanionObject_0.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: ShortCompanionObject_0.prototype._get_SIZE_BYTES__9
  });
  Object.defineProperty(ShortCompanionObject_0.prototype, 'SIZE_BITS', {
    configurable: true,
    get: ShortCompanionObject_0.prototype._get_SIZE_BITS__9
  });
  var ShortCompanionObject_instance;
  function ShortCompanionObject_getInstance() {
    if (ShortCompanionObject_instance == null)
      new ShortCompanionObject_0();
    return ShortCompanionObject_instance;
  }
  function IntCompanionObject_0() {
    IntCompanionObject_instance = this;
    this._MIN_VALUE_5 = -2147483648;
    this._MAX_VALUE_5 = 2147483647;
    this._SIZE_BYTES_5 = 4;
    this._SIZE_BITS_5 = 32;
  }
  IntCompanionObject_0.prototype._get_MIN_VALUE__9 = function () {
    return this._MIN_VALUE_5;
  };
  IntCompanionObject_0.prototype._get_MAX_VALUE__9 = function () {
    return this._MAX_VALUE_5;
  };
  IntCompanionObject_0.prototype._get_SIZE_BYTES__9 = function () {
    return this._SIZE_BYTES_5;
  };
  IntCompanionObject_0.prototype._get_SIZE_BITS__9 = function () {
    return this._SIZE_BITS_5;
  };
  IntCompanionObject_0.$metadata$ = {
    simpleName: 'IntCompanionObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(IntCompanionObject_0.prototype, 'MIN_VALUE', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_MIN_VALUE__9
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'MAX_VALUE', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_MAX_VALUE__9
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_SIZE_BYTES__9
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'SIZE_BITS', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_SIZE_BITS__9
  });
  var IntCompanionObject_instance;
  function IntCompanionObject_getInstance() {
    if (IntCompanionObject_instance == null)
      new IntCompanionObject_0();
    return IntCompanionObject_instance;
  }
  function FloatCompanionObject_0() {
    FloatCompanionObject_instance = this;
    this._MIN_VALUE_6 = 1.4E-45;
    this._MAX_VALUE_6 = 3.4028235E38;
    this._POSITIVE_INFINITY = Infinity;
    this._NEGATIVE_INFINITY = -Infinity;
    this._NaN = NaN;
    this._SIZE_BYTES_6 = 4;
    this._SIZE_BITS_6 = 32;
  }
  FloatCompanionObject_0.prototype._get_MIN_VALUE__9 = function () {
    return this._MIN_VALUE_6;
  };
  FloatCompanionObject_0.prototype._get_MAX_VALUE__9 = function () {
    return this._MAX_VALUE_6;
  };
  FloatCompanionObject_0.prototype._get_POSITIVE_INFINITY__0 = function () {
    return this._POSITIVE_INFINITY;
  };
  FloatCompanionObject_0.prototype._get_NEGATIVE_INFINITY__0 = function () {
    return this._NEGATIVE_INFINITY;
  };
  FloatCompanionObject_0.prototype._get_NaN__0 = function () {
    return this._NaN;
  };
  FloatCompanionObject_0.prototype._get_SIZE_BYTES__9 = function () {
    return this._SIZE_BYTES_6;
  };
  FloatCompanionObject_0.prototype._get_SIZE_BITS__9 = function () {
    return this._SIZE_BITS_6;
  };
  FloatCompanionObject_0.$metadata$ = {
    simpleName: 'FloatCompanionObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(FloatCompanionObject_0.prototype, 'MIN_VALUE', {
    configurable: true,
    get: FloatCompanionObject_0.prototype._get_MIN_VALUE__9
  });
  Object.defineProperty(FloatCompanionObject_0.prototype, 'MAX_VALUE', {
    configurable: true,
    get: FloatCompanionObject_0.prototype._get_MAX_VALUE__9
  });
  Object.defineProperty(FloatCompanionObject_0.prototype, 'POSITIVE_INFINITY', {
    configurable: true,
    get: FloatCompanionObject_0.prototype._get_POSITIVE_INFINITY__0
  });
  Object.defineProperty(FloatCompanionObject_0.prototype, 'NEGATIVE_INFINITY', {
    configurable: true,
    get: FloatCompanionObject_0.prototype._get_NEGATIVE_INFINITY__0
  });
  Object.defineProperty(FloatCompanionObject_0.prototype, 'NaN', {
    configurable: true,
    get: FloatCompanionObject_0.prototype._get_NaN__0
  });
  Object.defineProperty(FloatCompanionObject_0.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: FloatCompanionObject_0.prototype._get_SIZE_BYTES__9
  });
  Object.defineProperty(FloatCompanionObject_0.prototype, 'SIZE_BITS', {
    configurable: true,
    get: FloatCompanionObject_0.prototype._get_SIZE_BITS__9
  });
  var FloatCompanionObject_instance;
  function FloatCompanionObject_getInstance() {
    if (FloatCompanionObject_instance == null)
      new FloatCompanionObject_0();
    return FloatCompanionObject_instance;
  }
  function DoubleCompanionObject_0() {
    DoubleCompanionObject_instance = this;
    this._MIN_VALUE_7 = 4.9E-324;
    this._MAX_VALUE_7 = 1.7976931348623157E308;
    this._POSITIVE_INFINITY_0 = Infinity;
    this._NEGATIVE_INFINITY_0 = -Infinity;
    this._NaN_0 = NaN;
    this._SIZE_BYTES_7 = 8;
    this._SIZE_BITS_7 = 64;
  }
  DoubleCompanionObject_0.prototype._get_MIN_VALUE__9 = function () {
    return this._MIN_VALUE_7;
  };
  DoubleCompanionObject_0.prototype._get_MAX_VALUE__9 = function () {
    return this._MAX_VALUE_7;
  };
  DoubleCompanionObject_0.prototype._get_POSITIVE_INFINITY__0 = function () {
    return this._POSITIVE_INFINITY_0;
  };
  DoubleCompanionObject_0.prototype._get_NEGATIVE_INFINITY__0 = function () {
    return this._NEGATIVE_INFINITY_0;
  };
  DoubleCompanionObject_0.prototype._get_NaN__0 = function () {
    return this._NaN_0;
  };
  DoubleCompanionObject_0.prototype._get_SIZE_BYTES__9 = function () {
    return this._SIZE_BYTES_7;
  };
  DoubleCompanionObject_0.prototype._get_SIZE_BITS__9 = function () {
    return this._SIZE_BITS_7;
  };
  DoubleCompanionObject_0.$metadata$ = {
    simpleName: 'DoubleCompanionObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(DoubleCompanionObject_0.prototype, 'MIN_VALUE', {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_MIN_VALUE__9
  });
  Object.defineProperty(DoubleCompanionObject_0.prototype, 'MAX_VALUE', {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_MAX_VALUE__9
  });
  Object.defineProperty(DoubleCompanionObject_0.prototype, 'POSITIVE_INFINITY', {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_POSITIVE_INFINITY__0
  });
  Object.defineProperty(DoubleCompanionObject_0.prototype, 'NEGATIVE_INFINITY', {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_NEGATIVE_INFINITY__0
  });
  Object.defineProperty(DoubleCompanionObject_0.prototype, 'NaN', {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_NaN__0
  });
  Object.defineProperty(DoubleCompanionObject_0.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_SIZE_BYTES__9
  });
  Object.defineProperty(DoubleCompanionObject_0.prototype, 'SIZE_BITS', {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_SIZE_BITS__9
  });
  var DoubleCompanionObject_instance;
  function DoubleCompanionObject_getInstance() {
    if (DoubleCompanionObject_instance == null)
      new DoubleCompanionObject_0();
    return DoubleCompanionObject_instance;
  }
  function StringCompanionObject() {
    StringCompanionObject_instance = this;
  }
  StringCompanionObject.$metadata$ = {
    simpleName: 'StringCompanionObject',
    kind: 'object',
    interfaces: []
  };
  var StringCompanionObject_instance;
  function StringCompanionObject_getInstance() {
    if (StringCompanionObject_instance == null)
      new StringCompanionObject();
    return StringCompanionObject_instance;
  }
  function BooleanCompanionObject() {
    BooleanCompanionObject_instance = this;
  }
  BooleanCompanionObject.$metadata$ = {
    simpleName: 'BooleanCompanionObject',
    kind: 'object',
    interfaces: []
  };
  var BooleanCompanionObject_instance;
  function BooleanCompanionObject_getInstance() {
    if (BooleanCompanionObject_instance == null)
      new BooleanCompanionObject();
    return BooleanCompanionObject_instance;
  }
  function Comparator() {
  }
  Comparator.$metadata$ = {
    simpleName: 'Comparator',
    kind: 'interface',
    interfaces: []
  };
  function JsName(name) {
    this._name_0 = name;
  }
  JsName.prototype._get_name__23 = function () {
    return this._name_0;
  };
  JsName.$metadata$ = {
    simpleName: 'JsName',
    kind: 'class',
    interfaces: [Annotation]
  };
  function Volatile() {
  }
  Volatile.$metadata$ = {
    simpleName: 'Volatile',
    kind: 'class',
    interfaces: [Annotation]
  };
  function toTypedArray(_this_) {
    return copyToArray_0(_this_);
  }
  function mapCapacity(expectedSize) {
    return expectedSize;
  }
  function listOf(element) {
    return arrayListOf([element]);
  }
  function setOf(element) {
    return hashSetOf([element]);
  }
  function copyToArray_0(collection) {
    var tmp;
    if (collection.toArray !== undefined) {
      var tmp0_unsafeCast_0 = collection.toArray();
      tmp = tmp0_unsafeCast_0;
    } else {
      {
        var tmp1_unsafeCast_0 = copyToArrayImpl_0(collection);
        tmp = tmp1_unsafeCast_0;
      }
    }
    return tmp;
  }
  function copyToArrayImpl_0(collection) {
    var array = [];
    var iterator_0 = collection.iterator_69();
    while (iterator_0.hasNext_49()) {
      array.push(iterator_0.next_56());
    }
    return array;
  }
  function copyToArrayOfAny(_this_, isVarargs) {
    var tmp;
    if (isVarargs) {
      tmp = _this_;
    } else {
      tmp = _this_.slice();
    }
    return tmp;
  }
  function checkIndexOverflow(index) {
    if (index < 0) {
      throwIndexOverflow();
    }return index;
  }
  function copyToArrayImpl_1(collection, array) {
    if (array.length < collection._get_size__42()) {
      var tmp0_unsafeCast_0 = copyToArrayImpl_0(collection);
      return tmp0_unsafeCast_0;
    }var iterator_0 = collection.iterator_69();
    var index = 0;
    while (iterator_0.hasNext_49()) {
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      var tmp1_unsafeCast_0 = iterator_0.next_56();
      array[tmp0] = tmp1_unsafeCast_0;
    }
    if (index < array.length) {
      var tmp = index;
      var tmp2_unsafeCast_0 = null;
      array[tmp] = tmp2_unsafeCast_0;
    }return array;
  }
  function _no_name_provided__21($elements) {
    this._$elements_0 = $elements;
  }
  _no_name_provided__21.prototype.invoke_23 = function (it) {
    return this._$elements_0.contains_58(it);
  };
  _no_name_provided__21.prototype.invoke_81 = function (p1) {
    return this.invoke_23((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__21.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__22($elements) {
    this._$elements_1 = $elements;
  }
  _no_name_provided__22.prototype.invoke_23 = function (it) {
    return !this._$elements_1.contains_58(it);
  };
  _no_name_provided__22.prototype.invoke_81 = function (p1) {
    return this.invoke_23((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__22.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractMutableCollection() {
    AbstractCollection.call(this);
  }
  AbstractMutableCollection.prototype.remove_31 = function (element) {
    this.checkIsMutable_13();
    var iterator_0 = this.iterator_69();
    while (iterator_0.hasNext_49()) {
      if (equals_0(iterator_0.next_56(), element)) {
        iterator_0.remove_23();
        return true;
      }}
    return false;
  };
  AbstractMutableCollection.prototype.addAll_18 = function (elements) {
    this.checkIsMutable_13();
    var modified = false;
    var tmp0_iterator = elements.iterator_69();
    while (tmp0_iterator.hasNext_49()) {
      var element = tmp0_iterator.next_56();
      if (this.add_25(element))
        modified = true;
    }
    return modified;
  };
  AbstractMutableCollection.prototype.removeAll_13 = function (elements) {
    this.checkIsMutable_13();
    var tmp = isInterface(this, MutableIterable) ? this : THROW_CCE();
    return removeAll(tmp, _no_name_provided_$factory_8(elements));
  };
  AbstractMutableCollection.prototype.retainAll_13 = function (elements) {
    this.checkIsMutable_13();
    var tmp = isInterface(this, MutableIterable) ? this : THROW_CCE();
    return removeAll(tmp, _no_name_provided_$factory_9(elements));
  };
  AbstractMutableCollection.prototype.clear_21 = function () {
    this.checkIsMutable_13();
    var iterator_0 = this.iterator_69();
    while (iterator_0.hasNext_49()) {
      iterator_0.next_56();
      Unit_getInstance();
      iterator_0.remove_23();
    }
  };
  AbstractMutableCollection.prototype.toJSON = function () {
    return this.toArray();
  };
  AbstractMutableCollection.prototype.checkIsMutable_13 = function () {
  };
  AbstractMutableCollection.$metadata$ = {
    simpleName: 'AbstractMutableCollection',
    kind: 'class',
    interfaces: [MutableCollection]
  };
  function _no_name_provided_$factory_8($elements) {
    var i = new _no_name_provided__21($elements);
    return function (p1) {
      return i.invoke_23(p1);
    };
  }
  function _no_name_provided_$factory_9($elements) {
    var i = new _no_name_provided__22($elements);
    return function (p1) {
      return i.invoke_23(p1);
    };
  }
  function _get_list__0($this) {
    return $this._list_0;
  }
  function _get_fromIndex__0($this) {
    return $this._fromIndex_0;
  }
  function _set__size__0($this, _set___) {
    $this.__size_0 = _set___;
  }
  function _get__size__0($this) {
    return $this.__size_0;
  }
  function IteratorImpl_0($outer) {
    this._$this_1 = $outer;
    this._index_4 = 0;
    this._last_4 = -1;
  }
  IteratorImpl_0.prototype._set_index__11 = function (_set___) {
    this._index_4 = _set___;
  };
  IteratorImpl_0.prototype._get_index__11 = function () {
    return this._index_4;
  };
  IteratorImpl_0.prototype._set_last__0 = function (_set___) {
    this._last_4 = _set___;
  };
  IteratorImpl_0.prototype._get_last__10 = function () {
    return this._last_4;
  };
  IteratorImpl_0.prototype.hasNext_49 = function () {
    return this._index_4 < this._$this_1._get_size__42();
  };
  IteratorImpl_0.prototype.next_56 = function () {
    if (!this.hasNext_49())
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var tmp0_this = this;
    var tmp1 = tmp0_this._index_4;
    tmp0_this._index_4 = tmp1 + 1 | 0;
    tmp._last_4 = tmp1;
    return this._$this_1.get_44(this._last_4);
  };
  IteratorImpl_0.prototype.remove_23 = function () {
    var tmp0_check_0 = !(this._last_4 === -1);
    if (!tmp0_check_0) {
      var message_1 = 'Call next() or previous() before removing element from the iterator.';
      throw IllegalStateException_init_$Create$_0(toString_1(message_1));
    }this._$this_1.removeAt_2(this._last_4);
    Unit_getInstance();
    this._index_4 = this._last_4;
    this._last_4 = -1;
  };
  IteratorImpl_0.$metadata$ = {
    simpleName: 'IteratorImpl',
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function ListIteratorImpl_0($outer, index) {
    this._$this_2 = $outer;
    IteratorImpl_0.call(this, $outer);
    Companion_getInstance().checkPositionIndex(index, this._$this_2._get_size__42());
    this._set_index__11(index);
  }
  ListIteratorImpl_0.prototype.hasPrevious_3 = function () {
    return this._get_index__11() > 0;
  };
  ListIteratorImpl_0.prototype.nextIndex_3 = function () {
    return this._get_index__11();
  };
  ListIteratorImpl_0.prototype.previous_3 = function () {
    if (!this.hasPrevious_3())
      throw NoSuchElementException_init_$Create$();
    var tmp0_this = this;
    tmp0_this._set_index__11(tmp0_this._get_index__11() - 1 | 0);
    this._set_last__0(tmp0_this._get_index__11());
    return this._$this_2.get_44(this._get_last__10());
  };
  ListIteratorImpl_0.prototype.previousIndex_3 = function () {
    return this._get_index__11() - 1 | 0;
  };
  ListIteratorImpl_0.prototype.add_2 = function (element) {
    this._$this_2.add_23(this._get_index__11(), element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_index__11();
    tmp0_this._set_index__11(tmp1 + 1 | 0);
    Unit_getInstance();
    this._set_last__0(-1);
  };
  ListIteratorImpl_0.prototype.add_3 = function (element) {
    return this.add_2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ListIteratorImpl_0.prototype.set_1 = function (element) {
    var tmp0_check_0 = !(this._get_last__10() === -1);
    if (!tmp0_check_0) {
      var message_1 = 'Call next() or previous() before updating element value with the iterator.';
      throw IllegalStateException_init_$Create$_0(toString_1(message_1));
    }this._$this_2.set_10(this._get_last__10(), element);
    Unit_getInstance();
  };
  ListIteratorImpl_0.prototype.set_2 = function (element) {
    return this.set_1((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ListIteratorImpl_0.$metadata$ = {
    simpleName: 'ListIteratorImpl',
    kind: 'class',
    interfaces: [MutableListIterator]
  };
  function SubList_0(list, fromIndex, toIndex) {
    AbstractMutableList.call(this);
    this._list_0 = list;
    this._fromIndex_0 = fromIndex;
    this.__size_0 = 0;
    Companion_getInstance().checkRangeIndexes(this._fromIndex_0, toIndex, this._list_0._get_size__42());
    this.__size_0 = toIndex - this._fromIndex_0 | 0;
  }
  SubList_0.prototype.add_23 = function (index, element) {
    Companion_getInstance().checkPositionIndex(index, this.__size_0);
    this._list_0.add_23(this._fromIndex_0 + index | 0, element);
    var tmp0_this = this;
    var tmp1 = tmp0_this.__size_0;
    tmp0_this.__size_0 = tmp1 + 1 | 0;
    Unit_getInstance();
  };
  SubList_0.prototype.get_44 = function (index) {
    Companion_getInstance().checkElementIndex(index, this.__size_0);
    return this._list_0.get_44(this._fromIndex_0 + index | 0);
  };
  SubList_0.prototype.removeAt_2 = function (index) {
    Companion_getInstance().checkElementIndex(index, this.__size_0);
    var result = this._list_0.removeAt_2(this._fromIndex_0 + index | 0);
    var tmp0_this = this;
    var tmp1 = tmp0_this.__size_0;
    tmp0_this.__size_0 = tmp1 - 1 | 0;
    Unit_getInstance();
    return result;
  };
  SubList_0.prototype.set_10 = function (index, element) {
    Companion_getInstance().checkElementIndex(index, this.__size_0);
    return this._list_0.set_10(this._fromIndex_0 + index | 0, element);
  };
  SubList_0.prototype._get_size__42 = function () {
    return this.__size_0;
  };
  SubList_0.prototype.checkIsMutable_13 = function () {
    return this._list_0.checkIsMutable_13();
  };
  SubList_0.$metadata$ = {
    simpleName: 'SubList',
    kind: 'class',
    interfaces: [RandomAccess]
  };
  function _no_name_provided__23($elements) {
    this._$elements_2 = $elements;
  }
  _no_name_provided__23.prototype.invoke_23 = function (it) {
    return this._$elements_2.contains_58(it);
  };
  _no_name_provided__23.prototype.invoke_81 = function (p1) {
    return this.invoke_23((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__23.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__24($elements) {
    this._$elements_3 = $elements;
  }
  _no_name_provided__24.prototype.invoke_23 = function (it) {
    return !this._$elements_3.contains_58(it);
  };
  _no_name_provided__24.prototype.invoke_81 = function (p1) {
    return this.invoke_23((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__24.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractMutableList() {
    AbstractMutableCollection.call(this);
    this._modCount = 0;
  }
  AbstractMutableList.prototype._set_modCount__1 = function (_set___) {
    this._modCount = _set___;
  };
  AbstractMutableList.prototype._get_modCount__1 = function () {
    return this._modCount;
  };
  AbstractMutableList.prototype.add_25 = function (element) {
    this.checkIsMutable_13();
    this.add_23(this._get_size__42(), element);
    return true;
  };
  AbstractMutableList.prototype.addAll_16 = function (index, elements) {
    this.checkIsMutable_13();
    var _index = index;
    var changed = false;
    var tmp0_iterator = elements.iterator_69();
    while (tmp0_iterator.hasNext_49()) {
      var e = tmp0_iterator.next_56();
      var tmp1 = _index;
      _index = tmp1 + 1 | 0;
      this.add_23(tmp1, e);
      changed = true;
    }
    return changed;
  };
  AbstractMutableList.prototype.clear_21 = function () {
    this.checkIsMutable_13();
    this.removeRange_1(0, this._get_size__42());
  };
  AbstractMutableList.prototype.removeAll_13 = function (elements) {
    this.checkIsMutable_13();
    return removeAll_0(this, _no_name_provided_$factory_10(elements));
  };
  AbstractMutableList.prototype.retainAll_13 = function (elements) {
    this.checkIsMutable_13();
    return removeAll_0(this, _no_name_provided_$factory_11(elements));
  };
  AbstractMutableList.prototype.iterator_69 = function () {
    return new IteratorImpl_0(this);
  };
  AbstractMutableList.prototype.contains_58 = function (element) {
    return this.indexOf_11(element) >= 0;
  };
  AbstractMutableList.prototype.indexOf_11 = function (element) {
    var inductionVariable = 0;
    var last_0 = _get_lastIndex__5(this);
    if (inductionVariable <= last_0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals_0(this.get_44(index), element)) {
          return index;
        }}
       while (!(index === last_0));
    return -1;
  };
  AbstractMutableList.prototype.lastIndexOf_11 = function (element) {
    var inductionVariable = _get_lastIndex__5(this);
    if (0 <= inductionVariable)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (equals_0(this.get_44(index), element)) {
          return index;
        }}
       while (0 <= inductionVariable);
    return -1;
  };
  AbstractMutableList.prototype.listIterator_17 = function () {
    return this.listIterator_18(0);
  };
  AbstractMutableList.prototype.listIterator_18 = function (index) {
    return new ListIteratorImpl_0(this, index);
  };
  AbstractMutableList.prototype.subList_8 = function (fromIndex, toIndex) {
    return new SubList_0(this, fromIndex, toIndex);
  };
  AbstractMutableList.prototype.removeRange_1 = function (fromIndex, toIndex) {
    var iterator_0 = this.listIterator_18(fromIndex);
    var tmp0_repeat_0 = toIndex - fromIndex | 0;
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat_0)
      do {
        var index_2 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        iterator_0.next_56();
        Unit_getInstance();
        iterator_0.remove_23();
      }
       while (inductionVariable < tmp0_repeat_0);
  };
  AbstractMutableList.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, List) : false))
      return false;
    else {
    }
    return Companion_getInstance().orderedEquals(this, other);
  };
  AbstractMutableList.prototype.hashCode = function () {
    return Companion_getInstance().orderedHashCode(this);
  };
  AbstractMutableList.$metadata$ = {
    simpleName: 'AbstractMutableList',
    kind: 'class',
    interfaces: [MutableList]
  };
  function _no_name_provided_$factory_10($elements) {
    var i = new _no_name_provided__23($elements);
    return function (p1) {
      return i.invoke_23(p1);
    };
  }
  function _no_name_provided_$factory_11($elements) {
    var i = new _no_name_provided__24($elements);
    return function (p1) {
      return i.invoke_23(p1);
    };
  }
  function SimpleEntry_init_$Init$(entry, $this) {
    SimpleEntry.call($this, entry._get_key__4(), entry._get_value__7());
    return $this;
  }
  function SimpleEntry_init_$Create$(entry) {
    return SimpleEntry_init_$Init$(entry, Object.create(SimpleEntry.prototype));
  }
  function _set__value_($this, _set___) {
    $this.__value = _set___;
  }
  function _get__value_($this) {
    return $this.__value;
  }
  function _no_name_provided__25($entryIterator) {
    this._$entryIterator_1 = $entryIterator;
  }
  _no_name_provided__25.prototype.hasNext_49 = function () {
    return this._$entryIterator_1.hasNext_49();
  };
  _no_name_provided__25.prototype.next_56 = function () {
    return this._$entryIterator_1.next_56()._get_key__4();
  };
  _no_name_provided__25.prototype.remove_23 = function () {
    return this._$entryIterator_1.remove_23();
  };
  _no_name_provided__25.$metadata$ = {
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function _no_name_provided__26($entryIterator) {
    this._$entryIterator_2 = $entryIterator;
  }
  _no_name_provided__26.prototype.hasNext_49 = function () {
    return this._$entryIterator_2.hasNext_49();
  };
  _no_name_provided__26.prototype.next_56 = function () {
    return this._$entryIterator_2.next_56()._get_value__7();
  };
  _no_name_provided__26.prototype.remove_23 = function () {
    return this._$entryIterator_2.remove_23();
  };
  _no_name_provided__26.$metadata$ = {
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function SimpleEntry(key, value) {
    this._key = key;
    this.__value = value;
  }
  SimpleEntry.prototype._get_key__4 = function () {
    return this._key;
  };
  SimpleEntry.prototype._get_value__7 = function () {
    return this.__value;
  };
  SimpleEntry.prototype.setValue_1 = function (newValue) {
    var oldValue = this.__value;
    this.__value = newValue;
    return oldValue;
  };
  SimpleEntry.prototype.hashCode = function () {
    return Companion_getInstance_0().entryHashCode(this);
  };
  SimpleEntry.prototype.toString = function () {
    return Companion_getInstance_0().entryToString(this);
  };
  SimpleEntry.prototype.equals = function (other) {
    return Companion_getInstance_0().entryEquals(this, other);
  };
  SimpleEntry.$metadata$ = {
    simpleName: 'SimpleEntry',
    kind: 'class',
    interfaces: [MutableEntry]
  };
  function AbstractEntrySet() {
    AbstractMutableSet.call(this);
  }
  AbstractEntrySet.prototype.contains_58 = function (element) {
    return this.containsEntry_4(element);
  };
  AbstractEntrySet.$metadata$ = {
    simpleName: 'AbstractEntrySet',
    kind: 'class',
    interfaces: []
  };
  function _set__keys__0($this, _set___) {
    $this.__keys_0 = _set___;
  }
  function _get__keys__0($this) {
    return $this.__keys_0;
  }
  function _set__values_($this, _set___) {
    $this.__values_0 = _set___;
  }
  function _get__values_($this) {
    return $this.__values_0;
  }
  function _no_name_provided__27(this$0) {
    this._this$0_9 = this$0;
    AbstractMutableSet.call(this);
  }
  _no_name_provided__27.prototype.add_9 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on keys');
  };
  _no_name_provided__27.prototype.add_25 = function (element) {
    return this.add_9((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  _no_name_provided__27.prototype.clear_21 = function () {
    this._this$0_9.clear_21();
  };
  _no_name_provided__27.prototype.contains_47 = function (element) {
    return this._this$0_9.containsKey_6(element);
  };
  _no_name_provided__27.prototype.contains_58 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    else {
    }
    return this.contains_47((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  _no_name_provided__27.prototype.iterator_69 = function () {
    var entryIterator = this._this$0_9._get_entries__5().iterator_69();
    return new _no_name_provided__25(entryIterator);
  };
  _no_name_provided__27.prototype.remove_28 = function (element) {
    this.checkIsMutable_13();
    if (this._this$0_9.containsKey_6(element)) {
      this._this$0_9.remove_28(element);
      Unit_getInstance();
      return true;
    }return false;
  };
  _no_name_provided__27.prototype.remove_31 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    else {
    }
    return this.remove_28((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  _no_name_provided__27.prototype._get_size__42 = function () {
    return this._this$0_9._get_size__42();
  };
  _no_name_provided__27.prototype.checkIsMutable_13 = function () {
    return this._this$0_9.checkIsMutable_13();
  };
  _no_name_provided__27.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__28(this$0) {
    this._this$0_10 = this$0;
    AbstractMutableCollection.call(this);
  }
  _no_name_provided__28.prototype.add_11 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on values');
  };
  _no_name_provided__28.prototype.add_25 = function (element) {
    return this.add_11((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  _no_name_provided__28.prototype.clear_21 = function () {
    return this._this$0_10.clear_21();
  };
  _no_name_provided__28.prototype.contains_40 = function (element) {
    return this._this$0_10.containsValue_6(element);
  };
  _no_name_provided__28.prototype.contains_58 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    else {
    }
    return this.contains_40((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  _no_name_provided__28.prototype.iterator_69 = function () {
    var entryIterator = this._this$0_10._get_entries__5().iterator_69();
    return new _no_name_provided__26(entryIterator);
  };
  _no_name_provided__28.prototype._get_size__42 = function () {
    return this._this$0_10._get_size__42();
  };
  _no_name_provided__28.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(!(other == null) ? isInterface(other, Collection) : false))
      return false;
    else {
    }
    return Companion_getInstance().orderedEquals(this, other);
  };
  _no_name_provided__28.prototype.hashCode = function () {
    return Companion_getInstance().orderedHashCode(this);
  };
  _no_name_provided__28.prototype.checkIsMutable_13 = function () {
    return this._this$0_10.checkIsMutable_13();
  };
  _no_name_provided__28.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractMutableMap() {
    AbstractMap.call(this);
    this.__keys_0 = null;
    this.__values_0 = null;
  }
  AbstractMutableMap.prototype.clear_21 = function () {
    this._get_entries__5().clear_21();
  };
  AbstractMutableMap.prototype._get_keys__6 = function () {
    if (this.__keys_0 == null) {
      var tmp = this;
      tmp.__keys_0 = new _no_name_provided__27(this);
    }return ensureNotNull(this.__keys_0);
  };
  AbstractMutableMap.prototype.putAll_2 = function (from) {
    this.checkIsMutable_13();
    var tmp0_iterator = from._get_entries__5().iterator_69();
    while (tmp0_iterator.hasNext_49()) {
      var tmp1_loop_parameter = tmp0_iterator.next_56();
      var key = tmp1_loop_parameter._get_key__4();
      var value = tmp1_loop_parameter._get_value__7();
      this.put_5(key, value);
      Unit_getInstance();
    }
  };
  AbstractMutableMap.prototype._get_values__6 = function () {
    if (this.__values_0 == null) {
      var tmp = this;
      tmp.__values_0 = new _no_name_provided__28(this);
    }return ensureNotNull(this.__values_0);
  };
  AbstractMutableMap.prototype.remove_28 = function (key) {
    this.checkIsMutable_13();
    var iter = this._get_entries__5().iterator_69();
    while (iter.hasNext_49()) {
      var entry = iter.next_56();
      var k = entry._get_key__4();
      if (equals_0(key, k)) {
        var value = entry._get_value__7();
        iter.remove_23();
        return value;
      }}
    return null;
  };
  AbstractMutableMap.prototype.checkIsMutable_13 = function () {
  };
  AbstractMutableMap.$metadata$ = {
    simpleName: 'AbstractMutableMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function AbstractMutableSet() {
    AbstractMutableCollection.call(this);
  }
  AbstractMutableSet.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Set) : false))
      return false;
    else {
    }
    return Companion_getInstance_1().setEquals(this, other);
  };
  AbstractMutableSet.prototype.hashCode = function () {
    return Companion_getInstance_1().unorderedHashCode(this);
  };
  AbstractMutableSet.$metadata$ = {
    simpleName: 'AbstractMutableSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function _set_array_($this, _set___) {
    $this._array_3 = _set___;
  }
  function _get_array__3($this) {
    return $this._array_3;
  }
  function _set_isReadOnly_($this, _set___) {
    $this._isReadOnly = _set___;
  }
  function _get_isReadOnly_($this) {
    return $this._isReadOnly;
  }
  function ArrayList_init_$Init$($this) {
    ArrayList.call($this, []);
    return $this;
  }
  function ArrayList_init_$Create$() {
    return ArrayList_init_$Init$(Object.create(ArrayList.prototype));
  }
  function ArrayList_init_$Init$_0(initialCapacity, $this) {
    ArrayList.call($this, []);
    return $this;
  }
  function ArrayList_init_$Create$_0(initialCapacity) {
    return ArrayList_init_$Init$_0(initialCapacity, Object.create(ArrayList.prototype));
  }
  function ArrayList_init_$Init$_1(initialCapacity, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      initialCapacity = 0;
    ArrayList_init_$Init$_0(initialCapacity, $this);
    return $this;
  }
  function ArrayList_init_$Create$_1(initialCapacity, $mask0, $marker) {
    return ArrayList_init_$Init$_1(initialCapacity, $mask0, $marker, Object.create(ArrayList.prototype));
  }
  function ArrayList_init_$Init$_2(elements, $this) {
    ArrayList.call($this, copyToArray_0(elements));
    return $this;
  }
  function ArrayList_init_$Create$_2(elements) {
    return ArrayList_init_$Init$_2(elements, Object.create(ArrayList.prototype));
  }
  function rangeCheck($this, index) {
    Companion_getInstance().checkElementIndex(index, $this._get_size__42());
    return index;
  }
  function insertionRangeCheck($this, index) {
    Companion_getInstance().checkPositionIndex(index, $this._get_size__42());
    return index;
  }
  function ArrayList(array) {
    AbstractMutableList.call(this);
    this._array_3 = array;
    this._isReadOnly = false;
  }
  ArrayList.prototype.build_1 = function () {
    this.checkIsMutable_13();
    this._isReadOnly = true;
    return this;
  };
  ArrayList.prototype.trimToSize_0 = function () {
  };
  ArrayList.prototype.ensureCapacity_0 = function (minCapacity) {
  };
  ArrayList.prototype._get_size__42 = function () {
    return this._array_3.length;
  };
  ArrayList.prototype.get_44 = function (index) {
    var tmp = this._array_3[rangeCheck(this, index)];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  ArrayList.prototype.set_10 = function (index, element) {
    this.checkIsMutable_13();
    rangeCheck(this, index);
    Unit_getInstance();
    var tmp0_apply_0 = this._array_3[index];
    this._array_3[index] = element;
    var tmp = tmp0_apply_0;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  ArrayList.prototype.add_25 = function (element) {
    this.checkIsMutable_13();
    var tmp0_asDynamic_0 = this._array_3;
    tmp0_asDynamic_0.push(element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__1();
    tmp0_this._set_modCount__1(tmp1 + 1 | 0);
    Unit_getInstance();
    return true;
  };
  ArrayList.prototype.add_23 = function (index, element) {
    this.checkIsMutable_13();
    var tmp0_asDynamic_0 = this._array_3;
    tmp0_asDynamic_0.splice(insertionRangeCheck(this, index), 0, element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__1();
    tmp0_this._set_modCount__1(tmp1 + 1 | 0);
    Unit_getInstance();
  };
  ArrayList.prototype.addAll_18 = function (elements) {
    this.checkIsMutable_13();
    if (elements.isEmpty_51())
      return false;
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp0_plus_0 = tmp0_this._array_3;
    var tmp1_plus_0 = copyToArray_0(elements);
    tmp._array_3 = tmp0_plus_0.concat(tmp1_plus_0);
    var tmp1_this = this;
    var tmp2 = tmp1_this._get_modCount__1();
    tmp1_this._set_modCount__1(tmp2 + 1 | 0);
    Unit_getInstance();
    return true;
  };
  ArrayList.prototype.addAll_16 = function (index, elements) {
    this.checkIsMutable_13();
    insertionRangeCheck(this, index);
    Unit_getInstance();
    if (index === this._get_size__42())
      return this.addAll_18(elements);
    if (elements.isEmpty_51())
      return false;
    var tmp0_subject = index;
    if (tmp0_subject === this._get_size__42())
      return this.addAll_18(elements);
    else if (tmp0_subject === 0) {
      var tmp = this;
      var tmp0_plus_0 = copyToArray_0(elements);
      var tmp1_plus_0 = this._array_3;
      tmp._array_3 = tmp0_plus_0.concat(tmp1_plus_0);
    } else {
      var tmp_0 = this;
      var tmp2_asDynamic_0 = copyOfRange(this._array_3, 0, index);
      tmp_0._array_3 = tmp2_asDynamic_0.concat(copyToArray_0(elements), copyOfRange(this._array_3, index, this._get_size__42()));
    }
    var tmp1_this = this;
    var tmp2 = tmp1_this._get_modCount__1();
    tmp1_this._set_modCount__1(tmp2 + 1 | 0);
    Unit_getInstance();
    return true;
  };
  ArrayList.prototype.removeAt_2 = function (index) {
    this.checkIsMutable_13();
    rangeCheck(this, index);
    Unit_getInstance();
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__1();
    tmp0_this._set_modCount__1(tmp1 + 1 | 0);
    Unit_getInstance();
    var tmp;
    if (index === _get_lastIndex__5(this)) {
      var tmp0_asDynamic_0 = this._array_3;
      tmp = tmp0_asDynamic_0.pop();
    } else {
      var tmp1_asDynamic_0 = this._array_3;
      tmp = tmp1_asDynamic_0.splice(index, 1)[0];
    }
    return tmp;
  };
  ArrayList.prototype.remove_31 = function (element) {
    this.checkIsMutable_13();
    var inductionVariable = 0;
    var last_0 = this._array_3.length - 1 | 0;
    if (inductionVariable <= last_0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals_0(this._array_3[index], element)) {
          var tmp0_asDynamic_0 = this._array_3;
          tmp0_asDynamic_0.splice(index, 1);
          var tmp1_this = this;
          var tmp2 = tmp1_this._get_modCount__1();
          tmp1_this._set_modCount__1(tmp2 + 1 | 0);
          Unit_getInstance();
          return true;
        }}
       while (inductionVariable <= last_0);
    return false;
  };
  ArrayList.prototype.removeRange_1 = function (fromIndex, toIndex) {
    this.checkIsMutable_13();
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__1();
    tmp0_this._set_modCount__1(tmp1 + 1 | 0);
    Unit_getInstance();
    var tmp0_asDynamic_0 = this._array_3;
    tmp0_asDynamic_0.splice(fromIndex, toIndex - fromIndex | 0);
  };
  ArrayList.prototype.clear_21 = function () {
    this.checkIsMutable_13();
    var tmp = this;
    tmp._array_3 = [];
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__1();
    tmp0_this._set_modCount__1(tmp1 + 1 | 0);
    Unit_getInstance();
  };
  ArrayList.prototype.indexOf_11 = function (element) {
    return indexOf(this._array_3, element);
  };
  ArrayList.prototype.lastIndexOf_11 = function (element) {
    return lastIndexOf(this._array_3, element);
  };
  ArrayList.prototype.toString = function () {
    return arrayToString(this._array_3);
  };
  ArrayList.prototype.toArray_14 = function () {
    return [].slice.call(this._array_3);
  };
  ArrayList.prototype.toArray = function () {
    return this.toArray_14();
  };
  ArrayList.prototype.checkIsMutable_13 = function () {
    if (this._isReadOnly)
      throw UnsupportedOperationException_init_$Create$();
  };
  ArrayList.$metadata$ = {
    simpleName: 'ArrayList',
    kind: 'class',
    interfaces: [MutableList, RandomAccess]
  };
  function _set__stableSortingIsSupported_(_set___) {
    _stableSortingIsSupported = _set___;
  }
  function _get__stableSortingIsSupported_() {
    return _stableSortingIsSupported;
  }
  var _stableSortingIsSupported;
  function HashCode() {
    HashCode_instance = this;
  }
  HashCode.prototype.equals_1 = function (value1, value2) {
    return equals_0(value1, value2);
  };
  HashCode.prototype.getHashCode_0 = function (value) {
    var tmp0_safe_receiver = value;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  HashCode.$metadata$ = {
    simpleName: 'HashCode',
    kind: 'object',
    interfaces: [EqualityComparator]
  };
  var HashCode_instance;
  function HashCode_getInstance() {
    if (HashCode_instance == null)
      new HashCode();
    return HashCode_instance;
  }
  function EqualityComparator() {
  }
  EqualityComparator.$metadata$ = {
    simpleName: 'EqualityComparator',
    kind: 'interface',
    interfaces: []
  };
  function EntrySet($outer) {
    this._$this_3 = $outer;
    AbstractEntrySet.call(this);
  }
  EntrySet.prototype.add_19 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  EntrySet.prototype.add_25 = function (element) {
    return this.add_19((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet.prototype.clear_21 = function () {
    this._$this_3.clear_21();
  };
  EntrySet.prototype.containsEntry_4 = function (element) {
    return this._$this_3.containsEntry_5(element);
  };
  EntrySet.prototype.iterator_69 = function () {
    return this._$this_3._internalMap.iterator_69();
  };
  EntrySet.prototype.remove_24 = function (element) {
    if (this.contains_58(element)) {
      this._$this_3.remove_28(element._get_key__4());
      Unit_getInstance();
      return true;
    }return false;
  };
  EntrySet.prototype.remove_31 = function (element) {
    if (!(!(element == null) ? isInterface(element, MutableEntry) : false))
      return false;
    else {
    }
    return this.remove_24((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet.prototype._get_size__42 = function () {
    return this._$this_3._get_size__42();
  };
  EntrySet.$metadata$ = {
    simpleName: 'EntrySet',
    kind: 'class',
    interfaces: []
  };
  function _get_internalMap_($this) {
    return $this._internalMap;
  }
  function _get_equality_($this) {
    return $this._equality;
  }
  function HashMap_init_$Init$(internalMap, $this) {
    AbstractMutableMap.call($this);
    HashMap.call($this);
    $this._internalMap = internalMap;
    $this._equality = internalMap._get_equality__0();
    return $this;
  }
  function HashMap_init_$Create$(internalMap) {
    return HashMap_init_$Init$(internalMap, Object.create(HashMap.prototype));
  }
  function HashMap_init_$Init$_0($this) {
    HashMap_init_$Init$(new InternalHashCodeMap(HashCode_getInstance()), $this);
    return $this;
  }
  function HashMap_init_$Create$_0() {
    return HashMap_init_$Init$_0(Object.create(HashMap.prototype));
  }
  function HashMap_init_$Init$_1(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_0($this);
    var tmp0_require_0 = initialCapacity >= 0;
    if (!tmp0_require_0) {
      var message_1 = '' + 'Negative initial capacity: ' + initialCapacity;
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_1));
    }var tmp1_require_0 = loadFactor >= 0;
    if (!tmp1_require_0) {
      var message_1_0 = '' + 'Non-positive load factor: ' + loadFactor;
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_1_0));
    }return $this;
  }
  function HashMap_init_$Create$_1(initialCapacity, loadFactor) {
    return HashMap_init_$Init$_1(initialCapacity, loadFactor, Object.create(HashMap.prototype));
  }
  function HashMap_init_$Init$_2(initialCapacity, loadFactor, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      loadFactor = 0.0;
    HashMap_init_$Init$_1(initialCapacity, loadFactor, $this);
    return $this;
  }
  function HashMap_init_$Create$_2(initialCapacity, loadFactor, $mask0, $marker) {
    return HashMap_init_$Init$_2(initialCapacity, loadFactor, $mask0, $marker, Object.create(HashMap.prototype));
  }
  function HashMap_init_$Init$_3(initialCapacity, $this) {
    HashMap_init_$Init$_1(initialCapacity, 0.0, $this);
    return $this;
  }
  function HashMap_init_$Create$_3(initialCapacity) {
    return HashMap_init_$Init$_3(initialCapacity, Object.create(HashMap.prototype));
  }
  function HashMap_init_$Init$_4(original, $this) {
    HashMap_init_$Init$_0($this);
    $this.putAll_2(original);
    return $this;
  }
  function HashMap_init_$Create$_4(original) {
    return HashMap_init_$Init$_4(original, Object.create(HashMap.prototype));
  }
  function _set__entries_($this, _set___) {
    $this.__entries = _set___;
  }
  function _get__entries_($this) {
    return $this.__entries;
  }
  HashMap.prototype.clear_21 = function () {
    this._internalMap.clear_21();
  };
  HashMap.prototype.containsKey_6 = function (key) {
    return this._internalMap.contains_47(key);
  };
  HashMap.prototype.containsValue_6 = function (value) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_any_0 = this._internalMap;
      var tmp;
      if (isInterface(tmp0_any_0, Collection)) {
        tmp = tmp0_any_0.isEmpty_51();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = false;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = tmp0_any_0.iterator_69();
      while (tmp0_iterator_1.hasNext_49()) {
        var element_2 = tmp0_iterator_1.next_56();
        if (this._equality.equals_1(element_2._get_value__7(), value)) {
          tmp$ret$0 = true;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = false;
    }
     while (false);
    return tmp$ret$0;
  };
  HashMap.prototype._get_entries__5 = function () {
    if (this.__entries == null) {
      this.__entries = this.createEntrySet_0();
    }return ensureNotNull(this.__entries);
  };
  HashMap.prototype.createEntrySet_0 = function () {
    return new EntrySet(this);
  };
  HashMap.prototype.get_33 = function (key) {
    return this._internalMap.get_33(key);
  };
  HashMap.prototype.put_5 = function (key, value) {
    return this._internalMap.put_5(key, value);
  };
  HashMap.prototype.remove_28 = function (key) {
    return this._internalMap.remove_28(key);
  };
  HashMap.prototype._get_size__42 = function () {
    return this._internalMap._get_size__42();
  };
  function HashMap() {
    this.__entries = null;
  }
  HashMap.$metadata$ = {
    simpleName: 'HashMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function HashSet_init_$Init$($this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this._map = HashMap_init_$Create$_0();
    return $this;
  }
  function HashSet_init_$Create$() {
    return HashSet_init_$Init$(Object.create(HashSet.prototype));
  }
  function HashSet_init_$Init$_0(elements, $this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this._map = HashMap_init_$Create$_3(elements._get_size__42());
    $this.addAll_18(elements);
    Unit_getInstance();
    return $this;
  }
  function HashSet_init_$Create$_0(elements) {
    return HashSet_init_$Init$_0(elements, Object.create(HashSet.prototype));
  }
  function HashSet_init_$Init$_1(initialCapacity, loadFactor, $this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this._map = HashMap_init_$Create$_1(initialCapacity, loadFactor);
    return $this;
  }
  function HashSet_init_$Create$_1(initialCapacity, loadFactor) {
    return HashSet_init_$Init$_1(initialCapacity, loadFactor, Object.create(HashSet.prototype));
  }
  function HashSet_init_$Init$_2(initialCapacity, loadFactor, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      loadFactor = 0.0;
    HashSet_init_$Init$_1(initialCapacity, loadFactor, $this);
    return $this;
  }
  function HashSet_init_$Create$_2(initialCapacity, loadFactor, $mask0, $marker) {
    return HashSet_init_$Init$_2(initialCapacity, loadFactor, $mask0, $marker, Object.create(HashSet.prototype));
  }
  function HashSet_init_$Init$_3(initialCapacity, $this) {
    HashSet_init_$Init$_1(initialCapacity, 0.0, $this);
    return $this;
  }
  function HashSet_init_$Create$_3(initialCapacity) {
    return HashSet_init_$Init$_3(initialCapacity, Object.create(HashSet.prototype));
  }
  function HashSet_init_$Init$_4(map_1, $this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this._map = map_1;
    return $this;
  }
  function HashSet_init_$Create$_4(map_1) {
    return HashSet_init_$Init$_4(map_1, Object.create(HashSet.prototype));
  }
  HashSet.prototype._get_map__0 = function () {
    return this._map;
  };
  HashSet.prototype.add_25 = function (element) {
    var old = this._map.put_5(element, this);
    return old == null;
  };
  HashSet.prototype.clear_21 = function () {
    this._map.clear_21();
  };
  HashSet.prototype.contains_58 = function (element) {
    return this._map.containsKey_6(element);
  };
  HashSet.prototype.isEmpty_51 = function () {
    return this._map.isEmpty_51();
  };
  HashSet.prototype.iterator_69 = function () {
    return this._map._get_keys__6().iterator_69();
  };
  HashSet.prototype.remove_31 = function (element) {
    return !(this._map.remove_28(element) == null);
  };
  HashSet.prototype._get_size__42 = function () {
    return this._map._get_size__42();
  };
  function HashSet() {
  }
  HashSet.$metadata$ = {
    simpleName: 'HashSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function computeNext($this) {
    if ($this._chainOrEntry != null ? $this._isChain : false) {
      var tmp0_unsafeCast_0 = $this._chainOrEntry;
      var chainSize = tmp0_unsafeCast_0.length;
      var tmp0_this = $this;
      tmp0_this._itemIndex = tmp0_this._itemIndex + 1 | 0;
      if (tmp0_this._itemIndex < chainSize)
        return 0;
      else {
      }
    }var tmp1_this = $this;
    tmp1_this._keyIndex = tmp1_this._keyIndex + 1 | 0;
    if (tmp1_this._keyIndex < $this._keys.length) {
      $this._chainOrEntry = $this._this$0_11._backingMap[$this._keys[$this._keyIndex]];
      var tmp = $this;
      var tmp_0 = $this._chainOrEntry;
      tmp._isChain = !(tmp_0 == null) ? isArray(tmp_0) : false;
      $this._itemIndex = 0;
      return 0;
    } else {
      {
        $this._chainOrEntry = null;
        return 1;
      }
    }
  }
  function _set_backingMap_($this, _set___) {
    $this._backingMap = _set___;
  }
  function _get_backingMap_($this) {
    return $this._backingMap;
  }
  function _set_size_($this, _set___) {
    $this._size = _set___;
  }
  function getEntry($this, key) {
    var tmp0_elvis_lhs = getChainOrEntryOrNull($this, $this._equality_0.getHashCode_0(key));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var chainOrEntry = tmp;
    if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
      var entry = chainOrEntry;
      if ($this._equality_0.equals_1(entry._get_key__4(), key)) {
        return entry;
      } else {
        return null;
      }
    } else {
      {
        var chain = chainOrEntry;
        return findEntryInChain(chain, $this, key);
      }
    }
  }
  function findEntryInChain(_this_, $this, key) {
    var tmp$ret$0;
    l$ret$1: do {
      var indexedObject = _this_;
      var inductionVariable = 0;
      var last_0 = indexedObject.length;
      while (inductionVariable < last_0) {
        var element_2 = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if ($this._equality_0.equals_1(element_2._get_key__4(), key)) {
          tmp$ret$0 = element_2;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = null;
    }
     while (false);
    return tmp$ret$0;
  }
  function getChainOrEntryOrNull($this, hashCode_1) {
    var chainOrEntry = $this._backingMap[hashCode_1];
    return chainOrEntry === undefined ? null : chainOrEntry;
  }
  function _no_name_provided__29(this$0) {
    this._this$0_11 = this$0;
    this._state = -1;
    this._keys = Object.keys(this._this$0_11._backingMap);
    this._keyIndex = -1;
    this._chainOrEntry = null;
    this._isChain = false;
    this._itemIndex = -1;
    this._lastEntry = null;
  }
  _no_name_provided__29.prototype._set_state__0 = function (_set___) {
    this._state = _set___;
  };
  _no_name_provided__29.prototype._get_state__0 = function () {
    return this._state;
  };
  _no_name_provided__29.prototype._get_keys__6 = function () {
    return this._keys;
  };
  _no_name_provided__29.prototype._set_keyIndex_ = function (_set___) {
    this._keyIndex = _set___;
  };
  _no_name_provided__29.prototype._get_keyIndex_ = function () {
    return this._keyIndex;
  };
  _no_name_provided__29.prototype._set_chainOrEntry_ = function (_set___) {
    this._chainOrEntry = _set___;
  };
  _no_name_provided__29.prototype._get_chainOrEntry_ = function () {
    return this._chainOrEntry;
  };
  _no_name_provided__29.prototype._set_isChain_ = function (_set___) {
    this._isChain = _set___;
  };
  _no_name_provided__29.prototype._get_isChain_ = function () {
    return this._isChain;
  };
  _no_name_provided__29.prototype._set_itemIndex_ = function (_set___) {
    this._itemIndex = _set___;
  };
  _no_name_provided__29.prototype._get_itemIndex_ = function () {
    return this._itemIndex;
  };
  _no_name_provided__29.prototype._set_lastEntry_ = function (_set___) {
    this._lastEntry = _set___;
  };
  _no_name_provided__29.prototype._get_lastEntry_ = function () {
    return this._lastEntry;
  };
  _no_name_provided__29.prototype.hasNext_49 = function () {
    if (this._state === -1)
      this._state = computeNext(this);
    return this._state === 0;
  };
  _no_name_provided__29.prototype.next_56 = function () {
    if (!this.hasNext_49())
      throw NoSuchElementException_init_$Create$();
    var tmp;
    if (this._isChain) {
      var tmp0_unsafeCast_0 = this._chainOrEntry;
      tmp = tmp0_unsafeCast_0[this._itemIndex];
    } else {
      var tmp1_unsafeCast_0 = this._chainOrEntry;
      tmp = tmp1_unsafeCast_0;
    }
    var lastEntry = tmp;
    this._lastEntry = lastEntry;
    this._state = -1;
    return lastEntry;
  };
  _no_name_provided__29.prototype.remove_23 = function () {
    var tmp0_checkNotNull_0 = this._lastEntry;
    var tmp$ret$0;
    l$ret$1: do {
      if (tmp0_checkNotNull_0 == null) {
        var message_2_1 = 'Required value was null.';
        throw IllegalStateException_init_$Create$_0(toString_1(message_2_1));
      } else {
        tmp$ret$0 = tmp0_checkNotNull_0;
        break l$ret$1;
      }
    }
     while (false);
    Unit_getInstance();
    this._this$0_11.remove_28(ensureNotNull(this._lastEntry)._get_key__4());
    Unit_getInstance();
    this._lastEntry = null;
    var tmp0_this = this;
    var tmp1 = tmp0_this._itemIndex;
    tmp0_this._itemIndex = tmp1 - 1 | 0;
    Unit_getInstance();
  };
  _no_name_provided__29.$metadata$ = {
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function InternalHashCodeMap(equality) {
    this._equality_0 = equality;
    this._backingMap = this.createJsMap_0();
    this._size = 0;
  }
  InternalHashCodeMap.prototype._get_equality__0 = function () {
    return this._equality_0;
  };
  InternalHashCodeMap.prototype._get_size__42 = function () {
    return this._size;
  };
  InternalHashCodeMap.prototype.put_5 = function (key, value) {
    var hashCode_1 = this._equality_0.getHashCode_0(key);
    var chainOrEntry = getChainOrEntryOrNull(this, hashCode_1);
    if (chainOrEntry == null) {
      this._backingMap[hashCode_1] = new SimpleEntry(key, value);
    } else {
      if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
        var entry = chainOrEntry;
        if (this._equality_0.equals_1(entry._get_key__4(), key)) {
          return entry.setValue_1(value);
        } else {
          var tmp0_arrayOf_0 = [entry, new SimpleEntry(key, value)];
          this._backingMap[hashCode_1] = tmp0_arrayOf_0;
          var tmp0_this = this;
          var tmp1 = tmp0_this._size;
          tmp0_this._size = tmp1 + 1 | 0;
          Unit_getInstance();
          return null;
        }
      } else {
        {
          var chain = chainOrEntry;
          var entry_0 = findEntryInChain(chain, this, key);
          if (!(entry_0 == null)) {
            return entry_0.setValue_1(value);
          }chain.push(new SimpleEntry(key, value));
        }
      }
    }
    var tmp2_this = this;
    var tmp3 = tmp2_this._size;
    tmp2_this._size = tmp3 + 1 | 0;
    Unit_getInstance();
    return null;
  };
  InternalHashCodeMap.prototype.remove_28 = function (key) {
    var hashCode_1 = this._equality_0.getHashCode_0(key);
    var tmp0_elvis_lhs = getChainOrEntryOrNull(this, hashCode_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var chainOrEntry = tmp;
    if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
      var entry = chainOrEntry;
      if (this._equality_0.equals_1(entry._get_key__4(), key)) {
        jsDeleteProperty(this._backingMap, hashCode_1);
        var tmp1_this = this;
        var tmp2 = tmp1_this._size;
        tmp1_this._size = tmp2 - 1 | 0;
        Unit_getInstance();
        return entry._get_value__7();
      } else {
        return null;
      }
    } else {
      {
        var chain = chainOrEntry;
        var inductionVariable = 0;
        var last_0 = chain.length - 1 | 0;
        if (inductionVariable <= last_0)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var entry_0 = chain[index];
            if (this._equality_0.equals_1(key, entry_0._get_key__4())) {
              if (chain.length === 1) {
                chain.length = 0;
                jsDeleteProperty(this._backingMap, hashCode_1);
              } else {
                chain.splice(index, 1);
              }
              var tmp4_this = this;
              var tmp5 = tmp4_this._size;
              tmp4_this._size = tmp5 - 1 | 0;
              Unit_getInstance();
              return entry_0._get_value__7();
            }}
           while (inductionVariable <= last_0);
      }
    }
    return null;
  };
  InternalHashCodeMap.prototype.clear_21 = function () {
    this._backingMap = this.createJsMap_0();
    this._size = 0;
  };
  InternalHashCodeMap.prototype.contains_47 = function (key) {
    return !(getEntry(this, key) == null);
  };
  InternalHashCodeMap.prototype.get_33 = function (key) {
    var tmp0_safe_receiver = getEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__7();
  };
  InternalHashCodeMap.prototype.iterator_69 = function () {
    return new _no_name_provided__29(this);
  };
  InternalHashCodeMap.$metadata$ = {
    simpleName: 'InternalHashCodeMap',
    kind: 'class',
    interfaces: [InternalMap]
  };
  InternalMap.prototype.createJsMap_0 = function () {
    var result = Object.create(null);
    result['foo'] = 1;
    jsDeleteProperty(result, 'foo');
    return result;
  };
  function InternalMap() {
  }
  InternalMap.$metadata$ = {
    simpleName: 'InternalMap',
    kind: 'interface',
    interfaces: [MutableIterable]
  };
  function _set_last_($this, _set___) {
    $this._last_5 = _set___;
  }
  function _get_last_($this) {
    return $this._last_5;
  }
  function _set_next__4($this, _set___) {
    $this._next_4 = _set___;
  }
  function _get_next__4($this) {
    return $this._next_4;
  }
  function EntryIterator($outer) {
    this._$this_4 = $outer;
    this._last_5 = null;
    this._next_4 = null;
    this._next_4 = this._$this_4._$this_6._head;
  }
  EntryIterator.prototype.hasNext_49 = function () {
    return !(this._next_4 === null);
  };
  EntryIterator.prototype.next_56 = function () {
    if (!this.hasNext_49())
      throw NoSuchElementException_init_$Create$();
    var current = ensureNotNull(this._next_4);
    this._last_5 = current;
    var tmp = this;
    var tmp0_takeIf_0 = current._next_5;
    var tmp_0;
    if (!(tmp0_takeIf_0 === this._$this_4._$this_6._head)) {
      tmp_0 = tmp0_takeIf_0;
    } else {
      {
        tmp_0 = null;
      }
    }
    tmp._next_4 = tmp_0;
    return current;
  };
  EntryIterator.prototype.remove_23 = function () {
    var tmp0_check_0 = !(this._last_5 == null);
    if (!tmp0_check_0) {
      var message_2_1 = 'Check failed.';
      throw IllegalStateException_init_$Create$_0(toString_1(message_2_1));
    }this._$this_4.checkIsMutable_13();
    remove(ensureNotNull(this._last_5), this._$this_4._$this_6);
    this._$this_4._$this_6._map_0.remove_28(ensureNotNull(this._last_5)._get_key__4());
    Unit_getInstance();
    this._last_5 = null;
  };
  EntryIterator.$metadata$ = {
    simpleName: 'EntryIterator',
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function ChainEntry($outer, key, value) {
    this._$this_5 = $outer;
    SimpleEntry.call(this, key, value);
    this._next_5 = null;
    this._prev = null;
  }
  ChainEntry.prototype._set_next_ = function (_set___) {
    this._next_5 = _set___;
  };
  ChainEntry.prototype._get_next_ = function () {
    return this._next_5;
  };
  ChainEntry.prototype._set_prev_ = function (_set___) {
    this._prev = _set___;
  };
  ChainEntry.prototype._get_prev_ = function () {
    return this._prev;
  };
  ChainEntry.prototype.setValue_1 = function (newValue) {
    this._$this_5.checkIsMutable_13();
    return SimpleEntry.prototype.setValue_1.call(this, newValue);
  };
  ChainEntry.$metadata$ = {
    simpleName: 'ChainEntry',
    kind: 'class',
    interfaces: []
  };
  function EntrySet_0($outer) {
    this._$this_6 = $outer;
    AbstractEntrySet.call(this);
  }
  EntrySet_0.prototype.add_19 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  EntrySet_0.prototype.add_25 = function (element) {
    return this.add_19((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet_0.prototype.clear_21 = function () {
    this._$this_6.clear_21();
  };
  EntrySet_0.prototype.containsEntry_4 = function (element) {
    return this._$this_6.containsEntry_5(element);
  };
  EntrySet_0.prototype.iterator_69 = function () {
    return new EntryIterator(this);
  };
  EntrySet_0.prototype.remove_24 = function (element) {
    this.checkIsMutable_13();
    if (this.contains_58(element)) {
      this._$this_6.remove_28(element._get_key__4());
      Unit_getInstance();
      return true;
    }return false;
  };
  EntrySet_0.prototype.remove_31 = function (element) {
    if (!(!(element == null) ? isInterface(element, MutableEntry) : false))
      return false;
    else {
    }
    return this.remove_24((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet_0.prototype._get_size__42 = function () {
    return this._$this_6._get_size__42();
  };
  EntrySet_0.prototype.checkIsMutable_13 = function () {
    return this._$this_6.checkIsMutable_13();
  };
  EntrySet_0.$metadata$ = {
    simpleName: 'EntrySet',
    kind: 'class',
    interfaces: []
  };
  function _set_head_($this, _set___) {
    $this._head = _set___;
  }
  function _get_head_($this) {
    return $this._head;
  }
  function addToEnd(_this_, $this) {
    var tmp0_check_0 = _this_._next_5 == null ? _this_._prev == null : false;
    if (!tmp0_check_0) {
      var message_2_1 = 'Check failed.';
      throw IllegalStateException_init_$Create$_0(toString_1(message_2_1));
    }var _head = $this._head;
    if (_head == null) {
      $this._head = _this_;
      _this_._next_5 = _this_;
      _this_._prev = _this_;
    } else {
      var tmp1_checkNotNull_0 = _head._prev;
      var tmp$ret$0;
      l$ret$1: do {
        if (tmp1_checkNotNull_0 == null) {
          var message_2_1_0 = 'Required value was null.';
          throw IllegalStateException_init_$Create$_0(toString_1(message_2_1_0));
        } else {
          tmp$ret$0 = tmp1_checkNotNull_0;
          break l$ret$1;
        }
      }
       while (false);
      var _tail = tmp$ret$0;
      _this_._prev = _tail;
      _this_._next_5 = _head;
      _head._prev = _this_;
      _tail._next_5 = _this_;
    }
  }
  function remove(_this_, $this) {
    if (_this_._next_5 === _this_) {
      $this._head = null;
    } else {
      if ($this._head === _this_) {
        $this._head = _this_._next_5;
      }ensureNotNull(_this_._next_5)._prev = _this_._prev;
      ensureNotNull(_this_._prev)._next_5 = _this_._next_5;
    }
    _this_._next_5 = null;
    _this_._prev = null;
  }
  function _get_map_($this) {
    return $this._map_0;
  }
  function _set_isReadOnly__0($this, _set___) {
    $this._isReadOnly_0 = _set___;
  }
  function _get_isReadOnly__0($this) {
    return $this._isReadOnly_0;
  }
  function LinkedHashMap_init_$Init$($this) {
    HashMap_init_$Init$_0($this);
    LinkedHashMap.call($this);
    $this._map_0 = HashMap_init_$Create$_0();
    return $this;
  }
  function LinkedHashMap_init_$Create$() {
    return LinkedHashMap_init_$Init$(Object.create(LinkedHashMap.prototype));
  }
  function LinkedHashMap_init_$Init$_0(backingMap, $this) {
    HashMap_init_$Init$_0($this);
    LinkedHashMap.call($this);
    var tmp = $this;
    tmp._map_0 = backingMap instanceof HashMap ? backingMap : THROW_CCE();
    return $this;
  }
  function LinkedHashMap_init_$Create$_0(backingMap) {
    return LinkedHashMap_init_$Init$_0(backingMap, Object.create(LinkedHashMap.prototype));
  }
  function LinkedHashMap_init_$Init$_1(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_1(initialCapacity, loadFactor, $this);
    LinkedHashMap.call($this);
    $this._map_0 = HashMap_init_$Create$_0();
    return $this;
  }
  function LinkedHashMap_init_$Create$_1(initialCapacity, loadFactor) {
    return LinkedHashMap_init_$Init$_1(initialCapacity, loadFactor, Object.create(LinkedHashMap.prototype));
  }
  function LinkedHashMap_init_$Init$_2(initialCapacity, loadFactor, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      loadFactor = 0.0;
    LinkedHashMap_init_$Init$_1(initialCapacity, loadFactor, $this);
    return $this;
  }
  function LinkedHashMap_init_$Create$_2(initialCapacity, loadFactor, $mask0, $marker) {
    return LinkedHashMap_init_$Init$_2(initialCapacity, loadFactor, $mask0, $marker, Object.create(LinkedHashMap.prototype));
  }
  function LinkedHashMap_init_$Init$_3(initialCapacity, $this) {
    LinkedHashMap_init_$Init$_1(initialCapacity, 0.0, $this);
    return $this;
  }
  function LinkedHashMap_init_$Create$_3(initialCapacity) {
    return LinkedHashMap_init_$Init$_3(initialCapacity, Object.create(LinkedHashMap.prototype));
  }
  function LinkedHashMap_init_$Init$_4(original, $this) {
    HashMap_init_$Init$_0($this);
    LinkedHashMap.call($this);
    $this._map_0 = HashMap_init_$Create$_0();
    $this.putAll_2(original);
    return $this;
  }
  function LinkedHashMap_init_$Create$_4(original) {
    return LinkedHashMap_init_$Init$_4(original, Object.create(LinkedHashMap.prototype));
  }
  LinkedHashMap.prototype.build_1 = function () {
    this.checkIsMutable_13();
    this._isReadOnly_0 = true;
    return this;
  };
  LinkedHashMap.prototype.clear_21 = function () {
    this.checkIsMutable_13();
    this._map_0.clear_21();
    this._head = null;
  };
  LinkedHashMap.prototype.containsKey_6 = function (key) {
    return this._map_0.containsKey_6(key);
  };
  LinkedHashMap.prototype.containsValue_6 = function (value) {
    var tmp0_elvis_lhs = this._head;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var node = tmp;
    do {
      if (equals_0(node._get_value__7(), value)) {
        return true;
      }node = ensureNotNull(node._next_5);
    }
     while (!(node === this._head));
    return false;
  };
  LinkedHashMap.prototype.createEntrySet_0 = function () {
    return new EntrySet_0(this);
  };
  LinkedHashMap.prototype.get_33 = function (key) {
    var tmp0_safe_receiver = this._map_0.get_33(key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__7();
  };
  LinkedHashMap.prototype.put_5 = function (key, value) {
    this.checkIsMutable_13();
    var old = this._map_0.get_33(key);
    if (old == null) {
      var newEntry = new ChainEntry(this, key, value);
      this._map_0.put_5(key, newEntry);
      Unit_getInstance();
      addToEnd(newEntry, this);
      return null;
    } else {
      return old.setValue_1(value);
    }
  };
  LinkedHashMap.prototype.remove_28 = function (key) {
    this.checkIsMutable_13();
    var entry = this._map_0.remove_28(key);
    if (!(entry == null)) {
      remove(entry, this);
      return entry._get_value__7();
    }return null;
  };
  LinkedHashMap.prototype._get_size__42 = function () {
    return this._map_0._get_size__42();
  };
  LinkedHashMap.prototype.checkIsMutable_13 = function () {
    if (this._isReadOnly_0)
      throw UnsupportedOperationException_init_$Create$();
  };
  function LinkedHashMap() {
    this._head = null;
    this._isReadOnly_0 = false;
  }
  LinkedHashMap.$metadata$ = {
    simpleName: 'LinkedHashMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function LinkedHashSet_init_$Init$(map_1, $this) {
    HashSet_init_$Init$_4(map_1, $this);
    LinkedHashSet.call($this);
    return $this;
  }
  function LinkedHashSet_init_$Create$(map_1) {
    return LinkedHashSet_init_$Init$(map_1, Object.create(LinkedHashSet.prototype));
  }
  function LinkedHashSet_init_$Init$_0($this) {
    HashSet_init_$Init$_4(LinkedHashMap_init_$Create$(), $this);
    LinkedHashSet.call($this);
    return $this;
  }
  function LinkedHashSet_init_$Create$_0() {
    return LinkedHashSet_init_$Init$_0(Object.create(LinkedHashSet.prototype));
  }
  function LinkedHashSet_init_$Init$_1(elements, $this) {
    HashSet_init_$Init$_4(LinkedHashMap_init_$Create$(), $this);
    LinkedHashSet.call($this);
    $this.addAll_18(elements);
    Unit_getInstance();
    return $this;
  }
  function LinkedHashSet_init_$Create$_1(elements) {
    return LinkedHashSet_init_$Init$_1(elements, Object.create(LinkedHashSet.prototype));
  }
  function LinkedHashSet_init_$Init$_2(initialCapacity, loadFactor, $this) {
    HashSet_init_$Init$_4(LinkedHashMap_init_$Create$_1(initialCapacity, loadFactor), $this);
    LinkedHashSet.call($this);
    return $this;
  }
  function LinkedHashSet_init_$Create$_2(initialCapacity, loadFactor) {
    return LinkedHashSet_init_$Init$_2(initialCapacity, loadFactor, Object.create(LinkedHashSet.prototype));
  }
  function LinkedHashSet_init_$Init$_3(initialCapacity, loadFactor, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      loadFactor = 0.0;
    LinkedHashSet_init_$Init$_2(initialCapacity, loadFactor, $this);
    return $this;
  }
  function LinkedHashSet_init_$Create$_3(initialCapacity, loadFactor, $mask0, $marker) {
    return LinkedHashSet_init_$Init$_3(initialCapacity, loadFactor, $mask0, $marker, Object.create(LinkedHashSet.prototype));
  }
  function LinkedHashSet_init_$Init$_4(initialCapacity, $this) {
    LinkedHashSet_init_$Init$_2(initialCapacity, 0.0, $this);
    return $this;
  }
  function LinkedHashSet_init_$Create$_4(initialCapacity) {
    return LinkedHashSet_init_$Init$_4(initialCapacity, Object.create(LinkedHashSet.prototype));
  }
  LinkedHashSet.prototype.build_1 = function () {
    var tmp = this._get_map__0();
    (tmp instanceof LinkedHashMap ? tmp : THROW_CCE()).build_1();
    Unit_getInstance();
    return this;
  };
  LinkedHashSet.prototype.checkIsMutable_13 = function () {
    return this._get_map__0().checkIsMutable_13();
  };
  function LinkedHashSet() {
  }
  LinkedHashSet.$metadata$ = {
    simpleName: 'LinkedHashSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function RandomAccess() {
  }
  RandomAccess.$metadata$ = {
    simpleName: 'RandomAccess',
    kind: 'interface',
    interfaces: []
  };
  function _set_output_(_set___) {
    output = _set___;
  }
  function _get_output_() {
    return output;
  }
  var output;
  function BaseOutput() {
  }
  BaseOutput.prototype.println_5 = function () {
    this.print_3('\n');
  };
  BaseOutput.prototype.println_6 = function (message) {
    this.print_3(message);
    this.println_5();
  };
  BaseOutput.prototype.flush_2 = function () {
  };
  BaseOutput.$metadata$ = {
    simpleName: 'BaseOutput',
    kind: 'class',
    interfaces: []
  };
  function NodeJsOutput_0(outputStream) {
    BaseOutput.call(this);
    this._outputStream = outputStream;
  }
  NodeJsOutput_0.prototype._get_outputStream_ = function () {
    return this._outputStream;
  };
  NodeJsOutput_0.prototype.print_3 = function (message) {
    var messageString = String(message);
    this._outputStream.write(messageString);
  };
  NodeJsOutput_0.$metadata$ = {
    simpleName: 'NodeJsOutput',
    kind: 'class',
    interfaces: []
  };
  function BufferedOutputToConsoleLog_0() {
    BufferedOutput_0.call(this);
  }
  BufferedOutputToConsoleLog_0.prototype.print_3 = function (message) {
    var s = String(message);
    var tmp0_nativeLastIndexOf_0 = s;
    var tmp1_nativeLastIndexOf_0 = '\n';
    var tmp2_nativeLastIndexOf_0 = 0;
    var i = tmp0_nativeLastIndexOf_0.lastIndexOf(tmp1_nativeLastIndexOf_0, tmp2_nativeLastIndexOf_0);
    if (i >= 0) {
      var tmp0_this = this;
      var tmp = tmp0_this._get_buffer__0();
      var tmp3_substring_0 = s;
      var tmp4_substring_0 = 0;
      tmp0_this._set_buffer__0(tmp + tmp3_substring_0.substring(tmp4_substring_0, i));
      this.flush_2();
      var tmp5_substring_0 = s;
      var tmp6_substring_0 = i + 1 | 0;
      s = tmp5_substring_0.substring(tmp6_substring_0);
    }var tmp1_this = this;
    tmp1_this._set_buffer__0(tmp1_this._get_buffer__0() + s);
  };
  BufferedOutputToConsoleLog_0.prototype.flush_2 = function () {
    (function () {
      var $externalVarargReceiverTmp = console;
      return $externalVarargReceiverTmp.log.apply($externalVarargReceiverTmp, [].concat([this._get_buffer__0()]));
    }.call(this));
    this._set_buffer__0('');
  };
  BufferedOutputToConsoleLog_0.$metadata$ = {
    simpleName: 'BufferedOutputToConsoleLog',
    kind: 'class',
    interfaces: []
  };
  function String_0(value) {
    return String(value);
  }
  function BufferedOutput_0() {
    BaseOutput.call(this);
    this._buffer = '';
  }
  BufferedOutput_0.prototype._set_buffer__0 = function (_set___) {
    this._buffer = _set___;
  };
  BufferedOutput_0.prototype._get_buffer__0 = function () {
    return this._buffer;
  };
  BufferedOutput_0.prototype.print_3 = function (message) {
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp_0 = tmp0_this._buffer;
    tmp._buffer = tmp_0 + String(message);
  };
  BufferedOutput_0.prototype.flush_2 = function () {
    this._buffer = '';
  };
  BufferedOutput_0.$metadata$ = {
    simpleName: 'BufferedOutput',
    kind: 'class',
    interfaces: []
  };
  function output$init$() {
    var isNode_2 = typeof process !== 'undefined' && process.versions && !!process.versions.node;
    return isNode_2 ? new NodeJsOutput_0(process.stdout) : new BufferedOutputToConsoleLog_0();
  }
  function _get_EmptyContinuation_() {
    return EmptyContinuation;
  }
  var EmptyContinuation;
  function _no_name_provided__1_0($tmp0_Continuation_0) {
    this._$tmp0_Continuation_0 = $tmp0_Continuation_0;
  }
  _no_name_provided__1_0.prototype._get_context__2 = function () {
    return this._$tmp0_Continuation_0;
  };
  _no_name_provided__1_0.prototype._get_context__4 = function () {
    return this._get_context__2();
  };
  _no_name_provided__1_0.prototype.resumeWith_3 = function (result) {
    throwOnFailure(result);
    var tmp = _Result___get_value__impl_(result);
    if (tmp == null ? true : isObject(tmp))
      tmp;
    else
      THROW_CCE();
    return Unit_getInstance();
  };
  _no_name_provided__1_0.prototype.resumeWith_6 = function (result) {
    return this.resumeWith_3(result);
  };
  _no_name_provided__1_0.$metadata$ = {
    simpleName: '<no name provided>_1',
    kind: 'class',
    interfaces: [Continuation]
  };
  function EmptyContinuation$init$() {
    var tmp0_Continuation_0 = EmptyCoroutineContext_getInstance();
    return new _no_name_provided__1_0(tmp0_Continuation_0);
  }
  function asList(_this_) {
    return new _no_name_provided__30(_this_);
  }
  function _no_name_provided__30($this_asList) {
    this._$this_asList = $this_asList;
    AbstractList.call(this);
  }
  _no_name_provided__30.prototype._get_size__42 = function () {
    return this._$this_asList.length;
  };
  _no_name_provided__30.prototype.get_44 = function (index) {
    var tmp0_subject = index;
    var tmp;
    if (0 <= tmp0_subject ? tmp0_subject <= _get_lastIndex__5(this) : false) {
      var tmp0_unsafeCast_0 = this._$this_asList.item(index);
      tmp = tmp0_unsafeCast_0;
    } else {
      throw IndexOutOfBoundsException_init_$Create$_0('' + 'index ' + index + ' is not in range [0..' + _get_lastIndex__5(this) + ']');
    }
    return tmp;
  };
  _no_name_provided__30.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function asDynamic(_this_) {
    return _this_;
  }
  function unsafeCast(_this_) {
    return _this_;
  }
  function unsafeCast_0(_this_) {
    return _this_;
  }
  function Serializable() {
  }
  Serializable.$metadata$ = {
    simpleName: 'Serializable',
    kind: 'interface',
    interfaces: []
  };
  function pow(_this_, n) {
    return Math.pow(_this_, n);
  }
  function ceil(x) {
    var tmp0_unsafeCast_0 = Math.ceil(x);
    return tmp0_unsafeCast_0;
  }
  function sin(x) {
    return Math.sin(x);
  }
  function sign(x) {
    return Math.sign(x);
  }
  function roundToInt(_this_) {
    var tmp;
    if (isNaN_0(_this_)) {
      throw IllegalArgumentException_init_$Create$_0('Cannot round NaN value.');
    } else if (_this_ > IntCompanionObject_getInstance()._MAX_VALUE_5) {
      tmp = IntCompanionObject_getInstance()._MAX_VALUE_5;
    } else if (_this_ < IntCompanionObject_getInstance()._MIN_VALUE_5) {
      tmp = IntCompanionObject_getInstance()._MIN_VALUE_5;
    } else {
      var tmp0_unsafeCast_0 = Math.round(_this_);
      tmp = numberToInt(tmp0_unsafeCast_0);
    }
    return tmp;
  }
  function cos(x) {
    return Math.cos(x);
  }
  function nextDown(_this_) {
    var tmp;
    if (isNaN_0(_this_) ? true : _this_ === -Infinity) {
      tmp = _this_;
    } else if (_this_ === 0.0) {
      tmp = -4.9E-324;
    } else {
      var tmp2_fromBits_0 = DoubleCompanionObject_getInstance();
      var tmp0_plus_0 = toRawBits(_this_);
      var tmp1_plus_0 = _this_ > 0.0 ? -1 : 1;
      var tmp3_fromBits_0 = tmp0_plus_0.plus_38(toLong(tmp1_plus_0));
      tmp = doubleFromBits(tmp3_fromBits_0);
    }
    return tmp;
  }
  function isNaN_0(_this_) {
    return !(_this_ === _this_);
  }
  function isInfinite(_this_) {
    return _this_ === Infinity ? true : _this_ === -Infinity;
  }
  function isFinite(_this_) {
    return !isInfinite(_this_) ? !isNaN_0(_this_) : false;
  }
  function countLeadingZeroBits(_this_) {
    return Math.clz32(_this_);
  }
  function _get_INV_2_26_() {
    return INV_2_26;
  }
  var INV_2_26;
  function _get_INV_2_53_() {
    return INV_2_53;
  }
  var INV_2_53;
  function doubleFromParts(hi26, low27) {
    return hi26 * INV_2_26 + low27 * INV_2_53;
  }
  function defaultPlatformRandom() {
    var tmp0_unsafeCast_0 = Math.random() * Math.pow(2, 32) | 0;
    return Random_0(tmp0_unsafeCast_0);
  }
  function INV_2_26$init$() {
    var tmp0_pow_0 = 2.0;
    var tmp1_pow_0 = -26;
    return Math.pow(tmp0_pow_0, tmp1_pow_0);
  }
  function INV_2_53$init$() {
    var tmp0_pow_0 = 2.0;
    var tmp1_pow_0 = -53;
    return Math.pow(tmp0_pow_0, tmp1_pow_0);
  }
  function _get_js_(_this_) {
    return (_this_ instanceof KClassImpl ? _this_ : THROW_CCE())._get_jClass__2();
  }
  function KCallable() {
  }
  KCallable.$metadata$ = {
    simpleName: 'KCallable',
    kind: 'interface',
    interfaces: []
  };
  function KClass() {
  }
  KClass.$metadata$ = {
    simpleName: 'KClass',
    kind: 'interface',
    interfaces: [KClassifier]
  };
  function KClassImpl(jClass) {
    this._jClass = jClass;
  }
  KClassImpl.prototype._get_jClass__2 = function () {
    return this._jClass;
  };
  KClassImpl.prototype._get_qualifiedName__4 = function () {
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  KClassImpl.prototype.equals = function (other) {
    var tmp;
    if (other instanceof KClassImpl) {
      tmp = equals_0(this._get_jClass__2(), other._get_jClass__2());
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  KClassImpl.prototype.hashCode = function () {
    var tmp0_safe_receiver = this._get_simpleName__4();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  KClassImpl.prototype.toString = function () {
    return '' + 'class ' + this._get_simpleName__4();
  };
  KClassImpl.$metadata$ = {
    simpleName: 'KClassImpl',
    kind: 'class',
    interfaces: [KClass]
  };
  function _get_givenSimpleName_($this) {
    return $this._givenSimpleName;
  }
  function _get_isInstanceFunction_($this) {
    return $this._isInstanceFunction;
  }
  function PrimitiveKClassImpl(jClass, givenSimpleName, isInstanceFunction) {
    KClassImpl.call(this, jClass);
    this._givenSimpleName = givenSimpleName;
    this._isInstanceFunction = isInstanceFunction;
  }
  PrimitiveKClassImpl.prototype.equals = function (other) {
    if (!(other instanceof PrimitiveKClassImpl))
      return false;
    else {
    }
    return KClassImpl.prototype.equals.call(this, other) ? this._givenSimpleName === other._givenSimpleName : false;
  };
  PrimitiveKClassImpl.prototype._get_simpleName__4 = function () {
    return this._givenSimpleName;
  };
  PrimitiveKClassImpl.prototype.isInstance_4 = function (value) {
    return this._isInstanceFunction(value);
  };
  PrimitiveKClassImpl.$metadata$ = {
    simpleName: 'PrimitiveKClassImpl',
    kind: 'class',
    interfaces: []
  };
  function NothingKClassImpl() {
    NothingKClassImpl_instance = this;
    KClassImpl.call(this, Object);
    this._simpleName = 'Nothing';
  }
  NothingKClassImpl.prototype._get_simpleName__4 = function () {
    return this._simpleName;
  };
  NothingKClassImpl.prototype.isInstance_4 = function (value) {
    return false;
  };
  NothingKClassImpl.prototype._get_jClass__2 = function () {
    throw UnsupportedOperationException_init_$Create$_0("There's no native JS class for Nothing type");
  };
  NothingKClassImpl.prototype.equals = function (other) {
    return other === this;
  };
  NothingKClassImpl.prototype.hashCode = function () {
    return 0;
  };
  NothingKClassImpl.$metadata$ = {
    simpleName: 'NothingKClassImpl',
    kind: 'object',
    interfaces: []
  };
  var NothingKClassImpl_instance;
  function NothingKClassImpl_getInstance() {
    if (NothingKClassImpl_instance == null)
      new NothingKClassImpl();
    return NothingKClassImpl_instance;
  }
  function ErrorKClass() {
  }
  ErrorKClass.prototype._get_simpleName__4 = function () {
    var tmp0_error_0 = 'Unknown simpleName for ErrorKClass';
    throw IllegalStateException_init_$Create$_0(toString_1(tmp0_error_0));
  };
  ErrorKClass.prototype._get_qualifiedName__4 = function () {
    var tmp0_error_0 = 'Unknown qualifiedName for ErrorKClass';
    throw IllegalStateException_init_$Create$_0(toString_1(tmp0_error_0));
  };
  ErrorKClass.prototype.isInstance_4 = function (value) {
    var tmp0_error_0 = "Can's check isInstance on ErrorKClass";
    throw IllegalStateException_init_$Create$_0(toString_1(tmp0_error_0));
  };
  ErrorKClass.prototype.equals = function (other) {
    return other === this;
  };
  ErrorKClass.prototype.hashCode = function () {
    return 0;
  };
  ErrorKClass.$metadata$ = {
    simpleName: 'ErrorKClass',
    kind: 'class',
    interfaces: [KClass]
  };
  function SimpleKClassImpl(jClass) {
    KClassImpl.call(this, jClass);
    var tmp = this;
    var tmp0_safe_receiver = jClass.$metadata$;
    var tmp0_unsafeCast_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.simpleName;
    tmp._simpleName_0 = tmp0_unsafeCast_0;
  }
  SimpleKClassImpl.prototype._get_simpleName__4 = function () {
    return this._simpleName_0;
  };
  SimpleKClassImpl.prototype.isInstance_4 = function (value) {
    return jsIsType(value, this._get_jClass__2());
  };
  SimpleKClassImpl.$metadata$ = {
    simpleName: 'SimpleKClassImpl',
    kind: 'class',
    interfaces: []
  };
  function KFunction() {
  }
  KFunction.$metadata$ = {
    simpleName: 'KFunction',
    kind: 'interface',
    interfaces: [KCallable]
  };
  function KProperty() {
  }
  KProperty.$metadata$ = {
    simpleName: 'KProperty',
    kind: 'interface',
    interfaces: [KCallable]
  };
  function KProperty0() {
  }
  KProperty0.$metadata$ = {
    simpleName: 'KProperty0',
    kind: 'interface',
    interfaces: [KProperty]
  };
  function KProperty1() {
  }
  KProperty1.$metadata$ = {
    simpleName: 'KProperty1',
    kind: 'interface',
    interfaces: [KProperty]
  };
  function KProperty2() {
  }
  KProperty2.$metadata$ = {
    simpleName: 'KProperty2',
    kind: 'interface',
    interfaces: [KProperty]
  };
  function KMutableProperty0() {
  }
  KMutableProperty0.$metadata$ = {
    simpleName: 'KMutableProperty0',
    kind: 'interface',
    interfaces: [KProperty0, KMutableProperty]
  };
  function KMutableProperty() {
  }
  KMutableProperty.$metadata$ = {
    simpleName: 'KMutableProperty',
    kind: 'interface',
    interfaces: [KProperty]
  };
  function KMutableProperty1() {
  }
  KMutableProperty1.$metadata$ = {
    simpleName: 'KMutableProperty1',
    kind: 'interface',
    interfaces: [KProperty1, KMutableProperty]
  };
  function KMutableProperty2() {
  }
  KMutableProperty2.$metadata$ = {
    simpleName: 'KMutableProperty2',
    kind: 'interface',
    interfaces: [KProperty2, KMutableProperty]
  };
  function KType() {
  }
  KType.$metadata$ = {
    simpleName: 'KType',
    kind: 'interface',
    interfaces: []
  };
  function createKType_0(classifier, arguments_0, isMarkedNullable) {
    return new KTypeImpl(classifier, asList_0(arguments_0), isMarkedNullable);
  }
  function createDynamicKType_0() {
    return DynamicKType_getInstance();
  }
  function createKTypeParameter_0(name, upperBounds, variance) {
    var tmp0_subject = variance;
    {
      var kVariance;
      switch (tmp0_subject) {
        case 'in':
          kVariance = KVariance_IN_getInstance();
          break;
        case 'out':
          kVariance = KVariance_OUT_getInstance();
          break;
        default:kVariance = KVariance_INVARIANT_getInstance();
          break;
      }
    }
    return new KTypeParameterImpl(name, asList_0(upperBounds), kVariance, false);
  }
  function getStarKTypeProjection_0() {
    return Companion_getInstance_3()._get_STAR_();
  }
  function createCovariantKTypeProjection_0(type) {
    return Companion_getInstance_3().covariant(type);
  }
  function createInvariantKTypeProjection_0(type) {
    return Companion_getInstance_3().invariant(type);
  }
  function createContravariantKTypeProjection_0(type) {
    return Companion_getInstance_3().contravariant(type);
  }
  function asString(_this_, $this) {
    if (_this_._variance == null)
      return '*';
    return prefixString(_this_._variance) + toString_0(_this_._type);
  }
  function _no_name_provided__31(this$0) {
    this._this$0_12 = this$0;
  }
  _no_name_provided__31.prototype.invoke_31 = function (it) {
    return asString(it, this._this$0_12);
  };
  _no_name_provided__31.prototype.invoke_81 = function (p1) {
    return this.invoke_31(p1 instanceof KTypeProjection ? p1 : THROW_CCE());
  };
  _no_name_provided__31.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function KTypeImpl(classifier, arguments_0, isMarkedNullable) {
    this._classifier = classifier;
    this._arguments = arguments_0;
    this._isMarkedNullable = isMarkedNullable;
  }
  KTypeImpl.prototype._get_classifier__1 = function () {
    return this._classifier;
  };
  KTypeImpl.prototype._get_arguments__1 = function () {
    return this._arguments;
  };
  KTypeImpl.prototype._get_isMarkedNullable__1 = function () {
    return this._isMarkedNullable;
  };
  KTypeImpl.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof KTypeImpl) {
      tmp_1 = equals_0(this._classifier, other._classifier);
    } else {
      {
        tmp_1 = false;
      }
    }
    if (tmp_1) {
      tmp_0 = equals_0(this._arguments, other._arguments);
    } else {
      {
        tmp_0 = false;
      }
    }
    if (tmp_0) {
      tmp = this._isMarkedNullable === other._isMarkedNullable;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  KTypeImpl.prototype.hashCode = function () {
    return imul(imul(hashCode(this._classifier), 31) + hashCode(this._arguments) | 0, 31) + (this._isMarkedNullable | 0) | 0;
  };
  KTypeImpl.prototype.toString = function () {
    var tmp = this._classifier;
    var kClass = isInterface(tmp, KClass) ? tmp : null;
    var classifierName = kClass == null ? toString_1(this._classifier) : !(kClass._get_simpleName__4() == null) ? kClass._get_simpleName__4() : '(non-denotable type)';
    var tmp_0;
    if (this._arguments.isEmpty_51()) {
      tmp_0 = '';
    } else {
      tmp_0 = joinToString$default_0(this._arguments, ', ', '<', '>', 0, null, _no_name_provided_$factory_12(this), 24, null);
    }
    var args = tmp_0;
    var nullable = this._isMarkedNullable ? '?' : '';
    return plus_0(classifierName, args) + nullable;
  };
  KTypeImpl.$metadata$ = {
    simpleName: 'KTypeImpl',
    kind: 'class',
    interfaces: [KType]
  };
  function prefixString(_this_) {
    var tmp0_subject = _this_;
    var tmp;
    if (tmp0_subject.equals(KVariance_INVARIANT_getInstance())) {
      tmp = '';
    } else if (tmp0_subject.equals(KVariance_IN_getInstance())) {
      tmp = 'in ';
    } else if (tmp0_subject.equals(KVariance_OUT_getInstance())) {
      tmp = 'out ';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function DynamicKType() {
    DynamicKType_instance = this;
    this._classifier_0 = null;
    this._arguments_0 = emptyList();
    this._isMarkedNullable_0 = false;
  }
  DynamicKType.prototype._get_classifier__1 = function () {
    return this._classifier_0;
  };
  DynamicKType.prototype._get_arguments__1 = function () {
    return this._arguments_0;
  };
  DynamicKType.prototype._get_isMarkedNullable__1 = function () {
    return this._isMarkedNullable_0;
  };
  DynamicKType.prototype.toString = function () {
    return 'dynamic';
  };
  DynamicKType.$metadata$ = {
    simpleName: 'DynamicKType',
    kind: 'object',
    interfaces: [KType]
  };
  var DynamicKType_instance;
  function DynamicKType_getInstance() {
    if (DynamicKType_instance == null)
      new DynamicKType();
    return DynamicKType_instance;
  }
  function _no_name_provided_$factory_12(this$0) {
    var i = new _no_name_provided__31(this$0);
    return function (p1) {
      return i.invoke_31(p1);
    };
  }
  function KTypeParameterImpl(name, upperBounds, variance, isReified) {
    this._name_1 = name;
    this._upperBounds = upperBounds;
    this._variance_0 = variance;
    this._isReified = isReified;
  }
  KTypeParameterImpl.prototype._get_name__23 = function () {
    return this._name_1;
  };
  KTypeParameterImpl.prototype._get_upperBounds__0 = function () {
    return this._upperBounds;
  };
  KTypeParameterImpl.prototype._get_variance__1 = function () {
    return this._variance_0;
  };
  KTypeParameterImpl.prototype._get_isReified__0 = function () {
    return this._isReified;
  };
  KTypeParameterImpl.prototype.toString = function () {
    return this._name_1;
  };
  KTypeParameterImpl.prototype.component1_3 = function () {
    return this._name_1;
  };
  KTypeParameterImpl.prototype.component2_2 = function () {
    return this._upperBounds;
  };
  KTypeParameterImpl.prototype.component3_0 = function () {
    return this._variance_0;
  };
  KTypeParameterImpl.prototype.component4_0 = function () {
    return this._isReified;
  };
  KTypeParameterImpl.prototype.copy_1 = function (name, upperBounds, variance, isReified) {
    return new KTypeParameterImpl(name, upperBounds, variance, isReified);
  };
  KTypeParameterImpl.prototype.copy$default_1 = function (name, upperBounds, variance, isReified, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this._name_1;
    if (!(($mask0 & 2) === 0))
      upperBounds = this._upperBounds;
    if (!(($mask0 & 4) === 0))
      variance = this._variance_0;
    if (!(($mask0 & 8) === 0))
      isReified = this._isReified;
    return this.copy_1(name, upperBounds, variance, isReified);
  };
  KTypeParameterImpl.prototype.hashCode = function () {
    var result = getStringHashCode(this._name_1);
    result = imul(result, 31) + hashCode(this._upperBounds) | 0;
    result = imul(result, 31) + this._variance_0.hashCode() | 0;
    result = imul(result, 31) + (this._isReified | 0) | 0;
    return result;
  };
  KTypeParameterImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KTypeParameterImpl))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof KTypeParameterImpl ? other : THROW_CCE();
    if (!(this._name_1 === tmp0_other_with_cast._name_1))
      return false;
    if (!equals_0(this._upperBounds, tmp0_other_with_cast._upperBounds))
      return false;
    if (!this._variance_0.equals(tmp0_other_with_cast._variance_0))
      return false;
    if (!(this._isReified === tmp0_other_with_cast._isReified))
      return false;
    return true;
  };
  KTypeParameterImpl.$metadata$ = {
    simpleName: 'KTypeParameterImpl',
    kind: 'class',
    interfaces: [KTypeParameter]
  };
  function _get_functionClasses_() {
    return functionClasses;
  }
  var functionClasses;
  function _no_name_provided__32() {
  }
  _no_name_provided__32.prototype.invoke_80 = function (it) {
    return isObject(it);
  };
  _no_name_provided__32.prototype.invoke_81 = function (p1) {
    return this.invoke_80((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__32.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__33() {
  }
  _no_name_provided__33.prototype.invoke_80 = function (it) {
    return isNumber(it);
  };
  _no_name_provided__33.prototype.invoke_81 = function (p1) {
    return this.invoke_80((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__33.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__34() {
  }
  _no_name_provided__34.prototype.invoke_80 = function (it) {
    return !(it == null) ? typeof it === 'boolean' : false;
  };
  _no_name_provided__34.prototype.invoke_81 = function (p1) {
    return this.invoke_80((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__34.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__35() {
  }
  _no_name_provided__35.prototype.invoke_80 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__35.prototype.invoke_81 = function (p1) {
    return this.invoke_80((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__35.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__36() {
  }
  _no_name_provided__36.prototype.invoke_80 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__36.prototype.invoke_81 = function (p1) {
    return this.invoke_80((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__36.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__37() {
  }
  _no_name_provided__37.prototype.invoke_80 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__37.prototype.invoke_81 = function (p1) {
    return this.invoke_80((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__37.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__38() {
  }
  _no_name_provided__38.prototype.invoke_80 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__38.prototype.invoke_81 = function (p1) {
    return this.invoke_80((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__38.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__39() {
  }
  _no_name_provided__39.prototype.invoke_80 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__39.prototype.invoke_81 = function (p1) {
    return this.invoke_80((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__39.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__40() {
  }
  _no_name_provided__40.prototype.invoke_80 = function (it) {
    return !(it == null) ? isArray(it) : false;
  };
  _no_name_provided__40.prototype.invoke_81 = function (p1) {
    return this.invoke_80((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__40.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__41() {
  }
  _no_name_provided__41.prototype.invoke_80 = function (it) {
    return !(it == null) ? typeof it === 'string' : false;
  };
  _no_name_provided__41.prototype.invoke_81 = function (p1) {
    return this.invoke_80((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__41.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__42() {
  }
  _no_name_provided__42.prototype.invoke_80 = function (it) {
    return it instanceof Error;
  };
  _no_name_provided__42.prototype.invoke_81 = function (p1) {
    return this.invoke_80((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__42.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__43() {
  }
  _no_name_provided__43.prototype.invoke_80 = function (it) {
    return !(it == null) ? isBooleanArray(it) : false;
  };
  _no_name_provided__43.prototype.invoke_81 = function (p1) {
    return this.invoke_80((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__43.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__44() {
  }
  _no_name_provided__44.prototype.invoke_80 = function (it) {
    return !(it == null) ? isCharArray(it) : false;
  };
  _no_name_provided__44.prototype.invoke_81 = function (p1) {
    return this.invoke_80((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__44.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__45() {
  }
  _no_name_provided__45.prototype.invoke_80 = function (it) {
    return !(it == null) ? isByteArray(it) : false;
  };
  _no_name_provided__45.prototype.invoke_81 = function (p1) {
    return this.invoke_80((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__45.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__46() {
  }
  _no_name_provided__46.prototype.invoke_80 = function (it) {
    return !(it == null) ? isShortArray(it) : false;
  };
  _no_name_provided__46.prototype.invoke_81 = function (p1) {
    return this.invoke_80((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__46.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__47() {
  }
  _no_name_provided__47.prototype.invoke_80 = function (it) {
    return !(it == null) ? isIntArray(it) : false;
  };
  _no_name_provided__47.prototype.invoke_81 = function (p1) {
    return this.invoke_80((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__47.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__48() {
  }
  _no_name_provided__48.prototype.invoke_80 = function (it) {
    return !(it == null) ? isLongArray(it) : false;
  };
  _no_name_provided__48.prototype.invoke_81 = function (p1) {
    return this.invoke_80((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__48.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__49() {
  }
  _no_name_provided__49.prototype.invoke_80 = function (it) {
    return !(it == null) ? isFloatArray(it) : false;
  };
  _no_name_provided__49.prototype.invoke_81 = function (p1) {
    return this.invoke_80((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__49.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__50() {
  }
  _no_name_provided__50.prototype.invoke_80 = function (it) {
    return !(it == null) ? isDoubleArray(it) : false;
  };
  _no_name_provided__50.prototype.invoke_81 = function (p1) {
    return this.invoke_80((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__50.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__51($arity) {
    this._$arity = $arity;
  }
  _no_name_provided__51.prototype.invoke_80 = function (it) {
    var tmp;
    if (typeof it === 'function') {
      tmp = it.length === this._$arity;
    } else {
      tmp = false;
    }
    return tmp;
  };
  _no_name_provided__51.prototype.invoke_81 = function (p1) {
    return this.invoke_80((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__51.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function PrimitiveClasses_0() {
    PrimitiveClasses_instance = this;
    var tmp = this;
    var tmp0_unsafeCast_0 = Object;
    var tmp_0 = tmp0_unsafeCast_0;
    tmp._anyClass = new PrimitiveKClassImpl(tmp_0, 'Any', _no_name_provided_$factory_13());
    var tmp_1 = this;
    var tmp0_unsafeCast_0_0 = Number;
    var tmp_2 = tmp0_unsafeCast_0_0;
    tmp_1._numberClass = new PrimitiveKClassImpl(tmp_2, 'Number', _no_name_provided_$factory_14());
    this._nothingClass = NothingKClassImpl_getInstance();
    var tmp_3 = this;
    var tmp0_unsafeCast_0_1 = Boolean;
    var tmp_4 = tmp0_unsafeCast_0_1;
    tmp_3._booleanClass = new PrimitiveKClassImpl(tmp_4, 'Boolean', _no_name_provided_$factory_15());
    var tmp_5 = this;
    var tmp0_unsafeCast_0_2 = Number;
    var tmp_6 = tmp0_unsafeCast_0_2;
    tmp_5._byteClass = new PrimitiveKClassImpl(tmp_6, 'Byte', _no_name_provided_$factory_16());
    var tmp_7 = this;
    var tmp0_unsafeCast_0_3 = Number;
    var tmp_8 = tmp0_unsafeCast_0_3;
    tmp_7._shortClass = new PrimitiveKClassImpl(tmp_8, 'Short', _no_name_provided_$factory_17());
    var tmp_9 = this;
    var tmp0_unsafeCast_0_4 = Number;
    var tmp_10 = tmp0_unsafeCast_0_4;
    tmp_9._intClass = new PrimitiveKClassImpl(tmp_10, 'Int', _no_name_provided_$factory_18());
    var tmp_11 = this;
    var tmp0_unsafeCast_0_5 = Number;
    var tmp_12 = tmp0_unsafeCast_0_5;
    tmp_11._floatClass = new PrimitiveKClassImpl(tmp_12, 'Float', _no_name_provided_$factory_19());
    var tmp_13 = this;
    var tmp0_unsafeCast_0_6 = Number;
    var tmp_14 = tmp0_unsafeCast_0_6;
    tmp_13._doubleClass = new PrimitiveKClassImpl(tmp_14, 'Double', _no_name_provided_$factory_20());
    var tmp_15 = this;
    var tmp0_unsafeCast_0_7 = Array;
    var tmp_16 = tmp0_unsafeCast_0_7;
    tmp_15._arrayClass = new PrimitiveKClassImpl(tmp_16, 'Array', _no_name_provided_$factory_21());
    var tmp_17 = this;
    var tmp0_unsafeCast_0_8 = String;
    var tmp_18 = tmp0_unsafeCast_0_8;
    tmp_17._stringClass = new PrimitiveKClassImpl(tmp_18, 'String', _no_name_provided_$factory_22());
    var tmp_19 = this;
    var tmp0_unsafeCast_0_9 = Error;
    var tmp_20 = tmp0_unsafeCast_0_9;
    tmp_19._throwableClass = new PrimitiveKClassImpl(tmp_20, 'Throwable', _no_name_provided_$factory_23());
    var tmp_21 = this;
    var tmp0_unsafeCast_0_10 = Array;
    var tmp_22 = tmp0_unsafeCast_0_10;
    tmp_21._booleanArrayClass = new PrimitiveKClassImpl(tmp_22, 'BooleanArray', _no_name_provided_$factory_24());
    var tmp_23 = this;
    var tmp0_unsafeCast_0_11 = Uint16Array;
    var tmp_24 = tmp0_unsafeCast_0_11;
    tmp_23._charArrayClass = new PrimitiveKClassImpl(tmp_24, 'CharArray', _no_name_provided_$factory_25());
    var tmp_25 = this;
    var tmp0_unsafeCast_0_12 = Int8Array;
    var tmp_26 = tmp0_unsafeCast_0_12;
    tmp_25._byteArrayClass = new PrimitiveKClassImpl(tmp_26, 'ByteArray', _no_name_provided_$factory_26());
    var tmp_27 = this;
    var tmp0_unsafeCast_0_13 = Int16Array;
    var tmp_28 = tmp0_unsafeCast_0_13;
    tmp_27._shortArrayClass = new PrimitiveKClassImpl(tmp_28, 'ShortArray', _no_name_provided_$factory_27());
    var tmp_29 = this;
    var tmp0_unsafeCast_0_14 = Int32Array;
    var tmp_30 = tmp0_unsafeCast_0_14;
    tmp_29._intArrayClass = new PrimitiveKClassImpl(tmp_30, 'IntArray', _no_name_provided_$factory_28());
    var tmp_31 = this;
    var tmp0_unsafeCast_0_15 = Array;
    var tmp_32 = tmp0_unsafeCast_0_15;
    tmp_31._longArrayClass = new PrimitiveKClassImpl(tmp_32, 'LongArray', _no_name_provided_$factory_29());
    var tmp_33 = this;
    var tmp0_unsafeCast_0_16 = Float32Array;
    var tmp_34 = tmp0_unsafeCast_0_16;
    tmp_33._floatArrayClass = new PrimitiveKClassImpl(tmp_34, 'FloatArray', _no_name_provided_$factory_30());
    var tmp_35 = this;
    var tmp0_unsafeCast_0_17 = Float64Array;
    var tmp_36 = tmp0_unsafeCast_0_17;
    tmp_35._doubleArrayClass = new PrimitiveKClassImpl(tmp_36, 'DoubleArray', _no_name_provided_$factory_31());
  }
  PrimitiveClasses_0.prototype._get_anyClass_ = function () {
    return this._anyClass;
  };
  PrimitiveClasses_0.prototype._get_numberClass_ = function () {
    return this._numberClass;
  };
  PrimitiveClasses_0.prototype._get_nothingClass_ = function () {
    return this._nothingClass;
  };
  PrimitiveClasses_0.prototype._get_booleanClass_ = function () {
    return this._booleanClass;
  };
  PrimitiveClasses_0.prototype._get_byteClass_ = function () {
    return this._byteClass;
  };
  PrimitiveClasses_0.prototype._get_shortClass_ = function () {
    return this._shortClass;
  };
  PrimitiveClasses_0.prototype._get_intClass_ = function () {
    return this._intClass;
  };
  PrimitiveClasses_0.prototype._get_floatClass_ = function () {
    return this._floatClass;
  };
  PrimitiveClasses_0.prototype._get_doubleClass_ = function () {
    return this._doubleClass;
  };
  PrimitiveClasses_0.prototype._get_arrayClass_ = function () {
    return this._arrayClass;
  };
  PrimitiveClasses_0.prototype._get_stringClass_ = function () {
    return this._stringClass;
  };
  PrimitiveClasses_0.prototype._get_throwableClass_ = function () {
    return this._throwableClass;
  };
  PrimitiveClasses_0.prototype._get_booleanArrayClass_ = function () {
    return this._booleanArrayClass;
  };
  PrimitiveClasses_0.prototype._get_charArrayClass_ = function () {
    return this._charArrayClass;
  };
  PrimitiveClasses_0.prototype._get_byteArrayClass_ = function () {
    return this._byteArrayClass;
  };
  PrimitiveClasses_0.prototype._get_shortArrayClass_ = function () {
    return this._shortArrayClass;
  };
  PrimitiveClasses_0.prototype._get_intArrayClass_ = function () {
    return this._intArrayClass;
  };
  PrimitiveClasses_0.prototype._get_longArrayClass_ = function () {
    return this._longArrayClass;
  };
  PrimitiveClasses_0.prototype._get_floatArrayClass_ = function () {
    return this._floatArrayClass;
  };
  PrimitiveClasses_0.prototype._get_doubleArrayClass_ = function () {
    return this._doubleArrayClass;
  };
  PrimitiveClasses_0.prototype.functionClass = function (arity) {
    var tmp0_elvis_lhs = functionClasses[arity];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_unsafeCast_0_3 = Function;
      var tmp_0 = tmp0_unsafeCast_0_3;
      var tmp_1 = '' + 'Function' + arity;
      var result_2 = new PrimitiveKClassImpl(tmp_0, tmp_1, _no_name_provided_$factory_32(arity));
      var tmp1_asDynamic_0_5 = functionClasses;
      tmp1_asDynamic_0_5[arity] = result_2;
      tmp = result_2;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  PrimitiveClasses_0.$metadata$ = {
    simpleName: 'PrimitiveClasses',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(PrimitiveClasses_0.prototype, 'anyClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_anyClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'numberClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_numberClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'nothingClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_nothingClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'booleanClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_booleanClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'byteClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_byteClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'shortClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_shortClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'intClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_intClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'floatClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_floatClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'doubleClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_doubleClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'arrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_arrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'stringClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_stringClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'throwableClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_throwableClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'booleanArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_booleanArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'charArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_charArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'byteArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_byteArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'shortArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_shortArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'intArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_intArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'longArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_longArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'floatArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_floatArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'doubleArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_doubleArrayClass_
  });
  var PrimitiveClasses_instance;
  function PrimitiveClasses_getInstance() {
    if (PrimitiveClasses_instance == null)
      new PrimitiveClasses_0();
    return PrimitiveClasses_instance;
  }
  function _no_name_provided_$factory_13() {
    var i = new _no_name_provided__32();
    return function (p1) {
      return i.invoke_80(p1);
    };
  }
  function _no_name_provided_$factory_14() {
    var i = new _no_name_provided__33();
    return function (p1) {
      return i.invoke_80(p1);
    };
  }
  function _no_name_provided_$factory_15() {
    var i = new _no_name_provided__34();
    return function (p1) {
      return i.invoke_80(p1);
    };
  }
  function _no_name_provided_$factory_16() {
    var i = new _no_name_provided__35();
    return function (p1) {
      return i.invoke_80(p1);
    };
  }
  function _no_name_provided_$factory_17() {
    var i = new _no_name_provided__36();
    return function (p1) {
      return i.invoke_80(p1);
    };
  }
  function _no_name_provided_$factory_18() {
    var i = new _no_name_provided__37();
    return function (p1) {
      return i.invoke_80(p1);
    };
  }
  function _no_name_provided_$factory_19() {
    var i = new _no_name_provided__38();
    return function (p1) {
      return i.invoke_80(p1);
    };
  }
  function _no_name_provided_$factory_20() {
    var i = new _no_name_provided__39();
    return function (p1) {
      return i.invoke_80(p1);
    };
  }
  function _no_name_provided_$factory_21() {
    var i = new _no_name_provided__40();
    return function (p1) {
      return i.invoke_80(p1);
    };
  }
  function _no_name_provided_$factory_22() {
    var i = new _no_name_provided__41();
    return function (p1) {
      return i.invoke_80(p1);
    };
  }
  function _no_name_provided_$factory_23() {
    var i = new _no_name_provided__42();
    return function (p1) {
      return i.invoke_80(p1);
    };
  }
  function _no_name_provided_$factory_24() {
    var i = new _no_name_provided__43();
    return function (p1) {
      return i.invoke_80(p1);
    };
  }
  function _no_name_provided_$factory_25() {
    var i = new _no_name_provided__44();
    return function (p1) {
      return i.invoke_80(p1);
    };
  }
  function _no_name_provided_$factory_26() {
    var i = new _no_name_provided__45();
    return function (p1) {
      return i.invoke_80(p1);
    };
  }
  function _no_name_provided_$factory_27() {
    var i = new _no_name_provided__46();
    return function (p1) {
      return i.invoke_80(p1);
    };
  }
  function _no_name_provided_$factory_28() {
    var i = new _no_name_provided__47();
    return function (p1) {
      return i.invoke_80(p1);
    };
  }
  function _no_name_provided_$factory_29() {
    var i = new _no_name_provided__48();
    return function (p1) {
      return i.invoke_80(p1);
    };
  }
  function _no_name_provided_$factory_30() {
    var i = new _no_name_provided__49();
    return function (p1) {
      return i.invoke_80(p1);
    };
  }
  function _no_name_provided_$factory_31() {
    var i = new _no_name_provided__50();
    return function (p1) {
      return i.invoke_80(p1);
    };
  }
  function _no_name_provided_$factory_32($arity) {
    var i = new _no_name_provided__51($arity);
    return function (p1) {
      return i.invoke_80(p1);
    };
  }
  function functionClasses$init$() {
    var tmp0_arrayOfNulls_0 = 0;
    return fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
  }
  function getKClass_0(jClass) {
    var tmp;
    if (Array.isArray(jClass)) {
      tmp = getKClassM_0(jClass);
    } else {
      tmp = getKClass1_0(jClass);
    }
    return tmp;
  }
  function getKClassM_0(jClasses) {
    var tmp0_subject = jClasses.length;
    var tmp;
    switch (tmp0_subject) {
      case 1:
        tmp = getKClass1_0(jClasses[0]);
        break;
      case 0:
        var tmp0_unsafeCast_0 = NothingKClassImpl_getInstance();
        tmp = tmp0_unsafeCast_0;
        break;
      default:var tmp1_unsafeCast_0 = new ErrorKClass();
        tmp = tmp1_unsafeCast_0;
        break;
    }
    return tmp;
  }
  function getKClass1_0(jClass) {
    if (jClass === String) {
      var tmp0_unsafeCast_0 = PrimitiveClasses_getInstance()._stringClass;
      return tmp0_unsafeCast_0;
    }var metadata = jClass.$metadata$;
    var tmp;
    if (metadata != null) {
      var tmp_0;
      if (metadata.$kClass$ == null) {
        var kClass = new SimpleKClassImpl(jClass);
        metadata.$kClass$ = kClass;
        tmp_0 = kClass;
      } else {
        tmp_0 = metadata.$kClass$;
      }
      tmp = tmp_0;
    } else {
      tmp = new SimpleKClassImpl(jClass);
    }
    return tmp;
  }
  function getKClassFromExpression_0(e) {
    var tmp0_subject = typeof e;
    var tmp;
    switch (tmp0_subject) {
      case 'string':
        tmp = PrimitiveClasses_getInstance()._stringClass;
        break;
      case 'number':
        var tmp_0;
        var tmp0_asDynamic_0 = jsBitwiseOr(e, 0);
        if (tmp0_asDynamic_0 === e) {
          tmp_0 = PrimitiveClasses_getInstance()._intClass;
        } else {
          {
            tmp_0 = PrimitiveClasses_getInstance()._doubleClass;
          }
        }

        tmp = tmp_0;
        break;
      case 'boolean':
        tmp = PrimitiveClasses_getInstance()._booleanClass;
        break;
      case 'function':
        var tmp_1 = PrimitiveClasses_getInstance();
        tmp = tmp_1.functionClass(e.length);
        break;
      default:var tmp_2;
        if (isBooleanArray(e)) {
          tmp_2 = PrimitiveClasses_getInstance()._booleanArrayClass;
        } else {
          if (isCharArray(e)) {
            tmp_2 = PrimitiveClasses_getInstance()._charArrayClass;
          } else {
            if (isByteArray(e)) {
              tmp_2 = PrimitiveClasses_getInstance()._byteArrayClass;
            } else {
              if (isShortArray(e)) {
                tmp_2 = PrimitiveClasses_getInstance()._shortArrayClass;
              } else {
                if (isIntArray(e)) {
                  tmp_2 = PrimitiveClasses_getInstance()._intArrayClass;
                } else {
                  if (isLongArray(e)) {
                    tmp_2 = PrimitiveClasses_getInstance()._longArrayClass;
                  } else {
                    if (isFloatArray(e)) {
                      tmp_2 = PrimitiveClasses_getInstance()._floatArrayClass;
                    } else {
                      if (isDoubleArray(e)) {
                        tmp_2 = PrimitiveClasses_getInstance()._doubleArrayClass;
                      } else {
                        if (isInterface(e, KClass)) {
                          tmp_2 = getKClass_0(KClass);
                        } else {
                          if (isArray(e)) {
                            tmp_2 = PrimitiveClasses_getInstance()._arrayClass;
                          } else {
                            {
                              var constructor = Object.getPrototypeOf(e).constructor;
                              var tmp_3;
                              if (constructor === Object) {
                                tmp_3 = PrimitiveClasses_getInstance()._anyClass;
                              } else if (constructor === Error) {
                                tmp_3 = PrimitiveClasses_getInstance()._throwableClass;
                              } else {
                                var jsClass_0 = constructor;
                                tmp_3 = getKClass1_0(jsClass_0);
                              }
                              tmp_2 = tmp_3;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }

        tmp = tmp_2;
        break;
    }
    var tmp1_unsafeCast_0 = tmp;
    return tmp1_unsafeCast_0;
  }
  function reset(_this_) {
    _this_.lastIndex = 0;
  }
  function get_0(_this_, index) {
    return _this_[index];
  }
  function Appendable() {
  }
  Appendable.$metadata$ = {
    simpleName: 'Appendable',
    kind: 'interface',
    interfaces: []
  };
  function StringBuilder_init_$Init$(capacity, $this) {
    StringBuilder_init_$Init$_1($this);
    return $this;
  }
  function StringBuilder_init_$Create$(capacity) {
    return StringBuilder_init_$Init$(capacity, Object.create(StringBuilder.prototype));
  }
  function StringBuilder_init_$Init$_0(content, $this) {
    StringBuilder.call($this, toString_1(content));
    return $this;
  }
  function StringBuilder_init_$Create$_0(content) {
    return StringBuilder_init_$Init$_0(content, Object.create(StringBuilder.prototype));
  }
  function StringBuilder_init_$Init$_1($this) {
    StringBuilder.call($this, '');
    return $this;
  }
  function StringBuilder_init_$Create$_1() {
    return StringBuilder_init_$Init$_1(Object.create(StringBuilder.prototype));
  }
  function _set_string_($this, _set___) {
    $this._string = _set___;
  }
  function _get_string_($this) {
    return $this._string;
  }
  function checkReplaceRange($this, startIndex, endIndex, length) {
    if (startIndex < 0 ? true : startIndex > length) {
      throw IndexOutOfBoundsException_init_$Create$_0('' + 'startIndex: ' + startIndex + ', length: ' + length);
    }if (startIndex > endIndex) {
      throw IllegalArgumentException_init_$Create$_0('' + 'startIndex(' + startIndex + ') > endIndex(' + endIndex + ')');
    }}
  function StringBuilder(content) {
    this._string = !(content === undefined) ? content : '';
  }
  StringBuilder.prototype._get_length__0 = function () {
    var tmp0_asDynamic_0 = this._string;
    return tmp0_asDynamic_0.length;
  };
  StringBuilder.prototype.get_44 = function (index) {
    var tmp0_getOrElse_0 = this._string;
    var tmp;
    if (index >= 0 ? index <= _get_lastIndex__6(tmp0_getOrElse_0) : false) {
      tmp = charSequenceGet(tmp0_getOrElse_0, index);
    } else {
      throw IndexOutOfBoundsException_init_$Create$_0('' + 'index: ' + index + ', length: ' + this._get_length__0() + '}');
    }
    return tmp;
  };
  StringBuilder.prototype.subSequence_1 = function (startIndex, endIndex) {
    var tmp0_substring_0 = this._string;
    return tmp0_substring_0.substring(startIndex, endIndex);
  };
  StringBuilder.prototype.append_3 = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + value;
    return this;
  };
  StringBuilder.prototype.append_4 = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + toString_0(value);
    return this;
  };
  StringBuilder.prototype.append_5 = function (value, startIndex, endIndex) {
    var tmp0_elvis_lhs = value;
    return this.appendRange_0(tmp0_elvis_lhs == null ? 'null' : tmp0_elvis_lhs, startIndex, endIndex);
  };
  StringBuilder.prototype.reverse = function () {
    var reversed_0 = '';
    var index = this._string.length - 1 | 0;
    while (index >= 0) {
      var tmp = this._string;
      var tmp0 = index;
      index = tmp0 - 1 | 0;
      var low = charSequenceGet(tmp, tmp0);
      if (isLowSurrogate(low) ? index >= 0 : false) {
        var tmp_0 = this._string;
        var tmp1 = index;
        index = tmp1 - 1 | 0;
        var high = charSequenceGet(tmp_0, tmp1);
        if (isHighSurrogate(high)) {
          reversed_0 = reversed_0 + high + low;
        } else {
          reversed_0 = reversed_0 + low + high;
        }
      } else {
        reversed_0 = reversed_0 + low;
      }
    }
    this._string = reversed_0;
    return this;
  };
  StringBuilder.prototype.append_6 = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + toString_0(value);
    return this;
  };
  StringBuilder.prototype.append_7 = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + value;
    return this;
  };
  StringBuilder.prototype.append_8 = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + concatToString(value);
    return this;
  };
  StringBuilder.prototype.append_9 = function (value) {
    return this.append_10(value);
  };
  StringBuilder.prototype.append_10 = function (value) {
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp_0 = tmp0_this._string;
    var tmp1_elvis_lhs = value;
    tmp._string = tmp_0 + (tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs);
    return this;
  };
  StringBuilder.prototype.capacity = function () {
    return this._get_length__0();
  };
  StringBuilder.prototype.ensureCapacity_0 = function (minimumCapacity) {
  };
  StringBuilder.prototype.indexOf_9 = function (string) {
    var tmp0_asDynamic_0 = this._string;
    return tmp0_asDynamic_0.indexOf(string);
  };
  StringBuilder.prototype.indexOf_8 = function (string, startIndex) {
    var tmp0_asDynamic_0 = this._string;
    return tmp0_asDynamic_0.indexOf(string, startIndex);
  };
  StringBuilder.prototype.lastIndexOf_9 = function (string) {
    var tmp0_asDynamic_0 = this._string;
    return tmp0_asDynamic_0.lastIndexOf(string);
  };
  StringBuilder.prototype.lastIndexOf_8 = function (string, startIndex) {
    var tmp;
    if (charSequenceLength(string) === 0) {
      tmp = startIndex < 0;
    } else {
      {
        tmp = false;
      }
    }
    if (tmp)
      return -1;
    else {
    }
    var tmp0_asDynamic_0 = this._string;
    return tmp0_asDynamic_0.lastIndexOf(string, startIndex);
  };
  StringBuilder.prototype.insert = function (index, value) {
    Companion_getInstance().checkPositionIndex(index, this._get_length__0());
    var tmp = this;
    var tmp0_substring_0 = this._string;
    var tmp1_substring_0 = 0;
    var tmp_0 = tmp0_substring_0.substring(tmp1_substring_0, index) + value;
    var tmp2_substring_0 = this._string;
    tmp._string = tmp_0 + tmp2_substring_0.substring(index);
    return this;
  };
  StringBuilder.prototype.insert_0 = function (index, value) {
    Companion_getInstance().checkPositionIndex(index, this._get_length__0());
    var tmp = this;
    var tmp0_substring_0 = this._string;
    var tmp1_substring_0 = 0;
    var tmp_0 = tmp0_substring_0.substring(tmp1_substring_0, index) + value;
    var tmp2_substring_0 = this._string;
    tmp._string = tmp_0 + tmp2_substring_0.substring(index);
    return this;
  };
  StringBuilder.prototype.insert_1 = function (index, value) {
    Companion_getInstance().checkPositionIndex(index, this._get_length__0());
    var tmp = this;
    var tmp0_substring_0 = this._string;
    var tmp1_substring_0 = 0;
    var tmp_0 = tmp0_substring_0.substring(tmp1_substring_0, index) + concatToString(value);
    var tmp2_substring_0 = this._string;
    tmp._string = tmp_0 + tmp2_substring_0.substring(index);
    return this;
  };
  StringBuilder.prototype.insert_2 = function (index, value) {
    Companion_getInstance().checkPositionIndex(index, this._get_length__0());
    var tmp = this;
    var tmp0_substring_0 = this._string;
    var tmp1_substring_0 = 0;
    var tmp_0 = tmp0_substring_0.substring(tmp1_substring_0, index) + toString_0(value);
    var tmp2_substring_0 = this._string;
    tmp._string = tmp_0 + tmp2_substring_0.substring(index);
    return this;
  };
  StringBuilder.prototype.insert_3 = function (index, value) {
    Companion_getInstance().checkPositionIndex(index, this._get_length__0());
    var tmp = this;
    var tmp0_substring_0 = this._string;
    var tmp1_substring_0 = 0;
    var tmp_0 = tmp0_substring_0.substring(tmp1_substring_0, index) + toString_0(value);
    var tmp2_substring_0 = this._string;
    tmp._string = tmp_0 + tmp2_substring_0.substring(index);
    return this;
  };
  StringBuilder.prototype.insert_4 = function (index, value) {
    return this.insert_5(index, value);
  };
  StringBuilder.prototype.insert_5 = function (index, value) {
    Companion_getInstance().checkPositionIndex(index, this._get_length__0());
    var tmp0_elvis_lhs = value;
    var toInsert = tmp0_elvis_lhs == null ? 'null' : tmp0_elvis_lhs;
    var tmp = this;
    var tmp0_substring_0 = this._string;
    var tmp1_substring_0 = 0;
    var tmp_0 = tmp0_substring_0.substring(tmp1_substring_0, index) + toInsert;
    var tmp2_substring_0 = this._string;
    tmp._string = tmp_0 + tmp2_substring_0.substring(index);
    return this;
  };
  StringBuilder.prototype.setLength = function (newLength) {
    if (newLength < 0) {
      throw IllegalArgumentException_init_$Create$_0('' + 'Negative new length: ' + newLength + '.');
    }if (newLength <= this._get_length__0()) {
      var tmp = this;
      var tmp0_substring_0 = this._string;
      var tmp1_substring_0 = 0;
      tmp._string = tmp0_substring_0.substring(tmp1_substring_0, newLength);
    } else {
      var inductionVariable = this._get_length__0();
      if (inductionVariable < newLength)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp1_this = this;
          tmp1_this._string = tmp1_this._string + new Char_0(0);
        }
         while (inductionVariable < newLength);
    }
  };
  StringBuilder.prototype.substring = function (startIndex) {
    Companion_getInstance().checkPositionIndex(startIndex, this._get_length__0());
    var tmp0_substring_0 = this._string;
    return tmp0_substring_0.substring(startIndex);
  };
  StringBuilder.prototype.substring_0 = function (startIndex, endIndex) {
    Companion_getInstance().checkBoundsIndexes(startIndex, endIndex, this._get_length__0());
    var tmp0_substring_0 = this._string;
    return tmp0_substring_0.substring(startIndex, endIndex);
  };
  StringBuilder.prototype.trimToSize_0 = function () {
  };
  StringBuilder.prototype.toString = function () {
    return this._string;
  };
  StringBuilder.prototype.clear_17 = function () {
    this._string = '';
    return this;
  };
  StringBuilder.prototype.set_16 = function (index, value) {
    Companion_getInstance().checkElementIndex(index, this._get_length__0());
    var tmp = this;
    var tmp0_substring_0 = this._string;
    var tmp1_substring_0 = 0;
    var tmp_0 = tmp0_substring_0.substring(tmp1_substring_0, index) + value;
    var tmp2_substring_0 = this._string;
    var tmp3_substring_0 = index + 1 | 0;
    tmp._string = tmp_0 + tmp2_substring_0.substring(tmp3_substring_0);
  };
  StringBuilder.prototype.setRange = function (startIndex, endIndex, value) {
    checkReplaceRange(this, startIndex, endIndex, this._get_length__0());
    var tmp = this;
    var tmp0_substring_0 = this._string;
    var tmp1_substring_0 = 0;
    var tmp_0 = tmp0_substring_0.substring(tmp1_substring_0, startIndex) + value;
    var tmp2_substring_0 = this._string;
    tmp._string = tmp_0 + tmp2_substring_0.substring(endIndex);
    return this;
  };
  StringBuilder.prototype.deleteAt = function (index) {
    Companion_getInstance().checkElementIndex(index, this._get_length__0());
    var tmp = this;
    var tmp0_substring_0 = this._string;
    var tmp1_substring_0 = 0;
    var tmp_0 = tmp0_substring_0.substring(tmp1_substring_0, index);
    var tmp2_substring_0 = this._string;
    var tmp3_substring_0 = index + 1 | 0;
    tmp._string = tmp_0 + tmp2_substring_0.substring(tmp3_substring_0);
    return this;
  };
  StringBuilder.prototype.deleteRange = function (startIndex, endIndex) {
    checkReplaceRange(this, startIndex, endIndex, this._get_length__0());
    var tmp = this;
    var tmp0_substring_0 = this._string;
    var tmp1_substring_0 = 0;
    var tmp_0 = tmp0_substring_0.substring(tmp1_substring_0, startIndex);
    var tmp2_substring_0 = this._string;
    tmp._string = tmp_0 + tmp2_substring_0.substring(endIndex);
    return this;
  };
  StringBuilder.prototype.toCharArray = function (destination, destinationOffset, startIndex, endIndex) {
    Companion_getInstance().checkBoundsIndexes(startIndex, endIndex, this._get_length__0());
    Companion_getInstance().checkBoundsIndexes(destinationOffset, (destinationOffset + endIndex | 0) - startIndex | 0, destination.length);
    var dstIndex = destinationOffset;
    var inductionVariable = startIndex;
    if (inductionVariable < endIndex)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1 = dstIndex;
        dstIndex = tmp1 + 1 | 0;
        destination[tmp1] = charSequenceGet(this._string, index);
      }
       while (inductionVariable < endIndex);
  };
  StringBuilder.prototype.toCharArray$default = function (destination, destinationOffset, startIndex, endIndex, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      destinationOffset = 0;
    if (!(($mask0 & 4) === 0))
      startIndex = 0;
    if (!(($mask0 & 8) === 0))
      endIndex = this._get_length__0();
    return this.toCharArray(destination, destinationOffset, startIndex, endIndex);
  };
  StringBuilder.prototype.appendRange = function (value, startIndex, endIndex) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + concatToString_0(value, startIndex, endIndex);
    return this;
  };
  StringBuilder.prototype.appendRange_0 = function (value, startIndex, endIndex) {
    var stringCsq = toString_1(value);
    Companion_getInstance().checkBoundsIndexes(startIndex, endIndex, stringCsq.length);
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp_0 = tmp0_this._string;
    tmp._string = tmp_0 + stringCsq.substring(startIndex, endIndex);
    return this;
  };
  StringBuilder.prototype.insertRange = function (index, value, startIndex, endIndex) {
    Companion_getInstance().checkPositionIndex(index, this._get_length__0());
    var tmp = this;
    var tmp0_substring_0 = this._string;
    var tmp1_substring_0 = 0;
    var tmp_0 = tmp0_substring_0.substring(tmp1_substring_0, index) + concatToString_0(value, startIndex, endIndex);
    var tmp2_substring_0 = this._string;
    tmp._string = tmp_0 + tmp2_substring_0.substring(index);
    return this;
  };
  StringBuilder.prototype.insertRange_0 = function (index, value, startIndex, endIndex) {
    Companion_getInstance().checkPositionIndex(index, this._get_length__0());
    var stringCsq = toString_1(value);
    Companion_getInstance().checkBoundsIndexes(startIndex, endIndex, stringCsq.length);
    var tmp = this;
    var tmp0_substring_0 = this._string;
    var tmp1_substring_0 = 0;
    var tmp_0 = tmp0_substring_0.substring(tmp1_substring_0, index);
    var tmp_1 = tmp_0 + stringCsq.substring(startIndex, endIndex);
    var tmp2_substring_0 = this._string;
    tmp._string = tmp_1 + tmp2_substring_0.substring(index);
    return this;
  };
  StringBuilder.$metadata$ = {
    simpleName: 'StringBuilder',
    kind: 'class',
    interfaces: [Appendable, CharSequence]
  };
  function isWhitespace(_this_) {
    return matches_0(_this_.toString(), '[\\s\\xA0]');
  }
  function isLowSurrogate(_this_) {
    var containsLower = new Char_0(56320);
    return _this_ <= new Char_0(57343) ? containsLower <= _this_ : false;
  }
  function isHighSurrogate(_this_) {
    var containsLower = new Char_0(55296);
    return _this_ <= new Char_0(56319) ? containsLower <= _this_ : false;
  }
  function uppercaseChar(_this_) {
    var tmp0_asDynamic_0 = _this_.toString();
    var tmp = tmp0_asDynamic_0.toUpperCase();
    var uppercase_1 = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
    return uppercase_1.length > 1 ? _this_ : charSequenceGet(uppercase_1, 0);
  }
  function lowercaseChar(_this_) {
    var tmp0_asDynamic_0 = _this_.toString();
    var tmp1_unsafeCast_0 = tmp0_asDynamic_0.toLowerCase().charCodeAt(0);
    return numberToChar(tmp1_unsafeCast_0);
  }
  function uppercase(_this_) {
    var tmp0_asDynamic_0 = _this_.toString();
    var tmp = tmp0_asDynamic_0.toUpperCase();
    return (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
  }
  function checkRadix(radix) {
    if (!(2 <= radix ? radix <= 36 : false)) {
      throw IllegalArgumentException_init_$Create$_0('' + 'radix ' + radix + ' was not in valid range 2..36');
    }return radix;
  }
  function _get_patternEscape_($this) {
    return $this._patternEscape;
  }
  function _get_replacementEscape_($this) {
    return $this._replacementEscape;
  }
  function Regex_init_$Init$(pattern, option, $this) {
    Regex.call($this, pattern, setOf(option));
    return $this;
  }
  function Regex_init_$Create$(pattern, option) {
    return Regex_init_$Init$(pattern, option, Object.create(Regex.prototype));
  }
  function Regex_init_$Init$_0(pattern, $this) {
    Regex.call($this, pattern, emptySet());
    return $this;
  }
  function Regex_init_$Create$_0(pattern) {
    return Regex_init_$Init$_0(pattern, Object.create(Regex.prototype));
  }
  function _get_nativePattern_($this) {
    return $this._nativePattern;
  }
  function Companion_20() {
    Companion_instance_19 = this;
    this._patternEscape = new RegExp('[-\\\\^$*+?.()|[\\]{}]', 'g');
    this._replacementEscape = new RegExp('\\$', 'g');
  }
  Companion_20.prototype.fromLiteral = function (literal) {
    return Regex_init_$Create$_0(this.escape(literal));
  };
  Companion_20.prototype.escape = function (literal) {
    var tmp0_nativeReplace_0 = this._patternEscape;
    var tmp1_nativeReplace_0 = '\\$&';
    return literal.replace(tmp0_nativeReplace_0, tmp1_nativeReplace_0);
  };
  Companion_20.prototype.escapeReplacement = function (literal) {
    var tmp0_nativeReplace_0 = this._replacementEscape;
    var tmp1_nativeReplace_0 = '$$$$';
    return literal.replace(tmp0_nativeReplace_0, tmp1_nativeReplace_0);
  };
  Companion_20.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_19;
  function Companion_getInstance_19() {
    if (Companion_instance_19 == null)
      new Companion_20();
    return Companion_instance_19;
  }
  function _no_name_provided__52(this$0, $input, $startIndex) {
    this._this$0_13 = this$0;
    this._$input = $input;
    this._$startIndex = $startIndex;
  }
  _no_name_provided__52.prototype.invoke_73 = function () {
    return this._this$0_13.find(this._$input, this._$startIndex);
  };
  _no_name_provided__52.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__53() {
  }
  _no_name_provided__53.prototype.invoke_74 = function (match_0) {
    return match_0.next_56();
  };
  _no_name_provided__53.prototype.invoke_81 = function (p1) {
    return this.invoke_74((!(p1 == null) ? isInterface(p1, MatchResult) : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__53.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function Regex(pattern, options) {
    Companion_getInstance_19();
    this._pattern = pattern;
    this._options = toSet_0(options);
    var tmp = this;
    var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(options, 10));
    var tmp0_iterator_1_2 = options.iterator_69();
    while (tmp0_iterator_1_2.hasNext_49()) {
      var item_2_3 = tmp0_iterator_1_2.next_56();
      tmp0_mapTo_0_1.add_25(item_2_3._value_1);
      Unit_getInstance();
    }
    tmp._nativePattern = new RegExp(pattern, joinToString$default_0(tmp0_mapTo_0_1, '', null, null, 0, null, null, 62, null) + 'g');
  }
  Regex.prototype._get_pattern_ = function () {
    return this._pattern;
  };
  Regex.prototype._get_options_ = function () {
    return this._options;
  };
  Regex.prototype.matches_0 = function (input) {
    reset(this._nativePattern);
    var match_0 = this._nativePattern.exec(toString_1(input));
    return (!(match_0 == null) ? match_0.index === 0 : false) ? this._nativePattern.lastIndex === charSequenceLength(input) : false;
  };
  Regex.prototype.containsMatchIn = function (input) {
    reset(this._nativePattern);
    return this._nativePattern.test(toString_1(input));
  };
  Regex.prototype.find = function (input, startIndex) {
    if (startIndex < 0 ? true : startIndex > charSequenceLength(input)) {
      throw IndexOutOfBoundsException_init_$Create$_0('' + 'Start index out of bounds: ' + startIndex + ', input length: ' + charSequenceLength(input));
    }return findNext(this._nativePattern, toString_1(input), startIndex);
  };
  Regex.prototype.find$default = function (input, startIndex, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    return this.find(input, startIndex);
  };
  Regex.prototype.findAll = function (input, startIndex) {
    if (startIndex < 0 ? true : startIndex > charSequenceLength(input)) {
      throw IndexOutOfBoundsException_init_$Create$_0('' + 'Start index out of bounds: ' + startIndex + ', input length: ' + charSequenceLength(input));
    }var tmp = _no_name_provided_$factory_33(this, input, startIndex);
    return generateSequence(tmp, _no_name_provided_$factory_34());
  };
  Regex.prototype.findAll$default = function (input, startIndex, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    return this.findAll(input, startIndex);
  };
  Regex.prototype.matchEntire = function (input) {
    var tmp;
    var tmp_0 = new Char_0(94);
    if (startsWith$default(this._pattern, tmp_0, false, 2, null)) {
      var tmp_1 = new Char_0(36);
      tmp = endsWith$default(this._pattern, tmp_1, false, 2, null);
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      return this.find$default(input, 0, 2, null);
    } else {
      {
        var tmp_2 = new Regex('' + '^' + trimEnd(trimStart(this._pattern, charArrayOf_0([new Char_0(94)])), charArrayOf_0([new Char_0(36)])) + '$', this._options);
        return tmp_2.find$default(input, 0, 2, null);
      }
    }
  };
  Regex.prototype.replace_0 = function (input, replacement) {
    var tmp0_nativeReplace_0 = toString_1(input);
    var tmp1_nativeReplace_0 = this._nativePattern;
    return tmp0_nativeReplace_0.replace(tmp1_nativeReplace_0, replacement);
  };
  Regex.prototype.replace_1 = function (input, transform) {
    var match_0 = this.find$default(input, 0, 2, null);
    if (match_0 == null)
      return toString_1(input);
    var lastStart = 0;
    var length = charSequenceLength(input);
    var sb = StringBuilder_init_$Create$(length);
    do {
      var foundMatch = ensureNotNull(match_0);
      sb.append_5(input, lastStart, foundMatch._get_range__0()._get_start__6());
      Unit_getInstance();
      sb.append_4(transform(foundMatch));
      Unit_getInstance();
      lastStart = foundMatch._get_range__0()._get_endInclusive__6() + 1 | 0;
      match_0 = foundMatch.next_56();
    }
     while (lastStart < length ? !(match_0 == null) : false);
    if (lastStart < length) {
      sb.append_5(input, lastStart, length);
      Unit_getInstance();
    }return sb.toString();
  };
  Regex.prototype.replaceFirst = function (input, replacement) {
    var tmp0_map_0 = this._options;
    var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map_0, 10));
    var tmp0_iterator_1_2 = tmp0_map_0.iterator_69();
    while (tmp0_iterator_1_2.hasNext_49()) {
      var item_2_3 = tmp0_iterator_1_2.next_56();
      tmp0_mapTo_0_1.add_25(item_2_3._value_1);
      Unit_getInstance();
    }
    var nonGlobalOptions = joinToString$default_0(tmp0_mapTo_0_1, '', null, null, 0, null, null, 62, null);
    var tmp1_nativeReplace_0 = toString_1(input);
    var tmp2_nativeReplace_0 = new RegExp(this._pattern, nonGlobalOptions);
    return tmp1_nativeReplace_0.replace(tmp2_nativeReplace_0, replacement);
  };
  Regex.prototype.split = function (input, limit) {
    var tmp0_require_0 = limit >= 0;
    if (!tmp0_require_0) {
      var message_1 = '' + 'Limit must be non-negative, but was ' + limit;
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_1));
    }var tmp1_let_0 = this.findAll$default(input, 0, 2, null);
    var matches_1 = limit === 0 ? tmp1_let_0 : take(tmp1_let_0, limit - 1 | 0);
    var result = ArrayList_init_$Create$();
    var lastStart = 0;
    var tmp0_iterator = matches_1.iterator_69();
    while (tmp0_iterator.hasNext_49()) {
      var match_0 = tmp0_iterator.next_56();
      result.add_25(toString_1(charSequenceSubSequence(input, lastStart, match_0._get_range__0()._get_start__6())));
      Unit_getInstance();
      lastStart = match_0._get_range__0()._get_endInclusive__6() + 1 | 0;
    }
    result.add_25(toString_1(charSequenceSubSequence(input, lastStart, charSequenceLength(input))));
    Unit_getInstance();
    return result;
  };
  Regex.prototype.split$default = function (input, limit, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      limit = 0;
    return this.split(input, limit);
  };
  Regex.prototype.toString = function () {
    return this._nativePattern.toString();
  };
  Regex.$metadata$ = {
    simpleName: 'Regex',
    kind: 'class',
    interfaces: []
  };
  var RegexOption_IGNORE_CASE_instance;
  var RegexOption_MULTILINE_instance;
  function values_8() {
    return [RegexOption_IGNORE_CASE_getInstance(), RegexOption_MULTILINE_getInstance()];
  }
  function valueOf_8(value) {
    switch (value) {
      case 'IGNORE_CASE':
        return RegexOption_IGNORE_CASE_getInstance();
      case 'MULTILINE':
        return RegexOption_MULTILINE_getInstance();
      default:return THROW_ISE();
    }
  }
  var RegexOption_entriesInitialized;
  function RegexOption_initEntries() {
    if (RegexOption_entriesInitialized)
      return Unit_getInstance();
    RegexOption_entriesInitialized = true;
    RegexOption_IGNORE_CASE_instance = new RegexOption('IGNORE_CASE', 0, 'i');
    RegexOption_MULTILINE_instance = new RegexOption('MULTILINE', 1, 'm');
  }
  function RegexOption(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this._value_1 = value;
  }
  RegexOption.prototype._get_value__7 = function () {
    return this._value_1;
  };
  RegexOption.$metadata$ = {
    simpleName: 'RegexOption',
    kind: 'class',
    interfaces: []
  };
  function findNext(_this_, input, from) {
    _this_.lastIndex = from;
    var match_0 = _this_.exec(input);
    if (match_0 == null)
      return null;
    var range = numberRangeToNumber(match_0.index, _this_.lastIndex - 1 | 0);
    return new _no_name_provided__57(range, match_0, _this_, input);
  }
  function MatchGroup(value) {
    this._value_2 = value;
  }
  MatchGroup.prototype._get_value__7 = function () {
    return this._value_2;
  };
  MatchGroup.prototype.component1_3 = function () {
    return this._value_2;
  };
  MatchGroup.prototype.copy_2 = function (value) {
    return new MatchGroup(value);
  };
  MatchGroup.prototype.copy$default_2 = function (value, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      value = this._value_2;
    return this.copy_2(value);
  };
  MatchGroup.prototype.toString = function () {
    return '' + 'MatchGroup(value=' + this._value_2 + ')';
  };
  MatchGroup.prototype.hashCode = function () {
    return getStringHashCode(this._value_2);
  };
  MatchGroup.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MatchGroup))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof MatchGroup ? other : THROW_CCE();
    if (!(this._value_2 === tmp0_other_with_cast._value_2))
      return false;
    return true;
  };
  MatchGroup.$metadata$ = {
    simpleName: 'MatchGroup',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__54(this$0) {
    this._this$0_14 = this$0;
  }
  _no_name_provided__54.prototype.invoke_76 = function (it) {
    return this._this$0_14.get_44(it);
  };
  _no_name_provided__54.prototype.invoke_81 = function (p1) {
    return this.invoke_76((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__54.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _set_groupValues__($this, _set___) {
    $this._groupValues_ = _set___;
  }
  function _get_groupValues__($this) {
    return $this._groupValues_;
  }
  function _no_name_provided__55($match) {
    this._$match = $match;
    AbstractCollection.call(this);
  }
  _no_name_provided__55.prototype._get_size__42 = function () {
    return this._$match.length;
  };
  _no_name_provided__55.prototype.iterator_69 = function () {
    var tmp = asSequence(_get_indices__5(this));
    return map_0(tmp, _no_name_provided_$factory_35(this)).iterator_69();
  };
  _no_name_provided__55.prototype.get_44 = function (index) {
    var tmp0_safe_receiver = this._$match[index];
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = new MatchGroup(tmp0_safe_receiver);
    }
    return tmp;
  };
  _no_name_provided__55.$metadata$ = {
    kind: 'class',
    interfaces: [MatchGroupCollection]
  };
  function _no_name_provided__56($match) {
    this._$match_0 = $match;
    AbstractList.call(this);
  }
  _no_name_provided__56.prototype._get_size__42 = function () {
    return this._$match_0.length;
  };
  _no_name_provided__56.prototype.get_44 = function (index) {
    var tmp0_elvis_lhs = this._$match_0[index];
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  _no_name_provided__56.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__57($range, $match, $this_findNext, $input) {
    this._$range = $range;
    this._$match_1 = $match;
    this._$this_findNext = $this_findNext;
    this._$input_0 = $input;
    this._range = this._$range;
    var tmp = this;
    tmp._groups = new _no_name_provided__55(this._$match_1);
    this._groupValues_ = null;
  }
  _no_name_provided__57.prototype._get_range__0 = function () {
    return this._range;
  };
  _no_name_provided__57.prototype._get_value__7 = function () {
    var tmp0_get_0 = 0;
    return ensureNotNull(this._$match_1[tmp0_get_0]);
  };
  _no_name_provided__57.prototype._get_groups__0 = function () {
    return this._groups;
  };
  _no_name_provided__57.prototype._get_groupValues__0 = function () {
    if (this._groupValues_ == null) {
      var tmp = this;
      tmp._groupValues_ = new _no_name_provided__56(this._$match_1);
    }return ensureNotNull(this._groupValues_);
  };
  _no_name_provided__57.prototype.next_56 = function () {
    return findNext(this._$this_findNext, this._$input_0, this._$range.isEmpty_51() ? this._$range._get_start__6() + 1 | 0 : this._$range._get_endInclusive__6() + 1 | 0);
  };
  _no_name_provided__57.$metadata$ = {
    kind: 'class',
    interfaces: [MatchResult]
  };
  function RegexOption_IGNORE_CASE_getInstance() {
    RegexOption_initEntries();
    return RegexOption_IGNORE_CASE_instance;
  }
  function RegexOption_MULTILINE_getInstance() {
    RegexOption_initEntries();
    return RegexOption_MULTILINE_instance;
  }
  function _no_name_provided_$factory_33(this$0, $input, $startIndex) {
    var i = new _no_name_provided__52(this$0, $input, $startIndex);
    return function () {
      return i.invoke_73();
    };
  }
  function _no_name_provided_$factory_34() {
    var i = new _no_name_provided__53();
    return function (p1) {
      return i.invoke_74(p1);
    };
  }
  function _no_name_provided_$factory_35(this$0) {
    var i = new _no_name_provided__54(this$0);
    return function (p1) {
      return i.invoke_76(p1);
    };
  }
  function _get_STRING_CASE_INSENSITIVE_ORDER_() {
    return STRING_CASE_INSENSITIVE_ORDER;
  }
  var STRING_CASE_INSENSITIVE_ORDER;
  function nativeLastIndexOf(_this_, str, fromIndex) {
    return _this_.lastIndexOf(str, fromIndex);
  }
  function substring_0(_this_, startIndex, endIndex) {
    return _this_.substring(startIndex, endIndex);
  }
  function substring_1(_this_, startIndex) {
    return _this_.substring(startIndex);
  }
  function compareTo(_this_, other, ignoreCase) {
    if (ignoreCase) {
      var n1 = _this_.length;
      var n2 = other.length;
      var min = function () {
        var $externalVarargReceiverTmp = Math;
        return $externalVarargReceiverTmp.min.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Int32Array([n1, n2]))));
      }.call(this);
      if (min === 0)
        return n1 - n2 | 0;
      var start = 0;
      $l$break: while (true) {
        var tmp0_minOf_0 = start + 16 | 0;
        var end = function () {
          var $externalVarargReceiverTmp = Math;
          return $externalVarargReceiverTmp.min.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Int32Array([tmp0_minOf_0, min]))));
        }.call(this);
        var tmp1_substring_0 = start;
        var s1 = _this_.substring(tmp1_substring_0, end);
        var tmp2_substring_0 = start;
        var s2 = other.substring(tmp2_substring_0, end);
        if (!(s1 === s2)) {
          var tmp3_uppercase_0 = s1;
          s1 = tmp3_uppercase_0.toUpperCase();
          var tmp4_uppercase_0 = s2;
          s2 = tmp4_uppercase_0.toUpperCase();
          if (!(s1 === s2)) {
            var tmp5_lowercase_0 = s1;
            s1 = tmp5_lowercase_0.toLowerCase();
            var tmp6_lowercase_0 = s2;
            s2 = tmp6_lowercase_0.toLowerCase();
            if (!(s1 === s2)) {
              return compareTo_0(s1, s2);
            }}}if (end === min)
          break $l$break;
        start = end;
      }
      return n1 - n2 | 0;
    } else {
      return compareTo_0(_this_, other);
    }
  }
  function compareTo$default(_this_, other, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      ignoreCase = false;
    return compareTo(_this_, other, ignoreCase);
  }
  function uppercase_0(_this_) {
    return _this_.toUpperCase();
  }
  function lowercase(_this_) {
    return _this_.toLowerCase();
  }
  function nativeReplace(_this_, pattern, replacement) {
    return _this_.replace(pattern, replacement);
  }
  function toUpperCase(_this_) {
    return _this_.toUpperCase();
  }
  function match(_this_, regex) {
    return _this_.match(regex);
  }
  function concatToString(_this_) {
    var result = '';
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var char = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      result = result + char;
    }
    return result;
  }
  function concatToString_0(_this_, startIndex, endIndex) {
    Companion_getInstance().checkBoundsIndexes(startIndex, endIndex, _this_.length);
    var result = '';
    var inductionVariable = startIndex;
    if (inductionVariable < endIndex)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result + _this_[index];
      }
       while (inductionVariable < endIndex);
    return result;
  }
  function concatToString$default(_this_, startIndex, endIndex, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      startIndex = 0;
    if (!(($mask0 & 2) === 0))
      endIndex = _this_.length;
    return concatToString_0(_this_, startIndex, endIndex);
  }
  function nativeIndexOf(_this_, str, fromIndex) {
    return _this_.indexOf(str, fromIndex);
  }
  function toLowerCase(_this_) {
    return _this_.toLowerCase();
  }
  function sam$kotlin_Comparator$0(function_0) {
    this._function = function_0;
  }
  sam$kotlin_Comparator$0.prototype.compare_0 = function (a, b) {
    return this._function(a, b);
  };
  sam$kotlin_Comparator$0.prototype.compare = function (a, b) {
    return this.compare_0(a, b);
  };
  sam$kotlin_Comparator$0.$metadata$ = {
    simpleName: 'sam$kotlin_Comparator$0',
    kind: 'class',
    interfaces: [Comparator]
  };
  function _no_name_provided__58() {
  }
  _no_name_provided__58.prototype.invoke_78 = function (a, b) {
    return compareTo(a, b, true);
  };
  _no_name_provided__58.prototype.invoke_79 = function (p1, p2) {
    var tmp = (!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE();
    return this.invoke_78(tmp, (!(p2 == null) ? typeof p2 === 'string' : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__58.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_36() {
    var i = new _no_name_provided__58();
    return function (p1, p2) {
      return i.invoke_78(p1, p2);
    };
  }
  function STRING_CASE_INSENSITIVE_ORDER$init$() {
    var tmp = _no_name_provided_$factory_36();
    return new sam$kotlin_Comparator$0(tmp);
  }
  function capitalize(_this_) {
    var tmp;
    if (charSequenceLength(_this_) > 0) {
      var tmp0_substring_0 = 0;
      var tmp1_substring_0 = 1;
      var tmp2_toUpperCase_0 = _this_.substring(tmp0_substring_0, tmp1_substring_0);
      var tmp_0 = tmp2_toUpperCase_0.toUpperCase();
      var tmp3_substring_0 = 1;
      tmp = tmp_0 + _this_.substring(tmp3_substring_0);
    } else {
      {
        tmp = _this_;
      }
    }
    return tmp;
  }
  function isBlank(_this_) {
    var tmp;
    if (charSequenceLength(_this_) === 0) {
      tmp = true;
    } else {
      var tmp_0;
      if (typeof _this_ === 'string') {
        tmp_0 = _this_;
      } else {
        {
          tmp_0 = toString_1(_this_);
        }
      }
      tmp = matches_0(tmp_0, '^[\\s\\xA0]+$');
    }
    return tmp;
  }
  function matches_0(_this_, regex) {
    var result = _this_.match(regex);
    return !(result == null) ? !(result.length === 0) : false;
  }
  function regionMatches(_this_, thisOffset, other, otherOffset, length, ignoreCase) {
    return regionMatchesImpl(_this_, thisOffset, other, otherOffset, length, ignoreCase);
  }
  function regionMatches$default(_this_, thisOffset, other, otherOffset, length, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 16) === 0))
      ignoreCase = false;
    return regionMatches(_this_, thisOffset, other, otherOffset, length, ignoreCase);
  }
  function _get_REPLACEMENT_BYTE_SEQUENCE_() {
    return REPLACEMENT_BYTE_SEQUENCE;
  }
  var REPLACEMENT_BYTE_SEQUENCE;
  function REPLACEMENT_BYTE_SEQUENCE$init$() {
    var tmp0_byteArrayOf_0 = new Int8Array([-17, -65, -67]);
    return tmp0_byteArrayOf_0;
  }
  function removeClass(_this_, cssClasses) {
    var tmp$ret$0;
    l$ret$1: do {
      var indexedObject = cssClasses;
      var inductionVariable = 0;
      var last_0 = indexedObject.length;
      while (inductionVariable < last_0) {
        var element_2 = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (hasClass(_this_, element_2)) {
          tmp$ret$0 = true;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = false;
    }
     while (false);
    if (tmp$ret$0) {
      var toBeRemoved = toSet(cssClasses);
      var tmp0_trim_0 = _this_.className;
      var tmp2_split_0 = toString_1(trim_0(isCharSequence(tmp0_trim_0) ? tmp0_trim_0 : THROW_CCE()));
      var tmp1_toRegex_0 = '\\s+';
      var tmp3_split_0 = Regex_init_$Create$_0(tmp1_toRegex_0);
      var tmp4_split_0 = 0;
      var tmp5_filter_0 = tmp3_split_0.split(tmp2_split_0, tmp4_split_0);
      var tmp0_filterTo_0_1 = ArrayList_init_$Create$();
      var tmp0_iterator_1_2 = tmp5_filter_0.iterator_69();
      while (tmp0_iterator_1_2.hasNext_49()) {
        var element_2_3 = tmp0_iterator_1_2.next_56();
        if (!toBeRemoved.contains_58(element_2_3)) {
          tmp0_filterTo_0_1.add_25(element_2_3);
          Unit_getInstance();
        } else {
        }
      }
      _this_.className = joinToString$default_0(tmp0_filterTo_0_1, ' ', null, null, 0, null, null, 62, null);
      return true;
    } else {
    }
    return false;
  }
  function addClass(_this_, cssClasses) {
    var tmp0_filterNotTo_0_1 = ArrayList_init_$Create$();
    var indexedObject = cssClasses;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element_2_3 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (!hasClass(_this_, element_2_3)) {
        tmp0_filterNotTo_0_1.add_25(element_2_3);
        Unit_getInstance();
      } else {
      }
    }
    var missingClasses = tmp0_filterNotTo_0_1;
    if (!missingClasses.isEmpty_51()) {
      var tmp0_trim_0 = _this_.className;
      var presentClasses = toString_1(trim_0(isCharSequence(tmp0_trim_0) ? tmp0_trim_0 : THROW_CCE()));
      var tmp0_apply_0_1 = StringBuilder_init_$Create$_1();
      tmp0_apply_0_1.append_10(presentClasses);
      Unit_getInstance();
      if (!(charSequenceLength(presentClasses) === 0)) {
        tmp0_apply_0_1.append_10(' ');
        Unit_getInstance();
      } else {
      }
      joinTo$default_0(missingClasses, tmp0_apply_0_1, ' ', null, null, 0, null, null, 124, null);
      Unit_getInstance();
      _this_.className = tmp0_apply_0_1.toString();
      return true;
    } else {
    }
    return false;
  }
  function hasClass(_this_, cssClass) {
    var tmp1_matches_0 = _this_.className;
    var tmp0_toRegex_0 = '' + '(^|.*\\s+)' + cssClass + '($|\\s+.*)';
    var tmp2_matches_0 = Regex_init_$Create$_0(tmp0_toRegex_0);
    return tmp2_matches_0.matches_0(tmp1_matches_0);
  }
  function get_1(_this_, index) {
    return _this_[index];
  }
  function set_0(_this_, key, value) {
    _this_[key] = value;
  }
  function get_2(_this_, key) {
    return _this_[key];
  }
  function _get_value_($this) {
    return $this._value_3;
  }
  function Companion_21() {
    Companion_instance_20 = this;
    this._MIN_VALUE_8 = new Char_0(0);
    this._MAX_VALUE_8 = new Char_0(65535);
    this._MIN_HIGH_SURROGATE = new Char_0(55296);
    this._MAX_HIGH_SURROGATE = new Char_0(56319);
    this._MIN_LOW_SURROGATE = new Char_0(56320);
    this._MAX_LOW_SURROGATE = new Char_0(57343);
    this._MIN_SURROGATE = new Char_0(55296);
    this._MAX_SURROGATE = new Char_0(57343);
    this._SIZE_BYTES_8 = 2;
    this._SIZE_BITS_8 = 16;
  }
  Companion_21.prototype._get_MIN_VALUE__9 = function () {
    return this._MIN_VALUE_8;
  };
  Companion_21.prototype._get_MAX_VALUE__9 = function () {
    return this._MAX_VALUE_8;
  };
  Companion_21.prototype._get_MIN_HIGH_SURROGATE_ = function () {
    return this._MIN_HIGH_SURROGATE;
  };
  Companion_21.prototype._get_MAX_HIGH_SURROGATE_ = function () {
    return this._MAX_HIGH_SURROGATE;
  };
  Companion_21.prototype._get_MIN_LOW_SURROGATE_ = function () {
    return this._MIN_LOW_SURROGATE;
  };
  Companion_21.prototype._get_MAX_LOW_SURROGATE_ = function () {
    return this._MAX_LOW_SURROGATE;
  };
  Companion_21.prototype._get_MIN_SURROGATE_ = function () {
    return this._MIN_SURROGATE;
  };
  Companion_21.prototype._get_MAX_SURROGATE_ = function () {
    return this._MAX_SURROGATE;
  };
  Companion_21.prototype._get_SIZE_BYTES__9 = function () {
    return this._SIZE_BYTES_8;
  };
  Companion_21.prototype._get_SIZE_BITS__9 = function () {
    return this._SIZE_BITS_8;
  };
  Companion_21.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_20;
  function Companion_getInstance_20() {
    if (Companion_instance_20 == null)
      new Companion_21();
    return Companion_instance_20;
  }
  function Char_0(code) {
    Companion_getInstance_20();
    var tmp = this;
    tmp._value_3 = _UShort___get_data__impl_(code) & 65535;
  }
  Char_0.prototype.compareTo_18 = function (other) {
    return this._value_3 - other._value_3 | 0;
  };
  Char_0.prototype.compareTo_26 = function (other) {
    return this.compareTo_18(other instanceof Char_0 ? other : THROW_CCE());
  };
  Char_0.prototype.plus_37 = function (other) {
    return numberToChar(this._value_3 + other | 0);
  };
  Char_0.prototype.minus = function (other) {
    return this._value_3 - other._value_3 | 0;
  };
  Char_0.prototype.minus_33 = function (other) {
    return numberToChar(this._value_3 - other | 0);
  };
  Char_0.prototype.inc_5 = function () {
    return numberToChar(this._value_3 + 1 | 0);
  };
  Char_0.prototype.dec_5 = function () {
    return numberToChar(this._value_3 - 1 | 0);
  };
  Char_0.prototype.rangeTo = function (other) {
    return new CharRange(this, other);
  };
  Char_0.prototype.toByte_6 = function () {
    return toByte(this._value_3);
  };
  Char_0.prototype.toChar_6 = function () {
    return this;
  };
  Char_0.prototype.toShort_6 = function () {
    return toShort(this._value_3);
  };
  Char_0.prototype.toInt_6 = function () {
    return this._value_3;
  };
  Char_0.prototype.toLong_6 = function () {
    return toLong(this._value_3);
  };
  Char_0.prototype.toFloat_6 = function () {
    return this._value_3;
  };
  Char_0.prototype.toDouble_6 = function () {
    return this._value_3;
  };
  Char_0.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Char_0))
      return false;
    else {
    }
    return this._value_3 === other._value_3;
  };
  Char_0.prototype.hashCode = function () {
    return this._value_3;
  };
  Char_0.prototype.toString = function () {
    var tmp0_unsafeCast_0 = String.fromCharCode(this._value_3);
    return tmp0_unsafeCast_0;
  };
  Char_0.$metadata$ = {
    simpleName: 'Char',
    kind: 'class',
    interfaces: [Comparable]
  };
  function Iterable() {
  }
  Iterable.$metadata$ = {
    simpleName: 'Iterable',
    kind: 'interface',
    interfaces: []
  };
  function Entry() {
  }
  Entry.$metadata$ = {
    simpleName: 'Entry',
    kind: 'interface',
    interfaces: []
  };
  function Map_0() {
  }
  Map_0.$metadata$ = {
    simpleName: 'Map',
    kind: 'interface',
    interfaces: []
  };
  function Set() {
  }
  Set.$metadata$ = {
    simpleName: 'Set',
    kind: 'interface',
    interfaces: [Collection]
  };
  function List() {
  }
  List.$metadata$ = {
    simpleName: 'List',
    kind: 'interface',
    interfaces: [Collection]
  };
  function MutableEntry() {
  }
  MutableEntry.$metadata$ = {
    simpleName: 'MutableEntry',
    kind: 'interface',
    interfaces: [Entry]
  };
  function MutableMap() {
  }
  MutableMap.$metadata$ = {
    simpleName: 'MutableMap',
    kind: 'interface',
    interfaces: [Map_0]
  };
  function Collection() {
  }
  Collection.$metadata$ = {
    simpleName: 'Collection',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function MutableList() {
  }
  MutableList.$metadata$ = {
    simpleName: 'MutableList',
    kind: 'interface',
    interfaces: [List, MutableCollection]
  };
  function MutableSet() {
  }
  MutableSet.$metadata$ = {
    simpleName: 'MutableSet',
    kind: 'interface',
    interfaces: [Set, MutableCollection]
  };
  function MutableCollection() {
  }
  MutableCollection.$metadata$ = {
    simpleName: 'MutableCollection',
    kind: 'interface',
    interfaces: [Collection, MutableIterable]
  };
  function MutableIterable() {
  }
  MutableIterable.$metadata$ = {
    simpleName: 'MutableIterable',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function Companion_22() {
    Companion_instance_21 = this;
  }
  Companion_22.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_21;
  function Companion_getInstance_21() {
    if (Companion_instance_21 == null)
      new Companion_22();
    return Companion_instance_21;
  }
  function Enum(name, ordinal) {
    Companion_getInstance_21();
    this._name_2 = name;
    this._ordinal = ordinal;
  }
  Enum.prototype._get_name__23 = function () {
    return this._name_2;
  };
  Enum.prototype._get_ordinal__9 = function () {
    return this._ordinal;
  };
  Enum.prototype.compareTo_20 = function (other) {
    return compareTo_0(this._ordinal, other._ordinal);
  };
  Enum.prototype.compareTo_26 = function (other) {
    return this.compareTo_20(other instanceof Enum ? other : THROW_CCE());
  };
  Enum.prototype.equals = function (other) {
    return this === other;
  };
  Enum.prototype.hashCode = function () {
    return identityHashCode(this);
  };
  Enum.prototype.toString = function () {
    return this._name_2;
  };
  Enum.$metadata$ = {
    simpleName: 'Enum',
    kind: 'class',
    interfaces: [Comparable]
  };
  function byteArrayOf(elements) {
    return elements;
  }
  function arrayOf(elements) {
    return elements;
  }
  function toString_0(_this_) {
    var tmp0_safe_receiver = _this_;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_1(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
  }
  function plus_0(_this_, other) {
    var tmp2_safe_receiver = _this_;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : toString_1(tmp2_safe_receiver);
    var tmp = tmp3_elvis_lhs == null ? 'null' : tmp3_elvis_lhs;
    var tmp0_safe_receiver = other;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_1(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs);
  }
  function booleanArrayOf(elements) {
    return elements;
  }
  function charArrayOf(elements) {
    return elements;
  }
  function shortArrayOf(elements) {
    return elements;
  }
  function intArrayOf(elements) {
    return elements;
  }
  function floatArrayOf(elements) {
    return elements;
  }
  function longArrayOf(elements) {
    return elements;
  }
  function doubleArrayOf(elements) {
    return elements;
  }
  function DefaultConstructorMarker() {
    DefaultConstructorMarker_instance = this;
  }
  DefaultConstructorMarker.$metadata$ = {
    simpleName: 'DefaultConstructorMarker',
    kind: 'object',
    interfaces: []
  };
  var DefaultConstructorMarker_instance;
  function DefaultConstructorMarker_getInstance() {
    if (DefaultConstructorMarker_instance == null)
      new DefaultConstructorMarker();
    return DefaultConstructorMarker_instance;
  }
  function fillArrayVal(array, initValue) {
    var inductionVariable = 0;
    var last_0 = array.length - 1 | 0;
    if (inductionVariable <= last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = initValue;
      }
       while (!(i === last_0));
    return array;
  }
  function arrayWithFun(size_0, init) {
    var tmp0_fillArrayFun_0 = Array(size_0);
    var result_1 = tmp0_fillArrayFun_0;
    var i_2 = 0;
    while (!(i_2 === result_1.length)) {
      result_1[i_2] = init(i_2);
      i_2 = i_2 + 1 | 0;
      Unit_getInstance();
    }
    return result_1;
  }
  function fillArrayFun(array, init) {
    var result = array;
    var i = 0;
    while (!(i === result.length)) {
      result[i] = init(i);
      i = i + 1 | 0;
      Unit_getInstance();
    }
    return result;
  }
  function arrayIterator(array) {
    return new _no_name_provided__59(array);
  }
  function booleanArrayIterator(array) {
    return new _no_name_provided__60(array);
  }
  function charArrayIterator(array) {
    return new _no_name_provided__61(array);
  }
  function byteArrayIterator(array) {
    return new _no_name_provided__62(array);
  }
  function shortArrayIterator(array) {
    return new _no_name_provided__63(array);
  }
  function intArrayIterator(array) {
    return new _no_name_provided__64(array);
  }
  function floatArrayIterator(array) {
    return new _no_name_provided__65(array);
  }
  function longArrayIterator(array) {
    return new _no_name_provided__66(array);
  }
  function doubleArrayIterator(array) {
    return new _no_name_provided__67(array);
  }
  function booleanArray(size_0) {
    var tmp0_withType_0 = 'BooleanArray';
    var tmp1_withType_0 = fillArrayVal(Array(size_0), false);
    tmp1_withType_0.$type$ = tmp0_withType_0;
    var tmp2_unsafeCast_0 = tmp1_withType_0;
    return tmp2_unsafeCast_0;
  }
  function charArray(size_0) {
    var tmp1_withType_0 = 'CharArray';
    var tmp = Array(size_0);
    var tmp0_Char_0 = 0;
    var tmp_0;
    var tmp0__get_code__0_1 = new Char_0(0);
    if (tmp0_Char_0 < tmp0__get_code__0_1.toInt_6()) {
      tmp_0 = true;
    } else {
      {
        var tmp1__get_code__0_2 = new Char_0(65535);
        tmp_0 = tmp0_Char_0 > tmp1__get_code__0_2.toInt_6();
      }
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$_0('' + 'Invalid Char code: ' + tmp0_Char_0);
    } else {
    }
    var tmp2_withType_0 = fillArrayVal(tmp, new Char_0(_UShort___init__impl_(toShort(tmp0_Char_0))));
    tmp2_withType_0.$type$ = tmp1_withType_0;
    var tmp3_unsafeCast_0 = tmp2_withType_0;
    return tmp3_unsafeCast_0;
  }
  function longArray(size_0) {
    var tmp0_withType_0 = 'LongArray';
    var tmp1_withType_0 = fillArrayVal(Array(size_0), new Long(0, 0));
    tmp1_withType_0.$type$ = tmp0_withType_0;
    var tmp2_unsafeCast_0 = tmp1_withType_0;
    return tmp2_unsafeCast_0;
  }
  function booleanArrayOf_0(arr) {
    var tmp0_withType_0 = 'BooleanArray';
    var tmp1_withType_0 = arr.slice();
    tmp1_withType_0.$type$ = tmp0_withType_0;
    var tmp2_unsafeCast_0 = tmp1_withType_0;
    return tmp2_unsafeCast_0;
  }
  function charArrayOf_0(arr) {
    var tmp0_withType_0 = 'CharArray';
    var tmp1_withType_0 = arr.slice();
    tmp1_withType_0.$type$ = tmp0_withType_0;
    var tmp2_unsafeCast_0 = tmp1_withType_0;
    return tmp2_unsafeCast_0;
  }
  function longArrayOf_0(arr) {
    var tmp0_withType_0 = 'LongArray';
    var tmp1_withType_0 = arr.slice();
    tmp1_withType_0.$type$ = tmp0_withType_0;
    var tmp2_unsafeCast_0 = tmp1_withType_0;
    return tmp2_unsafeCast_0;
  }
  function _no_name_provided__59($array) {
    this._$array = $array;
    this._index_5 = 0;
  }
  _no_name_provided__59.prototype._set_index__11 = function (_set___) {
    this._index_5 = _set___;
  };
  _no_name_provided__59.prototype._get_index__11 = function () {
    return this._index_5;
  };
  _no_name_provided__59.prototype.hasNext_49 = function () {
    return !(this._index_5 === this._$array.length);
  };
  _no_name_provided__59.prototype.next_56 = function () {
    var tmp;
    if (!(this._index_5 === this._$array.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_5;
      tmp0_this._index_5 = tmp1 + 1 | 0;
      tmp = this._$array[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this._index_5);
    }
    return tmp;
  };
  _no_name_provided__59.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function _no_name_provided__60($array) {
    this._$array_0 = $array;
    BooleanIterator.call(this);
    this._index_6 = 0;
  }
  _no_name_provided__60.prototype._set_index__11 = function (_set___) {
    this._index_6 = _set___;
  };
  _no_name_provided__60.prototype._get_index__11 = function () {
    return this._index_6;
  };
  _no_name_provided__60.prototype.hasNext_49 = function () {
    return !(this._index_6 === this._$array_0.length);
  };
  _no_name_provided__60.prototype.nextBoolean_3 = function () {
    var tmp;
    if (!(this._index_6 === this._$array_0.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_6;
      tmp0_this._index_6 = tmp1 + 1 | 0;
      tmp = this._$array_0[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this._index_6);
    }
    return tmp;
  };
  _no_name_provided__60.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__61($array) {
    this._$array_1 = $array;
    CharIterator.call(this);
    this._index_7 = 0;
  }
  _no_name_provided__61.prototype._set_index__11 = function (_set___) {
    this._index_7 = _set___;
  };
  _no_name_provided__61.prototype._get_index__11 = function () {
    return this._index_7;
  };
  _no_name_provided__61.prototype.hasNext_49 = function () {
    return !(this._index_7 === this._$array_1.length);
  };
  _no_name_provided__61.prototype.nextChar_1 = function () {
    var tmp;
    if (!(this._index_7 === this._$array_1.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_7;
      tmp0_this._index_7 = tmp1 + 1 | 0;
      tmp = this._$array_1[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this._index_7);
    }
    return tmp;
  };
  _no_name_provided__61.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__62($array) {
    this._$array_2 = $array;
    ByteIterator.call(this);
    this._index_8 = 0;
  }
  _no_name_provided__62.prototype._set_index__11 = function (_set___) {
    this._index_8 = _set___;
  };
  _no_name_provided__62.prototype._get_index__11 = function () {
    return this._index_8;
  };
  _no_name_provided__62.prototype.hasNext_49 = function () {
    return !(this._index_8 === this._$array_2.length);
  };
  _no_name_provided__62.prototype.nextByte_0 = function () {
    var tmp;
    if (!(this._index_8 === this._$array_2.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_8;
      tmp0_this._index_8 = tmp1 + 1 | 0;
      tmp = this._$array_2[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this._index_8);
    }
    return tmp;
  };
  _no_name_provided__62.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__63($array) {
    this._$array_3 = $array;
    ShortIterator.call(this);
    this._index_9 = 0;
  }
  _no_name_provided__63.prototype._set_index__11 = function (_set___) {
    this._index_9 = _set___;
  };
  _no_name_provided__63.prototype._get_index__11 = function () {
    return this._index_9;
  };
  _no_name_provided__63.prototype.hasNext_49 = function () {
    return !(this._index_9 === this._$array_3.length);
  };
  _no_name_provided__63.prototype.nextShort_0 = function () {
    var tmp;
    if (!(this._index_9 === this._$array_3.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_9;
      tmp0_this._index_9 = tmp1 + 1 | 0;
      tmp = this._$array_3[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this._index_9);
    }
    return tmp;
  };
  _no_name_provided__63.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__64($array) {
    this._$array_4 = $array;
    IntIterator.call(this);
    this._index_10 = 0;
  }
  _no_name_provided__64.prototype._set_index__11 = function (_set___) {
    this._index_10 = _set___;
  };
  _no_name_provided__64.prototype._get_index__11 = function () {
    return this._index_10;
  };
  _no_name_provided__64.prototype.hasNext_49 = function () {
    return !(this._index_10 === this._$array_4.length);
  };
  _no_name_provided__64.prototype.nextInt_10 = function () {
    var tmp;
    if (!(this._index_10 === this._$array_4.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_10;
      tmp0_this._index_10 = tmp1 + 1 | 0;
      tmp = this._$array_4[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this._index_10);
    }
    return tmp;
  };
  _no_name_provided__64.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__65($array) {
    this._$array_5 = $array;
    FloatIterator.call(this);
    this._index_11 = 0;
  }
  _no_name_provided__65.prototype._set_index__11 = function (_set___) {
    this._index_11 = _set___;
  };
  _no_name_provided__65.prototype._get_index__11 = function () {
    return this._index_11;
  };
  _no_name_provided__65.prototype.hasNext_49 = function () {
    return !(this._index_11 === this._$array_5.length);
  };
  _no_name_provided__65.prototype.nextFloat_3 = function () {
    var tmp;
    if (!(this._index_11 === this._$array_5.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_11;
      tmp0_this._index_11 = tmp1 + 1 | 0;
      tmp = this._$array_5[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this._index_11);
    }
    return tmp;
  };
  _no_name_provided__65.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__66($array) {
    this._$array_6 = $array;
    LongIterator.call(this);
    this._index_12 = 0;
  }
  _no_name_provided__66.prototype._set_index__11 = function (_set___) {
    this._index_12 = _set___;
  };
  _no_name_provided__66.prototype._get_index__11 = function () {
    return this._index_12;
  };
  _no_name_provided__66.prototype.hasNext_49 = function () {
    return !(this._index_12 === this._$array_6.length);
  };
  _no_name_provided__66.prototype.nextLong_10 = function () {
    var tmp;
    if (!(this._index_12 === this._$array_6.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_12;
      tmp0_this._index_12 = tmp1 + 1 | 0;
      tmp = this._$array_6[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this._index_12);
    }
    return tmp;
  };
  _no_name_provided__66.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__67($array) {
    this._$array_7 = $array;
    DoubleIterator.call(this);
    this._index_13 = 0;
  }
  _no_name_provided__67.prototype._set_index__11 = function (_set___) {
    this._index_13 = _set___;
  };
  _no_name_provided__67.prototype._get_index__11 = function () {
    return this._index_13;
  };
  _no_name_provided__67.prototype.hasNext_49 = function () {
    return !(this._index_13 === this._$array_7.length);
  };
  _no_name_provided__67.prototype.nextDouble_9 = function () {
    var tmp;
    if (!(this._index_13 === this._$array_7.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_13;
      tmp0_this._index_13 = tmp1 + 1 | 0;
      tmp = this._$array_7[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this._index_13);
    }
    return tmp;
  };
  _no_name_provided__67.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _get_buf_() {
    return buf;
  }
  var buf;
  function _get_bufFloat64_() {
    return bufFloat64;
  }
  var bufFloat64;
  function _get_bufFloat32_() {
    return bufFloat32;
  }
  var bufFloat32;
  function _get_bufInt32_() {
    return bufInt32;
  }
  var bufInt32;
  function _get_lowIndex_() {
    return lowIndex;
  }
  var lowIndex;
  function _get_highIndex_() {
    return highIndex;
  }
  var highIndex;
  function doubleFromBits(value) {
    bufInt32[lowIndex] = value._low;
    bufInt32[highIndex] = value._high;
    return bufFloat64[0];
  }
  function doubleToRawBits(value) {
    bufFloat64[0] = value;
    return new Long(bufInt32[lowIndex], bufInt32[highIndex]);
  }
  function getNumberHashCode(obj) {
    var tmp0_unsafeCast_0 = jsBitwiseOr(obj, 0);
    if (tmp0_unsafeCast_0 === obj) {
      return numberToInt(obj);
    } else {
    }
    bufFloat64[0] = obj;
    return imul(bufInt32[highIndex], 31) + bufInt32[lowIndex] | 0;
  }
  function bufFloat64$init$() {
    var tmp0_unsafeCast_0 = new Float64Array(buf);
    return tmp0_unsafeCast_0;
  }
  function bufFloat32$init$() {
    var tmp0_unsafeCast_0 = new Float32Array(buf);
    return tmp0_unsafeCast_0;
  }
  function bufInt32$init$() {
    var tmp0_unsafeCast_0 = new Int32Array(buf);
    return tmp0_unsafeCast_0;
  }
  function lowIndex$init$() {
    bufFloat64[0] = -1.0;
    return !(bufInt32[0] === 0) ? 1 : 0;
  }
  function DoNotIntrinsify() {
  }
  DoNotIntrinsify.$metadata$ = {
    simpleName: 'DoNotIntrinsify',
    kind: 'class',
    interfaces: [Annotation]
  };
  function charSequenceGet(a, index) {
    var tmp;
    if (isString(a)) {
      var tmp0_unsafeCast_0 = a.charCodeAt(index);
      var tmp1_Char_0 = tmp0_unsafeCast_0;
      var tmp_0;
      var tmp0__get_code__0_1 = new Char_0(0);
      if (tmp1_Char_0 < tmp0__get_code__0_1.toInt_6()) {
        tmp_0 = true;
      } else {
        {
          var tmp1__get_code__0_2 = new Char_0(65535);
          tmp_0 = tmp1_Char_0 > tmp1__get_code__0_2.toInt_6();
        }
      }
      if (tmp_0) {
        throw IllegalArgumentException_init_$Create$_0('' + 'Invalid Char code: ' + tmp1_Char_0);
      } else {
      }
      tmp = new Char_0(_UShort___init__impl_(toShort(tmp1_Char_0)));
    } else {
      tmp = a.get_44(index);
    }
    return tmp;
  }
  function isString(a) {
    return typeof a === 'string';
  }
  function charSequenceLength(a) {
    var tmp;
    if (isString(a)) {
      var tmp0_unsafeCast_0 = a.length;
      tmp = tmp0_unsafeCast_0;
    } else {
      tmp = a._get_length__0();
    }
    return tmp;
  }
  function charSequenceSubSequence(a, startIndex, endIndex) {
    var tmp;
    if (isString(a)) {
      var tmp0_unsafeCast_0 = a.substring(startIndex, endIndex);
      tmp = tmp0_unsafeCast_0;
    } else {
      tmp = a.subSequence_1(startIndex, endIndex);
    }
    return tmp;
  }
  function arrayToString(array) {
    return joinToString$default(array, ', ', '[', ']', 0, null, _no_name_provided_$factory_37(), 24, null);
  }
  function _no_name_provided__68() {
  }
  _no_name_provided__68.prototype.invoke_80 = function (it) {
    return toString_1(it);
  };
  _no_name_provided__68.prototype.invoke_81 = function (p1) {
    return this.invoke_80((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__68.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_37() {
    var i = new _no_name_provided__68();
    return function (p1) {
      return i.invoke_80(p1);
    };
  }
  function compareTo_0(a, b) {
    var tmp0_subject = typeof a;
    var tmp;
    switch (tmp0_subject) {
      case 'number':
        var tmp_0;
        if (typeof b === 'number') {
          tmp_0 = doubleCompareTo(a, b);
        } else {
          if (b instanceof Long) {
            tmp_0 = doubleCompareTo(a, b.toDouble_6());
          } else {
            {
              tmp_0 = primitiveCompareTo(a, b);
            }
          }
        }

        tmp = tmp_0;
        break;
      case 'string':
      case 'boolean':
        tmp = primitiveCompareTo(a, b);
        break;
      default:tmp = compareToDoNotIntrinsicify(a, b);
        break;
    }
    return tmp;
  }
  function doubleCompareTo(a, b) {
    var tmp;
    if (a < b) {
      tmp = -1;
    } else if (a > b) {
      tmp = 1;
    } else if (a === b) {
      var tmp_0;
      if (a !== 0) {
        tmp_0 = 0;
      } else {
        var tmp0_asDynamic_0 = 1;
        var ia = tmp0_asDynamic_0 / a;
        var tmp_1;
        var tmp1_asDynamic_0 = 1;
        if (ia === tmp1_asDynamic_0 / b) {
          tmp_1 = 0;
        } else {
          if (ia < 0) {
            tmp_1 = -1;
          } else {
            {
              tmp_1 = 1;
            }
          }
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else if (a !== a) {
      tmp = b !== b ? 0 : 1;
    } else {
      tmp = -1;
    }
    return tmp;
  }
  function primitiveCompareTo(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function compareToDoNotIntrinsicify(a, b) {
    return a.compareTo_26(b);
  }
  function construct(constructorType, resultType, args) {
    return Reflect.construct(constructorType, args, resultType);
  }
  function identityHashCode(obj) {
    return getObjectHashCode(obj);
  }
  function getObjectHashCode(obj) {
    if (!jsIn('kotlinHashCodeValue$', obj)) {
      var hash = jsBitwiseOr(Math.random() * 4.294967296E9, 0);
      var descriptor = new Object();
      descriptor.value = hash;
      descriptor.enumerable = false;
      Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
    }var tmp0_unsafeCast_0 = obj['kotlinHashCodeValue$'];
    return tmp0_unsafeCast_0;
  }
  function _get_OBJECT_HASH_CODE_PROPERTY_NAME_() {
    return OBJECT_HASH_CODE_PROPERTY_NAME;
  }
  var OBJECT_HASH_CODE_PROPERTY_NAME;
  function _get_POW_2_32_() {
    return POW_2_32;
  }
  var POW_2_32;
  function toString_1(o) {
    var tmp;
    if (o == null) {
      tmp = 'null';
    } else if (isArrayish(o)) {
      tmp = '[...]';
    } else {
      var tmp0_unsafeCast_0 = o.toString();
      tmp = tmp0_unsafeCast_0;
    }
    return tmp;
  }
  function hashCode(obj) {
    if (obj == null)
      return 0;
    var tmp0_subject = typeof obj;
    var tmp;
    switch (tmp0_subject) {
      case 'object':
        tmp = 'function' === typeof obj.hashCode ? obj.hashCode() : getObjectHashCode(obj);
        break;
      case 'function':
        tmp = getObjectHashCode(obj);
        break;
      case 'number':
        tmp = getNumberHashCode(obj);
        break;
      case 'boolean':
        var tmp_0;
        if (obj) {
          tmp_0 = 1;
        } else {
          {
            tmp_0 = 0;
          }
        }

        tmp = tmp_0;
        break;
      default:tmp = getStringHashCode(String(obj));
        break;
    }
    return tmp;
  }
  function getStringHashCode(str) {
    var hash = 0;
    var length = str.length;
    var inductionVariable = 0;
    var last_0 = length - 1 | 0;
    if (inductionVariable <= last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var code = str.charCodeAt(i);
        hash = imul(hash, 31) + code | 0;
      }
       while (!(i === last_0));
    return hash;
  }
  function anyToString(o) {
    return Object.prototype.toString.call(o);
  }
  function equals_0(obj1, obj2) {
    if (obj1 == null) {
      return obj2 == null;
    }if (obj2 == null) {
      return false;
    }if (typeof obj1 === 'object' ? typeof obj1.equals === 'function' : false) {
      return obj1.equals(obj2);
    }if (obj1 !== obj1) {
      return obj2 !== obj2;
    }if (typeof obj1 === 'number' ? typeof obj2 === 'number' : false) {
      var tmp;
      if (obj1 === obj2) {
        var tmp_0;
        if (obj1 !== 0) {
          tmp_0 = true;
        } else {
          var tmp0_asDynamic_0 = 1;
          var tmp_1 = tmp0_asDynamic_0 / obj1;
          var tmp1_asDynamic_0 = 1;
          tmp_0 = tmp_1 === tmp1_asDynamic_0 / obj2;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }return obj1 === obj2;
  }
  function boxIntrinsic(x) {
    var tmp0_error_0 = 'Should be lowered';
    throw IllegalStateException_init_$Create$_0(toString_1(tmp0_error_0));
  }
  function unboxIntrinsic(x) {
    var tmp0_error_0 = 'Should be lowered';
    throw IllegalStateException_init_$Create$_0(toString_1(tmp0_error_0));
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      instance.stack = (new Error()).stack;
    }
  }
  function newThrowable(message, cause) {
    var throwable = new Error();
    var tmp;
    if (isUndefined(message)) {
      var tmp_0;
      if (isUndefined(cause)) {
        tmp_0 = message;
      } else {
        var tmp0_safe_receiver = cause;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
        tmp_0 = tmp1_elvis_lhs == null ? undefined : tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      var tmp2_elvis_lhs = message;
      tmp = tmp2_elvis_lhs == null ? undefined : tmp2_elvis_lhs;
    }
    throwable.message = tmp;
    throwable.cause = cause;
    throwable.name = 'Throwable';
    return throwable;
  }
  function isUndefined(value) {
    return value === undefined;
  }
  function extendThrowable(this_, message, cause) {
    Error.call(this_);
    setPropertiesToThrowableInstance(this_, message, cause);
  }
  function setPropertiesToThrowableInstance(this_, message, cause) {
    if (!hasOwnPrototypeProperty(this_, 'message')) {
      var tmp;
      if (message == null) {
        var tmp_0;
        if (!(message === null)) {
          var tmp0_safe_receiver = cause;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
          tmp_0 = tmp1_elvis_lhs == null ? undefined : tmp1_elvis_lhs;
        } else {
          tmp_0 = undefined;
        }
        tmp = tmp_0;
      } else {
        tmp = message;
      }
      this_.message = tmp;
    }if (!hasOwnPrototypeProperty(this_, 'cause')) {
      this_.cause = cause;
    }this_.name = Object.getPrototypeOf(this_).constructor.name;
  }
  function hasOwnPrototypeProperty(o, name) {
    var tmp0_unsafeCast_0 = Object.getPrototypeOf(o).hasOwnProperty(name);
    return tmp0_unsafeCast_0;
  }
  function getContinuation() {
    throw Exception_init_$Create$_0('Implemented as intrinsic');
  }
  function returnIfSuspended(argument, $cont) {
    throw Exception_init_$Create$_0('Implemented as intrinsic');
  }
  function suspendCoroutineUninterceptedOrReturnJS(block, $cont) {
    return block($cont);
  }
  function getCoroutineContext($cont) {
    return $cont._get_context__4();
  }
  function ensureNotNull(v) {
    var tmp;
    if (v == null) {
      THROW_NPE();
    } else {
      tmp = v;
    }
    return tmp;
  }
  function THROW_NPE() {
    throw NullPointerException_init_$Create$();
  }
  function noWhenBranchMatchedException() {
    throw NoWhenBranchMatchedException_init_$Create$();
  }
  function THROW_CCE() {
    throw ClassCastException_init_$Create$();
  }
  function throwUninitializedPropertyAccessException(name) {
    throw UninitializedPropertyAccessException_init_$Create$_0('' + 'lateinit property ' + name + ' has not been initialized');
  }
  function throwKotlinNothingValueException() {
    throw KotlinNothingValueException_init_$Create$();
  }
  function THROW_ISE() {
    throw IllegalStateException_init_$Create$();
  }
  function THROW_IAE(msg) {
    throw IllegalArgumentException_init_$Create$_0(msg);
  }
  function emptyArray() {
    return [];
  }
  function enumValueOfIntrinsic(name) {
    throw IllegalStateException_init_$Create$_0('Should be replaced by compiler');
  }
  function enumValuesIntrinsic() {
    throw IllegalStateException_init_$Create$_0('Should be replaced by compiler');
  }
  function Companion_23() {
    Companion_instance_22 = this;
    this._MIN_VALUE_9 = new Long(0, -2147483648);
    this._MAX_VALUE_9 = new Long(-1, 2147483647);
    this._SIZE_BYTES_9 = 8;
    this._SIZE_BITS_9 = 64;
  }
  Companion_23.prototype._get_MIN_VALUE__9 = function () {
    return this._MIN_VALUE_9;
  };
  Companion_23.prototype._get_MAX_VALUE__9 = function () {
    return this._MAX_VALUE_9;
  };
  Companion_23.prototype._get_SIZE_BYTES__9 = function () {
    return this._SIZE_BYTES_9;
  };
  Companion_23.prototype._get_SIZE_BITS__9 = function () {
    return this._SIZE_BITS_9;
  };
  Companion_23.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_22;
  function Companion_getInstance_22() {
    if (Companion_instance_22 == null)
      new Companion_23();
    return Companion_instance_22;
  }
  function Long(low, high) {
    Companion_getInstance_22();
    Number_0.call(this);
    this._low = low;
    this._high = high;
  }
  Long.prototype._get_low_ = function () {
    return this._low;
  };
  Long.prototype._get_high_ = function () {
    return this._high;
  };
  Long.prototype.compareTo_54 = function (other) {
    return this.compareTo_57(toLong(other));
  };
  Long.prototype.compareTo_55 = function (other) {
    return this.compareTo_57(toLong(other));
  };
  Long.prototype.compareTo_56 = function (other) {
    return this.compareTo_57(toLong(other));
  };
  Long.prototype.compareTo_57 = function (other) {
    return compare(this, other);
  };
  Long.prototype.compareTo_26 = function (other) {
    return this.compareTo_57(other instanceof Long ? other : THROW_CCE());
  };
  Long.prototype.compareTo_58 = function (other) {
    return compareTo_0(this.toFloat_6(), other);
  };
  Long.prototype.compareTo_59 = function (other) {
    return compareTo_0(this.toDouble_6(), other);
  };
  Long.prototype.plus_35 = function (other) {
    return this.plus_38(toLong(other));
  };
  Long.prototype.plus_36 = function (other) {
    return this.plus_38(toLong(other));
  };
  Long.prototype.plus_37 = function (other) {
    return this.plus_38(toLong(other));
  };
  Long.prototype.plus_38 = function (other) {
    return add(this, other);
  };
  Long.prototype.plus_39 = function (other) {
    return this.toFloat_6() + other;
  };
  Long.prototype.plus_40 = function (other) {
    return this.toDouble_6() + other;
  };
  Long.prototype.minus_31 = function (other) {
    return this.minus_34(toLong(other));
  };
  Long.prototype.minus_32 = function (other) {
    return this.minus_34(toLong(other));
  };
  Long.prototype.minus_33 = function (other) {
    return this.minus_34(toLong(other));
  };
  Long.prototype.minus_34 = function (other) {
    return subtract(this, other);
  };
  Long.prototype.minus_35 = function (other) {
    return this.toFloat_6() - other;
  };
  Long.prototype.minus_36 = function (other) {
    return this.toDouble_6() - other;
  };
  Long.prototype.times_29 = function (other) {
    return this.times_32(toLong(other));
  };
  Long.prototype.times_30 = function (other) {
    return this.times_32(toLong(other));
  };
  Long.prototype.times_31 = function (other) {
    return this.times_32(toLong(other));
  };
  Long.prototype.times_32 = function (other) {
    return multiply(this, other);
  };
  Long.prototype.times_33 = function (other) {
    return this.toFloat_6() * other;
  };
  Long.prototype.times_34 = function (other) {
    return this.toDouble_6() * other;
  };
  Long.prototype.div_29 = function (other) {
    return this.div_32(toLong(other));
  };
  Long.prototype.div_30 = function (other) {
    return this.div_32(toLong(other));
  };
  Long.prototype.div_31 = function (other) {
    return this.div_32(toLong(other));
  };
  Long.prototype.div_32 = function (other) {
    return divide(this, other);
  };
  Long.prototype.div_33 = function (other) {
    return this.toFloat_6() / other;
  };
  Long.prototype.div_34 = function (other) {
    return this.toDouble_6() / other;
  };
  Long.prototype.rem_29 = function (other) {
    return this.rem_32(toLong(other));
  };
  Long.prototype.rem_30 = function (other) {
    return this.rem_32(toLong(other));
  };
  Long.prototype.rem_31 = function (other) {
    return this.rem_32(toLong(other));
  };
  Long.prototype.rem_32 = function (other) {
    return modulo(this, other);
  };
  Long.prototype.rem_33 = function (other) {
    return this.toFloat_6() % other;
  };
  Long.prototype.rem_34 = function (other) {
    return this.toDouble_6() % other;
  };
  Long.prototype.inc_5 = function () {
    return this.plus_38(new Long(1, 0));
  };
  Long.prototype.dec_5 = function () {
    return this.minus_34(new Long(1, 0));
  };
  Long.prototype.unaryPlus_4 = function () {
    return this;
  };
  Long.prototype.unaryMinus_4 = function () {
    return this.inv_0().plus_38(new Long(1, 0));
  };
  Long.prototype.rangeTo_12 = function (other) {
    return this.rangeTo_15(toLong(other));
  };
  Long.prototype.rangeTo_13 = function (other) {
    return this.rangeTo_15(toLong(other));
  };
  Long.prototype.rangeTo_14 = function (other) {
    return this.rangeTo_15(toLong(other));
  };
  Long.prototype.rangeTo_15 = function (other) {
    return new LongRange(this, other);
  };
  Long.prototype.shl_0 = function (bitCount) {
    return shiftLeft(this, bitCount);
  };
  Long.prototype.shr_0 = function (bitCount) {
    return shiftRight(this, bitCount);
  };
  Long.prototype.ushr_0 = function (bitCount) {
    return shiftRightUnsigned(this, bitCount);
  };
  Long.prototype.and = function (other) {
    return new Long(this._low & other._low, this._high & other._high);
  };
  Long.prototype.or = function (other) {
    return new Long(this._low | other._low, this._high | other._high);
  };
  Long.prototype.xor = function (other) {
    return new Long(this._low ^ other._low, this._high ^ other._high);
  };
  Long.prototype.inv_0 = function () {
    return new Long(~this._low, ~this._high);
  };
  Long.prototype.toByte_6 = function () {
    return toByte(this._low);
  };
  Long.prototype.toChar_6 = function () {
    return numberToChar(this._low);
  };
  Long.prototype.toShort_6 = function () {
    return toShort(this._low);
  };
  Long.prototype.toInt_6 = function () {
    return this._low;
  };
  Long.prototype.toLong_6 = function () {
    return this;
  };
  Long.prototype.toFloat_6 = function () {
    return this.toDouble_6();
  };
  Long.prototype.toDouble_6 = function () {
    return toNumber(this);
  };
  Long.prototype.valueOf = function () {
    return this.toDouble_6();
  };
  Long.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Long) {
      tmp = equalsLong(this, other);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  Long.prototype.hashCode = function () {
    return hashCode_0(this);
  };
  Long.prototype.toString = function () {
    return toStringImpl(this, 10);
  };
  Long.$metadata$ = {
    simpleName: 'Long',
    kind: 'class',
    interfaces: [Comparable]
  };
  function _get_ZERO_() {
    return ZERO;
  }
  var ZERO;
  function _get_ONE_() {
    return ONE;
  }
  var ONE;
  function _get_NEG_ONE_() {
    return NEG_ONE;
  }
  var NEG_ONE;
  function _get_MAX_VALUE_() {
    return MAX_VALUE;
  }
  var MAX_VALUE;
  function _get_MIN_VALUE_() {
    return MIN_VALUE;
  }
  var MIN_VALUE;
  function _get_TWO_PWR_24__() {
    return TWO_PWR_24_;
  }
  var TWO_PWR_24_;
  function compare(_this_, other) {
    if (equalsLong(_this_, other)) {
      return 0;
    }var thisNeg = isNegative(_this_);
    var otherNeg = isNegative(other);
    return (thisNeg ? !otherNeg : false) ? -1 : (!thisNeg ? otherNeg : false) ? 1 : isNegative(subtract(_this_, other)) ? -1 : 1;
  }
  function add(_this_, other) {
    var a48 = _this_._high >>> 16;
    var a32 = _this_._high & 65535;
    var a16 = _this_._low >>> 16;
    var a00 = _this_._low & 65535;
    var b48 = other._high >>> 16;
    var b32 = other._high & 65535;
    var b16 = other._low >>> 16;
    var b00 = other._low & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + (a00 + b00 | 0) | 0;
    c16 = c16 + (c00 >>> 16) | 0;
    c00 = c00 & 65535;
    c16 = c16 + (a16 + b16 | 0) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c32 = c32 + (a32 + b32 | 0) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (a48 + b48 | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function subtract(_this_, other) {
    return add(_this_, other.unaryMinus_4());
  }
  function multiply(_this_, other) {
    if (isZero(_this_)) {
      return ZERO;
    } else if (isZero(other)) {
      return ZERO;
    }if (equalsLong(_this_, MIN_VALUE)) {
      return isOdd(other) ? MIN_VALUE : ZERO;
    } else if (equalsLong(other, MIN_VALUE)) {
      return isOdd(_this_) ? MIN_VALUE : ZERO;
    }if (isNegative(_this_)) {
      var tmp;
      if (isNegative(other)) {
        tmp = multiply(negate(_this_), negate(other));
      } else {
        tmp = negate(multiply(negate(_this_), other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(multiply(_this_, negate(other)));
    }if (lessThan(_this_, TWO_PWR_24_) ? lessThan(other, TWO_PWR_24_) : false) {
      return fromNumber(toNumber(_this_) * toNumber(other));
    }var a48 = _this_._high >>> 16;
    var a32 = _this_._high & 65535;
    var a16 = _this_._low >>> 16;
    var a00 = _this_._low & 65535;
    var b48 = other._high >>> 16;
    var b32 = other._high & 65535;
    var b16 = other._low >>> 16;
    var b00 = other._low & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + imul(a00, b00) | 0;
    c16 = c16 + (c00 >>> 16) | 0;
    c00 = c00 & 65535;
    c16 = c16 + imul(a16, b00) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c16 = c16 + imul(a00, b16) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c32 = c32 + imul(a32, b00) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a16, b16) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a00, b32) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (((imul(a48, b00) + imul(a32, b16) | 0) + imul(a16, b32) | 0) + imul(a00, b48) | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function divide(_this_, other) {
    if (isZero(other)) {
      throw Exception_init_$Create$_0('division by zero');
    } else if (isZero(_this_)) {
      return ZERO;
    }if (equalsLong(_this_, MIN_VALUE)) {
      if (equalsLong(other, ONE) ? true : equalsLong(other, NEG_ONE)) {
        return MIN_VALUE;
      } else if (equalsLong(other, MIN_VALUE)) {
        return ONE;
      } else {
        var halfThis = shiftRight(_this_, 1);
        var approx = shiftLeft(halfThis.div_32(other), 1);
        if (equalsLong(approx, ZERO)) {
          return isNegative(other) ? ONE : NEG_ONE;
        } else {
          var rem = subtract(_this_, multiply(other, approx));
          return add(approx, rem.div_32(other));
        }
      }
    } else if (equalsLong(other, MIN_VALUE)) {
      return ZERO;
    }if (isNegative(_this_)) {
      var tmp;
      if (isNegative(other)) {
        tmp = negate(_this_).div_32(negate(other));
      } else {
        tmp = negate(negate(_this_).div_32(other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(_this_.div_32(negate(other)));
    }var res = ZERO;
    var rem_0 = _this_;
    while (greaterThanOrEqual(rem_0, other)) {
      var approxDouble = toNumber(rem_0) / toNumber(other);
      var approx2 = Math.max(1.0, Math.floor(approxDouble));
      var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
      var delta = log2 <= 48.0 ? 1.0 : Math.pow(2, log2 - 48);
      var approxRes = fromNumber(approx2);
      var approxRem = multiply(approxRes, other);
      while (isNegative(approxRem) ? true : greaterThan(approxRem, rem_0)) {
        approx2 = approx2 - delta;
        approxRes = fromNumber(approx2);
        approxRem = multiply(approxRes, other);
      }
      if (isZero(approxRes)) {
        approxRes = ONE;
      }res = add(res, approxRes);
      rem_0 = subtract(rem_0, approxRem);
    }
    return res;
  }
  function modulo(_this_, other) {
    return subtract(_this_, multiply(_this_.div_32(other), other));
  }
  function shiftLeft(_this_, numBits) {
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this_;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this_._low << numBits_0, _this_._high << numBits_0 | _this_._low >>> (32 - numBits_0 | 0));
      } else {
        return new Long(0, _this_._low << (numBits_0 - 32 | 0));
      }
    }
  }
  function shiftRight(_this_, numBits) {
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this_;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this_._low >>> numBits_0 | _this_._high << (32 - numBits_0 | 0), _this_._high >> numBits_0);
      } else {
        return new Long(_this_._high >> (numBits_0 - 32 | 0), _this_._high >= 0 ? 0 : -1);
      }
    }
  }
  function shiftRightUnsigned(_this_, numBits) {
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this_;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this_._low >>> numBits_0 | _this_._high << (32 - numBits_0 | 0), _this_._high >>> numBits_0);
      } else {
        var tmp;
        if (numBits_0 === 32) {
          tmp = new Long(_this_._high, 0);
        } else {
          tmp = new Long(_this_._high >>> (numBits_0 - 32 | 0), 0);
        }
        return tmp;
      }
    }
  }
  function toNumber(_this_) {
    return _this_._high * 4.294967296E9 + getLowBitsUnsigned(_this_);
  }
  function equalsLong(_this_, other) {
    return _this_._high === other._high ? _this_._low === other._low : false;
  }
  function hashCode_0(l) {
    return l._low ^ l._high;
  }
  function toStringImpl(_this_, radix) {
    if (radix < 2 ? true : 36 < radix) {
      throw Exception_init_$Create$_0('' + 'radix out of range: ' + radix);
    }if (isZero(_this_)) {
      return '0';
    }if (isNegative(_this_)) {
      if (equalsLong(_this_, MIN_VALUE)) {
        var radixLong = fromInt(radix);
        var div = _this_.div_32(radixLong);
        var rem = subtract(multiply(div, radixLong), _this_).toInt_6();
        var tmp = toStringImpl(div, radix);
        var tmp0_unsafeCast_0 = rem.toString(radix);
        return tmp + tmp0_unsafeCast_0;
      } else {
        return '' + '-' + toStringImpl(negate(_this_), radix);
      }
    }var radixToPower = fromNumber(Math.pow(radix, 6.0));
    var rem_0 = _this_;
    var result = '';
    while (true) {
      var remDiv = rem_0.div_32(radixToPower);
      var intval = subtract(rem_0, multiply(remDiv, radixToPower)).toInt_6();
      var tmp1_unsafeCast_0 = intval.toString(radix);
      var digits = tmp1_unsafeCast_0;
      rem_0 = remDiv;
      if (isZero(rem_0)) {
        return digits + result;
      } else {
        while (digits.length < 6) {
          digits = '0' + digits;
        }
        result = digits + result;
      }
    }
  }
  function fromInt(value) {
    return new Long(value, value < 0 ? -1 : 0);
  }
  function isNegative(_this_) {
    return _this_._high < 0;
  }
  function isZero(_this_) {
    return _this_._high === 0 ? _this_._low === 0 : false;
  }
  function isOdd(_this_) {
    return (_this_._low & 1) === 1;
  }
  function negate(_this_) {
    return _this_.unaryMinus_4();
  }
  function lessThan(_this_, other) {
    return compare(_this_, other) < 0;
  }
  function fromNumber(value) {
    if (isNaN_0(value)) {
      return ZERO;
    } else if (value <= -9.223372036854776E18) {
      return MIN_VALUE;
    } else if (value + 1 >= 9.223372036854776E18) {
      return MAX_VALUE;
    } else if (value < 0.0) {
      return negate(fromNumber(-value));
    } else {
      var twoPwr32 = 4.294967296E9;
      return new Long(jsBitwiseOr(value % twoPwr32, 0), jsBitwiseOr(value / twoPwr32, 0));
    }
  }
  function greaterThan(_this_, other) {
    return compare(_this_, other) > 0;
  }
  function greaterThanOrEqual(_this_, other) {
    return compare(_this_, other) >= 0;
  }
  function getLowBitsUnsigned(_this_) {
    return _this_._low >= 0 ? _this_._low : 4.294967296E9 + _this_._low;
  }
  function _get_TWO_PWR_32_DBL__() {
    return TWO_PWR_32_DBL_;
  }
  var TWO_PWR_32_DBL_;
  function _get_TWO_PWR_63_DBL__() {
    return TWO_PWR_63_DBL_;
  }
  var TWO_PWR_63_DBL_;
  function imul(a_local, b_local) {
    var lhs = jsBitwiseAnd(a_local, 4.29490176E9) * jsBitwiseAnd(b_local, 65535);
    var rhs = jsBitwiseAnd(a_local, 65535) * b_local;
    return jsBitwiseOr(lhs + rhs, 0);
  }
  function withType(type, array) {
    array.$type$ = type;
    return array;
  }
  function arrayConcat(args) {
    var len = args.length;
    var tmp0_unsafeCast_0 = Array(len);
    var typed = tmp0_unsafeCast_0;
    var inductionVariable = 0;
    var last_0 = len - 1 | 0;
    if (inductionVariable <= last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var arr = args[i];
        if (!(!(arr == null) ? isArray(arr) : false)) {
          typed[i] = [].slice.call(arr);
        } else {
          {
            typed[i] = arr;
          }
        }
      }
       while (!(i === last_0));
    return [].concat.apply([], typed);
  }
  function primitiveArrayConcat(args) {
    var size_local = 0;
    var inductionVariable = 0;
    var last_0 = args.length - 1 | 0;
    if (inductionVariable <= last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = size_local;
        var tmp0_unsafeCast_0 = args[i];
        size_local = tmp + tmp0_unsafeCast_0.length | 0;
      }
       while (!(i === last_0));
    var a = args[0];
    var tmp1_unsafeCast_0 = new a.constructor(size_local);
    var result = tmp1_unsafeCast_0;
    if (a.$type$ != null) {
      var tmp2_withType_0 = a.$type$;
      result.$type$ = tmp2_withType_0;
    } else {
    }
    size_local = 0;
    var inductionVariable_0 = 0;
    var last_1 = args.length - 1 | 0;
    if (inductionVariable_0 <= last_1)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp3_unsafeCast_0 = args[i_0];
        var arr = tmp3_unsafeCast_0;
        var inductionVariable_1 = 0;
        var last_2 = arr.length - 1 | 0;
        if (inductionVariable_1 <= last_2)
          do {
            var j = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var tmp3 = size_local;
            size_local = tmp3 + 1 | 0;
            result[tmp3] = arr[j];
          }
           while (!(j === last_2));
      }
       while (!(i_0 === last_1));
    return result;
  }
  function taggedArrayCopy(array) {
    var res = array.slice();
    res.$type$ = array.$type$;
    return res;
  }
  function numberToByte(a) {
    return toByte(numberToInt(a));
  }
  function toByte(a) {
    var tmp0_unsafeCast_0 = a << 24 >> 24;
    return tmp0_unsafeCast_0;
  }
  function numberToInt(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = a.toInt_6();
    } else {
      {
        tmp = doubleToInt(a);
      }
    }
    return tmp;
  }
  function doubleToInt(a) {
    return a > 2.147483647E9 ? 2147483647 : a < -2.147483648E9 ? -2147483648 : jsBitwiseOr(a, 0);
  }
  function numberToDouble(a) {
    var tmp0_unsafeCast_0 = +a;
    return tmp0_unsafeCast_0;
  }
  function numberToShort(a) {
    return toShort(numberToInt(a));
  }
  function toShort(a) {
    var tmp0_unsafeCast_0 = a << 16 >> 16;
    return tmp0_unsafeCast_0;
  }
  function numberToLong(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = a;
    } else {
      {
        tmp = fromNumber(a);
      }
    }
    return tmp;
  }
  function numberToChar(a) {
    var tmp0_Char_0 = numberToInt(a) & 65535;
    var tmp;
    var tmp0__get_code__0_1 = new Char_0(0);
    if (tmp0_Char_0 < tmp0__get_code__0_1.toInt_6()) {
      tmp = true;
    } else {
      {
        var tmp1__get_code__0_2 = new Char_0(65535);
        tmp = tmp0_Char_0 > tmp1__get_code__0_2.toInt_6();
      }
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$_0('' + 'Invalid Char code: ' + tmp0_Char_0);
    } else {
    }
    return new Char_0(_UShort___init__impl_(toShort(tmp0_Char_0)));
  }
  function toLong(a) {
    return fromInt(a);
  }
  function numberRangeToNumber(start, endInclusive) {
    return new IntRange(start, endInclusive);
  }
  function numberRangeToLong(start, endInclusive) {
    return new LongRange(numberToLong(start), endInclusive);
  }
  function _get_propertyRefClassMetadataCache_() {
    return propertyRefClassMetadataCache;
  }
  var propertyRefClassMetadataCache;
  function metadataObject() {
    return {kind: 'class', interfaces: []};
  }
  function getPropertyCallableRef(name, paramCount, type, getter, setter) {
    getter.get = getter;
    getter.set = setter;
    getter.callableName = name;
    var tmp0_unsafeCast_0 = getPropertyRefClass(getter, getKPropMetadata(paramCount, setter, type));
    return tmp0_unsafeCast_0;
  }
  function getPropertyRefClass(obj, metadata) {
    obj.$metadata$ = metadata;
    obj.constructor = obj;
    return obj;
  }
  function getKPropMetadata(paramCount, setter, type) {
    var mdata = propertyRefClassMetadataCache[paramCount][setter == null ? 0 : 1];
    if (mdata.interfaces.length == 0) {
      mdata.interfaces.push(type);
    }return mdata;
  }
  function getLocalDelegateReference(name, type, mutable, lambda) {
    return getPropertyCallableRef(name, 0, type, lambda, mutable ? lambda : null);
  }
  function propertyRefClassMetadataCache$init$() {
    var tmp = {kind: 'class', interfaces: []};
    var tmp0_arrayOf_0 = [tmp, {kind: 'class', interfaces: []}];
    var tmp_0 = tmp0_arrayOf_0;
    var tmp_1 = {kind: 'class', interfaces: []};
    var tmp1_arrayOf_0 = [tmp_1, {kind: 'class', interfaces: []}];
    var tmp_2 = tmp1_arrayOf_0;
    var tmp_3 = {kind: 'class', interfaces: []};
    var tmp2_arrayOf_0 = [tmp_3, {kind: 'class', interfaces: []}];
    var tmp3_arrayOf_0 = [tmp_0, tmp_2, tmp2_arrayOf_0];
    return tmp3_arrayOf_0;
  }
  function isArrayish(o) {
    var tmp;
    if (isJsArray(o)) {
      tmp = true;
    } else {
      var tmp0_unsafeCast_0 = ArrayBuffer.isView(o);
      tmp = tmp0_unsafeCast_0;
    }
    return tmp;
  }
  function isJsArray(obj) {
    var tmp0_unsafeCast_0 = Array.isArray(obj);
    return tmp0_unsafeCast_0;
  }
  function isInterface(obj, iface) {
    var tmp0_elvis_lhs = obj.constructor;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var ctor = tmp;
    return isInterfaceImpl(ctor, iface);
  }
  function isInterfaceImpl(ctor, iface) {
    if (ctor === iface)
      return true;
    var metadata = ctor.$metadata$;
    if (!(metadata == null)) {
      var interfaces = metadata.interfaces;
      var indexedObject = interfaces;
      var inductionVariable = 0;
      var last_0 = indexedObject.length;
      while (inductionVariable < last_0) {
        var i = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (isInterfaceImpl(i, iface)) {
          return true;
        }}
    }var superPrototype = !(ctor.prototype == null) ? Object.getPrototypeOf(ctor.prototype) : null;
    var superConstructor = superPrototype != null ? superPrototype.constructor : null;
    return !(superConstructor == null) ? isInterfaceImpl(superConstructor, iface) : false;
  }
  function isArray(obj) {
    var tmp;
    if (isJsArray(obj)) {
      tmp = !obj.$type$;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isObject(obj) {
    var objTypeOf = typeof obj;
    var tmp0_subject = objTypeOf;
    switch (tmp0_subject) {
      case 'string':
        return true;
      case 'number':
        return true;
      case 'boolean':
        return true;
      case 'function':
        return true;
      default:return jsInstanceOf(obj, Object);
    }
  }
  function isSuspendFunction(obj, arity) {
    if (typeof obj === 'function') {
      var tmp0_unsafeCast_0 = obj.$arity;
      return tmp0_unsafeCast_0 === arity;
    }return false;
  }
  function isNumber(a) {
    var tmp;
    if (typeof a === 'number') {
      tmp = true;
    } else {
      tmp = a instanceof Long;
    }
    return tmp;
  }
  function isComparable(value) {
    var type = typeof value;
    return ((type === 'string' ? true : type === 'boolean') ? true : isNumber(value)) ? true : isInterface(value, _get_js_(getKClass_0(Comparable)));
  }
  function isCharSequence(value) {
    return typeof value === 'string' ? true : isInterface(value, _get_js_(getKClass_0(CharSequence)));
  }
  function isBooleanArray(a) {
    return isJsArray(a) ? a.$type$ === 'BooleanArray' : false;
  }
  function isByteArray(a) {
    return jsInstanceOf(a, Int8Array);
  }
  function isShortArray(a) {
    return jsInstanceOf(a, Int16Array);
  }
  function isCharArray(a) {
    return isJsArray(a) ? a.$type$ === 'CharArray' : false;
  }
  function isIntArray(a) {
    return jsInstanceOf(a, Int32Array);
  }
  function isFloatArray(a) {
    return jsInstanceOf(a, Float32Array);
  }
  function isLongArray(a) {
    return isJsArray(a) ? a.$type$ === 'LongArray' : false;
  }
  function isDoubleArray(a) {
    return jsInstanceOf(a, Float64Array);
  }
  function jsIsType(obj, jsClass_0) {
    if (jsClass_0 === Object) {
      return isObject(obj);
    }if ((obj == null ? true : jsClass_0 == null) ? true : !(typeof obj === 'object') ? !(typeof obj === 'function') : false) {
      return false;
    }if (typeof jsClass_0 === 'function' ? jsInstanceOf(obj, jsClass_0) : false) {
      return true;
    }var proto = jsGetPrototypeOf(jsClass_0);
    var tmp0_safe_receiver = proto;
    var constructor = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.constructor;
    if (constructor != null ? jsIn('$metadata$', constructor) : false) {
      var metadata = constructor.$metadata$;
      if (metadata.kind === 'object') {
        return obj === jsClass_0;
      }}var klassMetadata = jsClass_0.$metadata$;
    if (klassMetadata == null) {
      return jsInstanceOf(obj, jsClass_0);
    }if (klassMetadata.kind === 'interface' ? obj.constructor != null : false) {
      return isInterfaceImpl(obj.constructor, jsClass_0);
    }return false;
  }
  function jsGetPrototypeOf(jsClass_0) {
    return Object.getPrototypeOf(jsClass_0);
  }
  function copyOf(_this_) {
    return _this_.slice();
  }
  function plus_1(_this_, elements) {
    return _this_.concat(elements);
  }
  function copyOfRange(_this_, fromIndex, toIndex) {
    Companion_getInstance().checkRangeIndexes(fromIndex, toIndex, _this_.length);
    return _this_.slice(fromIndex, toIndex);
  }
  function asList_0(_this_) {
    return new ArrayList(_this_);
  }
  function minOf(a, b) {
    return function () {
      var $externalVarargReceiverTmp = Math;
      return $externalVarargReceiverTmp.min.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Int32Array([a, b]))));
    }.call(this);
  }
  function _get_resultContinuation_($this) {
    return $this._resultContinuation;
  }
  function _get__context_($this) {
    return $this.__context;
  }
  function _set_intercepted__($this, _set___) {
    $this._intercepted_ = _set___;
  }
  function _get_intercepted__($this) {
    return $this._intercepted_;
  }
  function releaseIntercepted($this) {
    var intercepted = $this._intercepted_;
    if (!(intercepted == null) ? !(intercepted === $this) : false) {
      ensureNotNull($this._get_context__4().get_10(Key_getInstance())).releaseInterceptedContinuation(intercepted);
    }$this._intercepted_ = CompletedContinuation_getInstance();
  }
  function CoroutineImpl_0(resultContinuation) {
    this._resultContinuation = resultContinuation;
    this._state_0 = 0;
    this._exceptionState = 0;
    this._result = null;
    this._exception_0 = null;
    this._finallyPath = null;
    var tmp = this;
    var tmp0_safe_receiver = this._resultContinuation;
    tmp.__context = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_context__4();
    this._intercepted_ = null;
  }
  CoroutineImpl_0.prototype._set_state__0 = function (_set___) {
    this._state_0 = _set___;
  };
  CoroutineImpl_0.prototype._get_state__0 = function () {
    return this._state_0;
  };
  CoroutineImpl_0.prototype._set_exceptionState_ = function (_set___) {
    this._exceptionState = _set___;
  };
  CoroutineImpl_0.prototype._get_exceptionState_ = function () {
    return this._exceptionState;
  };
  CoroutineImpl_0.prototype._set_result_ = function (_set___) {
    this._result = _set___;
  };
  CoroutineImpl_0.prototype._get_result_ = function () {
    return this._result;
  };
  CoroutineImpl_0.prototype._set_exception_ = function (_set___) {
    this._exception_0 = _set___;
  };
  CoroutineImpl_0.prototype._get_exception__0 = function () {
    return this._exception_0;
  };
  CoroutineImpl_0.prototype._set_finallyPath_ = function (_set___) {
    this._finallyPath = _set___;
  };
  CoroutineImpl_0.prototype._get_finallyPath_ = function () {
    return this._finallyPath;
  };
  CoroutineImpl_0.prototype._get_context__4 = function () {
    return ensureNotNull(this.__context);
  };
  CoroutineImpl_0.prototype.intercepted = function () {
    var tmp2_elvis_lhs = this._intercepted_;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp0_safe_receiver = this._get_context__4().get_10(Key_getInstance());
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.interceptContinuation(this);
      var tmp0_also_0 = tmp1_elvis_lhs == null ? this : tmp1_elvis_lhs;
      this._intercepted_ = tmp0_also_0;
      tmp = tmp0_also_0;
    } else {
      tmp = tmp2_elvis_lhs;
    }
    return tmp;
  };
  CoroutineImpl_0.prototype.resumeWith_5 = function (result) {
    var current = this;
    var tmp;
    if (_Result___get_isFailure__impl_(result)) {
      tmp = null;
    } else {
      var tmp_0 = _Result___get_value__impl_(result);
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    }
    var currentResult = tmp;
    var currentException = Result__exceptionOrNull_impl(result);
    while (true) {
      var tmp0_with_0 = current;
      if (currentException == null) {
        tmp0_with_0._result = currentResult;
      } else {
        tmp0_with_0._state_0 = tmp0_with_0._exceptionState;
        tmp0_with_0._exception_0 = currentException;
      }
      try {
        var outcome_2 = tmp0_with_0.doResume();
        if (outcome_2 === _get_COROUTINE_SUSPENDED_())
          return Unit_getInstance();
        currentResult = outcome_2;
        currentException = null;
      } catch ($p) {
        currentResult = null;
        currentException = $p;
      }
      releaseIntercepted(tmp0_with_0);
      var completion_4 = ensureNotNull(tmp0_with_0._resultContinuation);
      if (completion_4 instanceof CoroutineImpl_0) {
        current = completion_4;
      } else {
        {
          if (!(currentException == null)) {
            var tmp0_resumeWithException_0_5 = ensureNotNull(currentException);
            var tmp0_failure_0_1_6 = Companion_getInstance_4();
            completion_4.resumeWith_6(_Result___init__impl_(createFailure(tmp0_resumeWithException_0_5)));
          } else {
            var tmp1_resume_0_7 = currentResult;
            var tmp0_success_0_1_8 = Companion_getInstance_4();
            completion_4.resumeWith_6(_Result___init__impl_(tmp1_resume_0_7));
          }
          return Unit_getInstance();
        }
      }
    }
  };
  CoroutineImpl_0.prototype.resumeWith_6 = function (result) {
    return this.resumeWith_5(result);
  };
  CoroutineImpl_0.prototype.create = function (completion) {
    throw UnsupportedOperationException_init_$Create$_0('create(Continuation) has not been overridden');
  };
  CoroutineImpl_0.prototype.create_0 = function (value, completion) {
    throw UnsupportedOperationException_init_$Create$_0('create(Any?;Continuation) has not been overridden');
  };
  CoroutineImpl_0.$metadata$ = {
    simpleName: 'CoroutineImpl',
    kind: 'class',
    interfaces: [Continuation]
  };
  function CompletedContinuation() {
    CompletedContinuation_instance = this;
  }
  CompletedContinuation.prototype._get_context__4 = function () {
    var tmp0_error_0 = 'This continuation is already complete';
    throw IllegalStateException_init_$Create$_0(toString_1(tmp0_error_0));
  };
  CompletedContinuation.prototype.resumeWith_5 = function (result) {
    var tmp0_error_0 = 'This continuation is already complete';
    throw IllegalStateException_init_$Create$_0(toString_1(tmp0_error_0));
  };
  CompletedContinuation.prototype.resumeWith_6 = function (result) {
    return this.resumeWith_5(result);
  };
  CompletedContinuation.prototype.toString = function () {
    return 'This continuation is already complete';
  };
  CompletedContinuation.$metadata$ = {
    simpleName: 'CompletedContinuation',
    kind: 'object',
    interfaces: [Continuation]
  };
  var CompletedContinuation_instance;
  function CompletedContinuation_getInstance() {
    if (CompletedContinuation_instance == null)
      new CompletedContinuation();
    return CompletedContinuation_instance;
  }
  function Exception_init_$Init$($this) {
    extendThrowable($this, void 1, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$() {
    var tmp = Exception_init_$Init$(Object.create(Exception.prototype));
    captureStack(tmp, Exception_init_$Create$);
    return tmp;
  }
  function Exception_init_$Init$_0(message, $this) {
    extendThrowable($this, message, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$_0(message) {
    var tmp = Exception_init_$Init$_0(message, Object.create(Exception.prototype));
    captureStack(tmp, Exception_init_$Create$_0);
    return tmp;
  }
  function Exception_init_$Init$_1(message, cause, $this) {
    extendThrowable($this, message, cause);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$_1(message, cause) {
    var tmp = Exception_init_$Init$_1(message, cause, Object.create(Exception.prototype));
    captureStack(tmp, Exception_init_$Create$_1);
    return tmp;
  }
  function Exception_init_$Init$_2(cause, $this) {
    extendThrowable($this, void 1, cause);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$_2(cause) {
    var tmp = Exception_init_$Init$_2(cause, Object.create(Exception.prototype));
    captureStack(tmp, Exception_init_$Create$_2);
    return tmp;
  }
  function Exception() {
    captureStack(this, Exception);
  }
  Exception.$metadata$ = {
    simpleName: 'Exception',
    kind: 'class',
    interfaces: []
  };
  function Error_init_$Init$($this) {
    extendThrowable($this, void 1, void 1);
    Error_0.call($this);
    return $this;
  }
  function Error_init_$Create$() {
    var tmp = Error_init_$Init$(Object.create(Error_0.prototype));
    captureStack(tmp, Error_init_$Create$);
    return tmp;
  }
  function Error_init_$Init$_0(message, $this) {
    extendThrowable($this, message, void 1);
    Error_0.call($this);
    return $this;
  }
  function Error_init_$Create$_0(message) {
    var tmp = Error_init_$Init$_0(message, Object.create(Error_0.prototype));
    captureStack(tmp, Error_init_$Create$_0);
    return tmp;
  }
  function Error_init_$Init$_1(message, cause, $this) {
    extendThrowable($this, message, cause);
    Error_0.call($this);
    return $this;
  }
  function Error_init_$Create$_1(message, cause) {
    var tmp = Error_init_$Init$_1(message, cause, Object.create(Error_0.prototype));
    captureStack(tmp, Error_init_$Create$_1);
    return tmp;
  }
  function Error_init_$Init$_2(cause, $this) {
    extendThrowable($this, void 1, cause);
    Error_0.call($this);
    return $this;
  }
  function Error_init_$Create$_2(cause) {
    var tmp = Error_init_$Init$_2(cause, Object.create(Error_0.prototype));
    captureStack(tmp, Error_init_$Create$_2);
    return tmp;
  }
  function Error_0() {
    captureStack(this, Error_0);
  }
  Error_0.$metadata$ = {
    simpleName: 'Error',
    kind: 'class',
    interfaces: []
  };
  function IllegalArgumentException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$() {
    var tmp = IllegalArgumentException_init_$Init$(Object.create(IllegalArgumentException.prototype));
    captureStack(tmp, IllegalArgumentException_init_$Create$);
    return tmp;
  }
  function IllegalArgumentException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$_0(message) {
    var tmp = IllegalArgumentException_init_$Init$_0(message, Object.create(IllegalArgumentException.prototype));
    captureStack(tmp, IllegalArgumentException_init_$Create$_0);
    return tmp;
  }
  function IllegalArgumentException_init_$Init$_1(message, cause, $this) {
    RuntimeException_init_$Init$_1(message, cause, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$_1(message, cause) {
    var tmp = IllegalArgumentException_init_$Init$_1(message, cause, Object.create(IllegalArgumentException.prototype));
    captureStack(tmp, IllegalArgumentException_init_$Create$_1);
    return tmp;
  }
  function IllegalArgumentException_init_$Init$_2(cause, $this) {
    RuntimeException_init_$Init$_2(cause, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$_2(cause) {
    var tmp = IllegalArgumentException_init_$Init$_2(cause, Object.create(IllegalArgumentException.prototype));
    captureStack(tmp, IllegalArgumentException_init_$Create$_2);
    return tmp;
  }
  function IllegalArgumentException() {
    captureStack(this, IllegalArgumentException);
  }
  IllegalArgumentException.$metadata$ = {
    simpleName: 'IllegalArgumentException',
    kind: 'class',
    interfaces: []
  };
  function RuntimeException_init_$Init$($this) {
    Exception_init_$Init$($this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Create$() {
    var tmp = RuntimeException_init_$Init$(Object.create(RuntimeException.prototype));
    captureStack(tmp, RuntimeException_init_$Create$);
    return tmp;
  }
  function RuntimeException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Create$_0(message) {
    var tmp = RuntimeException_init_$Init$_0(message, Object.create(RuntimeException.prototype));
    captureStack(tmp, RuntimeException_init_$Create$_0);
    return tmp;
  }
  function RuntimeException_init_$Init$_1(message, cause, $this) {
    Exception_init_$Init$_1(message, cause, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Create$_1(message, cause) {
    var tmp = RuntimeException_init_$Init$_1(message, cause, Object.create(RuntimeException.prototype));
    captureStack(tmp, RuntimeException_init_$Create$_1);
    return tmp;
  }
  function RuntimeException_init_$Init$_2(cause, $this) {
    Exception_init_$Init$_2(cause, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Create$_2(cause) {
    var tmp = RuntimeException_init_$Init$_2(cause, Object.create(RuntimeException.prototype));
    captureStack(tmp, RuntimeException_init_$Create$_2);
    return tmp;
  }
  function RuntimeException() {
    captureStack(this, RuntimeException);
  }
  RuntimeException.$metadata$ = {
    simpleName: 'RuntimeException',
    kind: 'class',
    interfaces: []
  };
  function NoSuchElementException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$() {
    var tmp = NoSuchElementException_init_$Init$(Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$);
    return tmp;
  }
  function NoSuchElementException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$_0(message) {
    var tmp = NoSuchElementException_init_$Init$_0(message, Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$_0);
    return tmp;
  }
  function NoSuchElementException() {
    captureStack(this, NoSuchElementException);
  }
  NoSuchElementException.$metadata$ = {
    simpleName: 'NoSuchElementException',
    kind: 'class',
    interfaces: []
  };
  function IllegalStateException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$() {
    var tmp = IllegalStateException_init_$Init$(Object.create(IllegalStateException.prototype));
    captureStack(tmp, IllegalStateException_init_$Create$);
    return tmp;
  }
  function IllegalStateException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$_0(message) {
    var tmp = IllegalStateException_init_$Init$_0(message, Object.create(IllegalStateException.prototype));
    captureStack(tmp, IllegalStateException_init_$Create$_0);
    return tmp;
  }
  function IllegalStateException_init_$Init$_1(message, cause, $this) {
    RuntimeException_init_$Init$_1(message, cause, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$_1(message, cause) {
    var tmp = IllegalStateException_init_$Init$_1(message, cause, Object.create(IllegalStateException.prototype));
    captureStack(tmp, IllegalStateException_init_$Create$_1);
    return tmp;
  }
  function IllegalStateException_init_$Init$_2(cause, $this) {
    RuntimeException_init_$Init$_2(cause, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$_2(cause) {
    var tmp = IllegalStateException_init_$Init$_2(cause, Object.create(IllegalStateException.prototype));
    captureStack(tmp, IllegalStateException_init_$Create$_2);
    return tmp;
  }
  function IllegalStateException() {
    captureStack(this, IllegalStateException);
  }
  IllegalStateException.$metadata$ = {
    simpleName: 'IllegalStateException',
    kind: 'class',
    interfaces: []
  };
  function IndexOutOfBoundsException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$() {
    var tmp = IndexOutOfBoundsException_init_$Init$(Object.create(IndexOutOfBoundsException.prototype));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$);
    return tmp;
  }
  function IndexOutOfBoundsException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$_0(message) {
    var tmp = IndexOutOfBoundsException_init_$Init$_0(message, Object.create(IndexOutOfBoundsException.prototype));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$_0);
    return tmp;
  }
  function IndexOutOfBoundsException() {
    captureStack(this, IndexOutOfBoundsException);
  }
  IndexOutOfBoundsException.$metadata$ = {
    simpleName: 'IndexOutOfBoundsException',
    kind: 'class',
    interfaces: []
  };
  function UnsupportedOperationException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$() {
    var tmp = UnsupportedOperationException_init_$Init$(Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$);
    return tmp;
  }
  function UnsupportedOperationException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$_0(message) {
    var tmp = UnsupportedOperationException_init_$Init$_0(message, Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$_0);
    return tmp;
  }
  function UnsupportedOperationException_init_$Init$_1(message, cause, $this) {
    RuntimeException_init_$Init$_1(message, cause, $this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$_1(message, cause) {
    var tmp = UnsupportedOperationException_init_$Init$_1(message, cause, Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$_1);
    return tmp;
  }
  function UnsupportedOperationException_init_$Init$_2(cause, $this) {
    RuntimeException_init_$Init$_2(cause, $this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$_2(cause) {
    var tmp = UnsupportedOperationException_init_$Init$_2(cause, Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$_2);
    return tmp;
  }
  function UnsupportedOperationException() {
    captureStack(this, UnsupportedOperationException);
  }
  UnsupportedOperationException.$metadata$ = {
    simpleName: 'UnsupportedOperationException',
    kind: 'class',
    interfaces: []
  };
  function ArithmeticException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ArithmeticException.call($this);
    return $this;
  }
  function ArithmeticException_init_$Create$() {
    var tmp = ArithmeticException_init_$Init$(Object.create(ArithmeticException.prototype));
    captureStack(tmp, ArithmeticException_init_$Create$);
    return tmp;
  }
  function ArithmeticException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    ArithmeticException.call($this);
    return $this;
  }
  function ArithmeticException_init_$Create$_0(message) {
    var tmp = ArithmeticException_init_$Init$_0(message, Object.create(ArithmeticException.prototype));
    captureStack(tmp, ArithmeticException_init_$Create$_0);
    return tmp;
  }
  function ArithmeticException() {
    captureStack(this, ArithmeticException);
  }
  ArithmeticException.$metadata$ = {
    simpleName: 'ArithmeticException',
    kind: 'class',
    interfaces: []
  };
  function NullPointerException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NullPointerException.call($this);
    return $this;
  }
  function NullPointerException_init_$Create$() {
    var tmp = NullPointerException_init_$Init$(Object.create(NullPointerException.prototype));
    captureStack(tmp, NullPointerException_init_$Create$);
    return tmp;
  }
  function NullPointerException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    NullPointerException.call($this);
    return $this;
  }
  function NullPointerException_init_$Create$_0(message) {
    var tmp = NullPointerException_init_$Init$_0(message, Object.create(NullPointerException.prototype));
    captureStack(tmp, NullPointerException_init_$Create$_0);
    return tmp;
  }
  function NullPointerException() {
    captureStack(this, NullPointerException);
  }
  NullPointerException.$metadata$ = {
    simpleName: 'NullPointerException',
    kind: 'class',
    interfaces: []
  };
  function NoWhenBranchMatchedException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoWhenBranchMatchedException.call($this);
    return $this;
  }
  function NoWhenBranchMatchedException_init_$Create$() {
    var tmp = NoWhenBranchMatchedException_init_$Init$(Object.create(NoWhenBranchMatchedException.prototype));
    captureStack(tmp, NoWhenBranchMatchedException_init_$Create$);
    return tmp;
  }
  function NoWhenBranchMatchedException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    NoWhenBranchMatchedException.call($this);
    return $this;
  }
  function NoWhenBranchMatchedException_init_$Create$_0(message) {
    var tmp = NoWhenBranchMatchedException_init_$Init$_0(message, Object.create(NoWhenBranchMatchedException.prototype));
    captureStack(tmp, NoWhenBranchMatchedException_init_$Create$_0);
    return tmp;
  }
  function NoWhenBranchMatchedException_init_$Init$_1(message, cause, $this) {
    RuntimeException_init_$Init$_1(message, cause, $this);
    NoWhenBranchMatchedException.call($this);
    return $this;
  }
  function NoWhenBranchMatchedException_init_$Create$_1(message, cause) {
    var tmp = NoWhenBranchMatchedException_init_$Init$_1(message, cause, Object.create(NoWhenBranchMatchedException.prototype));
    captureStack(tmp, NoWhenBranchMatchedException_init_$Create$_1);
    return tmp;
  }
  function NoWhenBranchMatchedException_init_$Init$_2(cause, $this) {
    RuntimeException_init_$Init$_2(cause, $this);
    NoWhenBranchMatchedException.call($this);
    return $this;
  }
  function NoWhenBranchMatchedException_init_$Create$_2(cause) {
    var tmp = NoWhenBranchMatchedException_init_$Init$_2(cause, Object.create(NoWhenBranchMatchedException.prototype));
    captureStack(tmp, NoWhenBranchMatchedException_init_$Create$_2);
    return tmp;
  }
  function NoWhenBranchMatchedException() {
    captureStack(this, NoWhenBranchMatchedException);
  }
  NoWhenBranchMatchedException.$metadata$ = {
    simpleName: 'NoWhenBranchMatchedException',
    kind: 'class',
    interfaces: []
  };
  function ClassCastException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$() {
    var tmp = ClassCastException_init_$Init$(Object.create(ClassCastException.prototype));
    captureStack(tmp, ClassCastException_init_$Create$);
    return tmp;
  }
  function ClassCastException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$_0(message) {
    var tmp = ClassCastException_init_$Init$_0(message, Object.create(ClassCastException.prototype));
    captureStack(tmp, ClassCastException_init_$Create$_0);
    return tmp;
  }
  function ClassCastException() {
    captureStack(this, ClassCastException);
  }
  ClassCastException.$metadata$ = {
    simpleName: 'ClassCastException',
    kind: 'class',
    interfaces: []
  };
  function UninitializedPropertyAccessException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    UninitializedPropertyAccessException.call($this);
    return $this;
  }
  function UninitializedPropertyAccessException_init_$Create$() {
    var tmp = UninitializedPropertyAccessException_init_$Init$(Object.create(UninitializedPropertyAccessException.prototype));
    captureStack(tmp, UninitializedPropertyAccessException_init_$Create$);
    return tmp;
  }
  function UninitializedPropertyAccessException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UninitializedPropertyAccessException.call($this);
    return $this;
  }
  function UninitializedPropertyAccessException_init_$Create$_0(message) {
    var tmp = UninitializedPropertyAccessException_init_$Init$_0(message, Object.create(UninitializedPropertyAccessException.prototype));
    captureStack(tmp, UninitializedPropertyAccessException_init_$Create$_0);
    return tmp;
  }
  function UninitializedPropertyAccessException_init_$Init$_1(message, cause, $this) {
    RuntimeException_init_$Init$_1(message, cause, $this);
    UninitializedPropertyAccessException.call($this);
    return $this;
  }
  function UninitializedPropertyAccessException_init_$Create$_1(message, cause) {
    var tmp = UninitializedPropertyAccessException_init_$Init$_1(message, cause, Object.create(UninitializedPropertyAccessException.prototype));
    captureStack(tmp, UninitializedPropertyAccessException_init_$Create$_1);
    return tmp;
  }
  function UninitializedPropertyAccessException_init_$Init$_2(cause, $this) {
    RuntimeException_init_$Init$_2(cause, $this);
    UninitializedPropertyAccessException.call($this);
    return $this;
  }
  function UninitializedPropertyAccessException_init_$Create$_2(cause) {
    var tmp = UninitializedPropertyAccessException_init_$Init$_2(cause, Object.create(UninitializedPropertyAccessException.prototype));
    captureStack(tmp, UninitializedPropertyAccessException_init_$Create$_2);
    return tmp;
  }
  function UninitializedPropertyAccessException() {
    captureStack(this, UninitializedPropertyAccessException);
  }
  UninitializedPropertyAccessException.$metadata$ = {
    simpleName: 'UninitializedPropertyAccessException',
    kind: 'class',
    interfaces: []
  };
  function jsIn(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = lhs_hack in rhs_hack;
    return tmp0_unsafeCast_0;
  }
  function jsBitwiseOr(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = lhs_hack | rhs_hack;
    return tmp0_unsafeCast_0;
  }
  function jsTypeOf(value_hack) {
    var tmp0_unsafeCast_0 = typeof value_hack;
    return tmp0_unsafeCast_0;
  }
  function jsDeleteProperty(obj_hack, property_hack) {
    delete obj_hack[property_hack];
  }
  function jsInstanceOf(obj_hack, jsClass_hack) {
    var tmp0_unsafeCast_0 = obj_hack instanceof jsClass_hack;
    return tmp0_unsafeCast_0;
  }
  function jsBitwiseAnd(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = lhs_hack & rhs_hack;
    return tmp0_unsafeCast_0;
  }
  function fromBits(_this_, bits) {
    return doubleFromBits(bits);
  }
  function toRawBits(_this_) {
    return doubleToRawBits(_this_);
  }
  function toString_2(_this_, radix) {
    return toStringImpl(_this_, checkRadix(radix));
  }
  function _get_emptyMap_() {
    return emptyMap_0;
  }
  var emptyMap_0;
  function AttributeEnum() {
  }
  AttributeEnum.$metadata$ = {
    simpleName: 'AttributeEnum',
    kind: 'interface',
    interfaces: []
  };
  Tag.prototype.unaryPlus_53 = function (_this__0) {
    this.entity_21(_this__0);
  };
  Tag.prototype.unaryPlus_54 = function (_this__0) {
    this.text_44(_this__0);
  };
  Tag.prototype.text_44 = function (s) {
    this._get_consumer__21().onTagContent_0(s);
  };
  Tag.prototype.text_45 = function (n) {
    this.text_44(toString_1(n));
  };
  Tag.prototype.entity_21 = function (e) {
    this._get_consumer__21().onTagContentEntity_0(e);
  };
  Tag.prototype.comment_21 = function (s) {
    this._get_consumer__21().onTagComment_0(s);
  };
  function Tag() {
  }
  Tag.$metadata$ = {
    simpleName: 'Tag',
    kind: 'interface',
    interfaces: []
  };
  TagConsumer.prototype.onTagError_0 = function (tag, exception) {
    throw exception;
  };
  function TagConsumer() {
  }
  TagConsumer.$metadata$ = {
    simpleName: 'TagConsumer',
    kind: 'interface',
    interfaces: []
  };
  function HtmlTagMarker() {
  }
  HtmlTagMarker.$metadata$ = {
    simpleName: 'HtmlTagMarker',
    kind: 'class',
    interfaces: [Annotation]
  };
  Unsafe.prototype.unaryPlus_53 = function (_this__0) {
    return this.unaryPlus_54(_this__0._get_text_());
  };
  Unsafe.prototype.raw_2 = function (s) {
    this.unaryPlus_54(s);
  };
  Unsafe.prototype.raw_3 = function (entity) {
    this.unaryPlus_53(entity);
  };
  Unsafe.prototype.raw_4 = function (n) {
    this.unaryPlus_54(toString_1(n));
  };
  function Unsafe() {
  }
  Unsafe.$metadata$ = {
    simpleName: 'Unsafe',
    kind: 'interface',
    interfaces: []
  };
  function unsafe(_this_, block) {
    return _this_._get_consumer__21().onTagContentUnsafe_0(block);
  }
  function visitAndFinalize(_this_, consumer, block) {
    return visitTagAndFinalize(_this_, consumer, _no_name_provided_$factory_38(block));
  }
  function attributesMapOf(key, value) {
    var tmp0_subject = value;
    return tmp0_subject == null ? emptyMap_0 : singletonMapOf(key, value);
  }
  function visit(_this_, block) {
    return visitTag(_this_, _no_name_provided_$factory_39(block));
  }
  function singletonMapOf(key, value) {
    return new SingletonStringMap(key, value);
  }
  function SingletonStringMap(key, value) {
    this._key_0 = key;
    this._value_4 = value;
  }
  SingletonStringMap.prototype._get_key__4 = function () {
    return this._key_0;
  };
  SingletonStringMap.prototype._get_value__7 = function () {
    return this._value_4;
  };
  SingletonStringMap.prototype._get_entries__5 = function () {
    return setOf(this);
  };
  SingletonStringMap.prototype._get_keys__6 = function () {
    return setOf(this._key_0);
  };
  SingletonStringMap.prototype._get_size__42 = function () {
    return 1;
  };
  SingletonStringMap.prototype._get_values__6 = function () {
    return listOf(this._value_4);
  };
  SingletonStringMap.prototype.containsKey_9 = function (key) {
    return key === this._key_0;
  };
  SingletonStringMap.prototype.containsKey_6 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    else {
    }
    return this.containsKey_9((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  SingletonStringMap.prototype.containsValue_9 = function (value) {
    return value === this._value_4;
  };
  SingletonStringMap.prototype.containsValue_6 = function (value) {
    if (!(!(value == null) ? typeof value === 'string' : false))
      return false;
    else {
    }
    return this.containsValue_9((!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  SingletonStringMap.prototype.get_53 = function (key) {
    return key === this._key_0 ? this._value_4 : null;
  };
  SingletonStringMap.prototype.get_33 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    else {
    }
    return this.get_53((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  SingletonStringMap.prototype.isEmpty_51 = function () {
    return false;
  };
  SingletonStringMap.prototype.component1_3 = function () {
    return this._key_0;
  };
  SingletonStringMap.prototype.component2_2 = function () {
    return this._value_4;
  };
  SingletonStringMap.prototype.copy_3 = function (key, value) {
    return new SingletonStringMap(key, value);
  };
  SingletonStringMap.prototype.copy$default_3 = function (key, value, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      key = this._key_0;
    if (!(($mask0 & 2) === 0))
      value = this._value_4;
    return this.copy_3(key, value);
  };
  SingletonStringMap.prototype.toString = function () {
    return '' + 'SingletonStringMap(key=' + this._key_0 + ', value=' + this._value_4 + ')';
  };
  SingletonStringMap.prototype.hashCode = function () {
    return imul(getStringHashCode(this._key_0), 31) + getStringHashCode(this._value_4) | 0;
  };
  SingletonStringMap.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SingletonStringMap))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SingletonStringMap ? other : THROW_CCE();
    if (!(this._key_0 === tmp0_other_with_cast._key_0))
      return false;
    if (!(this._value_4 === tmp0_other_with_cast._value_4))
      return false;
    return true;
  };
  SingletonStringMap.$metadata$ = {
    simpleName: 'SingletonStringMap',
    kind: 'class',
    interfaces: [Map_0, Entry]
  };
  function attributesMapOf_0(pairs) {
    var result = null;
    var nestedLast = pairs.length - 1 | 0;
    var inductionVariable = 0;
    var last_0 = getProgressionLastElement_1(0, nestedLast, 2);
    if (inductionVariable <= last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 2 | 0;
        var k = pairs[i];
        var v = pairs[i + 1 | 0];
        if (!(k == null) ? !(v == null) : false) {
          if (result == null) {
            result = LinkedHashMap_init_$Create$();
          }result.put_5(k, v);
          Unit_getInstance();
        }}
       while (!(i === last_0));
    var tmp1_elvis_lhs = result;
    return tmp1_elvis_lhs == null ? emptyMap_0 : tmp1_elvis_lhs;
  }
  function _get_sb_($this) {
    return $this._sb;
  }
  function DefaultUnsafe() {
    this._sb = StringBuilder_init_$Create$_1();
  }
  DefaultUnsafe.prototype.unaryPlus_54 = function (_this__0) {
    this._sb.append_10(_this__0);
    Unit_getInstance();
  };
  DefaultUnsafe.prototype.toString = function () {
    return this._sb.toString();
  };
  DefaultUnsafe.$metadata$ = {
    simpleName: 'DefaultUnsafe',
    kind: 'class',
    interfaces: [Unsafe]
  };
  function _no_name_provided__69($block) {
    this._$block = $block;
  }
  _no_name_provided__69.prototype.invoke_84 = function (_this__0) {
    this._$block(_this__0);
  };
  _no_name_provided__69.prototype.invoke_81 = function (p1) {
    this.invoke_84((!(p1 == null) ? isInterface(p1, Tag) : false) ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__69.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__70($block) {
    this._$block_0 = $block;
  }
  _no_name_provided__70.prototype.invoke_84 = function (_this__0) {
    this._$block_0(_this__0);
  };
  _no_name_provided__70.prototype.invoke_81 = function (p1) {
    this.invoke_84((!(p1 == null) ? isInterface(p1, Tag) : false) ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__70.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_38($block) {
    var i = new _no_name_provided__69($block);
    return function (p1) {
      i.invoke_84(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_39($block) {
    var i = new _no_name_provided__70($block);
    return function (p1) {
      i.invoke_84(p1);
      return Unit_getInstance();
    };
  }
  function Attribute(encoder) {
    this._encoder = encoder;
  }
  Attribute.prototype._get_encoder__4 = function () {
    return this._encoder;
  };
  Attribute.prototype.get_52 = function (thisRef, attributeName) {
    var tmp0_safe_receiver = thisRef._get_attributes__21().get_33(attributeName);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = this._encoder.decode_4(attributeName, tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this._encoder.empty_4(attributeName, thisRef) : tmp1_elvis_lhs;
  };
  Attribute.prototype.set_26 = function (thisRef, attributeName, value) {
    thisRef._get_attributes__21().put_5(attributeName, this._encoder.encode_8(attributeName, value));
    Unit_getInstance();
  };
  Attribute.$metadata$ = {
    simpleName: 'Attribute',
    kind: 'class',
    interfaces: []
  };
  function StringAttribute() {
    Attribute.call(this, StringEncoder_getInstance());
  }
  StringAttribute.$metadata$ = {
    simpleName: 'StringAttribute',
    kind: 'class',
    interfaces: []
  };
  function StringSetAttribute() {
    Attribute.call(this, StringSetEncoder_getInstance());
  }
  StringSetAttribute.$metadata$ = {
    simpleName: 'StringSetAttribute',
    kind: 'class',
    interfaces: []
  };
  function BooleanAttribute_init_$Init$(trueValue, falseValue, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      trueValue = 'true';
    if (!(($mask0 & 2) === 0))
      falseValue = 'false';
    BooleanAttribute.call($this, trueValue, falseValue);
    return $this;
  }
  function BooleanAttribute_init_$Create$(trueValue, falseValue, $mask0, $marker) {
    return BooleanAttribute_init_$Init$(trueValue, falseValue, $mask0, $marker, Object.create(BooleanAttribute.prototype));
  }
  function BooleanAttribute(trueValue, falseValue) {
    Attribute.call(this, new BooleanEncoder(trueValue, falseValue));
  }
  BooleanAttribute.$metadata$ = {
    simpleName: 'BooleanAttribute',
    kind: 'class',
    interfaces: []
  };
  function TickerAttribute() {
    Attribute.call(this, TickerEncoder_getInstance());
  }
  TickerAttribute.prototype.set_24 = function (thisRef, attributeName, value) {
    if (value) {
      thisRef._get_attributes__21().put_5(attributeName, attributeName);
      Unit_getInstance();
    } else {
      thisRef._get_attributes__21().remove_28(attributeName);
      Unit_getInstance();
    }
  };
  TickerAttribute.prototype.set_26 = function (thisRef, attributeName, value) {
    return this.set_24(thisRef, attributeName, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  TickerAttribute.$metadata$ = {
    simpleName: 'TickerAttribute',
    kind: 'class',
    interfaces: []
  };
  function EnumAttribute(values_27) {
    Attribute.call(this, new EnumEncoder(values_27));
    this._values_1 = values_27;
  }
  EnumAttribute.prototype._get_values__6 = function () {
    return this._values_1;
  };
  EnumAttribute.$metadata$ = {
    simpleName: 'EnumAttribute',
    kind: 'class',
    interfaces: []
  };
  AttributeEncoder.prototype.empty_4 = function (attributeName, tag) {
    throw IllegalStateException_init_$Create$_0('' + 'Attribute ' + attributeName + ' is not yet defined for tag ' + tag._get_tagName__21());
  };
  function AttributeEncoder() {
  }
  AttributeEncoder.$metadata$ = {
    simpleName: 'AttributeEncoder',
    kind: 'interface',
    interfaces: []
  };
  function StringEncoder() {
    StringEncoder_instance = this;
  }
  StringEncoder.prototype.encode_0 = function (attributeName, value) {
    return value;
  };
  StringEncoder.prototype.encode_8 = function (attributeName, value) {
    return this.encode_0(attributeName, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  StringEncoder.prototype.decode_4 = function (attributeName, value) {
    return value;
  };
  StringEncoder.$metadata$ = {
    simpleName: 'StringEncoder',
    kind: 'object',
    interfaces: [AttributeEncoder]
  };
  var StringEncoder_instance;
  function StringEncoder_getInstance() {
    if (StringEncoder_instance == null)
      new StringEncoder();
    return StringEncoder_instance;
  }
  function StringSetEncoder() {
    StringSetEncoder_instance = this;
  }
  StringSetEncoder.prototype.encode_2 = function (attributeName, value) {
    return joinToString$default_0(value, ' ', null, null, 0, null, null, 62, null);
  };
  StringSetEncoder.prototype.encode_8 = function (attributeName, value) {
    return this.encode_2(attributeName, (!(value == null) ? isInterface(value, Set) : false) ? value : THROW_CCE());
  };
  StringSetEncoder.prototype.decode_4 = function (attributeName, value) {
    return ensureNotNull(stringSetDecode(value));
  };
  StringSetEncoder.prototype.empty_4 = function (attributeName, tag) {
    return emptySet();
  };
  StringSetEncoder.$metadata$ = {
    simpleName: 'StringSetEncoder',
    kind: 'object',
    interfaces: [AttributeEncoder]
  };
  var StringSetEncoder_instance;
  function StringSetEncoder_getInstance() {
    if (StringSetEncoder_instance == null)
      new StringSetEncoder();
    return StringSetEncoder_instance;
  }
  function BooleanEncoder_init_$Init$(trueValue, falseValue, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      trueValue = 'true';
    if (!(($mask0 & 2) === 0))
      falseValue = 'false';
    BooleanEncoder.call($this, trueValue, falseValue);
    return $this;
  }
  function BooleanEncoder_init_$Create$(trueValue, falseValue, $mask0, $marker) {
    return BooleanEncoder_init_$Init$(trueValue, falseValue, $mask0, $marker, Object.create(BooleanEncoder.prototype));
  }
  function BooleanEncoder(trueValue, falseValue) {
    this._trueValue = trueValue;
    this._falseValue = falseValue;
  }
  BooleanEncoder.prototype._get_trueValue_ = function () {
    return this._trueValue;
  };
  BooleanEncoder.prototype._get_falseValue_ = function () {
    return this._falseValue;
  };
  BooleanEncoder.prototype.encode_6 = function (attributeName, value) {
    return value ? this._trueValue : this._falseValue;
  };
  BooleanEncoder.prototype.encode_8 = function (attributeName, value) {
    return this.encode_6(attributeName, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  BooleanEncoder.prototype.decode_4 = function (attributeName, value) {
    var tmp0_subject = value;
    var tmp;
    if (tmp0_subject === this._trueValue) {
      tmp = true;
    } else if (tmp0_subject === this._falseValue) {
      tmp = false;
    } else {
      throw IllegalArgumentException_init_$Create$_0('' + 'Unknown value ' + value + ' for ' + attributeName);
    }
    return tmp;
  };
  BooleanEncoder.$metadata$ = {
    simpleName: 'BooleanEncoder',
    kind: 'class',
    interfaces: [AttributeEncoder]
  };
  function TickerEncoder() {
    TickerEncoder_instance = this;
  }
  TickerEncoder.prototype.encode_6 = function (attributeName, value) {
    return tickerEncode(value, attributeName);
  };
  TickerEncoder.prototype.encode_8 = function (attributeName, value) {
    return this.encode_6(attributeName, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  TickerEncoder.prototype.decode_4 = function (attributeName, value) {
    return value === attributeName;
  };
  TickerEncoder.$metadata$ = {
    simpleName: 'TickerEncoder',
    kind: 'object',
    interfaces: [AttributeEncoder]
  };
  var TickerEncoder_instance;
  function TickerEncoder_getInstance() {
    if (TickerEncoder_instance == null)
      new TickerEncoder();
    return TickerEncoder_instance;
  }
  function EnumEncoder(valuesMap) {
    this._valuesMap = valuesMap;
  }
  EnumEncoder.prototype._get_valuesMap_ = function () {
    return this._valuesMap;
  };
  EnumEncoder.prototype.encode_8 = function (attributeName, value) {
    return value._get_realValue__16();
  };
  EnumEncoder.prototype.decode_4 = function (attributeName, value) {
    var tmp0_elvis_lhs = this._valuesMap.get_33(value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$_0('' + 'Unknown value ' + value + ' for ' + attributeName);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  EnumEncoder.$metadata$ = {
    simpleName: 'EnumEncoder',
    kind: 'class',
    interfaces: [AttributeEncoder]
  };
  function stringSetDecode(value) {
    var tmp0_safe_receiver = value;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp0_toRegex_0 = '\\s+';
      var tmp1_split_0 = Regex_init_$Create$_0(tmp0_toRegex_0);
      var tmp2_split_0 = 0;
      tmp = tmp1_split_0.split(tmp0_safe_receiver, tmp2_split_0);
    }
    var tmp1_safe_receiver = tmp;
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp0_filterNotTo_0_1 = ArrayList_init_$Create$();
      var tmp0_iterator_1_2 = tmp1_safe_receiver.iterator_69();
      while (tmp0_iterator_1_2.hasNext_49()) {
        var element_2_3 = tmp0_iterator_1_2.next_56();
        if (!(charSequenceLength(element_2_3) === 0)) {
          tmp0_filterNotTo_0_1.add_25(element_2_3);
          Unit_getInstance();
        } else {
        }
      }
      tmp_0 = tmp0_filterNotTo_0_1;
    }
    var tmp2_safe_receiver = tmp_0;
    return tmp2_safe_receiver == null ? null : toSet_0(tmp2_safe_receiver);
  }
  function tickerEncode(_this_, attributeName) {
    return _this_ ? attributeName : '';
  }
  function enumEncode(_this_) {
    return _this_._get_realValue__16();
  }
  function _get_tag_($this) {
    return $this._tag;
  }
  function _get_consumer_($this) {
    return $this._consumer;
  }
  function _set_backing_($this, _set___) {
    $this._backing = _set___;
  }
  function _get_backing_($this) {
    return $this._backing;
  }
  function _set_backingMutable_($this, _set___) {
    $this._backingMutable = _set___;
  }
  function _get_backingMutable_($this) {
    return $this._backingMutable;
  }
  function switchToMutable($this) {
    var tmp;
    if ($this._backingMutable) {
      tmp = $this._backing;
    } else {
      $this._backingMutable = true;
      $this._backing = LinkedHashMap_init_$Create$_4($this._backing);
      tmp = $this._backing;
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, MutableMap) ? tmp_0 : THROW_CCE();
  }
  function DelegatingMap(initialValues, tag, consumer) {
    this._tag = tag;
    this._consumer = consumer;
    this._backing = initialValues;
    this._backingMutable = false;
  }
  DelegatingMap.prototype._get_size__42 = function () {
    return this._backing._get_size__42();
  };
  DelegatingMap.prototype.isEmpty_51 = function () {
    return this._backing.isEmpty_51();
  };
  DelegatingMap.prototype.containsKey_9 = function (key) {
    return this._backing.containsKey_6(key);
  };
  DelegatingMap.prototype.containsKey_6 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    else {
    }
    return this.containsKey_9((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  DelegatingMap.prototype.containsValue_9 = function (value) {
    return this._backing.containsValue_6(value);
  };
  DelegatingMap.prototype.containsValue_6 = function (value) {
    if (!(!(value == null) ? typeof value === 'string' : false))
      return false;
    else {
    }
    return this.containsValue_9((!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  DelegatingMap.prototype.get_53 = function (key) {
    return this._backing.get_33(key);
  };
  DelegatingMap.prototype.get_33 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    else {
    }
    return this.get_53((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  DelegatingMap.prototype.put_6 = function (key, value) {
    var mutable = switchToMutable(this);
    var old = mutable.put_5(key, value);
    if (!(old === value)) {
      this._consumer().onTagAttributeChange_0(this._tag, key, value);
    }return old;
  };
  DelegatingMap.prototype.put_5 = function (key, value) {
    var tmp = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
    return this.put_6(tmp, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  DelegatingMap.prototype.remove_32 = function (key) {
    var mutable = switchToMutable(this);
    var tmp0_safe_receiver = mutable.remove_28(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      this._consumer().onTagAttributeChange_0(this._tag, key, null);
      tmp = tmp0_safe_receiver;
    }
    return tmp;
  };
  DelegatingMap.prototype.remove_28 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    else {
    }
    return this.remove_32((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  DelegatingMap.prototype.putAll_3 = function (from) {
    if (from.isEmpty_51())
      return Unit_getInstance();
    var consumer = this._consumer();
    var mutable = switchToMutable(this);
    var tmp0_forEach_0 = from._get_entries__5();
    var tmp0_iterator_1 = tmp0_forEach_0.iterator_69();
    while (tmp0_iterator_1.hasNext_49()) {
      var element_2 = tmp0_iterator_1.next_56();
      if (!(mutable.put_5(element_2._get_key__4(), element_2._get_value__7()) === element_2._get_value__7())) {
        consumer.onTagAttributeChange_0(this._tag, element_2._get_key__4(), element_2._get_value__7());
      }}
  };
  DelegatingMap.prototype.putAll_2 = function (from) {
    return this.putAll_3(from);
  };
  DelegatingMap.prototype.clear_21 = function () {
    var tmp0_forEach_0 = this._backing;
    var tmp0_iterator_1 = tmp0_forEach_0._get_entries__5().iterator_69();
    while (tmp0_iterator_1.hasNext_49()) {
      var element_2 = tmp0_iterator_1.next_56();
      this._consumer().onTagAttributeChange_0(this._tag, element_2._get_key__4(), null);
    }
    this._backing = emptyMap();
    this._backingMutable = false;
  };
  DelegatingMap.prototype._get_immutableEntries_ = function () {
    return this._backing._get_entries__5();
  };
  DelegatingMap.prototype._get_keys__6 = function () {
    return switchToMutable(this)._get_keys__6();
  };
  DelegatingMap.prototype._get_values__6 = function () {
    return switchToMutable(this)._get_values__6();
  };
  DelegatingMap.prototype._get_entries__5 = function () {
    return switchToMutable(this)._get_entries__5();
  };
  DelegatingMap.$metadata$ = {
    simpleName: 'DelegatingMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function _set_id_(_this_, newValue) {
    attributeStringString.set_26(_this_, 'id', newValue);
  }
  function _get_id_(_this_) {
    return attributeStringString.get_52(_this_, 'id');
  }
  function _set_classes_(_this_, newValue) {
    attributeSetStringStringSet.set_26(_this_, 'class', newValue);
  }
  function _get_classes_(_this_) {
    return attributeSetStringStringSet.get_52(_this_, 'class');
  }
  function CommonAttributeGroupFacade() {
  }
  CommonAttributeGroupFacade.$metadata$ = {
    simpleName: 'CommonAttributeGroupFacade',
    kind: 'interface',
    interfaces: [Tag]
  };
  function _get_attributeStringString_() {
    return attributeStringString;
  }
  var attributeStringString;
  function _get_attributeSetStringStringSet_() {
    return attributeSetStringStringSet;
  }
  var attributeSetStringStringSet;
  function _get_attributeBooleanBoolean_() {
    return attributeBooleanBoolean;
  }
  var attributeBooleanBoolean;
  function _get_attributeBooleanBooleanOnOff_() {
    return attributeBooleanBooleanOnOff;
  }
  var attributeBooleanBooleanOnOff;
  function _get_attributeBooleanTicker_() {
    return attributeBooleanTicker;
  }
  var attributeBooleanTicker;
  function _get_attributeButtonFormEncTypeEnumButtonFormEncTypeValues_() {
    return attributeButtonFormEncTypeEnumButtonFormEncTypeValues;
  }
  var attributeButtonFormEncTypeEnumButtonFormEncTypeValues;
  function _get_attributeButtonFormMethodEnumButtonFormMethodValues_() {
    return attributeButtonFormMethodEnumButtonFormMethodValues;
  }
  var attributeButtonFormMethodEnumButtonFormMethodValues;
  function _get_attributeButtonTypeEnumButtonTypeValues_() {
    return attributeButtonTypeEnumButtonTypeValues;
  }
  var attributeButtonTypeEnumButtonTypeValues;
  function _get_attributeCommandTypeEnumCommandTypeValues_() {
    return attributeCommandTypeEnumCommandTypeValues;
  }
  var attributeCommandTypeEnumCommandTypeValues;
  function _get_attributeDirEnumDirValues_() {
    return attributeDirEnumDirValues;
  }
  var attributeDirEnumDirValues;
  function _get_attributeDraggableEnumDraggableValues_() {
    return attributeDraggableEnumDraggableValues;
  }
  var attributeDraggableEnumDraggableValues;
  function _get_attributeFormEncTypeEnumFormEncTypeValues_() {
    return attributeFormEncTypeEnumFormEncTypeValues;
  }
  var attributeFormEncTypeEnumFormEncTypeValues;
  function _get_attributeFormMethodEnumFormMethodValues_() {
    return attributeFormMethodEnumFormMethodValues;
  }
  var attributeFormMethodEnumFormMethodValues;
  function _get_attributeIframeSandboxEnumIframeSandboxValues_() {
    return attributeIframeSandboxEnumIframeSandboxValues;
  }
  var attributeIframeSandboxEnumIframeSandboxValues;
  function _get_attributeInputFormEncTypeEnumInputFormEncTypeValues_() {
    return attributeInputFormEncTypeEnumInputFormEncTypeValues;
  }
  var attributeInputFormEncTypeEnumInputFormEncTypeValues;
  function _get_attributeInputFormMethodEnumInputFormMethodValues_() {
    return attributeInputFormMethodEnumInputFormMethodValues;
  }
  var attributeInputFormMethodEnumInputFormMethodValues;
  function _get_attributeInputTypeEnumInputTypeValues_() {
    return attributeInputTypeEnumInputTypeValues;
  }
  var attributeInputTypeEnumInputTypeValues;
  function _get_attributeKeyGenKeyTypeEnumKeyGenKeyTypeValues_() {
    return attributeKeyGenKeyTypeEnumKeyGenKeyTypeValues;
  }
  var attributeKeyGenKeyTypeEnumKeyGenKeyTypeValues;
  function _get_attributeRunAtEnumRunAtValues_() {
    return attributeRunAtEnumRunAtValues;
  }
  var attributeRunAtEnumRunAtValues;
  function _get_attributeTextAreaWrapEnumTextAreaWrapValues_() {
    return attributeTextAreaWrapEnumTextAreaWrapValues;
  }
  var attributeTextAreaWrapEnumTextAreaWrapValues;
  function _get_attributeThScopeEnumThScopeValues_() {
    return attributeThScopeEnumThScopeValues;
  }
  var attributeThScopeEnumThScopeValues;
  function div(_this_, classes, block) {
    var tmp0_visitAndFinalize_0 = new DIV(attributesMapOf('class', classes), _this_);
    return visitTagAndFinalize(tmp0_visitAndFinalize_0, _this_, _no_name_provided_$factory_41(block));
  }
  function span(_this_, classes, block) {
    var tmp0_visitAndFinalize_0 = new SPAN(attributesMapOf('class', classes), _this_);
    return visitTagAndFinalize(tmp0_visitAndFinalize_0, _this_, _no_name_provided_$factory_43(block));
  }
  function _no_name_provided__71() {
  }
  _no_name_provided__71.prototype.invoke_113 = function (_this__0) {
    return Unit_getInstance();
  };
  _no_name_provided__71.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__71.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__72($block) {
    this._$block_1 = $block;
  }
  _no_name_provided__72.prototype.invoke_113 = function (_this__0) {
    this._$block_1(_this__0);
  };
  _no_name_provided__72.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__72.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__73() {
  }
  _no_name_provided__73.prototype.invoke_100 = function (_this__0) {
    return Unit_getInstance();
  };
  _no_name_provided__73.prototype.invoke_81 = function (p1) {
    this.invoke_100(p1 instanceof SPAN ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__73.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__74($block) {
    this._$block_2 = $block;
  }
  _no_name_provided__74.prototype.invoke_100 = function (_this__0) {
    this._$block_2(_this__0);
  };
  _no_name_provided__74.prototype.invoke_81 = function (p1) {
    this.invoke_100(p1 instanceof SPAN ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__74.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_40() {
    var i = new _no_name_provided__71();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_41($block) {
    var i = new _no_name_provided__72($block);
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_42() {
    var i = new _no_name_provided__73();
    return function (p1) {
      i.invoke_100(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_43($block) {
    var i = new _no_name_provided__74($block);
    return function (p1) {
      i.invoke_100(p1);
      return Unit_getInstance();
    };
  }
  var Entities_nbsp_instance;
  var Entities_lt_instance;
  var Entities_gt_instance;
  var Entities_quot_instance;
  var Entities_amp_instance;
  var Entities_apos_instance;
  var Entities_iexcl_instance;
  var Entities_cent_instance;
  var Entities_pound_instance;
  var Entities_curren_instance;
  var Entities_yen_instance;
  var Entities_brvbar_instance;
  var Entities_sect_instance;
  var Entities_uml_instance;
  var Entities_copy_instance;
  var Entities_ordf_instance;
  var Entities_laquo_instance;
  var Entities_not_instance;
  var Entities_shy_instance;
  var Entities_reg_instance;
  var Entities_macr_instance;
  var Entities_deg_instance;
  var Entities_plusmn_instance;
  var Entities_sup2_instance;
  var Entities_sup3_instance;
  var Entities_acute_instance;
  var Entities_micro_instance;
  var Entities_para_instance;
  var Entities_middot_instance;
  var Entities_cedil_instance;
  var Entities_sup1_instance;
  var Entities_ordm_instance;
  var Entities_raquo_instance;
  var Entities_frac14_instance;
  var Entities_frac12_instance;
  var Entities_frac34_instance;
  var Entities_iquest_instance;
  var Entities_Agrave_instance;
  var Entities_Aacute_instance;
  var Entities_Acirc_instance;
  var Entities_Atilde_instance;
  var Entities_Auml_instance;
  var Entities_Aring_instance;
  var Entities_AElig_instance;
  var Entities_Ccedil_instance;
  var Entities_Egrave_instance;
  var Entities_Eacute_instance;
  var Entities_Ecirc_instance;
  var Entities_Euml_instance;
  var Entities_Igrave_instance;
  var Entities_Iacute_instance;
  var Entities_Icirc_instance;
  var Entities_Iuml_instance;
  var Entities_ETH_instance;
  var Entities_Ntilde_instance;
  var Entities_Ograve_instance;
  var Entities_Oacute_instance;
  var Entities_Ocirc_instance;
  var Entities_Otilde_instance;
  var Entities_Ouml_instance;
  var Entities_times_instance;
  var Entities_Oslash_instance;
  var Entities_Ugrave_instance;
  var Entities_Uacute_instance;
  var Entities_Ucirc_instance;
  var Entities_Uuml_instance;
  var Entities_Yacute_instance;
  var Entities_THORN_instance;
  var Entities_szlig_instance;
  var Entities_agrave_instance;
  var Entities_aacute_instance;
  var Entities_acirc_instance;
  var Entities_atilde_instance;
  var Entities_auml_instance;
  var Entities_aring_instance;
  var Entities_aelig_instance;
  var Entities_ccedil_instance;
  var Entities_egrave_instance;
  var Entities_eacute_instance;
  var Entities_ecirc_instance;
  var Entities_euml_instance;
  var Entities_igrave_instance;
  var Entities_iacute_instance;
  var Entities_icirc_instance;
  var Entities_iuml_instance;
  var Entities_eth_instance;
  var Entities_ntilde_instance;
  var Entities_ograve_instance;
  var Entities_oacute_instance;
  var Entities_ocirc_instance;
  var Entities_otilde_instance;
  var Entities_ouml_instance;
  var Entities_divide_instance;
  var Entities_oslash_instance;
  var Entities_ugrave_instance;
  var Entities_uacute_instance;
  var Entities_ucirc_instance;
  var Entities_uuml_instance;
  var Entities_yacute_instance;
  var Entities_thorn_instance;
  var Entities_yuml_instance;
  function values_9() {
    return [Entities_nbsp_getInstance(), Entities_lt_getInstance(), Entities_gt_getInstance(), Entities_quot_getInstance(), Entities_amp_getInstance(), Entities_apos_getInstance(), Entities_iexcl_getInstance(), Entities_cent_getInstance(), Entities_pound_getInstance(), Entities_curren_getInstance(), Entities_yen_getInstance(), Entities_brvbar_getInstance(), Entities_sect_getInstance(), Entities_uml_getInstance(), Entities_copy_getInstance(), Entities_ordf_getInstance(), Entities_laquo_getInstance(), Entities_not_getInstance(), Entities_shy_getInstance(), Entities_reg_getInstance(), Entities_macr_getInstance(), Entities_deg_getInstance(), Entities_plusmn_getInstance(), Entities_sup2_getInstance(), Entities_sup3_getInstance(), Entities_acute_getInstance(), Entities_micro_getInstance(), Entities_para_getInstance(), Entities_middot_getInstance(), Entities_cedil_getInstance(), Entities_sup1_getInstance(), Entities_ordm_getInstance(), Entities_raquo_getInstance(), Entities_frac14_getInstance(), Entities_frac12_getInstance(), Entities_frac34_getInstance(), Entities_iquest_getInstance(), Entities_Agrave_getInstance(), Entities_Aacute_getInstance(), Entities_Acirc_getInstance(), Entities_Atilde_getInstance(), Entities_Auml_getInstance(), Entities_Aring_getInstance(), Entities_AElig_getInstance(), Entities_Ccedil_getInstance(), Entities_Egrave_getInstance(), Entities_Eacute_getInstance(), Entities_Ecirc_getInstance(), Entities_Euml_getInstance(), Entities_Igrave_getInstance(), Entities_Iacute_getInstance(), Entities_Icirc_getInstance(), Entities_Iuml_getInstance(), Entities_ETH_getInstance(), Entities_Ntilde_getInstance(), Entities_Ograve_getInstance(), Entities_Oacute_getInstance(), Entities_Ocirc_getInstance(), Entities_Otilde_getInstance(), Entities_Ouml_getInstance(), Entities_times_getInstance(), Entities_Oslash_getInstance(), Entities_Ugrave_getInstance(), Entities_Uacute_getInstance(), Entities_Ucirc_getInstance(), Entities_Uuml_getInstance(), Entities_Yacute_getInstance(), Entities_THORN_getInstance(), Entities_szlig_getInstance(), Entities_agrave_getInstance(), Entities_aacute_getInstance(), Entities_acirc_getInstance(), Entities_atilde_getInstance(), Entities_auml_getInstance(), Entities_aring_getInstance(), Entities_aelig_getInstance(), Entities_ccedil_getInstance(), Entities_egrave_getInstance(), Entities_eacute_getInstance(), Entities_ecirc_getInstance(), Entities_euml_getInstance(), Entities_igrave_getInstance(), Entities_iacute_getInstance(), Entities_icirc_getInstance(), Entities_iuml_getInstance(), Entities_eth_getInstance(), Entities_ntilde_getInstance(), Entities_ograve_getInstance(), Entities_oacute_getInstance(), Entities_ocirc_getInstance(), Entities_otilde_getInstance(), Entities_ouml_getInstance(), Entities_divide_getInstance(), Entities_oslash_getInstance(), Entities_ugrave_getInstance(), Entities_uacute_getInstance(), Entities_ucirc_getInstance(), Entities_uuml_getInstance(), Entities_yacute_getInstance(), Entities_thorn_getInstance(), Entities_yuml_getInstance()];
  }
  function valueOf_9(value) {
    switch (value) {
      case 'nbsp':
        return Entities_nbsp_getInstance();
      case 'lt':
        return Entities_lt_getInstance();
      case 'gt':
        return Entities_gt_getInstance();
      case 'quot':
        return Entities_quot_getInstance();
      case 'amp':
        return Entities_amp_getInstance();
      case 'apos':
        return Entities_apos_getInstance();
      case 'iexcl':
        return Entities_iexcl_getInstance();
      case 'cent':
        return Entities_cent_getInstance();
      case 'pound':
        return Entities_pound_getInstance();
      case 'curren':
        return Entities_curren_getInstance();
      case 'yen':
        return Entities_yen_getInstance();
      case 'brvbar':
        return Entities_brvbar_getInstance();
      case 'sect':
        return Entities_sect_getInstance();
      case 'uml':
        return Entities_uml_getInstance();
      case 'copy':
        return Entities_copy_getInstance();
      case 'ordf':
        return Entities_ordf_getInstance();
      case 'laquo':
        return Entities_laquo_getInstance();
      case 'not':
        return Entities_not_getInstance();
      case 'shy':
        return Entities_shy_getInstance();
      case 'reg':
        return Entities_reg_getInstance();
      case 'macr':
        return Entities_macr_getInstance();
      case 'deg':
        return Entities_deg_getInstance();
      case 'plusmn':
        return Entities_plusmn_getInstance();
      case 'sup2':
        return Entities_sup2_getInstance();
      case 'sup3':
        return Entities_sup3_getInstance();
      case 'acute':
        return Entities_acute_getInstance();
      case 'micro':
        return Entities_micro_getInstance();
      case 'para':
        return Entities_para_getInstance();
      case 'middot':
        return Entities_middot_getInstance();
      case 'cedil':
        return Entities_cedil_getInstance();
      case 'sup1':
        return Entities_sup1_getInstance();
      case 'ordm':
        return Entities_ordm_getInstance();
      case 'raquo':
        return Entities_raquo_getInstance();
      case 'frac14':
        return Entities_frac14_getInstance();
      case 'frac12':
        return Entities_frac12_getInstance();
      case 'frac34':
        return Entities_frac34_getInstance();
      case 'iquest':
        return Entities_iquest_getInstance();
      case 'Agrave':
        return Entities_Agrave_getInstance();
      case 'Aacute':
        return Entities_Aacute_getInstance();
      case 'Acirc':
        return Entities_Acirc_getInstance();
      case 'Atilde':
        return Entities_Atilde_getInstance();
      case 'Auml':
        return Entities_Auml_getInstance();
      case 'Aring':
        return Entities_Aring_getInstance();
      case 'AElig':
        return Entities_AElig_getInstance();
      case 'Ccedil':
        return Entities_Ccedil_getInstance();
      case 'Egrave':
        return Entities_Egrave_getInstance();
      case 'Eacute':
        return Entities_Eacute_getInstance();
      case 'Ecirc':
        return Entities_Ecirc_getInstance();
      case 'Euml':
        return Entities_Euml_getInstance();
      case 'Igrave':
        return Entities_Igrave_getInstance();
      case 'Iacute':
        return Entities_Iacute_getInstance();
      case 'Icirc':
        return Entities_Icirc_getInstance();
      case 'Iuml':
        return Entities_Iuml_getInstance();
      case 'ETH':
        return Entities_ETH_getInstance();
      case 'Ntilde':
        return Entities_Ntilde_getInstance();
      case 'Ograve':
        return Entities_Ograve_getInstance();
      case 'Oacute':
        return Entities_Oacute_getInstance();
      case 'Ocirc':
        return Entities_Ocirc_getInstance();
      case 'Otilde':
        return Entities_Otilde_getInstance();
      case 'Ouml':
        return Entities_Ouml_getInstance();
      case 'times':
        return Entities_times_getInstance();
      case 'Oslash':
        return Entities_Oslash_getInstance();
      case 'Ugrave':
        return Entities_Ugrave_getInstance();
      case 'Uacute':
        return Entities_Uacute_getInstance();
      case 'Ucirc':
        return Entities_Ucirc_getInstance();
      case 'Uuml':
        return Entities_Uuml_getInstance();
      case 'Yacute':
        return Entities_Yacute_getInstance();
      case 'THORN':
        return Entities_THORN_getInstance();
      case 'szlig':
        return Entities_szlig_getInstance();
      case 'agrave':
        return Entities_agrave_getInstance();
      case 'aacute':
        return Entities_aacute_getInstance();
      case 'acirc':
        return Entities_acirc_getInstance();
      case 'atilde':
        return Entities_atilde_getInstance();
      case 'auml':
        return Entities_auml_getInstance();
      case 'aring':
        return Entities_aring_getInstance();
      case 'aelig':
        return Entities_aelig_getInstance();
      case 'ccedil':
        return Entities_ccedil_getInstance();
      case 'egrave':
        return Entities_egrave_getInstance();
      case 'eacute':
        return Entities_eacute_getInstance();
      case 'ecirc':
        return Entities_ecirc_getInstance();
      case 'euml':
        return Entities_euml_getInstance();
      case 'igrave':
        return Entities_igrave_getInstance();
      case 'iacute':
        return Entities_iacute_getInstance();
      case 'icirc':
        return Entities_icirc_getInstance();
      case 'iuml':
        return Entities_iuml_getInstance();
      case 'eth':
        return Entities_eth_getInstance();
      case 'ntilde':
        return Entities_ntilde_getInstance();
      case 'ograve':
        return Entities_ograve_getInstance();
      case 'oacute':
        return Entities_oacute_getInstance();
      case 'ocirc':
        return Entities_ocirc_getInstance();
      case 'otilde':
        return Entities_otilde_getInstance();
      case 'ouml':
        return Entities_ouml_getInstance();
      case 'divide':
        return Entities_divide_getInstance();
      case 'oslash':
        return Entities_oslash_getInstance();
      case 'ugrave':
        return Entities_ugrave_getInstance();
      case 'uacute':
        return Entities_uacute_getInstance();
      case 'ucirc':
        return Entities_ucirc_getInstance();
      case 'uuml':
        return Entities_uuml_getInstance();
      case 'yacute':
        return Entities_yacute_getInstance();
      case 'thorn':
        return Entities_thorn_getInstance();
      case 'yuml':
        return Entities_yuml_getInstance();
      default:return THROW_ISE();
    }
  }
  var Entities_entriesInitialized;
  function Entities_initEntries() {
    if (Entities_entriesInitialized)
      return Unit_getInstance();
    Entities_entriesInitialized = true;
    Entities_nbsp_instance = new Entities('nbsp', 0);
    Entities_lt_instance = new Entities('lt', 1);
    Entities_gt_instance = new Entities('gt', 2);
    Entities_quot_instance = new Entities('quot', 3);
    Entities_amp_instance = new Entities('amp', 4);
    Entities_apos_instance = new Entities('apos', 5);
    Entities_iexcl_instance = new Entities('iexcl', 6);
    Entities_cent_instance = new Entities('cent', 7);
    Entities_pound_instance = new Entities('pound', 8);
    Entities_curren_instance = new Entities('curren', 9);
    Entities_yen_instance = new Entities('yen', 10);
    Entities_brvbar_instance = new Entities('brvbar', 11);
    Entities_sect_instance = new Entities('sect', 12);
    Entities_uml_instance = new Entities('uml', 13);
    Entities_copy_instance = new Entities('copy', 14);
    Entities_ordf_instance = new Entities('ordf', 15);
    Entities_laquo_instance = new Entities('laquo', 16);
    Entities_not_instance = new Entities('not', 17);
    Entities_shy_instance = new Entities('shy', 18);
    Entities_reg_instance = new Entities('reg', 19);
    Entities_macr_instance = new Entities('macr', 20);
    Entities_deg_instance = new Entities('deg', 21);
    Entities_plusmn_instance = new Entities('plusmn', 22);
    Entities_sup2_instance = new Entities('sup2', 23);
    Entities_sup3_instance = new Entities('sup3', 24);
    Entities_acute_instance = new Entities('acute', 25);
    Entities_micro_instance = new Entities('micro', 26);
    Entities_para_instance = new Entities('para', 27);
    Entities_middot_instance = new Entities('middot', 28);
    Entities_cedil_instance = new Entities('cedil', 29);
    Entities_sup1_instance = new Entities('sup1', 30);
    Entities_ordm_instance = new Entities('ordm', 31);
    Entities_raquo_instance = new Entities('raquo', 32);
    Entities_frac14_instance = new Entities('frac14', 33);
    Entities_frac12_instance = new Entities('frac12', 34);
    Entities_frac34_instance = new Entities('frac34', 35);
    Entities_iquest_instance = new Entities('iquest', 36);
    Entities_Agrave_instance = new Entities('Agrave', 37);
    Entities_Aacute_instance = new Entities('Aacute', 38);
    Entities_Acirc_instance = new Entities('Acirc', 39);
    Entities_Atilde_instance = new Entities('Atilde', 40);
    Entities_Auml_instance = new Entities('Auml', 41);
    Entities_Aring_instance = new Entities('Aring', 42);
    Entities_AElig_instance = new Entities('AElig', 43);
    Entities_Ccedil_instance = new Entities('Ccedil', 44);
    Entities_Egrave_instance = new Entities('Egrave', 45);
    Entities_Eacute_instance = new Entities('Eacute', 46);
    Entities_Ecirc_instance = new Entities('Ecirc', 47);
    Entities_Euml_instance = new Entities('Euml', 48);
    Entities_Igrave_instance = new Entities('Igrave', 49);
    Entities_Iacute_instance = new Entities('Iacute', 50);
    Entities_Icirc_instance = new Entities('Icirc', 51);
    Entities_Iuml_instance = new Entities('Iuml', 52);
    Entities_ETH_instance = new Entities('ETH', 53);
    Entities_Ntilde_instance = new Entities('Ntilde', 54);
    Entities_Ograve_instance = new Entities('Ograve', 55);
    Entities_Oacute_instance = new Entities('Oacute', 56);
    Entities_Ocirc_instance = new Entities('Ocirc', 57);
    Entities_Otilde_instance = new Entities('Otilde', 58);
    Entities_Ouml_instance = new Entities('Ouml', 59);
    Entities_times_instance = new Entities('times', 60);
    Entities_Oslash_instance = new Entities('Oslash', 61);
    Entities_Ugrave_instance = new Entities('Ugrave', 62);
    Entities_Uacute_instance = new Entities('Uacute', 63);
    Entities_Ucirc_instance = new Entities('Ucirc', 64);
    Entities_Uuml_instance = new Entities('Uuml', 65);
    Entities_Yacute_instance = new Entities('Yacute', 66);
    Entities_THORN_instance = new Entities('THORN', 67);
    Entities_szlig_instance = new Entities('szlig', 68);
    Entities_agrave_instance = new Entities('agrave', 69);
    Entities_aacute_instance = new Entities('aacute', 70);
    Entities_acirc_instance = new Entities('acirc', 71);
    Entities_atilde_instance = new Entities('atilde', 72);
    Entities_auml_instance = new Entities('auml', 73);
    Entities_aring_instance = new Entities('aring', 74);
    Entities_aelig_instance = new Entities('aelig', 75);
    Entities_ccedil_instance = new Entities('ccedil', 76);
    Entities_egrave_instance = new Entities('egrave', 77);
    Entities_eacute_instance = new Entities('eacute', 78);
    Entities_ecirc_instance = new Entities('ecirc', 79);
    Entities_euml_instance = new Entities('euml', 80);
    Entities_igrave_instance = new Entities('igrave', 81);
    Entities_iacute_instance = new Entities('iacute', 82);
    Entities_icirc_instance = new Entities('icirc', 83);
    Entities_iuml_instance = new Entities('iuml', 84);
    Entities_eth_instance = new Entities('eth', 85);
    Entities_ntilde_instance = new Entities('ntilde', 86);
    Entities_ograve_instance = new Entities('ograve', 87);
    Entities_oacute_instance = new Entities('oacute', 88);
    Entities_ocirc_instance = new Entities('ocirc', 89);
    Entities_otilde_instance = new Entities('otilde', 90);
    Entities_ouml_instance = new Entities('ouml', 91);
    Entities_divide_instance = new Entities('divide', 92);
    Entities_oslash_instance = new Entities('oslash', 93);
    Entities_ugrave_instance = new Entities('ugrave', 94);
    Entities_uacute_instance = new Entities('uacute', 95);
    Entities_ucirc_instance = new Entities('ucirc', 96);
    Entities_uuml_instance = new Entities('uuml', 97);
    Entities_yacute_instance = new Entities('yacute', 98);
    Entities_thorn_instance = new Entities('thorn', 99);
    Entities_yuml_instance = new Entities('yuml', 100);
  }
  function Entities(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  Entities.prototype._get_text_ = function () {
    return '&' + this.toString() + ';';
  };
  Entities.$metadata$ = {
    simpleName: 'Entities',
    kind: 'class',
    interfaces: []
  };
  function Entities_nbsp_getInstance() {
    Entities_initEntries();
    return Entities_nbsp_instance;
  }
  function Entities_lt_getInstance() {
    Entities_initEntries();
    return Entities_lt_instance;
  }
  function Entities_gt_getInstance() {
    Entities_initEntries();
    return Entities_gt_instance;
  }
  function Entities_quot_getInstance() {
    Entities_initEntries();
    return Entities_quot_instance;
  }
  function Entities_amp_getInstance() {
    Entities_initEntries();
    return Entities_amp_instance;
  }
  function Entities_apos_getInstance() {
    Entities_initEntries();
    return Entities_apos_instance;
  }
  function Entities_iexcl_getInstance() {
    Entities_initEntries();
    return Entities_iexcl_instance;
  }
  function Entities_cent_getInstance() {
    Entities_initEntries();
    return Entities_cent_instance;
  }
  function Entities_pound_getInstance() {
    Entities_initEntries();
    return Entities_pound_instance;
  }
  function Entities_curren_getInstance() {
    Entities_initEntries();
    return Entities_curren_instance;
  }
  function Entities_yen_getInstance() {
    Entities_initEntries();
    return Entities_yen_instance;
  }
  function Entities_brvbar_getInstance() {
    Entities_initEntries();
    return Entities_brvbar_instance;
  }
  function Entities_sect_getInstance() {
    Entities_initEntries();
    return Entities_sect_instance;
  }
  function Entities_uml_getInstance() {
    Entities_initEntries();
    return Entities_uml_instance;
  }
  function Entities_copy_getInstance() {
    Entities_initEntries();
    return Entities_copy_instance;
  }
  function Entities_ordf_getInstance() {
    Entities_initEntries();
    return Entities_ordf_instance;
  }
  function Entities_laquo_getInstance() {
    Entities_initEntries();
    return Entities_laquo_instance;
  }
  function Entities_not_getInstance() {
    Entities_initEntries();
    return Entities_not_instance;
  }
  function Entities_shy_getInstance() {
    Entities_initEntries();
    return Entities_shy_instance;
  }
  function Entities_reg_getInstance() {
    Entities_initEntries();
    return Entities_reg_instance;
  }
  function Entities_macr_getInstance() {
    Entities_initEntries();
    return Entities_macr_instance;
  }
  function Entities_deg_getInstance() {
    Entities_initEntries();
    return Entities_deg_instance;
  }
  function Entities_plusmn_getInstance() {
    Entities_initEntries();
    return Entities_plusmn_instance;
  }
  function Entities_sup2_getInstance() {
    Entities_initEntries();
    return Entities_sup2_instance;
  }
  function Entities_sup3_getInstance() {
    Entities_initEntries();
    return Entities_sup3_instance;
  }
  function Entities_acute_getInstance() {
    Entities_initEntries();
    return Entities_acute_instance;
  }
  function Entities_micro_getInstance() {
    Entities_initEntries();
    return Entities_micro_instance;
  }
  function Entities_para_getInstance() {
    Entities_initEntries();
    return Entities_para_instance;
  }
  function Entities_middot_getInstance() {
    Entities_initEntries();
    return Entities_middot_instance;
  }
  function Entities_cedil_getInstance() {
    Entities_initEntries();
    return Entities_cedil_instance;
  }
  function Entities_sup1_getInstance() {
    Entities_initEntries();
    return Entities_sup1_instance;
  }
  function Entities_ordm_getInstance() {
    Entities_initEntries();
    return Entities_ordm_instance;
  }
  function Entities_raquo_getInstance() {
    Entities_initEntries();
    return Entities_raquo_instance;
  }
  function Entities_frac14_getInstance() {
    Entities_initEntries();
    return Entities_frac14_instance;
  }
  function Entities_frac12_getInstance() {
    Entities_initEntries();
    return Entities_frac12_instance;
  }
  function Entities_frac34_getInstance() {
    Entities_initEntries();
    return Entities_frac34_instance;
  }
  function Entities_iquest_getInstance() {
    Entities_initEntries();
    return Entities_iquest_instance;
  }
  function Entities_Agrave_getInstance() {
    Entities_initEntries();
    return Entities_Agrave_instance;
  }
  function Entities_Aacute_getInstance() {
    Entities_initEntries();
    return Entities_Aacute_instance;
  }
  function Entities_Acirc_getInstance() {
    Entities_initEntries();
    return Entities_Acirc_instance;
  }
  function Entities_Atilde_getInstance() {
    Entities_initEntries();
    return Entities_Atilde_instance;
  }
  function Entities_Auml_getInstance() {
    Entities_initEntries();
    return Entities_Auml_instance;
  }
  function Entities_Aring_getInstance() {
    Entities_initEntries();
    return Entities_Aring_instance;
  }
  function Entities_AElig_getInstance() {
    Entities_initEntries();
    return Entities_AElig_instance;
  }
  function Entities_Ccedil_getInstance() {
    Entities_initEntries();
    return Entities_Ccedil_instance;
  }
  function Entities_Egrave_getInstance() {
    Entities_initEntries();
    return Entities_Egrave_instance;
  }
  function Entities_Eacute_getInstance() {
    Entities_initEntries();
    return Entities_Eacute_instance;
  }
  function Entities_Ecirc_getInstance() {
    Entities_initEntries();
    return Entities_Ecirc_instance;
  }
  function Entities_Euml_getInstance() {
    Entities_initEntries();
    return Entities_Euml_instance;
  }
  function Entities_Igrave_getInstance() {
    Entities_initEntries();
    return Entities_Igrave_instance;
  }
  function Entities_Iacute_getInstance() {
    Entities_initEntries();
    return Entities_Iacute_instance;
  }
  function Entities_Icirc_getInstance() {
    Entities_initEntries();
    return Entities_Icirc_instance;
  }
  function Entities_Iuml_getInstance() {
    Entities_initEntries();
    return Entities_Iuml_instance;
  }
  function Entities_ETH_getInstance() {
    Entities_initEntries();
    return Entities_ETH_instance;
  }
  function Entities_Ntilde_getInstance() {
    Entities_initEntries();
    return Entities_Ntilde_instance;
  }
  function Entities_Ograve_getInstance() {
    Entities_initEntries();
    return Entities_Ograve_instance;
  }
  function Entities_Oacute_getInstance() {
    Entities_initEntries();
    return Entities_Oacute_instance;
  }
  function Entities_Ocirc_getInstance() {
    Entities_initEntries();
    return Entities_Ocirc_instance;
  }
  function Entities_Otilde_getInstance() {
    Entities_initEntries();
    return Entities_Otilde_instance;
  }
  function Entities_Ouml_getInstance() {
    Entities_initEntries();
    return Entities_Ouml_instance;
  }
  function Entities_times_getInstance() {
    Entities_initEntries();
    return Entities_times_instance;
  }
  function Entities_Oslash_getInstance() {
    Entities_initEntries();
    return Entities_Oslash_instance;
  }
  function Entities_Ugrave_getInstance() {
    Entities_initEntries();
    return Entities_Ugrave_instance;
  }
  function Entities_Uacute_getInstance() {
    Entities_initEntries();
    return Entities_Uacute_instance;
  }
  function Entities_Ucirc_getInstance() {
    Entities_initEntries();
    return Entities_Ucirc_instance;
  }
  function Entities_Uuml_getInstance() {
    Entities_initEntries();
    return Entities_Uuml_instance;
  }
  function Entities_Yacute_getInstance() {
    Entities_initEntries();
    return Entities_Yacute_instance;
  }
  function Entities_THORN_getInstance() {
    Entities_initEntries();
    return Entities_THORN_instance;
  }
  function Entities_szlig_getInstance() {
    Entities_initEntries();
    return Entities_szlig_instance;
  }
  function Entities_agrave_getInstance() {
    Entities_initEntries();
    return Entities_agrave_instance;
  }
  function Entities_aacute_getInstance() {
    Entities_initEntries();
    return Entities_aacute_instance;
  }
  function Entities_acirc_getInstance() {
    Entities_initEntries();
    return Entities_acirc_instance;
  }
  function Entities_atilde_getInstance() {
    Entities_initEntries();
    return Entities_atilde_instance;
  }
  function Entities_auml_getInstance() {
    Entities_initEntries();
    return Entities_auml_instance;
  }
  function Entities_aring_getInstance() {
    Entities_initEntries();
    return Entities_aring_instance;
  }
  function Entities_aelig_getInstance() {
    Entities_initEntries();
    return Entities_aelig_instance;
  }
  function Entities_ccedil_getInstance() {
    Entities_initEntries();
    return Entities_ccedil_instance;
  }
  function Entities_egrave_getInstance() {
    Entities_initEntries();
    return Entities_egrave_instance;
  }
  function Entities_eacute_getInstance() {
    Entities_initEntries();
    return Entities_eacute_instance;
  }
  function Entities_ecirc_getInstance() {
    Entities_initEntries();
    return Entities_ecirc_instance;
  }
  function Entities_euml_getInstance() {
    Entities_initEntries();
    return Entities_euml_instance;
  }
  function Entities_igrave_getInstance() {
    Entities_initEntries();
    return Entities_igrave_instance;
  }
  function Entities_iacute_getInstance() {
    Entities_initEntries();
    return Entities_iacute_instance;
  }
  function Entities_icirc_getInstance() {
    Entities_initEntries();
    return Entities_icirc_instance;
  }
  function Entities_iuml_getInstance() {
    Entities_initEntries();
    return Entities_iuml_instance;
  }
  function Entities_eth_getInstance() {
    Entities_initEntries();
    return Entities_eth_instance;
  }
  function Entities_ntilde_getInstance() {
    Entities_initEntries();
    return Entities_ntilde_instance;
  }
  function Entities_ograve_getInstance() {
    Entities_initEntries();
    return Entities_ograve_instance;
  }
  function Entities_oacute_getInstance() {
    Entities_initEntries();
    return Entities_oacute_instance;
  }
  function Entities_ocirc_getInstance() {
    Entities_initEntries();
    return Entities_ocirc_instance;
  }
  function Entities_otilde_getInstance() {
    Entities_initEntries();
    return Entities_otilde_instance;
  }
  function Entities_ouml_getInstance() {
    Entities_initEntries();
    return Entities_ouml_instance;
  }
  function Entities_divide_getInstance() {
    Entities_initEntries();
    return Entities_divide_instance;
  }
  function Entities_oslash_getInstance() {
    Entities_initEntries();
    return Entities_oslash_instance;
  }
  function Entities_ugrave_getInstance() {
    Entities_initEntries();
    return Entities_ugrave_instance;
  }
  function Entities_uacute_getInstance() {
    Entities_initEntries();
    return Entities_uacute_instance;
  }
  function Entities_ucirc_getInstance() {
    Entities_initEntries();
    return Entities_ucirc_instance;
  }
  function Entities_uuml_getInstance() {
    Entities_initEntries();
    return Entities_uuml_instance;
  }
  function Entities_yacute_getInstance() {
    Entities_initEntries();
    return Entities_yacute_instance;
  }
  function Entities_thorn_getInstance() {
    Entities_initEntries();
    return Entities_thorn_instance;
  }
  function Entities_yuml_getInstance() {
    Entities_initEntries();
    return Entities_yuml_instance;
  }
  function _get_dirValues_() {
    return dirValues;
  }
  var dirValues;
  function _get_draggableValues_() {
    return draggableValues;
  }
  var draggableValues;
  function _get_runAtValues_() {
    return runAtValues;
  }
  var runAtValues;
  function _get_areaShapeValues_() {
    return areaShapeValues;
  }
  var areaShapeValues;
  function _get_buttonFormEncTypeValues_() {
    return buttonFormEncTypeValues;
  }
  var buttonFormEncTypeValues;
  function _get_buttonFormMethodValues_() {
    return buttonFormMethodValues;
  }
  var buttonFormMethodValues;
  function _get_buttonTypeValues_() {
    return buttonTypeValues;
  }
  var buttonTypeValues;
  function _get_commandTypeValues_() {
    return commandTypeValues;
  }
  var commandTypeValues;
  function _get_formEncTypeValues_() {
    return formEncTypeValues;
  }
  var formEncTypeValues;
  function _get_formMethodValues_() {
    return formMethodValues;
  }
  var formMethodValues;
  function _get_iframeSandboxValues_() {
    return iframeSandboxValues;
  }
  var iframeSandboxValues;
  function _get_inputTypeValues_() {
    return inputTypeValues;
  }
  var inputTypeValues;
  function _get_inputFormEncTypeValues_() {
    return inputFormEncTypeValues;
  }
  var inputFormEncTypeValues;
  function _get_inputFormMethodValues_() {
    return inputFormMethodValues;
  }
  var inputFormMethodValues;
  function _get_keyGenKeyTypeValues_() {
    return keyGenKeyTypeValues;
  }
  var keyGenKeyTypeValues;
  function _get_textAreaWrapValues_() {
    return textAreaWrapValues;
  }
  var textAreaWrapValues;
  function _get_thScopeValues_() {
    return thScopeValues;
  }
  var thScopeValues;
  var ButtonFormEncType_multipartFormData_instance;
  var ButtonFormEncType_applicationXWwwFormUrlEncoded_instance;
  var ButtonFormEncType_textPlain_instance;
  function values_10() {
    return [ButtonFormEncType_multipartFormData_getInstance(), ButtonFormEncType_applicationXWwwFormUrlEncoded_getInstance(), ButtonFormEncType_textPlain_getInstance()];
  }
  function valueOf_10(value) {
    switch (value) {
      case 'multipartFormData':
        return ButtonFormEncType_multipartFormData_getInstance();
      case 'applicationXWwwFormUrlEncoded':
        return ButtonFormEncType_applicationXWwwFormUrlEncoded_getInstance();
      case 'textPlain':
        return ButtonFormEncType_textPlain_getInstance();
      default:return THROW_ISE();
    }
  }
  var ButtonFormEncType_entriesInitialized;
  function ButtonFormEncType_initEntries() {
    if (ButtonFormEncType_entriesInitialized)
      return Unit_getInstance();
    ButtonFormEncType_entriesInitialized = true;
    ButtonFormEncType_multipartFormData_instance = new ButtonFormEncType('multipartFormData', 0, 'multipart/form-data');
    ButtonFormEncType_applicationXWwwFormUrlEncoded_instance = new ButtonFormEncType('applicationXWwwFormUrlEncoded', 1, 'application/x-www-form-urlencoded');
    ButtonFormEncType_textPlain_instance = new ButtonFormEncType('textPlain', 2, 'text/plain');
  }
  function ButtonFormEncType(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this._realValue = realValue;
  }
  ButtonFormEncType.prototype._get_realValue__16 = function () {
    return this._realValue;
  };
  ButtonFormEncType.$metadata$ = {
    simpleName: 'ButtonFormEncType',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var ButtonFormMethod_get_instance;
  var ButtonFormMethod_post_instance;
  var ButtonFormMethod_put_instance;
  var ButtonFormMethod_delete_instance;
  var ButtonFormMethod_patch_instance;
  function values_11() {
    return [ButtonFormMethod_get_getInstance(), ButtonFormMethod_post_getInstance(), ButtonFormMethod_put_getInstance(), ButtonFormMethod_delete_getInstance(), ButtonFormMethod_patch_getInstance()];
  }
  function valueOf_11(value) {
    switch (value) {
      case 'get':
        return ButtonFormMethod_get_getInstance();
      case 'post':
        return ButtonFormMethod_post_getInstance();
      case 'put':
        return ButtonFormMethod_put_getInstance();
      case 'delete':
        return ButtonFormMethod_delete_getInstance();
      case 'patch':
        return ButtonFormMethod_patch_getInstance();
      default:return THROW_ISE();
    }
  }
  var ButtonFormMethod_entriesInitialized;
  function ButtonFormMethod_initEntries() {
    if (ButtonFormMethod_entriesInitialized)
      return Unit_getInstance();
    ButtonFormMethod_entriesInitialized = true;
    ButtonFormMethod_get_instance = new ButtonFormMethod('get', 0, 'get');
    ButtonFormMethod_post_instance = new ButtonFormMethod('post', 1, 'post');
    ButtonFormMethod_put_instance = new ButtonFormMethod('put', 2, 'put');
    ButtonFormMethod_delete_instance = new ButtonFormMethod('delete', 3, 'delete');
    ButtonFormMethod_patch_instance = new ButtonFormMethod('patch', 4, 'patch');
  }
  function ButtonFormMethod(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this._realValue_0 = realValue;
  }
  ButtonFormMethod.prototype._get_realValue__16 = function () {
    return this._realValue_0;
  };
  ButtonFormMethod.$metadata$ = {
    simpleName: 'ButtonFormMethod',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var ButtonType_button_instance;
  var ButtonType_reset_instance;
  var ButtonType_submit_instance;
  function values_12() {
    return [ButtonType_button_getInstance(), ButtonType_reset_getInstance(), ButtonType_submit_getInstance()];
  }
  function valueOf_12(value) {
    switch (value) {
      case 'button':
        return ButtonType_button_getInstance();
      case 'reset':
        return ButtonType_reset_getInstance();
      case 'submit':
        return ButtonType_submit_getInstance();
      default:return THROW_ISE();
    }
  }
  var ButtonType_entriesInitialized;
  function ButtonType_initEntries() {
    if (ButtonType_entriesInitialized)
      return Unit_getInstance();
    ButtonType_entriesInitialized = true;
    ButtonType_button_instance = new ButtonType('button', 0, 'button');
    ButtonType_reset_instance = new ButtonType('reset', 1, 'reset');
    ButtonType_submit_instance = new ButtonType('submit', 2, 'submit');
  }
  function ButtonType(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this._realValue_1 = realValue;
  }
  ButtonType.prototype._get_realValue__16 = function () {
    return this._realValue_1;
  };
  ButtonType.$metadata$ = {
    simpleName: 'ButtonType',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var CommandType_command_instance;
  var CommandType_checkBox_instance;
  var CommandType_radio_instance;
  function values_13() {
    return [CommandType_command_getInstance(), CommandType_checkBox_getInstance(), CommandType_radio_getInstance()];
  }
  function valueOf_13(value) {
    switch (value) {
      case 'command':
        return CommandType_command_getInstance();
      case 'checkBox':
        return CommandType_checkBox_getInstance();
      case 'radio':
        return CommandType_radio_getInstance();
      default:return THROW_ISE();
    }
  }
  var CommandType_entriesInitialized;
  function CommandType_initEntries() {
    if (CommandType_entriesInitialized)
      return Unit_getInstance();
    CommandType_entriesInitialized = true;
    CommandType_command_instance = new CommandType('command', 0, 'command');
    CommandType_checkBox_instance = new CommandType('checkBox', 1, 'checkbox');
    CommandType_radio_instance = new CommandType('radio', 2, 'radio');
  }
  function CommandType(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this._realValue_2 = realValue;
  }
  CommandType.prototype._get_realValue__16 = function () {
    return this._realValue_2;
  };
  CommandType.$metadata$ = {
    simpleName: 'CommandType',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var Dir_ltr_instance;
  var Dir_rtl_instance;
  function values_14() {
    return [Dir_ltr_getInstance(), Dir_rtl_getInstance()];
  }
  function valueOf_14(value) {
    switch (value) {
      case 'ltr':
        return Dir_ltr_getInstance();
      case 'rtl':
        return Dir_rtl_getInstance();
      default:return THROW_ISE();
    }
  }
  var Dir_entriesInitialized;
  function Dir_initEntries() {
    if (Dir_entriesInitialized)
      return Unit_getInstance();
    Dir_entriesInitialized = true;
    Dir_ltr_instance = new Dir('ltr', 0, 'ltr');
    Dir_rtl_instance = new Dir('rtl', 1, 'rtl');
  }
  function Dir(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this._realValue_3 = realValue;
  }
  Dir.prototype._get_realValue__16 = function () {
    return this._realValue_3;
  };
  Dir.$metadata$ = {
    simpleName: 'Dir',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var Draggable_htmlTrue_instance;
  var Draggable_htmlFalse_instance;
  var Draggable_auto_instance;
  function values_15() {
    return [Draggable_htmlTrue_getInstance(), Draggable_htmlFalse_getInstance(), Draggable_auto_getInstance()];
  }
  function valueOf_15(value) {
    switch (value) {
      case 'htmlTrue':
        return Draggable_htmlTrue_getInstance();
      case 'htmlFalse':
        return Draggable_htmlFalse_getInstance();
      case 'auto':
        return Draggable_auto_getInstance();
      default:return THROW_ISE();
    }
  }
  var Draggable_entriesInitialized;
  function Draggable_initEntries() {
    if (Draggable_entriesInitialized)
      return Unit_getInstance();
    Draggable_entriesInitialized = true;
    Draggable_htmlTrue_instance = new Draggable('htmlTrue', 0, 'true');
    Draggable_htmlFalse_instance = new Draggable('htmlFalse', 1, 'false');
    Draggable_auto_instance = new Draggable('auto', 2, 'auto');
  }
  function Draggable(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this._realValue_4 = realValue;
  }
  Draggable.prototype._get_realValue__16 = function () {
    return this._realValue_4;
  };
  Draggable.$metadata$ = {
    simpleName: 'Draggable',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var FormEncType_multipartFormData_instance;
  var FormEncType_applicationXWwwFormUrlEncoded_instance;
  var FormEncType_textPlain_instance;
  function values_16() {
    return [FormEncType_multipartFormData_getInstance(), FormEncType_applicationXWwwFormUrlEncoded_getInstance(), FormEncType_textPlain_getInstance()];
  }
  function valueOf_16(value) {
    switch (value) {
      case 'multipartFormData':
        return FormEncType_multipartFormData_getInstance();
      case 'applicationXWwwFormUrlEncoded':
        return FormEncType_applicationXWwwFormUrlEncoded_getInstance();
      case 'textPlain':
        return FormEncType_textPlain_getInstance();
      default:return THROW_ISE();
    }
  }
  var FormEncType_entriesInitialized;
  function FormEncType_initEntries() {
    if (FormEncType_entriesInitialized)
      return Unit_getInstance();
    FormEncType_entriesInitialized = true;
    FormEncType_multipartFormData_instance = new FormEncType('multipartFormData', 0, 'multipart/form-data');
    FormEncType_applicationXWwwFormUrlEncoded_instance = new FormEncType('applicationXWwwFormUrlEncoded', 1, 'application/x-www-form-urlencoded');
    FormEncType_textPlain_instance = new FormEncType('textPlain', 2, 'text/plain');
  }
  function FormEncType(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this._realValue_5 = realValue;
  }
  FormEncType.prototype._get_realValue__16 = function () {
    return this._realValue_5;
  };
  FormEncType.$metadata$ = {
    simpleName: 'FormEncType',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var FormMethod_get_instance;
  var FormMethod_post_instance;
  var FormMethod_put_instance;
  var FormMethod_delete_instance;
  var FormMethod_patch_instance;
  function values_17() {
    return [FormMethod_get_getInstance(), FormMethod_post_getInstance(), FormMethod_put_getInstance(), FormMethod_delete_getInstance(), FormMethod_patch_getInstance()];
  }
  function valueOf_17(value) {
    switch (value) {
      case 'get':
        return FormMethod_get_getInstance();
      case 'post':
        return FormMethod_post_getInstance();
      case 'put':
        return FormMethod_put_getInstance();
      case 'delete':
        return FormMethod_delete_getInstance();
      case 'patch':
        return FormMethod_patch_getInstance();
      default:return THROW_ISE();
    }
  }
  var FormMethod_entriesInitialized;
  function FormMethod_initEntries() {
    if (FormMethod_entriesInitialized)
      return Unit_getInstance();
    FormMethod_entriesInitialized = true;
    FormMethod_get_instance = new FormMethod('get', 0, 'get');
    FormMethod_post_instance = new FormMethod('post', 1, 'post');
    FormMethod_put_instance = new FormMethod('put', 2, 'put');
    FormMethod_delete_instance = new FormMethod('delete', 3, 'delete');
    FormMethod_patch_instance = new FormMethod('patch', 4, 'patch');
  }
  function FormMethod(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this._realValue_6 = realValue;
  }
  FormMethod.prototype._get_realValue__16 = function () {
    return this._realValue_6;
  };
  FormMethod.$metadata$ = {
    simpleName: 'FormMethod',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var IframeSandbox_allowSameOrigin_instance;
  var IframeSandbox_allowFormS_instance;
  var IframeSandbox_allowScripts_instance;
  function values_18() {
    return [IframeSandbox_allowSameOrigin_getInstance(), IframeSandbox_allowFormS_getInstance(), IframeSandbox_allowScripts_getInstance()];
  }
  function valueOf_18(value) {
    switch (value) {
      case 'allowSameOrigin':
        return IframeSandbox_allowSameOrigin_getInstance();
      case 'allowFormS':
        return IframeSandbox_allowFormS_getInstance();
      case 'allowScripts':
        return IframeSandbox_allowScripts_getInstance();
      default:return THROW_ISE();
    }
  }
  var IframeSandbox_entriesInitialized;
  function IframeSandbox_initEntries() {
    if (IframeSandbox_entriesInitialized)
      return Unit_getInstance();
    IframeSandbox_entriesInitialized = true;
    IframeSandbox_allowSameOrigin_instance = new IframeSandbox('allowSameOrigin', 0, 'allow-same-origin');
    IframeSandbox_allowFormS_instance = new IframeSandbox('allowFormS', 1, 'allow-forms');
    IframeSandbox_allowScripts_instance = new IframeSandbox('allowScripts', 2, 'allow-scripts');
  }
  function IframeSandbox(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this._realValue_7 = realValue;
  }
  IframeSandbox.prototype._get_realValue__16 = function () {
    return this._realValue_7;
  };
  IframeSandbox.$metadata$ = {
    simpleName: 'IframeSandbox',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var InputFormEncType_multipartFormData_instance;
  var InputFormEncType_applicationXWwwFormUrlEncoded_instance;
  var InputFormEncType_textPlain_instance;
  function values_19() {
    return [InputFormEncType_multipartFormData_getInstance(), InputFormEncType_applicationXWwwFormUrlEncoded_getInstance(), InputFormEncType_textPlain_getInstance()];
  }
  function valueOf_19(value) {
    switch (value) {
      case 'multipartFormData':
        return InputFormEncType_multipartFormData_getInstance();
      case 'applicationXWwwFormUrlEncoded':
        return InputFormEncType_applicationXWwwFormUrlEncoded_getInstance();
      case 'textPlain':
        return InputFormEncType_textPlain_getInstance();
      default:return THROW_ISE();
    }
  }
  var InputFormEncType_entriesInitialized;
  function InputFormEncType_initEntries() {
    if (InputFormEncType_entriesInitialized)
      return Unit_getInstance();
    InputFormEncType_entriesInitialized = true;
    InputFormEncType_multipartFormData_instance = new InputFormEncType('multipartFormData', 0, 'multipart/form-data');
    InputFormEncType_applicationXWwwFormUrlEncoded_instance = new InputFormEncType('applicationXWwwFormUrlEncoded', 1, 'application/x-www-form-urlencoded');
    InputFormEncType_textPlain_instance = new InputFormEncType('textPlain', 2, 'text/plain');
  }
  function InputFormEncType(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this._realValue_8 = realValue;
  }
  InputFormEncType.prototype._get_realValue__16 = function () {
    return this._realValue_8;
  };
  InputFormEncType.$metadata$ = {
    simpleName: 'InputFormEncType',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var InputFormMethod_get_instance;
  var InputFormMethod_post_instance;
  var InputFormMethod_put_instance;
  var InputFormMethod_delete_instance;
  var InputFormMethod_patch_instance;
  function values_20() {
    return [InputFormMethod_get_getInstance(), InputFormMethod_post_getInstance(), InputFormMethod_put_getInstance(), InputFormMethod_delete_getInstance(), InputFormMethod_patch_getInstance()];
  }
  function valueOf_20(value) {
    switch (value) {
      case 'get':
        return InputFormMethod_get_getInstance();
      case 'post':
        return InputFormMethod_post_getInstance();
      case 'put':
        return InputFormMethod_put_getInstance();
      case 'delete':
        return InputFormMethod_delete_getInstance();
      case 'patch':
        return InputFormMethod_patch_getInstance();
      default:return THROW_ISE();
    }
  }
  var InputFormMethod_entriesInitialized;
  function InputFormMethod_initEntries() {
    if (InputFormMethod_entriesInitialized)
      return Unit_getInstance();
    InputFormMethod_entriesInitialized = true;
    InputFormMethod_get_instance = new InputFormMethod('get', 0, 'get');
    InputFormMethod_post_instance = new InputFormMethod('post', 1, 'post');
    InputFormMethod_put_instance = new InputFormMethod('put', 2, 'put');
    InputFormMethod_delete_instance = new InputFormMethod('delete', 3, 'delete');
    InputFormMethod_patch_instance = new InputFormMethod('patch', 4, 'patch');
  }
  function InputFormMethod(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this._realValue_9 = realValue;
  }
  InputFormMethod.prototype._get_realValue__16 = function () {
    return this._realValue_9;
  };
  InputFormMethod.$metadata$ = {
    simpleName: 'InputFormMethod',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var InputType_button_instance;
  var InputType_checkBox_instance;
  var InputType_color_instance;
  var InputType_date_instance;
  var InputType_dateTime_instance;
  var InputType_dateTimeLocal_instance;
  var InputType_email_instance;
  var InputType_file_instance;
  var InputType_hidden_instance;
  var InputType_image_instance;
  var InputType_month_instance;
  var InputType_number_instance;
  var InputType_password_instance;
  var InputType_radio_instance;
  var InputType_range_instance;
  var InputType_reset_instance;
  var InputType_search_instance;
  var InputType_submit_instance;
  var InputType_text_instance;
  var InputType_tel_instance;
  var InputType_time_instance;
  var InputType_url_instance;
  var InputType_week_instance;
  function values_21() {
    return [InputType_button_getInstance(), InputType_checkBox_getInstance(), InputType_color_getInstance(), InputType_date_getInstance(), InputType_dateTime_getInstance(), InputType_dateTimeLocal_getInstance(), InputType_email_getInstance(), InputType_file_getInstance(), InputType_hidden_getInstance(), InputType_image_getInstance(), InputType_month_getInstance(), InputType_number_getInstance(), InputType_password_getInstance(), InputType_radio_getInstance(), InputType_range_getInstance(), InputType_reset_getInstance(), InputType_search_getInstance(), InputType_submit_getInstance(), InputType_text_getInstance(), InputType_tel_getInstance(), InputType_time_getInstance(), InputType_url_getInstance(), InputType_week_getInstance()];
  }
  function valueOf_21(value) {
    switch (value) {
      case 'button':
        return InputType_button_getInstance();
      case 'checkBox':
        return InputType_checkBox_getInstance();
      case 'color':
        return InputType_color_getInstance();
      case 'date':
        return InputType_date_getInstance();
      case 'dateTime':
        return InputType_dateTime_getInstance();
      case 'dateTimeLocal':
        return InputType_dateTimeLocal_getInstance();
      case 'email':
        return InputType_email_getInstance();
      case 'file':
        return InputType_file_getInstance();
      case 'hidden':
        return InputType_hidden_getInstance();
      case 'image':
        return InputType_image_getInstance();
      case 'month':
        return InputType_month_getInstance();
      case 'number':
        return InputType_number_getInstance();
      case 'password':
        return InputType_password_getInstance();
      case 'radio':
        return InputType_radio_getInstance();
      case 'range':
        return InputType_range_getInstance();
      case 'reset':
        return InputType_reset_getInstance();
      case 'search':
        return InputType_search_getInstance();
      case 'submit':
        return InputType_submit_getInstance();
      case 'text':
        return InputType_text_getInstance();
      case 'tel':
        return InputType_tel_getInstance();
      case 'time':
        return InputType_time_getInstance();
      case 'url':
        return InputType_url_getInstance();
      case 'week':
        return InputType_week_getInstance();
      default:return THROW_ISE();
    }
  }
  var InputType_entriesInitialized;
  function InputType_initEntries() {
    if (InputType_entriesInitialized)
      return Unit_getInstance();
    InputType_entriesInitialized = true;
    InputType_button_instance = new InputType('button', 0, 'button');
    InputType_checkBox_instance = new InputType('checkBox', 1, 'checkbox');
    InputType_color_instance = new InputType('color', 2, 'color');
    InputType_date_instance = new InputType('date', 3, 'date');
    InputType_dateTime_instance = new InputType('dateTime', 4, 'datetime');
    InputType_dateTimeLocal_instance = new InputType('dateTimeLocal', 5, 'datetime-local');
    InputType_email_instance = new InputType('email', 6, 'email');
    InputType_file_instance = new InputType('file', 7, 'file');
    InputType_hidden_instance = new InputType('hidden', 8, 'hidden');
    InputType_image_instance = new InputType('image', 9, 'image');
    InputType_month_instance = new InputType('month', 10, 'month');
    InputType_number_instance = new InputType('number', 11, 'number');
    InputType_password_instance = new InputType('password', 12, 'password');
    InputType_radio_instance = new InputType('radio', 13, 'radio');
    InputType_range_instance = new InputType('range', 14, 'range');
    InputType_reset_instance = new InputType('reset', 15, 'reset');
    InputType_search_instance = new InputType('search', 16, 'search');
    InputType_submit_instance = new InputType('submit', 17, 'submit');
    InputType_text_instance = new InputType('text', 18, 'text');
    InputType_tel_instance = new InputType('tel', 19, 'tel');
    InputType_time_instance = new InputType('time', 20, 'time');
    InputType_url_instance = new InputType('url', 21, 'url');
    InputType_week_instance = new InputType('week', 22, 'week');
  }
  function InputType(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this._realValue_10 = realValue;
  }
  InputType.prototype._get_realValue__16 = function () {
    return this._realValue_10;
  };
  InputType.$metadata$ = {
    simpleName: 'InputType',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var KeyGenKeyType_rsa_instance;
  function values_22() {
    return [KeyGenKeyType_rsa_getInstance()];
  }
  function valueOf_22(value) {
    return 'rsa' === value ? KeyGenKeyType_rsa_getInstance() : THROW_ISE();
  }
  var KeyGenKeyType_entriesInitialized;
  function KeyGenKeyType_initEntries() {
    if (KeyGenKeyType_entriesInitialized)
      return Unit_getInstance();
    KeyGenKeyType_entriesInitialized = true;
    KeyGenKeyType_rsa_instance = new KeyGenKeyType('rsa', 0, 'rsa');
  }
  function KeyGenKeyType(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this._realValue_11 = realValue;
  }
  KeyGenKeyType.prototype._get_realValue__16 = function () {
    return this._realValue_11;
  };
  KeyGenKeyType.$metadata$ = {
    simpleName: 'KeyGenKeyType',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var RunAt_server_instance;
  function values_23() {
    return [RunAt_server_getInstance()];
  }
  function valueOf_23(value) {
    return 'server' === value ? RunAt_server_getInstance() : THROW_ISE();
  }
  var RunAt_entriesInitialized;
  function RunAt_initEntries() {
    if (RunAt_entriesInitialized)
      return Unit_getInstance();
    RunAt_entriesInitialized = true;
    RunAt_server_instance = new RunAt('server', 0, 'server');
  }
  function RunAt(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this._realValue_12 = realValue;
  }
  RunAt.prototype._get_realValue__16 = function () {
    return this._realValue_12;
  };
  RunAt.$metadata$ = {
    simpleName: 'RunAt',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var TextAreaWrap_hard_instance;
  var TextAreaWrap_soft_instance;
  function values_24() {
    return [TextAreaWrap_hard_getInstance(), TextAreaWrap_soft_getInstance()];
  }
  function valueOf_24(value) {
    switch (value) {
      case 'hard':
        return TextAreaWrap_hard_getInstance();
      case 'soft':
        return TextAreaWrap_soft_getInstance();
      default:return THROW_ISE();
    }
  }
  var TextAreaWrap_entriesInitialized;
  function TextAreaWrap_initEntries() {
    if (TextAreaWrap_entriesInitialized)
      return Unit_getInstance();
    TextAreaWrap_entriesInitialized = true;
    TextAreaWrap_hard_instance = new TextAreaWrap('hard', 0, 'hard');
    TextAreaWrap_soft_instance = new TextAreaWrap('soft', 1, 'soft');
  }
  function TextAreaWrap(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this._realValue_13 = realValue;
  }
  TextAreaWrap.prototype._get_realValue__16 = function () {
    return this._realValue_13;
  };
  TextAreaWrap.$metadata$ = {
    simpleName: 'TextAreaWrap',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var ThScope_col_instance;
  var ThScope_colGroup_instance;
  var ThScope_row_instance;
  var ThScope_rowGroup_instance;
  function values_25() {
    return [ThScope_col_getInstance(), ThScope_colGroup_getInstance(), ThScope_row_getInstance(), ThScope_rowGroup_getInstance()];
  }
  function valueOf_25(value) {
    switch (value) {
      case 'col':
        return ThScope_col_getInstance();
      case 'colGroup':
        return ThScope_colGroup_getInstance();
      case 'row':
        return ThScope_row_getInstance();
      case 'rowGroup':
        return ThScope_rowGroup_getInstance();
      default:return THROW_ISE();
    }
  }
  var ThScope_entriesInitialized;
  function ThScope_initEntries() {
    if (ThScope_entriesInitialized)
      return Unit_getInstance();
    ThScope_entriesInitialized = true;
    ThScope_col_instance = new ThScope('col', 0, 'col');
    ThScope_colGroup_instance = new ThScope('colGroup', 1, 'colgroup');
    ThScope_row_instance = new ThScope('row', 2, 'row');
    ThScope_rowGroup_instance = new ThScope('rowGroup', 3, 'rowgroup');
  }
  function ThScope(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this._realValue_14 = realValue;
  }
  ThScope.prototype._get_realValue__16 = function () {
    return this._realValue_14;
  };
  ThScope.$metadata$ = {
    simpleName: 'ThScope',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var AreaShape_rect_instance;
  var AreaShape_circle_instance;
  var AreaShape_poly_instance;
  var AreaShape_default_instance;
  function values_26() {
    return [AreaShape_rect_getInstance(), AreaShape_circle_getInstance(), AreaShape_poly_getInstance(), AreaShape_default_getInstance()];
  }
  function valueOf_26(value) {
    switch (value) {
      case 'rect':
        return AreaShape_rect_getInstance();
      case 'circle':
        return AreaShape_circle_getInstance();
      case 'poly':
        return AreaShape_poly_getInstance();
      case 'default':
        return AreaShape_default_getInstance();
      default:return THROW_ISE();
    }
  }
  var AreaShape_entriesInitialized;
  function AreaShape_initEntries() {
    if (AreaShape_entriesInitialized)
      return Unit_getInstance();
    AreaShape_entriesInitialized = true;
    AreaShape_rect_instance = new AreaShape('rect', 0, 'rect');
    AreaShape_circle_instance = new AreaShape('circle', 1, 'circle');
    AreaShape_poly_instance = new AreaShape('poly', 2, 'poly');
    AreaShape_default_instance = new AreaShape('default', 3, 'default');
  }
  function AreaShape(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this._realValue_15 = realValue;
  }
  AreaShape.prototype._get_realValue__16 = function () {
    return this._realValue_15;
  };
  AreaShape.$metadata$ = {
    simpleName: 'AreaShape',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  function ButtonFormEncType_multipartFormData_getInstance() {
    ButtonFormEncType_initEntries();
    return ButtonFormEncType_multipartFormData_instance;
  }
  function ButtonFormEncType_applicationXWwwFormUrlEncoded_getInstance() {
    ButtonFormEncType_initEntries();
    return ButtonFormEncType_applicationXWwwFormUrlEncoded_instance;
  }
  function ButtonFormEncType_textPlain_getInstance() {
    ButtonFormEncType_initEntries();
    return ButtonFormEncType_textPlain_instance;
  }
  function ButtonFormMethod_get_getInstance() {
    ButtonFormMethod_initEntries();
    return ButtonFormMethod_get_instance;
  }
  function ButtonFormMethod_post_getInstance() {
    ButtonFormMethod_initEntries();
    return ButtonFormMethod_post_instance;
  }
  function ButtonFormMethod_put_getInstance() {
    ButtonFormMethod_initEntries();
    return ButtonFormMethod_put_instance;
  }
  function ButtonFormMethod_delete_getInstance() {
    ButtonFormMethod_initEntries();
    return ButtonFormMethod_delete_instance;
  }
  function ButtonFormMethod_patch_getInstance() {
    ButtonFormMethod_initEntries();
    return ButtonFormMethod_patch_instance;
  }
  function ButtonType_button_getInstance() {
    ButtonType_initEntries();
    return ButtonType_button_instance;
  }
  function ButtonType_reset_getInstance() {
    ButtonType_initEntries();
    return ButtonType_reset_instance;
  }
  function ButtonType_submit_getInstance() {
    ButtonType_initEntries();
    return ButtonType_submit_instance;
  }
  function CommandType_command_getInstance() {
    CommandType_initEntries();
    return CommandType_command_instance;
  }
  function CommandType_checkBox_getInstance() {
    CommandType_initEntries();
    return CommandType_checkBox_instance;
  }
  function CommandType_radio_getInstance() {
    CommandType_initEntries();
    return CommandType_radio_instance;
  }
  function Dir_ltr_getInstance() {
    Dir_initEntries();
    return Dir_ltr_instance;
  }
  function Dir_rtl_getInstance() {
    Dir_initEntries();
    return Dir_rtl_instance;
  }
  function Draggable_htmlTrue_getInstance() {
    Draggable_initEntries();
    return Draggable_htmlTrue_instance;
  }
  function Draggable_htmlFalse_getInstance() {
    Draggable_initEntries();
    return Draggable_htmlFalse_instance;
  }
  function Draggable_auto_getInstance() {
    Draggable_initEntries();
    return Draggable_auto_instance;
  }
  function FormEncType_multipartFormData_getInstance() {
    FormEncType_initEntries();
    return FormEncType_multipartFormData_instance;
  }
  function FormEncType_applicationXWwwFormUrlEncoded_getInstance() {
    FormEncType_initEntries();
    return FormEncType_applicationXWwwFormUrlEncoded_instance;
  }
  function FormEncType_textPlain_getInstance() {
    FormEncType_initEntries();
    return FormEncType_textPlain_instance;
  }
  function FormMethod_get_getInstance() {
    FormMethod_initEntries();
    return FormMethod_get_instance;
  }
  function FormMethod_post_getInstance() {
    FormMethod_initEntries();
    return FormMethod_post_instance;
  }
  function FormMethod_put_getInstance() {
    FormMethod_initEntries();
    return FormMethod_put_instance;
  }
  function FormMethod_delete_getInstance() {
    FormMethod_initEntries();
    return FormMethod_delete_instance;
  }
  function FormMethod_patch_getInstance() {
    FormMethod_initEntries();
    return FormMethod_patch_instance;
  }
  function IframeSandbox_allowSameOrigin_getInstance() {
    IframeSandbox_initEntries();
    return IframeSandbox_allowSameOrigin_instance;
  }
  function IframeSandbox_allowFormS_getInstance() {
    IframeSandbox_initEntries();
    return IframeSandbox_allowFormS_instance;
  }
  function IframeSandbox_allowScripts_getInstance() {
    IframeSandbox_initEntries();
    return IframeSandbox_allowScripts_instance;
  }
  function InputFormEncType_multipartFormData_getInstance() {
    InputFormEncType_initEntries();
    return InputFormEncType_multipartFormData_instance;
  }
  function InputFormEncType_applicationXWwwFormUrlEncoded_getInstance() {
    InputFormEncType_initEntries();
    return InputFormEncType_applicationXWwwFormUrlEncoded_instance;
  }
  function InputFormEncType_textPlain_getInstance() {
    InputFormEncType_initEntries();
    return InputFormEncType_textPlain_instance;
  }
  function InputFormMethod_get_getInstance() {
    InputFormMethod_initEntries();
    return InputFormMethod_get_instance;
  }
  function InputFormMethod_post_getInstance() {
    InputFormMethod_initEntries();
    return InputFormMethod_post_instance;
  }
  function InputFormMethod_put_getInstance() {
    InputFormMethod_initEntries();
    return InputFormMethod_put_instance;
  }
  function InputFormMethod_delete_getInstance() {
    InputFormMethod_initEntries();
    return InputFormMethod_delete_instance;
  }
  function InputFormMethod_patch_getInstance() {
    InputFormMethod_initEntries();
    return InputFormMethod_patch_instance;
  }
  function InputType_button_getInstance() {
    InputType_initEntries();
    return InputType_button_instance;
  }
  function InputType_checkBox_getInstance() {
    InputType_initEntries();
    return InputType_checkBox_instance;
  }
  function InputType_color_getInstance() {
    InputType_initEntries();
    return InputType_color_instance;
  }
  function InputType_date_getInstance() {
    InputType_initEntries();
    return InputType_date_instance;
  }
  function InputType_dateTime_getInstance() {
    InputType_initEntries();
    return InputType_dateTime_instance;
  }
  function InputType_dateTimeLocal_getInstance() {
    InputType_initEntries();
    return InputType_dateTimeLocal_instance;
  }
  function InputType_email_getInstance() {
    InputType_initEntries();
    return InputType_email_instance;
  }
  function InputType_file_getInstance() {
    InputType_initEntries();
    return InputType_file_instance;
  }
  function InputType_hidden_getInstance() {
    InputType_initEntries();
    return InputType_hidden_instance;
  }
  function InputType_image_getInstance() {
    InputType_initEntries();
    return InputType_image_instance;
  }
  function InputType_month_getInstance() {
    InputType_initEntries();
    return InputType_month_instance;
  }
  function InputType_number_getInstance() {
    InputType_initEntries();
    return InputType_number_instance;
  }
  function InputType_password_getInstance() {
    InputType_initEntries();
    return InputType_password_instance;
  }
  function InputType_radio_getInstance() {
    InputType_initEntries();
    return InputType_radio_instance;
  }
  function InputType_range_getInstance() {
    InputType_initEntries();
    return InputType_range_instance;
  }
  function InputType_reset_getInstance() {
    InputType_initEntries();
    return InputType_reset_instance;
  }
  function InputType_search_getInstance() {
    InputType_initEntries();
    return InputType_search_instance;
  }
  function InputType_submit_getInstance() {
    InputType_initEntries();
    return InputType_submit_instance;
  }
  function InputType_text_getInstance() {
    InputType_initEntries();
    return InputType_text_instance;
  }
  function InputType_tel_getInstance() {
    InputType_initEntries();
    return InputType_tel_instance;
  }
  function InputType_time_getInstance() {
    InputType_initEntries();
    return InputType_time_instance;
  }
  function InputType_url_getInstance() {
    InputType_initEntries();
    return InputType_url_instance;
  }
  function InputType_week_getInstance() {
    InputType_initEntries();
    return InputType_week_instance;
  }
  function KeyGenKeyType_rsa_getInstance() {
    KeyGenKeyType_initEntries();
    return KeyGenKeyType_rsa_instance;
  }
  function RunAt_server_getInstance() {
    RunAt_initEntries();
    return RunAt_server_instance;
  }
  function TextAreaWrap_hard_getInstance() {
    TextAreaWrap_initEntries();
    return TextAreaWrap_hard_instance;
  }
  function TextAreaWrap_soft_getInstance() {
    TextAreaWrap_initEntries();
    return TextAreaWrap_soft_instance;
  }
  function ThScope_col_getInstance() {
    ThScope_initEntries();
    return ThScope_col_instance;
  }
  function ThScope_colGroup_getInstance() {
    ThScope_initEntries();
    return ThScope_colGroup_instance;
  }
  function ThScope_row_getInstance() {
    ThScope_initEntries();
    return ThScope_row_instance;
  }
  function ThScope_rowGroup_getInstance() {
    ThScope_initEntries();
    return ThScope_rowGroup_instance;
  }
  function AreaShape_rect_getInstance() {
    AreaShape_initEntries();
    return AreaShape_rect_instance;
  }
  function AreaShape_circle_getInstance() {
    AreaShape_initEntries();
    return AreaShape_circle_instance;
  }
  function AreaShape_poly_getInstance() {
    AreaShape_initEntries();
    return AreaShape_poly_instance;
  }
  function AreaShape_default_getInstance() {
    AreaShape_initEntries();
    return AreaShape_default_instance;
  }
  function dirValues$init$() {
    var tmp0_associateBy_0 = values_14();
    var capacity_1 = coerceAtLeast(mapCapacity(tmp0_associateBy_0.length), 16);
    var tmp0_associateByTo_0_2 = LinkedHashMap_init_$Create$_3(capacity_1);
    var indexedObject = tmp0_associateBy_0;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element_2_4 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      tmp0_associateByTo_0_2.put_5(element_2_4._realValue_3, element_2_4);
      Unit_getInstance();
    }
    return tmp0_associateByTo_0_2;
  }
  function draggableValues$init$() {
    var tmp0_associateBy_0 = values_15();
    var capacity_1 = coerceAtLeast(mapCapacity(tmp0_associateBy_0.length), 16);
    var tmp0_associateByTo_0_2 = LinkedHashMap_init_$Create$_3(capacity_1);
    var indexedObject = tmp0_associateBy_0;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element_2_4 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      tmp0_associateByTo_0_2.put_5(element_2_4._realValue_4, element_2_4);
      Unit_getInstance();
    }
    return tmp0_associateByTo_0_2;
  }
  function runAtValues$init$() {
    var tmp0_associateBy_0 = values_23();
    var capacity_1 = coerceAtLeast(mapCapacity(tmp0_associateBy_0.length), 16);
    var tmp0_associateByTo_0_2 = LinkedHashMap_init_$Create$_3(capacity_1);
    var indexedObject = tmp0_associateBy_0;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element_2_4 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      tmp0_associateByTo_0_2.put_5(element_2_4._realValue_12, element_2_4);
      Unit_getInstance();
    }
    return tmp0_associateByTo_0_2;
  }
  function areaShapeValues$init$() {
    var tmp0_associateBy_0 = values_26();
    var capacity_1 = coerceAtLeast(mapCapacity(tmp0_associateBy_0.length), 16);
    var tmp0_associateByTo_0_2 = LinkedHashMap_init_$Create$_3(capacity_1);
    var indexedObject = tmp0_associateBy_0;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element_2_4 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      tmp0_associateByTo_0_2.put_5(element_2_4._realValue_15, element_2_4);
      Unit_getInstance();
    }
    return tmp0_associateByTo_0_2;
  }
  function buttonFormEncTypeValues$init$() {
    var tmp0_associateBy_0 = values_10();
    var capacity_1 = coerceAtLeast(mapCapacity(tmp0_associateBy_0.length), 16);
    var tmp0_associateByTo_0_2 = LinkedHashMap_init_$Create$_3(capacity_1);
    var indexedObject = tmp0_associateBy_0;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element_2_4 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      tmp0_associateByTo_0_2.put_5(element_2_4._realValue, element_2_4);
      Unit_getInstance();
    }
    return tmp0_associateByTo_0_2;
  }
  function buttonFormMethodValues$init$() {
    var tmp0_associateBy_0 = values_11();
    var capacity_1 = coerceAtLeast(mapCapacity(tmp0_associateBy_0.length), 16);
    var tmp0_associateByTo_0_2 = LinkedHashMap_init_$Create$_3(capacity_1);
    var indexedObject = tmp0_associateBy_0;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element_2_4 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      tmp0_associateByTo_0_2.put_5(element_2_4._realValue_0, element_2_4);
      Unit_getInstance();
    }
    return tmp0_associateByTo_0_2;
  }
  function buttonTypeValues$init$() {
    var tmp0_associateBy_0 = values_12();
    var capacity_1 = coerceAtLeast(mapCapacity(tmp0_associateBy_0.length), 16);
    var tmp0_associateByTo_0_2 = LinkedHashMap_init_$Create$_3(capacity_1);
    var indexedObject = tmp0_associateBy_0;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element_2_4 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      tmp0_associateByTo_0_2.put_5(element_2_4._realValue_1, element_2_4);
      Unit_getInstance();
    }
    return tmp0_associateByTo_0_2;
  }
  function commandTypeValues$init$() {
    var tmp0_associateBy_0 = values_13();
    var capacity_1 = coerceAtLeast(mapCapacity(tmp0_associateBy_0.length), 16);
    var tmp0_associateByTo_0_2 = LinkedHashMap_init_$Create$_3(capacity_1);
    var indexedObject = tmp0_associateBy_0;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element_2_4 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      tmp0_associateByTo_0_2.put_5(element_2_4._realValue_2, element_2_4);
      Unit_getInstance();
    }
    return tmp0_associateByTo_0_2;
  }
  function formEncTypeValues$init$() {
    var tmp0_associateBy_0 = values_16();
    var capacity_1 = coerceAtLeast(mapCapacity(tmp0_associateBy_0.length), 16);
    var tmp0_associateByTo_0_2 = LinkedHashMap_init_$Create$_3(capacity_1);
    var indexedObject = tmp0_associateBy_0;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element_2_4 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      tmp0_associateByTo_0_2.put_5(element_2_4._realValue_5, element_2_4);
      Unit_getInstance();
    }
    return tmp0_associateByTo_0_2;
  }
  function formMethodValues$init$() {
    var tmp0_associateBy_0 = values_17();
    var capacity_1 = coerceAtLeast(mapCapacity(tmp0_associateBy_0.length), 16);
    var tmp0_associateByTo_0_2 = LinkedHashMap_init_$Create$_3(capacity_1);
    var indexedObject = tmp0_associateBy_0;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element_2_4 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      tmp0_associateByTo_0_2.put_5(element_2_4._realValue_6, element_2_4);
      Unit_getInstance();
    }
    return tmp0_associateByTo_0_2;
  }
  function iframeSandboxValues$init$() {
    var tmp0_associateBy_0 = values_18();
    var capacity_1 = coerceAtLeast(mapCapacity(tmp0_associateBy_0.length), 16);
    var tmp0_associateByTo_0_2 = LinkedHashMap_init_$Create$_3(capacity_1);
    var indexedObject = tmp0_associateBy_0;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element_2_4 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      tmp0_associateByTo_0_2.put_5(element_2_4._realValue_7, element_2_4);
      Unit_getInstance();
    }
    return tmp0_associateByTo_0_2;
  }
  function inputTypeValues$init$() {
    var tmp0_associateBy_0 = values_21();
    var capacity_1 = coerceAtLeast(mapCapacity(tmp0_associateBy_0.length), 16);
    var tmp0_associateByTo_0_2 = LinkedHashMap_init_$Create$_3(capacity_1);
    var indexedObject = tmp0_associateBy_0;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element_2_4 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      tmp0_associateByTo_0_2.put_5(element_2_4._realValue_10, element_2_4);
      Unit_getInstance();
    }
    return tmp0_associateByTo_0_2;
  }
  function inputFormEncTypeValues$init$() {
    var tmp0_associateBy_0 = values_19();
    var capacity_1 = coerceAtLeast(mapCapacity(tmp0_associateBy_0.length), 16);
    var tmp0_associateByTo_0_2 = LinkedHashMap_init_$Create$_3(capacity_1);
    var indexedObject = tmp0_associateBy_0;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element_2_4 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      tmp0_associateByTo_0_2.put_5(element_2_4._realValue_8, element_2_4);
      Unit_getInstance();
    }
    return tmp0_associateByTo_0_2;
  }
  function inputFormMethodValues$init$() {
    var tmp0_associateBy_0 = values_20();
    var capacity_1 = coerceAtLeast(mapCapacity(tmp0_associateBy_0.length), 16);
    var tmp0_associateByTo_0_2 = LinkedHashMap_init_$Create$_3(capacity_1);
    var indexedObject = tmp0_associateBy_0;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element_2_4 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      tmp0_associateByTo_0_2.put_5(element_2_4._realValue_9, element_2_4);
      Unit_getInstance();
    }
    return tmp0_associateByTo_0_2;
  }
  function keyGenKeyTypeValues$init$() {
    var tmp0_associateBy_0 = values_22();
    var capacity_1 = coerceAtLeast(mapCapacity(tmp0_associateBy_0.length), 16);
    var tmp0_associateByTo_0_2 = LinkedHashMap_init_$Create$_3(capacity_1);
    var indexedObject = tmp0_associateBy_0;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element_2_4 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      tmp0_associateByTo_0_2.put_5(element_2_4._realValue_11, element_2_4);
      Unit_getInstance();
    }
    return tmp0_associateByTo_0_2;
  }
  function textAreaWrapValues$init$() {
    var tmp0_associateBy_0 = values_24();
    var capacity_1 = coerceAtLeast(mapCapacity(tmp0_associateBy_0.length), 16);
    var tmp0_associateByTo_0_2 = LinkedHashMap_init_$Create$_3(capacity_1);
    var indexedObject = tmp0_associateBy_0;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element_2_4 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      tmp0_associateByTo_0_2.put_5(element_2_4._realValue_13, element_2_4);
      Unit_getInstance();
    }
    return tmp0_associateByTo_0_2;
  }
  function thScopeValues$init$() {
    var tmp0_associateBy_0 = values_25();
    var capacity_1 = coerceAtLeast(mapCapacity(tmp0_associateBy_0.length), 16);
    var tmp0_associateByTo_0_2 = LinkedHashMap_init_$Create$_3(capacity_1);
    var indexedObject = tmp0_associateBy_0;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element_2_4 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      tmp0_associateByTo_0_2.put_5(element_2_4._realValue_14, element_2_4);
      Unit_getInstance();
    }
    return tmp0_associateByTo_0_2;
  }
  function HtmlBlockTag() {
  }
  HtmlBlockTag.$metadata$ = {
    simpleName: 'HtmlBlockTag',
    kind: 'interface',
    interfaces: [CommonAttributeGroupFacade, FlowContent]
  };
  function HtmlBlockInlineTag() {
  }
  HtmlBlockInlineTag.$metadata$ = {
    simpleName: 'HtmlBlockInlineTag',
    kind: 'interface',
    interfaces: [CommonAttributeGroupFacade, FlowPhrasingContent, HtmlBlockTag, HtmlInlineTag]
  };
  function CommonAttributeGroupFacadeFlowInteractivePhrasingContent() {
  }
  CommonAttributeGroupFacadeFlowInteractivePhrasingContent.$metadata$ = {
    simpleName: 'CommonAttributeGroupFacadeFlowInteractivePhrasingContent',
    kind: 'interface',
    interfaces: [CommonAttributeGroupFacade, CommonAttributeGroupFacadeFlowInteractiveContent, FlowPhrasingContent, HtmlBlockInlineTag, HtmlBlockTag, HtmlInlineTag]
  };
  function FlowPhrasingContent() {
  }
  FlowPhrasingContent.$metadata$ = {
    simpleName: 'FlowPhrasingContent',
    kind: 'interface',
    interfaces: [FlowContent, PhrasingContent]
  };
  function HtmlInlineTag() {
  }
  HtmlInlineTag.$metadata$ = {
    simpleName: 'HtmlInlineTag',
    kind: 'interface',
    interfaces: [CommonAttributeGroupFacade, PhrasingContent]
  };
  function CommonAttributeGroupFacadeFlowInteractiveContent() {
  }
  CommonAttributeGroupFacadeFlowInteractiveContent.$metadata$ = {
    simpleName: 'CommonAttributeGroupFacadeFlowInteractiveContent',
    kind: 'interface',
    interfaces: [CommonAttributeGroupFacade, HtmlBlockTag, InteractiveContent]
  };
  function div_0(_this_, classes, block) {
    var tmp0_visit_0 = new DIV(attributesMapOf('class', classes), _this_._get_consumer__21());
    return visitTag(tmp0_visit_0, _no_name_provided_$factory_45(block));
  }
  function FlowContent() {
  }
  FlowContent.$metadata$ = {
    simpleName: 'FlowContent',
    kind: 'interface',
    interfaces: [FlowOrHeadingContent, FlowOrMetaDataContent, FlowOrInteractiveContent, FlowOrPhrasingContent, FlowOrPhrasingOrMetaDataContent, SectioningOrFlowContent, FlowOrInteractiveOrPhrasingContent, Tag]
  };
  function PhrasingContent() {
  }
  PhrasingContent.$metadata$ = {
    simpleName: 'PhrasingContent',
    kind: 'interface',
    interfaces: [FlowOrPhrasingContent, FlowOrPhrasingOrMetaDataContent, FlowOrInteractiveOrPhrasingContent, Tag]
  };
  function InteractiveContent() {
  }
  InteractiveContent.$metadata$ = {
    simpleName: 'InteractiveContent',
    kind: 'interface',
    interfaces: [FlowOrInteractiveContent, FlowOrInteractiveOrPhrasingContent, Tag]
  };
  function _no_name_provided__75() {
  }
  _no_name_provided__75.prototype.invoke_113 = function (_this__0) {
    return Unit_getInstance();
  };
  _no_name_provided__75.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__75.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__76($block) {
    this._$block_3 = $block;
  }
  _no_name_provided__76.prototype.invoke_113 = function (_this__0) {
    this._$block_3(_this__0);
  };
  _no_name_provided__76.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__76.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_44() {
    var i = new _no_name_provided__75();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_45($block) {
    var i = new _no_name_provided__76($block);
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function span_0(_this_, classes, block) {
    var tmp0_visit_0 = new SPAN(attributesMapOf('class', classes), _this_._get_consumer__21());
    return visitTag(tmp0_visit_0, _no_name_provided_$factory_47(block));
  }
  function input(_this_, type, formEncType, formMethod, name, classes, block) {
    var tmp0_safe_receiver = type;
    var tmp = tmp0_safe_receiver == null ? null : enumEncode(tmp0_safe_receiver);
    var tmp1_safe_receiver = formEncType;
    var tmp_0 = tmp1_safe_receiver == null ? null : enumEncode(tmp1_safe_receiver);
    var tmp2_safe_receiver = formMethod;
    var tmp0_visit_0 = new INPUT(attributesMapOf_0(['type', tmp, 'formenctype', tmp_0, 'formmethod', tmp2_safe_receiver == null ? null : enumEncode(tmp2_safe_receiver), 'name', name, 'class', classes]), _this_._get_consumer__21());
    return visitTag(tmp0_visit_0, _no_name_provided_$factory_49(block));
  }
  function button(_this_, formEncType, formMethod, name, type, classes, block) {
    var tmp0_safe_receiver = formEncType;
    var tmp = tmp0_safe_receiver == null ? null : enumEncode(tmp0_safe_receiver);
    var tmp1_safe_receiver = formMethod;
    var tmp_0 = tmp1_safe_receiver == null ? null : enumEncode(tmp1_safe_receiver);
    var tmp2_safe_receiver = type;
    var tmp0_visit_0 = new BUTTON(attributesMapOf_0(['formenctype', tmp, 'formmethod', tmp_0, 'name', name, 'type', tmp2_safe_receiver == null ? null : enumEncode(tmp2_safe_receiver), 'class', classes]), _this_._get_consumer__21());
    return visitTag(tmp0_visit_0, _no_name_provided_$factory_51(block));
  }
  function FlowOrHeadingContent() {
  }
  FlowOrHeadingContent.$metadata$ = {
    simpleName: 'FlowOrHeadingContent',
    kind: 'interface',
    interfaces: [Tag]
  };
  function FlowOrMetaDataContent() {
  }
  FlowOrMetaDataContent.$metadata$ = {
    simpleName: 'FlowOrMetaDataContent',
    kind: 'interface',
    interfaces: [FlowOrPhrasingOrMetaDataContent, Tag]
  };
  function FlowOrInteractiveContent() {
  }
  FlowOrInteractiveContent.$metadata$ = {
    simpleName: 'FlowOrInteractiveContent',
    kind: 'interface',
    interfaces: [FlowOrInteractiveOrPhrasingContent, Tag]
  };
  function FlowOrPhrasingContent() {
  }
  FlowOrPhrasingContent.$metadata$ = {
    simpleName: 'FlowOrPhrasingContent',
    kind: 'interface',
    interfaces: [FlowOrInteractiveOrPhrasingContent, FlowOrPhrasingOrMetaDataContent, Tag]
  };
  function FlowOrPhrasingOrMetaDataContent() {
  }
  FlowOrPhrasingOrMetaDataContent.$metadata$ = {
    simpleName: 'FlowOrPhrasingOrMetaDataContent',
    kind: 'interface',
    interfaces: [Tag]
  };
  function SectioningOrFlowContent() {
  }
  SectioningOrFlowContent.$metadata$ = {
    simpleName: 'SectioningOrFlowContent',
    kind: 'interface',
    interfaces: [Tag]
  };
  function FlowOrInteractiveOrPhrasingContent() {
  }
  FlowOrInteractiveOrPhrasingContent.$metadata$ = {
    simpleName: 'FlowOrInteractiveOrPhrasingContent',
    kind: 'interface',
    interfaces: [Tag]
  };
  function _no_name_provided__77() {
  }
  _no_name_provided__77.prototype.invoke_100 = function (_this__0) {
    return Unit_getInstance();
  };
  _no_name_provided__77.prototype.invoke_81 = function (p1) {
    this.invoke_100(p1 instanceof SPAN ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__77.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__78($block) {
    this._$block_4 = $block;
  }
  _no_name_provided__78.prototype.invoke_100 = function (_this__0) {
    this._$block_4(_this__0);
  };
  _no_name_provided__78.prototype.invoke_81 = function (p1) {
    this.invoke_100(p1 instanceof SPAN ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__78.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__79() {
  }
  _no_name_provided__79.prototype.invoke_104 = function (_this__0) {
    return Unit_getInstance();
  };
  _no_name_provided__79.prototype.invoke_81 = function (p1) {
    this.invoke_104(p1 instanceof INPUT ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__79.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__80($block) {
    this._$block_5 = $block;
  }
  _no_name_provided__80.prototype.invoke_104 = function (_this__0) {
    this._$block_5(_this__0);
  };
  _no_name_provided__80.prototype.invoke_81 = function (p1) {
    this.invoke_104(p1 instanceof INPUT ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__80.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__81() {
  }
  _no_name_provided__81.prototype.invoke_108 = function (_this__0) {
    return Unit_getInstance();
  };
  _no_name_provided__81.prototype.invoke_81 = function (p1) {
    this.invoke_108(p1 instanceof BUTTON ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__81.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__82($block) {
    this._$block_6 = $block;
  }
  _no_name_provided__82.prototype.invoke_108 = function (_this__0) {
    this._$block_6(_this__0);
  };
  _no_name_provided__82.prototype.invoke_81 = function (p1) {
    this.invoke_108(p1 instanceof BUTTON ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__82.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_46() {
    var i = new _no_name_provided__77();
    return function (p1) {
      i.invoke_100(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_47($block) {
    var i = new _no_name_provided__78($block);
    return function (p1) {
      i.invoke_100(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_48() {
    var i = new _no_name_provided__79();
    return function (p1) {
      i.invoke_104(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_49($block) {
    var i = new _no_name_provided__80($block);
    return function (p1) {
      i.invoke_104(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_50() {
    var i = new _no_name_provided__81();
    return function (p1) {
      i.invoke_108(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_51($block) {
    var i = new _no_name_provided__82($block);
    return function (p1) {
      i.invoke_108(p1);
      return Unit_getInstance();
    };
  }
  function BUTTON(initialAttributes, consumer) {
    HTMLTag.call(this, 'button', consumer, initialAttributes, null, true, false);
    this._consumer_0 = consumer;
  }
  BUTTON.prototype._get_consumer__21 = function () {
    return this._consumer_0;
  };
  BUTTON.prototype._set_autoFocus__0 = function (newValue) {
    attributeBooleanTicker.set_26(this, 'autofocus', newValue);
  };
  BUTTON.prototype._get_autoFocus__0 = function () {
    return attributeBooleanTicker.get_52(this, 'autofocus');
  };
  BUTTON.prototype._set_disabled__0 = function (newValue) {
    attributeBooleanTicker.set_26(this, 'disabled', newValue);
  };
  BUTTON.prototype._get_disabled__0 = function () {
    return attributeBooleanTicker.get_52(this, 'disabled');
  };
  BUTTON.prototype._set_form__0 = function (newValue) {
    attributeStringString.set_26(this, 'form', newValue);
  };
  BUTTON.prototype._get_form__0 = function () {
    return attributeStringString.get_52(this, 'form');
  };
  BUTTON.prototype._set_formAction__0 = function (newValue) {
    attributeStringString.set_26(this, 'formaction', newValue);
  };
  BUTTON.prototype._get_formAction__0 = function () {
    return attributeStringString.get_52(this, 'formaction');
  };
  BUTTON.prototype._set_formEncType_ = function (newValue) {
    attributeButtonFormEncTypeEnumButtonFormEncTypeValues.set_26(this, 'formenctype', newValue);
  };
  BUTTON.prototype._get_formEncType__0 = function () {
    return attributeButtonFormEncTypeEnumButtonFormEncTypeValues.get_52(this, 'formenctype');
  };
  BUTTON.prototype._set_formMethod_ = function (newValue) {
    attributeButtonFormMethodEnumButtonFormMethodValues.set_26(this, 'formmethod', newValue);
  };
  BUTTON.prototype._get_formMethod__0 = function () {
    return attributeButtonFormMethodEnumButtonFormMethodValues.get_52(this, 'formmethod');
  };
  BUTTON.prototype._set_formNovalidate__0 = function (newValue) {
    attributeBooleanTicker.set_26(this, 'formnovalidate', newValue);
  };
  BUTTON.prototype._get_formNovalidate__0 = function () {
    return attributeBooleanTicker.get_52(this, 'formnovalidate');
  };
  BUTTON.prototype._set_formTarget__0 = function (newValue) {
    attributeStringString.set_26(this, 'formtarget', newValue);
  };
  BUTTON.prototype._get_formTarget__0 = function () {
    return attributeStringString.get_52(this, 'formtarget');
  };
  BUTTON.prototype._set_name__0 = function (newValue) {
    attributeStringString.set_26(this, 'name', newValue);
  };
  BUTTON.prototype._get_name__23 = function () {
    return attributeStringString.get_52(this, 'name');
  };
  BUTTON.prototype._set_value__0 = function (newValue) {
    attributeStringString.set_26(this, 'value', newValue);
  };
  BUTTON.prototype._get_value__7 = function () {
    return attributeStringString.get_52(this, 'value');
  };
  BUTTON.prototype._set_type_ = function (newValue) {
    attributeButtonTypeEnumButtonTypeValues.set_26(this, 'type', newValue);
  };
  BUTTON.prototype._get_type_ = function () {
    return attributeButtonTypeEnumButtonTypeValues.get_52(this, 'type');
  };
  BUTTON.$metadata$ = {
    simpleName: 'BUTTON',
    kind: 'class',
    interfaces: [CommonAttributeGroupFacadeFlowInteractivePhrasingContent]
  };
  function DIV(initialAttributes, consumer) {
    HTMLTag.call(this, 'div', consumer, initialAttributes, null, false, false);
    this._consumer_1 = consumer;
  }
  DIV.prototype._get_consumer__21 = function () {
    return this._consumer_1;
  };
  DIV.$metadata$ = {
    simpleName: 'DIV',
    kind: 'class',
    interfaces: [HtmlBlockTag]
  };
  function INPUT(initialAttributes, consumer) {
    HTMLTag.call(this, 'input', consumer, initialAttributes, null, true, true);
    this._consumer_2 = consumer;
  }
  INPUT.prototype._get_consumer__21 = function () {
    return this._consumer_2;
  };
  INPUT.prototype._set_type__0 = function (newValue) {
    attributeInputTypeEnumInputTypeValues.set_26(this, 'type', newValue);
  };
  INPUT.prototype._get_type_ = function () {
    return attributeInputTypeEnumInputTypeValues.get_52(this, 'type');
  };
  INPUT.prototype._set_accept_ = function (newValue) {
    attributeStringString.set_26(this, 'accept', newValue);
  };
  INPUT.prototype._get_accept_ = function () {
    return attributeStringString.get_52(this, 'accept');
  };
  INPUT.prototype._set_alt_ = function (newValue) {
    attributeStringString.set_26(this, 'alt', newValue);
  };
  INPUT.prototype._get_alt_ = function () {
    return attributeStringString.get_52(this, 'alt');
  };
  INPUT.prototype._set_autoFocus__0 = function (newValue) {
    attributeBooleanTicker.set_26(this, 'autofocus', newValue);
  };
  INPUT.prototype._get_autoFocus__0 = function () {
    return attributeBooleanTicker.get_52(this, 'autofocus');
  };
  INPUT.prototype._set_autoComplete_ = function (newValue) {
    attributeBooleanBooleanOnOff.set_26(this, 'autocomplete', newValue);
  };
  INPUT.prototype._get_autoComplete_ = function () {
    return attributeBooleanBooleanOnOff.get_52(this, 'autocomplete');
  };
  INPUT.prototype._set_checked_ = function (newValue) {
    attributeBooleanTicker.set_26(this, 'checked', newValue);
  };
  INPUT.prototype._get_checked_ = function () {
    return attributeBooleanTicker.get_52(this, 'checked');
  };
  INPUT.prototype._set_disabled__0 = function (newValue) {
    attributeBooleanTicker.set_26(this, 'disabled', newValue);
  };
  INPUT.prototype._get_disabled__0 = function () {
    return attributeBooleanTicker.get_52(this, 'disabled');
  };
  INPUT.prototype._set_form__0 = function (newValue) {
    attributeStringString.set_26(this, 'form', newValue);
  };
  INPUT.prototype._get_form__0 = function () {
    return attributeStringString.get_52(this, 'form');
  };
  INPUT.prototype._set_formAction__0 = function (newValue) {
    attributeStringString.set_26(this, 'formaction', newValue);
  };
  INPUT.prototype._get_formAction__0 = function () {
    return attributeStringString.get_52(this, 'formaction');
  };
  INPUT.prototype._set_formEncType__0 = function (newValue) {
    attributeInputFormEncTypeEnumInputFormEncTypeValues.set_26(this, 'formenctype', newValue);
  };
  INPUT.prototype._get_formEncType__0 = function () {
    return attributeInputFormEncTypeEnumInputFormEncTypeValues.get_52(this, 'formenctype');
  };
  INPUT.prototype._set_formMethod__0 = function (newValue) {
    attributeInputFormMethodEnumInputFormMethodValues.set_26(this, 'formmethod', newValue);
  };
  INPUT.prototype._get_formMethod__0 = function () {
    return attributeInputFormMethodEnumInputFormMethodValues.get_52(this, 'formmethod');
  };
  INPUT.prototype._set_formNovalidate__0 = function (newValue) {
    attributeBooleanTicker.set_26(this, 'formnovalidate', newValue);
  };
  INPUT.prototype._get_formNovalidate__0 = function () {
    return attributeBooleanTicker.get_52(this, 'formnovalidate');
  };
  INPUT.prototype._set_formTarget__0 = function (newValue) {
    attributeStringString.set_26(this, 'formtarget', newValue);
  };
  INPUT.prototype._get_formTarget__0 = function () {
    return attributeStringString.get_52(this, 'formtarget');
  };
  INPUT.prototype._set_height_ = function (newValue) {
    attributeStringString.set_26(this, 'height', newValue);
  };
  INPUT.prototype._get_height_ = function () {
    return attributeStringString.get_52(this, 'height');
  };
  INPUT.prototype._set_list_ = function (newValue) {
    attributeStringString.set_26(this, 'list', newValue);
  };
  INPUT.prototype._get_list_ = function () {
    return attributeStringString.get_52(this, 'list');
  };
  INPUT.prototype._set_max_ = function (newValue) {
    attributeStringString.set_26(this, 'max', newValue);
  };
  INPUT.prototype._get_max_ = function () {
    return attributeStringString.get_52(this, 'max');
  };
  INPUT.prototype._set_maxLength_ = function (newValue) {
    attributeStringString.set_26(this, 'maxlength', newValue);
  };
  INPUT.prototype._get_maxLength_ = function () {
    return attributeStringString.get_52(this, 'maxlength');
  };
  INPUT.prototype._set_minLength_ = function (newValue) {
    attributeStringString.set_26(this, 'minlength', newValue);
  };
  INPUT.prototype._get_minLength_ = function () {
    return attributeStringString.get_52(this, 'minlength');
  };
  INPUT.prototype._set_min_ = function (newValue) {
    attributeStringString.set_26(this, 'min', newValue);
  };
  INPUT.prototype._get_min_ = function () {
    return attributeStringString.get_52(this, 'min');
  };
  INPUT.prototype._set_multiple_ = function (newValue) {
    attributeBooleanTicker.set_26(this, 'multiple', newValue);
  };
  INPUT.prototype._get_multiple_ = function () {
    return attributeBooleanTicker.get_52(this, 'multiple');
  };
  INPUT.prototype._set_pattern_ = function (newValue) {
    attributeStringString.set_26(this, 'pattern', newValue);
  };
  INPUT.prototype._get_pattern_ = function () {
    return attributeStringString.get_52(this, 'pattern');
  };
  INPUT.prototype._set_placeholder_ = function (newValue) {
    attributeStringString.set_26(this, 'placeholder', newValue);
  };
  INPUT.prototype._get_placeholder_ = function () {
    return attributeStringString.get_52(this, 'placeholder');
  };
  INPUT.prototype._set_readonly_ = function (newValue) {
    attributeBooleanTicker.set_26(this, 'readonly', newValue);
  };
  INPUT.prototype._get_readonly_ = function () {
    return attributeBooleanTicker.get_52(this, 'readonly');
  };
  INPUT.prototype._set_required_ = function (newValue) {
    attributeBooleanTicker.set_26(this, 'required', newValue);
  };
  INPUT.prototype._get_required_ = function () {
    return attributeBooleanTicker.get_52(this, 'required');
  };
  INPUT.prototype._set_size_ = function (newValue) {
    attributeStringString.set_26(this, 'size', newValue);
  };
  INPUT.prototype._get_size__42 = function () {
    return attributeStringString.get_52(this, 'size');
  };
  INPUT.prototype._set_src_ = function (newValue) {
    attributeStringString.set_26(this, 'src', newValue);
  };
  INPUT.prototype._get_src_ = function () {
    return attributeStringString.get_52(this, 'src');
  };
  INPUT.prototype._set_step_ = function (newValue) {
    attributeStringString.set_26(this, 'step', newValue);
  };
  INPUT.prototype._get_step__11 = function () {
    return attributeStringString.get_52(this, 'step');
  };
  INPUT.prototype._set_width_ = function (newValue) {
    attributeStringString.set_26(this, 'width', newValue);
  };
  INPUT.prototype._get_width_ = function () {
    return attributeStringString.get_52(this, 'width');
  };
  INPUT.prototype._set_files_ = function (newValue) {
    attributeStringString.set_26(this, 'files', newValue);
  };
  INPUT.prototype._get_files_ = function () {
    return attributeStringString.get_52(this, 'files');
  };
  INPUT.prototype._set_value__0 = function (newValue) {
    attributeStringString.set_26(this, 'value', newValue);
  };
  INPUT.prototype._get_value__7 = function () {
    return attributeStringString.get_52(this, 'value');
  };
  INPUT.prototype._set_name__0 = function (newValue) {
    attributeStringString.set_26(this, 'name', newValue);
  };
  INPUT.prototype._get_name__23 = function () {
    return attributeStringString.get_52(this, 'name');
  };
  INPUT.$metadata$ = {
    simpleName: 'INPUT',
    kind: 'class',
    interfaces: [CommonAttributeGroupFacadeFlowInteractivePhrasingContent]
  };
  function SPAN(initialAttributes, consumer) {
    HTMLTag.call(this, 'span', consumer, initialAttributes, null, true, false);
    this._consumer_3 = consumer;
  }
  SPAN.prototype._get_consumer__21 = function () {
    return this._consumer_3;
  };
  SPAN.$metadata$ = {
    simpleName: 'SPAN',
    kind: 'class',
    interfaces: [HtmlBlockInlineTag]
  };
  function HTMLTag_init_$Init$(tagName, consumer, initialAttributes, namespace, inlineTag, emptyTag, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      namespace = null;
    HTMLTag.call($this, tagName, consumer, initialAttributes, namespace, inlineTag, emptyTag);
    return $this;
  }
  function HTMLTag_init_$Create$(tagName, consumer, initialAttributes, namespace, inlineTag, emptyTag, $mask0, $marker) {
    return HTMLTag_init_$Init$(tagName, consumer, initialAttributes, namespace, inlineTag, emptyTag, $mask0, $marker, Object.create(HTMLTag.prototype));
  }
  function _no_name_provided__83(this$0) {
    this._this$0_15 = this$0;
  }
  _no_name_provided__83.prototype.invoke_73 = function () {
    return this._this$0_15._get_consumer__21();
  };
  _no_name_provided__83.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function HTMLTag(tagName, consumer, initialAttributes, namespace, inlineTag, emptyTag) {
    this._tagName = tagName;
    this._consumer_4 = consumer;
    this._namespace = namespace;
    this._inlineTag = inlineTag;
    this._emptyTag = emptyTag;
    var tmp = this;
    tmp._attributes = new DelegatingMap(initialAttributes, this, _no_name_provided_$factory_52(this));
  }
  HTMLTag.prototype._get_tagName__21 = function () {
    return this._tagName;
  };
  HTMLTag.prototype._get_consumer__21 = function () {
    return this._consumer_4;
  };
  HTMLTag.prototype._get_namespace__21 = function () {
    return this._namespace;
  };
  HTMLTag.prototype._get_inlineTag__21 = function () {
    return this._inlineTag;
  };
  HTMLTag.prototype._get_emptyTag__21 = function () {
    return this._emptyTag;
  };
  HTMLTag.prototype._get_attributes__21 = function () {
    return this._attributes;
  };
  HTMLTag.prototype._get_attributesEntries__21 = function () {
    return this._get_attributes__21()._get_immutableEntries_();
  };
  HTMLTag.$metadata$ = {
    simpleName: 'HTMLTag',
    kind: 'class',
    interfaces: [Tag]
  };
  function _no_name_provided_$factory_52(this$0) {
    var i = new _no_name_provided__83(this$0);
    return function () {
      return i.invoke_73();
    };
  }
  function _get_AVERAGE_PAGE_SIZE_() {
    return AVERAGE_PAGE_SIZE;
  }
  var AVERAGE_PAGE_SIZE;
  function _get_escapeMap_() {
    return escapeMap;
  }
  var escapeMap;
  function _get_letterRangeLowerCase_() {
    return letterRangeLowerCase;
  }
  var letterRangeLowerCase;
  function _get_letterRangeUpperCase_() {
    return letterRangeUpperCase;
  }
  var letterRangeUpperCase;
  function _get_digitRange_() {
    return digitRange;
  }
  var digitRange;
  function escapeMap$init$() {
    var tmp0_let_0 = mapOf([to(new Char_0(60), '&lt;'), to(new Char_0(62), '&gt;'), to(new Char_0(38), '&amp;'), to(new Char_0(34), '&quot;')]);
    var tmp0_map_0_4 = tmp0_let_0._get_keys__6();
    var tmp0_mapTo_0_1_5 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map_0_4, 10));
    var tmp0_iterator_1_2_6 = tmp0_map_0_4.iterator_69();
    while (tmp0_iterator_1_2_6.hasNext_49()) {
      var item_2_3_7 = tmp0_iterator_1_2_6.next_56();
      tmp0_mapTo_0_1_5.add_25(item_2_3_7.toInt_6());
      Unit_getInstance();
    }
    var tmp0_elvis_lhs_3 = max(tmp0_mapTo_0_1_5);
    var maxCode_2 = tmp0_elvis_lhs_3 == null ? -1 : tmp0_elvis_lhs_3;
    var tmp_8 = 0;
    var tmp_9 = maxCode_2 + 1 | 0;
    var tmp_10 = fillArrayVal(Array(tmp_9), null);
    while (tmp_8 < tmp_9) {
      var tmp_11 = tmp_8;
      tmp_10[tmp_11] = tmp0_let_0.get_33(numberToChar(tmp_11));
      tmp_8 = tmp_8 + 1 | 0;
    }
    return tmp_10;
  }
  function _get_create_(_this_) {
    return new JSDOMBuilder(_this_);
  }
  function _get_path_($this) {
    return $this._path;
  }
  function _set_lastLeaved_($this, _set___) {
    $this._lastLeaved = _set___;
  }
  function _get_lastLeaved_($this) {
    return $this._lastLeaved;
  }
  function asR(_this_, $this) {
    return _this_;
  }
  function JSDOMBuilder(document_0) {
    this._document = document_0;
    var tmp = this;
    tmp._path = ArrayList_init_$Create$();
    this._lastLeaved = null;
  }
  JSDOMBuilder.prototype._get_document_ = function () {
    return this._document;
  };
  JSDOMBuilder.prototype.onTagStart_0 = function (tag) {
    var tmp;
    if (!(tag._get_namespace__21() == null)) {
      var tmp0_asDynamic_0 = this._document.createElementNS(ensureNotNull(tag._get_namespace__21()), tag._get_tagName__21());
      tmp = tmp0_asDynamic_0;
    } else {
      var tmp_0 = this._document.createElement(tag._get_tagName__21());
      tmp = tmp_0 instanceof HTMLElement ? tmp_0 : THROW_CCE();
    }
    var element = tmp;
    var tmp1_forEach_0 = tag._get_attributesEntries__21();
    var tmp0_iterator_1 = tmp1_forEach_0.iterator_69();
    while (tmp0_iterator_1.hasNext_49()) {
      var element_2 = tmp0_iterator_1.next_56();
      element.setAttribute(element_2._get_key__4(), element_2._get_value__7());
    }
    var tmp2_isNotEmpty_0 = this._path;
    if (!tmp2_isNotEmpty_0.isEmpty_51()) {
      last(this._path).appendChild(element);
      Unit_getInstance();
    } else {
    }
    this._path.add_25(element);
    Unit_getInstance();
  };
  JSDOMBuilder.prototype.onTagAttributeChange_0 = function (tag, attribute, value) {
    if (this._path.isEmpty_51())
      throw IllegalStateException_init_$Create$_0('No current tag');
    else {
      var tmp0_toLowerCase_0 = last(this._path).tagName;
      var tmp = tmp0_toLowerCase_0.toLowerCase();
      var tmp1_toLowerCase_0 = tag._get_tagName__21();
      if (!(tmp === tmp1_toLowerCase_0.toLowerCase()))
        throw IllegalStateException_init_$Create$_0('Wrong current tag');
      else {
        {
          var tmp2_let_0 = last(this._path);
          if (value == null) {
            tmp2_let_0.removeAttribute(attribute);
          } else {
            tmp2_let_0.setAttribute(attribute, value);
          }
        }
      }
    }
  };
  JSDOMBuilder.prototype.onTagEvent_0 = function (tag, event, value) {
    if (this._path.isEmpty_51())
      throw IllegalStateException_init_$Create$_0('No current tag');
    else {
      var tmp0_toLowerCase_0 = last(this._path).tagName;
      var tmp = tmp0_toLowerCase_0.toLowerCase();
      var tmp1_toLowerCase_0 = tag._get_tagName__21();
      if (!(tmp === tmp1_toLowerCase_0.toLowerCase()))
        throw IllegalStateException_init_$Create$_0('Wrong current tag');
      else {
        {
          var tmp2_setEvent_0 = last(this._path);
          tmp2_setEvent_0[event] = value;
        }
      }
    }
  };
  JSDOMBuilder.prototype.onTagEnd_0 = function (tag) {
    var tmp;
    if (this._path.isEmpty_51()) {
      tmp = true;
    } else {
      var tmp0_toLowerCase_0 = last(this._path).tagName;
      var tmp_0 = tmp0_toLowerCase_0.toLowerCase();
      var tmp1_toLowerCase_0 = tag._get_tagName__21();
      tmp = !(tmp_0 === tmp1_toLowerCase_0.toLowerCase());
    }
    if (tmp) {
      throw IllegalStateException_init_$Create$_0('' + "We haven't entered tag " + tag._get_tagName__21() + ' but trying to leave');
    } else {
    }
    this._lastLeaved = this._path.removeAt_2(_get_lastIndex__5(this._path));
  };
  JSDOMBuilder.prototype.onTagContent_0 = function (content) {
    if (this._path.isEmpty_51()) {
      throw IllegalStateException_init_$Create$_0('No current DOM node');
    }last(this._path).appendChild(this._document.createTextNode(toString_1(content)));
    Unit_getInstance();
  };
  JSDOMBuilder.prototype.onTagContentEntity_0 = function (entity) {
    if (this._path.isEmpty_51()) {
      throw IllegalStateException_init_$Create$_0('No current DOM node');
    }var tmp = this._document.createElement('span');
    var s = tmp instanceof HTMLElement ? tmp : THROW_CCE();
    s.innerHTML = entity._get_text_();
    var tmp_0 = last(this._path);
    var tmp0_filter_0 = asList(s.childNodes);
    var tmp0_filterTo_0_1 = ArrayList_init_$Create$();
    var tmp0_iterator_1_2 = tmp0_filter_0.iterator_69();
    while (tmp0_iterator_1_2.hasNext_49()) {
      var element_2_3 = tmp0_iterator_1_2.next_56();
      if (element_2_3.nodeType === Node.TEXT_NODE) {
        tmp0_filterTo_0_1.add_25(element_2_3);
        Unit_getInstance();
      } else {
      }
    }
    tmp_0.appendChild(first_0(tmp0_filterTo_0_1));
    Unit_getInstance();
  };
  JSDOMBuilder.prototype.onTagContentUnsafe_0 = function (block) {
    var tmp0_with_0 = new DefaultUnsafe();
    block(tmp0_with_0);
    var tmp0_this_2 = last(this._path);
    tmp0_this_2.innerHTML = tmp0_this_2.innerHTML + tmp0_with_0.toString();
  };
  JSDOMBuilder.prototype.onTagComment_0 = function (content) {
    if (this._path.isEmpty_51()) {
      throw IllegalStateException_init_$Create$_0('No current DOM node');
    }last(this._path).appendChild(this._document.createComment(toString_1(content)));
    Unit_getInstance();
  };
  JSDOMBuilder.prototype.finalize_0 = function () {
    var tmp0_safe_receiver = this._lastLeaved;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : asR(tmp0_safe_receiver, this);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$_0("We can't finalize as there was no tags");
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  JSDOMBuilder.$metadata$ = {
    simpleName: 'JSDOMBuilder',
    kind: 'class',
    interfaces: [TagConsumer]
  };
  function setEvent(_this_, name, callback) {
    _this_[name] = callback;
  }
  function div_1(_this_, classes, block) {
    var tmp0_visitAndFinalize_0 = new DIV(attributesMapOf('class', classes), _this_);
    var tmp = visitTagAndFinalize(tmp0_visitAndFinalize_0, _this_, _no_name_provided_$factory_54(block));
    return tmp instanceof HTMLDivElement ? tmp : THROW_CCE();
  }
  function _no_name_provided__84() {
  }
  _no_name_provided__84.prototype.invoke_113 = function (_this__0) {
    return Unit_getInstance();
  };
  _no_name_provided__84.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__84.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__85($block) {
    this._$block_7 = $block;
  }
  _no_name_provided__85.prototype.invoke_113 = function (_this__0) {
    this._$block_7(_this__0);
  };
  _no_name_provided__85.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__85.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_53() {
    var i = new _no_name_provided__84();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_54($block) {
    var i = new _no_name_provided__85($block);
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _set_onClickFunction_(_this_, newValue) {
    _this_._get_consumer__21().onTagEvent_0(_this_, 'onclick', newValue);
  }
  function _get_onClickFunction_(_this_) {
    throw UnsupportedOperationException_init_$Create$_0("You can't read variable onClick");
  }
  function _set_onFocusFunction_(_this_, newValue) {
    _this_._get_consumer__21().onTagEvent_0(_this_, 'onfocus', newValue);
  }
  function _get_onFocusFunction_(_this_) {
    throw UnsupportedOperationException_init_$Create$_0("You can't read variable onFocus");
  }
  function _set_onFocusOutFunction_(_this_, newValue) {
    _this_._get_consumer__21().onTagEvent_0(_this_, 'onfocusout', newValue);
  }
  function _get_onFocusOutFunction_(_this_) {
    throw UnsupportedOperationException_init_$Create$_0("You can't read variable onFocusOut");
  }
  function _set_onKeyUpFunction_(_this_, newValue) {
    _this_._get_consumer__21().onTagEvent_0(_this_, 'onkeyup', newValue);
  }
  function _get_onKeyUpFunction_(_this_) {
    throw UnsupportedOperationException_init_$Create$_0("You can't read variable onKeyUp");
  }
  function visitTagAndFinalize(_this_, consumer, block) {
    if (!(_this_._get_consumer__21() === consumer)) {
      throw IllegalArgumentException_init_$Create$_0('Wrong exception');
    }visitTag(_this_, block);
    return consumer.finalize_0();
  }
  function visitTag(_this_, block) {
    _this_._get_consumer__21().onTagStart_0(_this_);
    try {
      block(_this_);
    } catch ($p) {
      if ($p instanceof Error) {
        _this_._get_consumer__21().onTagError_0(_this_, $p);
      } else {
        {
          throw $p;
        }
      }
    }
    finally {
      _this_._get_consumer__21().onTagEnd_0(_this_);
    }
  }
  function cardCompo(data) {
    var tmp = data;
    var tmp_0 = data.title;
    tmp._title = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = data;
    var tmp_2 = data.text;
    tmp_1._text = (!(tmp_2 == null) ? typeof tmp_2 === 'string' : false) ? tmp_2 : THROW_CCE();
    var tmp_3 = data;
    var tmp_4 = data.set;
    tmp_3._set = (!(tmp_4 == null) ? typeof tmp_4 === 'string' : false) ? tmp_4 : THROW_CCE();
    var tmp_5 = data;
    var tmp_6 = data.all;
    tmp_5._all = (!(tmp_6 == null) ? typeof tmp_6 === 'boolean' : false) ? tmp_6 : THROW_CCE();
    var tmp_7 = data;
    var tmp_8 = data.sips;
    tmp_7._sips = (!(tmp_8 == null) ? typeof tmp_8 === 'number' : false) ? tmp_8 : THROW_CCE();
    var cardPlayer = {_v: ''};
    if (data._all) {
      ensureNotNull(document.querySelector('#play-name')).textContent = 'Alle';
    } else {
      var tmp_9 = ensureNotNull(document.querySelector('#play-name'));
      var tmp0_also_0 = playerList_getInstance().randomPlayer();
      cardPlayer._v = tmp0_also_0;
      tmp_9.textContent = tmp0_also_0;
    }
    var tmp1_div_0 = _get_create_(document);
    var tmp2_div_0 = null;
    var tmp0_visitAndFinalize_0_2 = new DIV(attributesMapOf('class', tmp2_div_0), tmp1_div_0);
    return visitTagAndFinalize(tmp0_visitAndFinalize_0_2, tmp1_div_0, _no_name_provided_$factory_55(data, cardPlayer));
  }
  function _no_name_provided__86($cardPlayer) {
    this._$cardPlayer = $cardPlayer;
  }
  _no_name_provided__86.prototype.invoke_73 = function () {
    var zz_6_13 = playerList_getInstance().randomPlayer();
    while (zz_6_13 === this._$cardPlayer._v) {
      zz_6_13 = playerList_getInstance().randomPlayer();
    }
    return zz_6_13;
  };
  _no_name_provided__86.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__87() {
  }
  _no_name_provided__87.prototype.invoke_206 = function ($this$unsafe) {
    var tmp0_elvis_lhs_6_12_24 = difficulty_getInstance()._get_level__2();
    $this$unsafe.raw_2(trimIndent('' + '\n                             <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="36"\n                                 viewBox="0 0 15 36" xml:space="preserve" style="background-color: transparent">\n                                <linearGradient id="rainbow" x1="0" x2="0" y1="0" y2="100%">\n                                    <stop stop-color="#FF0000" offset="0%"/>\n                                    <stop stop-color="#FF7F00" offset="20%"/>\n                                    <stop stop-color="#00BC3F" offset="40%"/>\n                                    <stop stop-color="#0068FF" offset="60%"/>\n                                    <stop stop-color="#7A00E5" offset="80%"/>\n                                    <stop stop-color="#D300C9" offset="100%"/>\n                                <\/linearGradient>\n                                <path fill="hsl(' + (120 - imul(60, tmp0_elvis_lhs_6_12_24 == null ? 0 : tmp0_elvis_lhs_6_12_24) | 0) + ', 90%, 64%)" d="m2,31 v-11 h11 v11 a1,.5,0,0,1,-11,0"/>\n                                <path stroke="floralwhite" fill="transparent" stroke-width="2px"\n                                    d="M2,31 v-18 c0,-3,3,0,3,-10 h5 m3,10 c0,-3,-3,0,-3,-10 h-1 m4,10 v18 a1,.5,0,0,1,-11,0" />\n                             <\/svg>\n                        '));
  };
  _no_name_provided__87.prototype.invoke_81 = function (p1) {
    this.invoke_206((!(p1 == null) ? isInterface(p1, Unsafe) : false) ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__87.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__88($data) {
    this._$data = $data;
  }
  _no_name_provided__88.prototype.invoke_100 = function (_this__0) {
    var tmp;
    if (this._$data._sips >= 0) {
      var tmp0_subject_6_11_17_29 = difficulty_getInstance()._get_level__2();
      {
        var mul_5_10_16_28;
        switch (tmp0_subject_6_11_17_29) {
          case 0:
            mul_5_10_16_28 = 0.5;
            break;
          case 1:
            mul_5_10_16_28 = 1.0;
            break;
          case 2:
            mul_5_10_16_28 = 2.24;
            break;
          default:mul_5_10_16_28 = 1.0;
            break;
        }
      }
      var tmp0_ceil_0_7_12_18_30 = this._$data._sips * mul_5_10_16_28;
      var tmp0_unsafeCast_0_1_8_13_19_31 = Math.ceil(tmp0_ceil_0_7_12_18_30);
      tmp = '' + tmp0_unsafeCast_0_1_8_13_19_31;
    } else {
      tmp = '\u221E';
    }
    _this__0.unaryPlus_54(tmp);
  };
  _no_name_provided__88.prototype.invoke_81 = function (p1) {
    this.invoke_100(p1 instanceof SPAN ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__88.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__89($data) {
    this._$data_0 = $data;
  }
  _no_name_provided__89.prototype.invoke_113 = function (_this__0) {
    _set_id_(_this__0, 'card-set');
    _this__0.unaryPlus_54(this._$data_0._set);
  };
  _no_name_provided__89.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__89.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__90($data) {
    this._$data_1 = $data;
  }
  _no_name_provided__90.prototype.invoke_113 = function (_this__0) {
    _set_id_(_this__0, 'card-alt');
    unsafe(_this__0, _no_name_provided_$factory_62());
    var tmp0_span_0_7_13_25 = null;
    var tmp0_visit_0_2_8_14_26 = new SPAN(attributesMapOf('class', tmp0_span_0_7_13_25), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_8_14_26, _no_name_provided_$factory_63(this._$data_1));
  };
  _no_name_provided__90.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__90.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__91($data) {
    this._$data_2 = $data;
  }
  _no_name_provided__91.prototype.invoke_113 = function (_this__0) {
    _set_id_(_this__0, 'card-title');
    _this__0.unaryPlus_54(this._$data_2._title);
  };
  _no_name_provided__91.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__91.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__92($data, $cardPlayer) {
    this._$data_3 = $data;
    this._$cardPlayer_0 = $cardPlayer;
  }
  _no_name_provided__92.prototype.invoke_113 = function (_this__0) {
    _set_id_(_this__0, 'card-text');
    var tmp = this._$data_3._text;
    var tmp_0 = Regex_init_$Create$_0('\\[NAME\\d+]');
    _this__0.unaryPlus_54(replaceMultiple(tmp, tmp_0, _no_name_provided_$factory_59(this._$cardPlayer_0)));
  };
  _no_name_provided__92.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__92.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__93($data) {
    this._$data_4 = $data;
  }
  _no_name_provided__93.prototype.invoke_113 = function (_this__0) {
    _set_id_(_this__0, 'card-footer');
    var tmp0_div_0_5_17 = null;
    var tmp0_visit_0_2_6_18 = new DIV(attributesMapOf('class', tmp0_div_0_5_17), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_6_18, _no_name_provided_$factory_60(this._$data_4));
    var tmp1_div_0_8_20 = null;
    var tmp0_visit_0_2_9_21 = new DIV(attributesMapOf('class', tmp1_div_0_8_20), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_9_21, _no_name_provided_$factory_61(this._$data_4));
  };
  _no_name_provided__93.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__93.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__94($data, $cardPlayer) {
    this._$data_5 = $data;
    this._$cardPlayer_1 = $cardPlayer;
  }
  _no_name_provided__94.prototype.invoke_113 = function (_this__0) {
    _set_id_(_this__0, 'card');
    var tmp0_receiver_5 = _this__0;
    _set_classes_(tmp0_receiver_5, plus(_get_classes_(tmp0_receiver_5), 'blur'));
    var tmp0_div_0_6 = null;
    var tmp0_visit_0_2_7 = new DIV(attributesMapOf('class', tmp0_div_0_6), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_7, _no_name_provided_$factory_56(this._$data_5));
    var tmp1_div_0_9 = null;
    var tmp0_visit_0_2_10 = new DIV(attributesMapOf('class', tmp1_div_0_9), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_10, _no_name_provided_$factory_57(this._$data_5, this._$cardPlayer_1));
    var tmp2_div_0_14 = null;
    var tmp0_visit_0_2_15 = new DIV(attributesMapOf('class', tmp2_div_0_14), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_15, _no_name_provided_$factory_58(this._$data_5));
  };
  _no_name_provided__94.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__94.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_55($data, $cardPlayer) {
    var i = new _no_name_provided__94($data, $cardPlayer);
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_56($data) {
    var i = new _no_name_provided__91($data);
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_57($data, $cardPlayer) {
    var i = new _no_name_provided__92($data, $cardPlayer);
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_58($data) {
    var i = new _no_name_provided__93($data);
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_59($cardPlayer) {
    var i = new _no_name_provided__86($cardPlayer);
    return function () {
      return i.invoke_73();
    };
  }
  function _no_name_provided_$factory_60($data) {
    var i = new _no_name_provided__89($data);
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_61($data) {
    var i = new _no_name_provided__90($data);
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_62() {
    var i = new _no_name_provided__87();
    return function (p1) {
      i.invoke_206(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_63($data) {
    var i = new _no_name_provided__88($data);
    return function (p1) {
      i.invoke_100(p1);
      return Unit_getInstance();
    };
  }
  function options() {
    window.location.hash = '#options';
    var tmp0_div_0 = _get_create_(document);
    var tmp1_div_0 = null;
    var tmp0_visitAndFinalize_0_2 = new DIV(attributesMapOf('class', tmp1_div_0), tmp0_div_0);
    var tmp = visitTagAndFinalize(tmp0_visitAndFinalize_0_2, tmp0_div_0, _no_name_provided_$factory_64());
    return tmp instanceof HTMLDivElement ? tmp : THROW_CCE();
  }
  function _no_name_provided__95() {
  }
  _no_name_provided__95.prototype.invoke_306 = function (_anonymous_parameter_0_) {
    var tmp = startmenu();
    changePage$default(tmp, null, 2, null);
  };
  _no_name_provided__95.prototype.invoke_81 = function (p1) {
    this.invoke_306(p1 instanceof Event ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__95.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__96() {
  }
  _no_name_provided__96.prototype.invoke_113 = function (_this__0) {
    _set_id_(_this__0, 'options-backbtn');
    var tmp0_receiver_5_8_11 = _this__0;
    _set_classes_(tmp0_receiver_5_8_11, plus(_get_classes_(tmp0_receiver_5_8_11), 'btn'));
    _set_onClickFunction_(_this__0, _no_name_provided_$factory_68());
    _this__0.unaryPlus_54('\xAB');
  };
  _no_name_provided__96.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__96.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__97($this) {
    this._$this_7 = $this;
  }
  _no_name_provided__97.prototype.invoke_306 = function (it) {
    var tmp = difficulty_getInstance();
    var tmp0_subject_10_14_18_26_29_40 = this._$this_7._get_attributes__21().get_53('data-id');
    tmp._set_level_(tmp0_subject_10_14_18_26_29_40 === '0' ? 0 : tmp0_subject_10_14_18_26_29_40 === '1' ? 1 : tmp0_subject_10_14_18_26_29_40 === '2' ? 2 : 0);
  };
  _no_name_provided__97.prototype.invoke_81 = function (p1) {
    this.invoke_306(p1 instanceof Event ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__97.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__98() {
  }
  _no_name_provided__98.prototype.invoke_306 = function (it) {
    var tmp = difficulty_getInstance();
    var tmp0_subject_7_20_24_32_35_46 = this.previousSibling.previousSibling.dataset.id;
    tmp._set_level_(tmp0_subject_7_20_24_32_35_46 == '0' ? 0 : tmp0_subject_7_20_24_32_35_46 == '1' ? 1 : tmp0_subject_7_20_24_32_35_46 == '2' ? 2 : 0);
  };
  _no_name_provided__98.prototype.invoke_81 = function (p1) {
    this.invoke_306(p1 instanceof Event ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__98.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__99() {
  }
  _no_name_provided__99.prototype.invoke_113 = function (_this__0) {
    var tmp0_receiver_5_9_13_21_24_35 = _this__0;
    _set_classes_(tmp0_receiver_5_9_13_21_24_35, plus(_get_classes_(tmp0_receiver_5_9_13_21_24_35), 'options-chkbx'));
    var tmp0_set_0_6_10_14_22_25_36 = _this__0._get_attributes__21();
    var tmp1_set_0_7_11_15_23_26_37 = 'data-id';
    var tmp2_set_0_8_12_16_24_27_38 = '0';
    tmp0_set_0_6_10_14_22_25_36.put_5(tmp1_set_0_7_11_15_23_26_37, tmp2_set_0_8_12_16_24_27_38);
    Unit_getInstance();
    _set_onClickFunction_(_this__0, _no_name_provided_$factory_78(_this__0));
  };
  _no_name_provided__99.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__99.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__100() {
  }
  _no_name_provided__100.prototype.invoke_113 = function (_this__0) {
    var tmp0_receiver_5_18_22_30_33_44 = _this__0;
    _set_classes_(tmp0_receiver_5_18_22_30_33_44, plus(_get_classes_(tmp0_receiver_5_18_22_30_33_44), 'options-switchTitle'));
    _set_onClickFunction_(_this__0, _no_name_provided_$factory_79());
    _this__0.unaryPlus_54('Chill');
  };
  _no_name_provided__100.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__100.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__101($this) {
    this._$this_8 = $this;
  }
  _no_name_provided__101.prototype.invoke_306 = function (it) {
    var tmp = difficulty_getInstance();
    var tmp0_subject_10_14_37_45_48_59 = this._$this_8._get_attributes__21().get_53('data-id');
    tmp._set_level_(tmp0_subject_10_14_37_45_48_59 === '0' ? 0 : tmp0_subject_10_14_37_45_48_59 === '1' ? 1 : tmp0_subject_10_14_37_45_48_59 === '2' ? 2 : 0);
  };
  _no_name_provided__101.prototype.invoke_81 = function (p1) {
    this.invoke_306(p1 instanceof Event ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__101.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__102() {
  }
  _no_name_provided__102.prototype.invoke_306 = function (it) {
    var tmp = difficulty_getInstance();
    var tmp0_subject_7_20_43_51_54_65 = this.previousSibling.previousSibling.dataset.id;
    tmp._set_level_(tmp0_subject_7_20_43_51_54_65 == '0' ? 0 : tmp0_subject_7_20_43_51_54_65 == '1' ? 1 : tmp0_subject_7_20_43_51_54_65 == '2' ? 2 : 0);
  };
  _no_name_provided__102.prototype.invoke_81 = function (p1) {
    this.invoke_306(p1 instanceof Event ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__102.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__103() {
  }
  _no_name_provided__103.prototype.invoke_113 = function (_this__0) {
    var tmp0_receiver_5_9_32_40_43_54 = _this__0;
    _set_classes_(tmp0_receiver_5_9_32_40_43_54, plus(_get_classes_(tmp0_receiver_5_9_32_40_43_54), 'options-chkbx'));
    var tmp0_set_0_6_10_33_41_44_55 = _this__0._get_attributes__21();
    var tmp1_set_0_7_11_34_42_45_56 = 'data-id';
    var tmp2_set_0_8_12_35_43_46_57 = '1';
    tmp0_set_0_6_10_33_41_44_55.put_5(tmp1_set_0_7_11_34_42_45_56, tmp2_set_0_8_12_35_43_46_57);
    Unit_getInstance();
    _set_onClickFunction_(_this__0, _no_name_provided_$factory_82(_this__0));
  };
  _no_name_provided__103.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__103.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__104() {
  }
  _no_name_provided__104.prototype.invoke_113 = function (_this__0) {
    var tmp0_receiver_5_18_41_49_52_63 = _this__0;
    _set_classes_(tmp0_receiver_5_18_41_49_52_63, plus(_get_classes_(tmp0_receiver_5_18_41_49_52_63), 'options-switchTitle'));
    _set_onClickFunction_(_this__0, _no_name_provided_$factory_83());
    _this__0.unaryPlus_54('Geht ab');
  };
  _no_name_provided__104.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__104.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__105($this) {
    this._$this_9 = $this;
  }
  _no_name_provided__105.prototype.invoke_306 = function (it) {
    var tmp = difficulty_getInstance();
    var tmp0_subject_10_14_56_64_67_78 = this._$this_9._get_attributes__21().get_53('data-id');
    tmp._set_level_(tmp0_subject_10_14_56_64_67_78 === '0' ? 0 : tmp0_subject_10_14_56_64_67_78 === '1' ? 1 : tmp0_subject_10_14_56_64_67_78 === '2' ? 2 : 0);
  };
  _no_name_provided__105.prototype.invoke_81 = function (p1) {
    this.invoke_306(p1 instanceof Event ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__105.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__106() {
  }
  _no_name_provided__106.prototype.invoke_306 = function (it) {
    var tmp = difficulty_getInstance();
    var tmp0_subject_7_20_62_70_73_84 = this.previousSibling.previousSibling.dataset.id;
    tmp._set_level_(tmp0_subject_7_20_62_70_73_84 == '0' ? 0 : tmp0_subject_7_20_62_70_73_84 == '1' ? 1 : tmp0_subject_7_20_62_70_73_84 == '2' ? 2 : 0);
  };
  _no_name_provided__106.prototype.invoke_81 = function (p1) {
    this.invoke_306(p1 instanceof Event ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__106.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__107() {
  }
  _no_name_provided__107.prototype.invoke_113 = function (_this__0) {
    var tmp0_receiver_5_9_51_59_62_73 = _this__0;
    _set_classes_(tmp0_receiver_5_9_51_59_62_73, plus(_get_classes_(tmp0_receiver_5_9_51_59_62_73), 'options-chkbx'));
    var tmp0_set_0_6_10_52_60_63_74 = _this__0._get_attributes__21();
    var tmp1_set_0_7_11_53_61_64_75 = 'data-id';
    var tmp2_set_0_8_12_54_62_65_76 = '2';
    tmp0_set_0_6_10_52_60_63_74.put_5(tmp1_set_0_7_11_53_61_64_75, tmp2_set_0_8_12_54_62_65_76);
    Unit_getInstance();
    _set_onClickFunction_(_this__0, _no_name_provided_$factory_86(_this__0));
  };
  _no_name_provided__107.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__107.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__108() {
  }
  _no_name_provided__108.prototype.invoke_113 = function (_this__0) {
    var tmp0_receiver_5_18_60_68_71_82 = _this__0;
    _set_classes_(tmp0_receiver_5_18_60_68_71_82, plus(_get_classes_(tmp0_receiver_5_18_60_68_71_82), 'options-switchTitle'));
    _set_onClickFunction_(_this__0, _no_name_provided_$factory_87());
    _this__0.unaryPlus_54('Absturz');
  };
  _no_name_provided__108.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__108.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__109() {
  }
  _no_name_provided__109.prototype.invoke_113 = function (_this__0) {
    var tmp0_receiver_5_9_17_20_31 = _this__0;
    _set_classes_(tmp0_receiver_5_9_17_20_31, plus(_get_classes_(tmp0_receiver_5_9_17_20_31), 'options-switch'));
    var tmp0_div_0_6_10_18_21_32 = null;
    var tmp0_visit_0_2_7_11_19_22_33 = new DIV(attributesMapOf('class', tmp0_div_0_6_10_18_21_32), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_7_11_19_22_33, _no_name_provided_$factory_76());
    var tmp1_div_0_15_19_27_30_41 = null;
    var tmp0_visit_0_2_16_20_28_31_42 = new DIV(attributesMapOf('class', tmp1_div_0_15_19_27_30_41), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_16_20_28_31_42, _no_name_provided_$factory_77());
  };
  _no_name_provided__109.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__109.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__110() {
  }
  _no_name_provided__110.prototype.invoke_113 = function (_this__0) {
    var tmp0_receiver_5_28_36_39_50 = _this__0;
    _set_classes_(tmp0_receiver_5_28_36_39_50, plus(_get_classes_(tmp0_receiver_5_28_36_39_50), 'options-switch'));
    var tmp0_div_0_6_29_37_40_51 = null;
    var tmp0_visit_0_2_7_30_38_41_52 = new DIV(attributesMapOf('class', tmp0_div_0_6_29_37_40_51), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_7_30_38_41_52, _no_name_provided_$factory_80());
    var tmp1_div_0_15_38_46_49_60 = null;
    var tmp0_visit_0_2_16_39_47_50_61 = new DIV(attributesMapOf('class', tmp1_div_0_15_38_46_49_60), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_16_39_47_50_61, _no_name_provided_$factory_81());
  };
  _no_name_provided__110.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__110.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__111() {
  }
  _no_name_provided__111.prototype.invoke_113 = function (_this__0) {
    var tmp0_receiver_5_47_55_58_69 = _this__0;
    _set_classes_(tmp0_receiver_5_47_55_58_69, plus(_get_classes_(tmp0_receiver_5_47_55_58_69), 'options-switch'));
    var tmp0_div_0_6_48_56_59_70 = null;
    var tmp0_visit_0_2_7_49_57_60_71 = new DIV(attributesMapOf('class', tmp0_div_0_6_48_56_59_70), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_7_49_57_60_71, _no_name_provided_$factory_84());
    var tmp1_div_0_15_57_65_68_79 = null;
    var tmp0_visit_0_2_16_58_66_69_80 = new DIV(attributesMapOf('class', tmp1_div_0_15_57_65_68_79), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_16_58_66_69_80, _no_name_provided_$factory_85());
  };
  _no_name_provided__111.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__111.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__112() {
  }
  _no_name_provided__112.prototype.invoke_113 = function (_this__0) {
    var tmp0_receiver_5_9_12_23 = _this__0;
    _set_classes_(tmp0_receiver_5_9_12_23, plus(_get_classes_(tmp0_receiver_5_9_12_23), 'options-wrapperTitle'));
    _this__0.unaryPlus_54('Spielstimmung');
  };
  _no_name_provided__112.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__112.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__113() {
  }
  _no_name_provided__113.prototype.invoke_113 = function (_this__0) {
    var tmp0_receiver_5_13_16_27 = _this__0;
    _set_classes_(tmp0_receiver_5_13_16_27, plus(_get_classes_(tmp0_receiver_5_13_16_27), 'options-wrapperInside'));
    var tmp0_div_0_6_14_17_28 = null;
    var tmp0_visit_0_2_7_15_18_29 = new DIV(attributesMapOf('class', tmp0_div_0_6_14_17_28), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_7_15_18_29, _no_name_provided_$factory_73());
    var tmp1_div_0_25_33_36_47 = null;
    var tmp0_visit_0_2_26_34_37_48 = new DIV(attributesMapOf('class', tmp1_div_0_25_33_36_47), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_26_34_37_48, _no_name_provided_$factory_74());
    var tmp2_div_0_44_52_55_66 = null;
    var tmp0_visit_0_2_45_53_56_67 = new DIV(attributesMapOf('class', tmp2_div_0_44_52_55_66), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_45_53_56_67, _no_name_provided_$factory_75());
  };
  _no_name_provided__113.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__113.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__114($this) {
    this._$this_10 = $this;
  }
  _no_name_provided__114.prototype.invoke_306 = function (it) {
    var tmp = rumble_getInstance();
    var tmp0_subject_10_14_18_26_98_109 = this._$this_10._get_attributes__21().get_53('data-id');
    tmp._set_state__1(tmp0_subject_10_14_18_26_98_109 === '0' ? true : tmp0_subject_10_14_18_26_98_109 === '1' ? false : true);
  };
  _no_name_provided__114.prototype.invoke_81 = function (p1) {
    this.invoke_306(p1 instanceof Event ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__114.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__115() {
  }
  _no_name_provided__115.prototype.invoke_306 = function (it) {
    var tmp = rumble_getInstance();
    var tmp0_subject_7_20_24_32_104_115 = this.previousSibling.previousSibling.dataset.id;
    tmp._set_state__1(tmp0_subject_7_20_24_32_104_115 == '0' ? true : tmp0_subject_7_20_24_32_104_115 == '1' ? false : true);
  };
  _no_name_provided__115.prototype.invoke_81 = function (p1) {
    this.invoke_306(p1 instanceof Event ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__115.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__116() {
  }
  _no_name_provided__116.prototype.invoke_113 = function (_this__0) {
    var tmp0_receiver_5_9_13_21_93_104 = _this__0;
    _set_classes_(tmp0_receiver_5_9_13_21_93_104, plus(_get_classes_(tmp0_receiver_5_9_13_21_93_104), 'options-chkbx'));
    var tmp0_set_0_6_10_14_22_94_105 = _this__0._get_attributes__21();
    var tmp1_set_0_7_11_15_23_95_106 = 'data-id';
    var tmp2_set_0_8_12_16_24_96_107 = '0';
    tmp0_set_0_6_10_14_22_94_105.put_5(tmp1_set_0_7_11_15_23_95_106, tmp2_set_0_8_12_16_24_96_107);
    Unit_getInstance();
    _set_onClickFunction_(_this__0, _no_name_provided_$factory_94(_this__0));
  };
  _no_name_provided__116.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__116.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__117() {
  }
  _no_name_provided__117.prototype.invoke_113 = function (_this__0) {
    var tmp0_receiver_5_18_22_30_102_113 = _this__0;
    _set_classes_(tmp0_receiver_5_18_22_30_102_113, plus(_get_classes_(tmp0_receiver_5_18_22_30_102_113), 'options-switchTitle'));
    _set_onClickFunction_(_this__0, _no_name_provided_$factory_95());
    _this__0.unaryPlus_54('Klar');
  };
  _no_name_provided__117.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__117.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__118($this) {
    this._$this_11 = $this;
  }
  _no_name_provided__118.prototype.invoke_306 = function (it) {
    var tmp = rumble_getInstance();
    var tmp0_subject_10_14_37_45_117_128 = this._$this_11._get_attributes__21().get_53('data-id');
    tmp._set_state__1(tmp0_subject_10_14_37_45_117_128 === '0' ? true : tmp0_subject_10_14_37_45_117_128 === '1' ? false : true);
  };
  _no_name_provided__118.prototype.invoke_81 = function (p1) {
    this.invoke_306(p1 instanceof Event ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__118.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__119() {
  }
  _no_name_provided__119.prototype.invoke_306 = function (it) {
    var tmp = rumble_getInstance();
    var tmp0_subject_7_20_43_51_123_134 = this.previousSibling.previousSibling.dataset.id;
    tmp._set_state__1(tmp0_subject_7_20_43_51_123_134 == '0' ? true : tmp0_subject_7_20_43_51_123_134 == '1' ? false : true);
  };
  _no_name_provided__119.prototype.invoke_81 = function (p1) {
    this.invoke_306(p1 instanceof Event ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__119.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__120() {
  }
  _no_name_provided__120.prototype.invoke_113 = function (_this__0) {
    var tmp0_receiver_5_9_32_40_112_123 = _this__0;
    _set_classes_(tmp0_receiver_5_9_32_40_112_123, plus(_get_classes_(tmp0_receiver_5_9_32_40_112_123), 'options-chkbx'));
    var tmp0_set_0_6_10_33_41_113_124 = _this__0._get_attributes__21();
    var tmp1_set_0_7_11_34_42_114_125 = 'data-id';
    var tmp2_set_0_8_12_35_43_115_126 = '1';
    tmp0_set_0_6_10_33_41_113_124.put_5(tmp1_set_0_7_11_34_42_114_125, tmp2_set_0_8_12_35_43_115_126);
    Unit_getInstance();
    _set_onClickFunction_(_this__0, _no_name_provided_$factory_98(_this__0));
  };
  _no_name_provided__120.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__120.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__121() {
  }
  _no_name_provided__121.prototype.invoke_113 = function (_this__0) {
    var tmp0_receiver_5_18_41_49_121_132 = _this__0;
    _set_classes_(tmp0_receiver_5_18_41_49_121_132, plus(_get_classes_(tmp0_receiver_5_18_41_49_121_132), 'options-switchTitle'));
    _set_onClickFunction_(_this__0, _no_name_provided_$factory_99());
    _this__0.unaryPlus_54('Ne');
  };
  _no_name_provided__121.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__121.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__122() {
  }
  _no_name_provided__122.prototype.invoke_113 = function (_this__0) {
    var tmp0_receiver_5_9_17_89_100 = _this__0;
    _set_classes_(tmp0_receiver_5_9_17_89_100, plus(_get_classes_(tmp0_receiver_5_9_17_89_100), 'options-switch'));
    var tmp0_div_0_6_10_18_90_101 = null;
    var tmp0_visit_0_2_7_11_19_91_102 = new DIV(attributesMapOf('class', tmp0_div_0_6_10_18_90_101), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_7_11_19_91_102, _no_name_provided_$factory_92());
    var tmp1_div_0_15_19_27_99_110 = null;
    var tmp0_visit_0_2_16_20_28_100_111 = new DIV(attributesMapOf('class', tmp1_div_0_15_19_27_99_110), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_16_20_28_100_111, _no_name_provided_$factory_93());
  };
  _no_name_provided__122.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__122.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__123() {
  }
  _no_name_provided__123.prototype.invoke_113 = function (_this__0) {
    var tmp0_receiver_5_28_36_108_119 = _this__0;
    _set_classes_(tmp0_receiver_5_28_36_108_119, plus(_get_classes_(tmp0_receiver_5_28_36_108_119), 'options-switch'));
    var tmp0_div_0_6_29_37_109_120 = null;
    var tmp0_visit_0_2_7_30_38_110_121 = new DIV(attributesMapOf('class', tmp0_div_0_6_29_37_109_120), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_7_30_38_110_121, _no_name_provided_$factory_96());
    var tmp1_div_0_15_38_46_118_129 = null;
    var tmp0_visit_0_2_16_39_47_119_130 = new DIV(attributesMapOf('class', tmp1_div_0_15_38_46_118_129), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_16_39_47_119_130, _no_name_provided_$factory_97());
  };
  _no_name_provided__123.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__123.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__124() {
  }
  _no_name_provided__124.prototype.invoke_113 = function (_this__0) {
    var tmp0_receiver_5_9_81_92 = _this__0;
    _set_classes_(tmp0_receiver_5_9_81_92, plus(_get_classes_(tmp0_receiver_5_9_81_92), 'options-wrapperTitle'));
    _this__0.unaryPlus_54('Vibrationen?');
  };
  _no_name_provided__124.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__124.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__125() {
  }
  _no_name_provided__125.prototype.invoke_113 = function (_this__0) {
    var tmp0_receiver_5_13_85_96 = _this__0;
    _set_classes_(tmp0_receiver_5_13_85_96, plus(_get_classes_(tmp0_receiver_5_13_85_96), 'options-wrapperInside'));
    var tmp0_div_0_6_14_86_97 = null;
    var tmp0_visit_0_2_7_15_87_98 = new DIV(attributesMapOf('class', tmp0_div_0_6_14_86_97), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_7_15_87_98, _no_name_provided_$factory_90());
    var tmp1_div_0_25_33_105_116 = null;
    var tmp0_visit_0_2_26_34_106_117 = new DIV(attributesMapOf('class', tmp1_div_0_25_33_105_116), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_26_34_106_117, _no_name_provided_$factory_91());
  };
  _no_name_provided__125.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__125.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__126() {
  }
  _no_name_provided__126.prototype.invoke_113 = function (_this__0) {
    _set_id_(_this__0, 'options-difficultyWrapper');
    var tmp0_receiver_5_8_19 = _this__0;
    _set_classes_(tmp0_receiver_5_8_19, plus(_get_classes_(tmp0_receiver_5_8_19), 'options-wrapper'));
    var tmp0_div_0_6_9_20 = null;
    var tmp0_visit_0_2_7_10_21 = new DIV(attributesMapOf('class', tmp0_div_0_6_9_20), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_7_10_21, _no_name_provided_$factory_71());
    var tmp1_div_0_10_13_24 = null;
    var tmp0_visit_0_2_11_14_25 = new DIV(attributesMapOf('class', tmp1_div_0_10_13_24), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_11_14_25, _no_name_provided_$factory_72());
  };
  _no_name_provided__126.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__126.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__127() {
  }
  _no_name_provided__127.prototype.invoke_113 = function (_this__0) {
    _set_id_(_this__0, 'options-rumbleWrapper');
    var tmp0_receiver_5_77_88 = _this__0;
    _set_classes_(tmp0_receiver_5_77_88, plus(_get_classes_(tmp0_receiver_5_77_88), 'options-wrapper'));
    var tmp0_div_0_6_78_89 = null;
    var tmp0_visit_0_2_7_79_90 = new DIV(attributesMapOf('class', tmp0_div_0_6_78_89), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_7_79_90, _no_name_provided_$factory_88());
    var tmp1_div_0_10_82_93 = null;
    var tmp0_visit_0_2_11_83_94 = new DIV(attributesMapOf('class', tmp1_div_0_10_82_93), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_11_83_94, _no_name_provided_$factory_89());
  };
  _no_name_provided__127.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__127.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__128() {
  }
  _no_name_provided__128.prototype.invoke_113 = function (_this__0) {
    _set_id_(_this__0, 'options-top');
    var tmp0_div_0_5_8 = null;
    var tmp0_visit_0_2_6_9 = new DIV(attributesMapOf('class', tmp0_div_0_5_8), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_6_9, _no_name_provided_$factory_67());
  };
  _no_name_provided__128.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__128.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__129() {
  }
  _no_name_provided__129.prototype.invoke_113 = function (_this__0) {
    _set_id_(_this__0, 'options-switches');
    var tmp0_div_0_5_16 = null;
    var tmp0_visit_0_2_6_17 = new DIV(attributesMapOf('class', tmp0_div_0_5_16), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_6_17, _no_name_provided_$factory_69());
    var tmp1_div_0_74_85 = null;
    var tmp0_visit_0_2_75_86 = new DIV(attributesMapOf('class', tmp1_div_0_74_85), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_75_86, _no_name_provided_$factory_70());
  };
  _no_name_provided__129.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__129.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__130() {
  }
  _no_name_provided__130.prototype.invoke_113 = function (_this__0) {
    _set_id_(_this__0, 'root');
    var tmp0_div_0_5 = null;
    var tmp0_visit_0_2_6 = new DIV(attributesMapOf('class', tmp0_div_0_5), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_6, _no_name_provided_$factory_65());
    var tmp1_div_0_13 = null;
    var tmp0_visit_0_2_14 = new DIV(attributesMapOf('class', tmp1_div_0_13), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_14, _no_name_provided_$factory_66());
  };
  _no_name_provided__130.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__130.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_64() {
    var i = new _no_name_provided__130();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_65() {
    var i = new _no_name_provided__128();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_66() {
    var i = new _no_name_provided__129();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_67() {
    var i = new _no_name_provided__96();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_68() {
    var i = new _no_name_provided__95();
    return function (p1) {
      i.invoke_306(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_69() {
    var i = new _no_name_provided__126();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_70() {
    var i = new _no_name_provided__127();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_71() {
    var i = new _no_name_provided__112();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_72() {
    var i = new _no_name_provided__113();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_73() {
    var i = new _no_name_provided__109();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_74() {
    var i = new _no_name_provided__110();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_75() {
    var i = new _no_name_provided__111();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_76() {
    var i = new _no_name_provided__99();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_77() {
    var i = new _no_name_provided__100();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_78($this) {
    var i = new _no_name_provided__97($this);
    return function (p1) {
      i.invoke_306(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_79() {
    var i = new _no_name_provided__98();
    return function (p1) {
      i.invoke_306(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_80() {
    var i = new _no_name_provided__103();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_81() {
    var i = new _no_name_provided__104();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_82($this) {
    var i = new _no_name_provided__101($this);
    return function (p1) {
      i.invoke_306(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_83() {
    var i = new _no_name_provided__102();
    return function (p1) {
      i.invoke_306(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_84() {
    var i = new _no_name_provided__107();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_85() {
    var i = new _no_name_provided__108();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_86($this) {
    var i = new _no_name_provided__105($this);
    return function (p1) {
      i.invoke_306(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_87() {
    var i = new _no_name_provided__106();
    return function (p1) {
      i.invoke_306(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_88() {
    var i = new _no_name_provided__124();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_89() {
    var i = new _no_name_provided__125();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_90() {
    var i = new _no_name_provided__122();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_91() {
    var i = new _no_name_provided__123();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_92() {
    var i = new _no_name_provided__116();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_93() {
    var i = new _no_name_provided__117();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_94($this) {
    var i = new _no_name_provided__114($this);
    return function (p1) {
      i.invoke_306(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_95() {
    var i = new _no_name_provided__115();
    return function (p1) {
      i.invoke_306(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_96() {
    var i = new _no_name_provided__120();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_97() {
    var i = new _no_name_provided__121();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_98($this) {
    var i = new _no_name_provided__118($this);
    return function (p1) {
      i.invoke_306(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_99() {
    var i = new _no_name_provided__119();
    return function (p1) {
      i.invoke_306(p1);
      return Unit_getInstance();
    };
  }
  function play() {
    window.location.hash = '#play';
    game_getInstance()._set_isRunning_(true);
    var tmp0_div_0 = _get_create_(document);
    var tmp1_div_0 = null;
    var tmp0_visitAndFinalize_0_2 = new DIV(attributesMapOf('class', tmp1_div_0), tmp0_div_0);
    var tmp = visitTagAndFinalize(tmp0_visitAndFinalize_0_2, tmp0_div_0, _no_name_provided_$factory_100());
    return tmp instanceof HTMLDivElement ? tmp : THROW_CCE();
  }
  function _no_name_provided__131() {
  }
  _no_name_provided__131.prototype.invoke_100 = function (_this__0) {
    _this__0.unaryPlus_54('Trinkalternative');
  };
  _no_name_provided__131.prototype.invoke_81 = function (p1) {
    this.invoke_100(p1 instanceof SPAN ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__131.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__132() {
  }
  _no_name_provided__132.prototype.invoke_206 = function ($this$unsafe) {
    $this$unsafe.raw_2(trimIndent('\n                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="36"\n                                height="36" viewBox="0 0 36 36" xml:space="preserve" style="background-color: transparent">\n                                <path stroke="floralwhite" stroke-width="3px" stroke-linejoin="round" stroke-linecap="round" fill="black"\n                                    d="m18 3 v20 m0 0 l-5 -5 h10 l-5 5 z" />\n                            <\/svg>\n                        '));
  };
  _no_name_provided__132.prototype.invoke_81 = function (p1) {
    this.invoke_206((!(p1 == null) ? isInterface(p1, Unsafe) : false) ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__132.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__133() {
  }
  _no_name_provided__133.prototype.invoke_113 = function (_this__0) {
    _set_id_(_this__0, 'card');
  };
  _no_name_provided__133.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__133.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__134() {
  }
  _no_name_provided__134.prototype.invoke_113 = function (_this__0) {
    _set_id_(_this__0, 'play-name');
    _this__0.unaryPlus_54('spater');
  };
  _no_name_provided__134.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__134.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__135() {
  }
  _no_name_provided__135.prototype.invoke_113 = function (_this__0) {
    _set_id_(_this__0, 'play-spacer');
    var tmp0_span_0_5_11 = null;
    var tmp0_visit_0_2_6_12 = new SPAN(attributesMapOf('class', tmp0_span_0_5_11), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_6_12, _no_name_provided_$factory_104());
    unsafe(_this__0, _no_name_provided_$factory_105());
  };
  _no_name_provided__135.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__135.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__136() {
  }
  _no_name_provided__136.prototype.invoke_113 = function (_this__0) {
    _set_id_(_this__0, 'card-wrapper');
    var tmp0_div_0_5_18 = null;
    var tmp0_visit_0_2_6_19 = new DIV(attributesMapOf('class', tmp0_div_0_5_18), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_6_19, _no_name_provided_$factory_106());
  };
  _no_name_provided__136.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__136.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__137() {
  }
  _no_name_provided__137.prototype.invoke_113 = function (_this__0) {
    _set_id_(_this__0, 'root');
    var tmp0_div_0_5 = null;
    var tmp0_visit_0_2_6 = new DIV(attributesMapOf('class', tmp0_div_0_5), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_6, _no_name_provided_$factory_101());
    var tmp1_div_0_8 = null;
    var tmp0_visit_0_2_9 = new DIV(attributesMapOf('class', tmp1_div_0_8), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_9, _no_name_provided_$factory_102());
    var tmp2_div_0_15 = null;
    var tmp0_visit_0_2_16 = new DIV(attributesMapOf('class', tmp2_div_0_15), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_16, _no_name_provided_$factory_103());
  };
  _no_name_provided__137.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__137.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_100() {
    var i = new _no_name_provided__137();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_101() {
    var i = new _no_name_provided__134();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_102() {
    var i = new _no_name_provided__135();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_103() {
    var i = new _no_name_provided__136();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_104() {
    var i = new _no_name_provided__131();
    return function (p1) {
      i.invoke_100(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_105() {
    var i = new _no_name_provided__132();
    return function (p1) {
      i.invoke_206(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_106() {
    var i = new _no_name_provided__133();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function pregame() {
    window.location.hash = '#pregame';
    var tmp0_div_0 = _get_create_(document);
    var tmp1_div_0 = null;
    var tmp0_visitAndFinalize_0_2 = new DIV(attributesMapOf('class', tmp1_div_0), tmp0_div_0);
    var tmp = visitTagAndFinalize(tmp0_visitAndFinalize_0_2, tmp0_div_0, _no_name_provided_$factory_107());
    return tmp instanceof HTMLDivElement ? tmp : THROW_CCE();
  }
  function inpFocusOut() {
    var tmp;
    if (isMobile()) {
      var tmp0_asDynamic_0 = document.querySelector('#pregame-playernameInp');
      tmp = tmp0_asDynamic_0.value.trim().length <= 1;
    } else {
      tmp = false;
    }
    if (tmp) {
      var tmp0_safe_receiver = document.querySelector('#pregame-playerList');
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.classList;
      if (tmp1_safe_receiver == null)
        null;
      else {
        (function () {
          var $externalVarargReceiverTmp = tmp1_safe_receiver;
          return $externalVarargReceiverTmp.remove.apply($externalVarargReceiverTmp, [].concat(['pregame-hidden']));
        }.call(this));
        Unit_getInstance();
      }
      Unit_getInstance();
      var tmp2_safe_receiver = document.querySelector('#pregame-playerBtn');
      var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.classList;
      if (tmp3_safe_receiver == null)
        null;
      else {
        (function () {
          var $externalVarargReceiverTmp = tmp3_safe_receiver;
          return $externalVarargReceiverTmp.remove.apply($externalVarargReceiverTmp, [].concat(['pregame-hidden']));
        }.call(this));
        Unit_getInstance();
      }
      Unit_getInstance();
      var tmp4_safe_receiver = document.querySelector('#pregame-addPlayerBtn');
      var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.classList;
      if (tmp5_safe_receiver == null)
        null;
      else {
        (function () {
          var $externalVarargReceiverTmp = tmp5_safe_receiver;
          return $externalVarargReceiverTmp.add.apply($externalVarargReceiverTmp, [].concat(['pregame-hidden']));
        }.call(this));
        Unit_getInstance();
      }
      Unit_getInstance();
      playerList_getInstance().update_0();
    } else {
    }
  }
  function _no_name_provided__138() {
  }
  _no_name_provided__138.prototype.invoke_306 = function (it) {
    if (isMobile()) {
      var tmp0_safe_receiver_10_17_23 = document.querySelector('#pregame-playerList');
      var tmp1_safe_receiver_9_16_22 = tmp0_safe_receiver_10_17_23 == null ? null : tmp0_safe_receiver_10_17_23.classList;
      if (tmp1_safe_receiver_9_16_22 == null)
        null;
      else {
        (function () {
          var $externalVarargReceiverTmp = tmp1_safe_receiver_9_16_22;
          return $externalVarargReceiverTmp.add.apply($externalVarargReceiverTmp, [].concat(['pregame-hidden']));
        }.call(this));
        Unit_getInstance();
      }
      Unit_getInstance();
      var tmp2_safe_receiver_12_19_25 = document.querySelector('#pregame-playerBtn');
      var tmp3_safe_receiver_11_18_24 = tmp2_safe_receiver_12_19_25 == null ? null : tmp2_safe_receiver_12_19_25.classList;
      if (tmp3_safe_receiver_11_18_24 == null)
        null;
      else {
        (function () {
          var $externalVarargReceiverTmp = tmp3_safe_receiver_11_18_24;
          return $externalVarargReceiverTmp.add.apply($externalVarargReceiverTmp, [].concat(['pregame-hidden']));
        }.call(this));
        Unit_getInstance();
      }
      Unit_getInstance();
      var tmp4_safe_receiver_14_21_27 = document.querySelector('#pregame-addPlayerBtn');
      var tmp5_safe_receiver_13_20_26 = tmp4_safe_receiver_14_21_27 == null ? null : tmp4_safe_receiver_14_21_27.classList;
      if (tmp5_safe_receiver_13_20_26 == null)
        null;
      else {
        (function () {
          var $externalVarargReceiverTmp = tmp5_safe_receiver_13_20_26;
          return $externalVarargReceiverTmp.remove.apply($externalVarargReceiverTmp, [].concat(['pregame-hidden']));
        }.call(this));
        Unit_getInstance();
      }
      Unit_getInstance();
    }};
  _no_name_provided__138.prototype.invoke_81 = function (p1) {
    this.invoke_306(p1 instanceof Event ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__138.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__139() {
  }
  _no_name_provided__139.prototype.invoke_306 = function (it) {
    inpFocusOut();
  };
  _no_name_provided__139.prototype.invoke_81 = function (p1) {
    this.invoke_306(p1 instanceof Event ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__139.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__140() {
  }
  _no_name_provided__140.prototype.invoke_306 = function (it) {
    if (it instanceof KeyboardEvent)
      it;
    else
      THROW_CCE();
    Unit_getInstance();
    if (it.key === 'Enter') {
      var tmp0_asDynamic_0_17_24_30 = document.querySelector('#pregame-addPlayerBtn');
      tmp0_asDynamic_0_17_24_30.click();
    }};
  _no_name_provided__140.prototype.invoke_81 = function (p1) {
    this.invoke_306(p1 instanceof Event ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__140.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__141() {
  }
  _no_name_provided__141.prototype.invoke_306 = function (it) {
    var tmp = rumbler_getInstance();
    tmp.rumble$default(0.0, 1, null);
    var tmp0_asDynamic_0_14_41_47 = document.querySelector('#pregame-playernameInp');
    var tmp0_safe_receiver_13_40_46 = tmp0_asDynamic_0_14_41_47.value;
    var tmp1_safe_receiver_12_39_45 = tmp0_safe_receiver_13_40_46 == null ? null : toString_1(tmp0_safe_receiver_13_40_46);
    var tmp_0;
    if (tmp1_safe_receiver_12_39_45 == null) {
      tmp_0 = null;
    } else {
      tmp_0 = toString_1(trim_0((!(tmp1_safe_receiver_12_39_45 == null) ? isCharSequence(tmp1_safe_receiver_12_39_45) : false) ? tmp1_safe_receiver_12_39_45 : THROW_CCE()));
    }
    var tmp2_safe_receiver_11_38_44 = tmp_0;
    var tmp3_safe_receiver_10_37_43 = tmp2_safe_receiver_11_38_44 == null ? null : capitalize(tmp2_safe_receiver_11_38_44);
    if (tmp3_safe_receiver_10_37_43 == null)
      null;
    else {
      playerList_getInstance().add_26(tmp3_safe_receiver_10_37_43);
      inpFocusOut();
      var tmp0_asDynamic_0_2_15_42_48 = document.querySelector('#pregame-playernameInp');
      tmp0_asDynamic_0_2_15_42_48.value = '';
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  _no_name_provided__141.prototype.invoke_81 = function (p1) {
    this.invoke_306(p1 instanceof Event ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__141.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__142() {
  }
  _no_name_provided__142.prototype.invoke_302 = function () {
    availableCards_getInstance().putCard();
  };
  _no_name_provided__142.prototype.invoke_73 = function () {
    this.invoke_302();
    return Unit_getInstance();
  };
  _no_name_provided__142.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__143() {
  }
  _no_name_provided__143.prototype.invoke_306 = function (it) {
    var tmp = rumbler_getInstance();
    tmp.rumble$default(0.0, 1, null);
    var tmp_0 = play();
    changePage(tmp_0, _no_name_provided_$factory_120());
  };
  _no_name_provided__143.prototype.invoke_81 = function (p1) {
    this.invoke_306(p1 instanceof Event ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__143.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__144() {
  }
  _no_name_provided__144.prototype.invoke_108 = function (_this__0) {
    _set_id_(_this__0, 'pregame-playBtn');
    var tmp0_receiver_8_15_59_65 = _this__0;
    _set_classes_(tmp0_receiver_8_15_59_65, plus(_get_classes_(tmp0_receiver_8_15_59_65), 'btn'));
    _set_onClickFunction_(_this__0, _no_name_provided_$factory_119());
    _this__0.unaryPlus_54('Trinken!');
  };
  _no_name_provided__144.prototype.invoke_81 = function (p1) {
    this.invoke_108(p1 instanceof BUTTON ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__144.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__145() {
  }
  _no_name_provided__145.prototype.invoke_104 = function (_this__0) {
    _this__0._set_type__0(InputType_text_getInstance());
    _this__0._set_name__0('playername');
    _set_id_(_this__0, 'pregame-playernameInp');
    _this__0._set_autoComplete_(false);
    _this__0._set_placeholder_('Name');
    _set_onFocusFunction_(_this__0, _no_name_provided_$factory_114());
    _set_onFocusOutFunction_(_this__0, _no_name_provided_$factory_115());
    _set_onKeyUpFunction_(_this__0, _no_name_provided_$factory_116());
  };
  _no_name_provided__145.prototype.invoke_81 = function (p1) {
    this.invoke_104(p1 instanceof INPUT ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__145.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__146() {
  }
  _no_name_provided__146.prototype.invoke_108 = function (_this__0) {
    _set_id_(_this__0, 'pregame-addPlayerBtn');
    var tmp0_receiver_8_35_41 = _this__0;
    _set_classes_(tmp0_receiver_8_35_41, plus(_get_classes_(tmp0_receiver_8_35_41), 'btn'));
    _set_onClickFunction_(_this__0, _no_name_provided_$factory_117());
    _this__0.unaryPlus_54('+');
  };
  _no_name_provided__146.prototype.invoke_81 = function (p1) {
    this.invoke_108(p1 instanceof BUTTON ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__146.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__147() {
  }
  _no_name_provided__147.prototype.invoke_113 = function (_this__0) {
    _set_id_(_this__0, 'pregame-playerList');
  };
  _no_name_provided__147.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__147.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__148() {
  }
  _no_name_provided__148.prototype.invoke_113 = function (_this__0) {
    _set_id_(_this__0, 'pregame-buttonWrapper');
    var tmp0_button_0_5_49_55 = null;
    var tmp1_button_0_6_50_56 = null;
    var tmp2_button_0_7_51_57 = null;
    var tmp3_button_0_8_52_58 = null;
    var tmp4_button_0_9_53_59 = null;
    var tmp0_safe_receiver_3_11_55_61 = tmp0_button_0_5_49_55;
    var tmp = tmp0_safe_receiver_3_11_55_61 == null ? null : enumEncode(tmp0_safe_receiver_3_11_55_61);
    var tmp1_safe_receiver_4_12_56_62 = tmp1_button_0_6_50_56;
    var tmp_0 = tmp1_safe_receiver_4_12_56_62 == null ? null : enumEncode(tmp1_safe_receiver_4_12_56_62);
    var tmp2_safe_receiver_5_13_57_63 = tmp3_button_0_8_52_58;
    var tmp0_visit_0_2_10_54_60 = new BUTTON(attributesMapOf_0(['formenctype', tmp, 'formmethod', tmp_0, 'name', tmp2_button_0_7_51_57, 'type', tmp2_safe_receiver_5_13_57_63 == null ? null : enumEncode(tmp2_safe_receiver_5_13_57_63), 'class', tmp4_button_0_9_53_59]), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_10_54_60, _no_name_provided_$factory_118());
  };
  _no_name_provided__148.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__148.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__149() {
  }
  _no_name_provided__149.prototype.invoke_113 = function (_this__0) {
    _set_id_(_this__0, 'pregame-title');
    _this__0.unaryPlus_54('Pregame');
  };
  _no_name_provided__149.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__149.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__150() {
  }
  _no_name_provided__150.prototype.invoke_113 = function (_this__0) {
    _set_id_(_this__0, 'pregame-content');
    var tmp0_input_0_5_11 = null;
    var tmp1_input_0_6_12 = null;
    var tmp2_input_0_7_13 = null;
    var tmp3_input_0_8_14 = null;
    var tmp4_input_0_9_15 = null;
    var tmp0_safe_receiver_3_11_17 = tmp0_input_0_5_11;
    var tmp = tmp0_safe_receiver_3_11_17 == null ? null : enumEncode(tmp0_safe_receiver_3_11_17);
    var tmp1_safe_receiver_4_12_18 = tmp1_input_0_6_12;
    var tmp_0 = tmp1_safe_receiver_4_12_18 == null ? null : enumEncode(tmp1_safe_receiver_4_12_18);
    var tmp2_safe_receiver_5_13_19 = tmp2_input_0_7_13;
    var tmp0_visit_0_2_10_16 = new INPUT(attributesMapOf_0(['type', tmp, 'formenctype', tmp_0, 'formmethod', tmp2_safe_receiver_5_13_19 == null ? null : enumEncode(tmp2_safe_receiver_5_13_19), 'name', tmp3_input_0_8_14, 'class', tmp4_input_0_9_15]), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_10_16, _no_name_provided_$factory_110());
    var tmp5_button_0_25_31 = null;
    var tmp6_button_0_26_32 = null;
    var tmp7_button_0_27_33 = null;
    var tmp8_button_0_28_34 = null;
    var tmp9_button_0_29_35 = null;
    var tmp0_safe_receiver_3_31_37 = tmp5_button_0_25_31;
    var tmp_1 = tmp0_safe_receiver_3_31_37 == null ? null : enumEncode(tmp0_safe_receiver_3_31_37);
    var tmp1_safe_receiver_4_32_38 = tmp6_button_0_26_32;
    var tmp_2 = tmp1_safe_receiver_4_32_38 == null ? null : enumEncode(tmp1_safe_receiver_4_32_38);
    var tmp2_safe_receiver_5_33_39 = tmp8_button_0_28_34;
    var tmp0_visit_0_2_30_36 = new BUTTON(attributesMapOf_0(['formenctype', tmp_1, 'formmethod', tmp_2, 'name', tmp7_button_0_27_33, 'type', tmp2_safe_receiver_5_33_39 == null ? null : enumEncode(tmp2_safe_receiver_5_33_39), 'class', tmp9_button_0_29_35]), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_30_36, _no_name_provided_$factory_111());
    var tmp10_div_0_43_49 = null;
    var tmp0_visit_0_2_44_50 = new DIV(attributesMapOf('class', tmp10_div_0_43_49), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_44_50, _no_name_provided_$factory_112());
    var tmp11_div_0_46_52 = null;
    var tmp0_visit_0_2_47_53 = new DIV(attributesMapOf('class', tmp11_div_0_46_52), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_47_53, _no_name_provided_$factory_113());
  };
  _no_name_provided__150.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__150.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__151() {
  }
  _no_name_provided__151.prototype.invoke_113 = function (_this__0) {
    _set_id_(_this__0, 'root');
    var tmp0_div_0_5 = null;
    var tmp0_visit_0_2_6 = new DIV(attributesMapOf('class', tmp0_div_0_5), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_6, _no_name_provided_$factory_108());
    var tmp1_div_0_8 = null;
    var tmp0_visit_0_2_9 = new DIV(attributesMapOf('class', tmp1_div_0_8), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_9, _no_name_provided_$factory_109());
  };
  _no_name_provided__151.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__151.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_107() {
    var i = new _no_name_provided__151();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_108() {
    var i = new _no_name_provided__149();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_109() {
    var i = new _no_name_provided__150();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_110() {
    var i = new _no_name_provided__145();
    return function (p1) {
      i.invoke_104(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_111() {
    var i = new _no_name_provided__146();
    return function (p1) {
      i.invoke_108(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_112() {
    var i = new _no_name_provided__147();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_113() {
    var i = new _no_name_provided__148();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_114() {
    var i = new _no_name_provided__138();
    return function (p1) {
      i.invoke_306(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_115() {
    var i = new _no_name_provided__139();
    return function (p1) {
      i.invoke_306(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_116() {
    var i = new _no_name_provided__140();
    return function (p1) {
      i.invoke_306(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_117() {
    var i = new _no_name_provided__141();
    return function (p1) {
      i.invoke_306(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_118() {
    var i = new _no_name_provided__144();
    return function (p1) {
      i.invoke_108(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_119() {
    var i = new _no_name_provided__143();
    return function (p1) {
      i.invoke_306(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_120() {
    var i = new _no_name_provided__142();
    return function () {
      i.invoke_302();
      return Unit_getInstance();
    };
  }
  function startmenu() {
    window.location.hash = '#startmenu';
    game_getInstance()._set_isRunning_(false);
    var tmp0_div_0 = _get_create_(document);
    var tmp1_div_0 = null;
    var tmp0_visitAndFinalize_0_2 = new DIV(attributesMapOf('class', tmp1_div_0), tmp0_div_0);
    var tmp = visitTagAndFinalize(tmp0_visitAndFinalize_0_2, tmp0_div_0, _no_name_provided_$factory_121());
    return tmp instanceof HTMLDivElement ? tmp : THROW_CCE();
  }
  function _no_name_provided__152() {
  }
  _no_name_provided__152.prototype.invoke_302 = function () {
    playerList_getInstance().update_0();
  };
  _no_name_provided__152.prototype.invoke_73 = function () {
    this.invoke_302();
    return Unit_getInstance();
  };
  _no_name_provided__152.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__153() {
  }
  _no_name_provided__153.prototype.invoke_306 = function (_anonymous_parameter_0_) {
    var tmp = pregame();
    changePage(tmp, _no_name_provided_$factory_128());
  };
  _no_name_provided__153.prototype.invoke_81 = function (p1) {
    this.invoke_306(p1 instanceof Event ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__153.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__154() {
  }
  _no_name_provided__154.prototype.invoke_302 = function () {
    var wrapper_12_34_40 = document.querySelectorAll('.options-wrapperInside');
    options_getInstance().updateAllViews();
    if (isMobile()) {
      var tmp0_repeat_0_13_35_41 = wrapper_12_34_40.length;
      var inductionVariable = 0;
      if (inductionVariable < tmp0_repeat_0_13_35_41)
        do {
          var index_2_15_37_43 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp0_asDynamic_0_4_16_38_44 = wrapper_12_34_40[index_2_15_37_43];
          tmp0_asDynamic_0_4_16_38_44.style.flexDirection = 'column';
        }
         while (inductionVariable < tmp0_repeat_0_13_35_41);
    } else {
      var tmp1_repeat_0_17_39_45 = wrapper_12_34_40.length;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < tmp1_repeat_0_17_39_45)
        do {
          var index_2_19_41_47 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var tmp0_asDynamic_0_4_20_42_48 = wrapper_12_34_40[index_2_19_41_47];
          tmp0_asDynamic_0_4_20_42_48.style.flexDirection = 'row';
        }
         while (inductionVariable_0 < tmp1_repeat_0_17_39_45);
    }
  };
  _no_name_provided__154.prototype.invoke_73 = function () {
    this.invoke_302();
    return Unit_getInstance();
  };
  _no_name_provided__154.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__155() {
  }
  _no_name_provided__155.prototype.invoke_306 = function (_anonymous_parameter_0_) {
    var tmp = options();
    changePage(tmp, _no_name_provided_$factory_130());
  };
  _no_name_provided__155.prototype.invoke_81 = function (p1) {
    this.invoke_306(p1 instanceof Event ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__155.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__156() {
  }
  _no_name_provided__156.prototype.invoke_108 = function (_this__0) {
    _set_id_(_this__0, 'playBtn');
    var tmp0_receiver_8_16_22 = _this__0;
    _set_classes_(tmp0_receiver_8_16_22, plus(_get_classes_(tmp0_receiver_8_16_22), 'startMenu-btn'));
    var tmp1_receiver_9_17_23 = _this__0;
    _set_classes_(tmp1_receiver_9_17_23, plus(_get_classes_(tmp1_receiver_9_17_23), 'btn'));
    _set_onClickFunction_(_this__0, _no_name_provided_$factory_127());
    _this__0.unaryPlus_54('Spielen!');
  };
  _no_name_provided__156.prototype.invoke_81 = function (p1) {
    this.invoke_108(p1 instanceof BUTTON ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__156.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__157() {
  }
  _no_name_provided__157.prototype.invoke_108 = function (_this__0) {
    _set_id_(_this__0, 'optionBtn');
    var tmp0_receiver_8_30_36 = _this__0;
    _set_classes_(tmp0_receiver_8_30_36, plus(_get_classes_(tmp0_receiver_8_30_36), 'startMenu-btn'));
    var tmp1_receiver_9_31_37 = _this__0;
    _set_classes_(tmp1_receiver_9_31_37, plus(_get_classes_(tmp1_receiver_9_31_37), 'btn'));
    _set_onClickFunction_(_this__0, _no_name_provided_$factory_129());
    _this__0.unaryPlus_54('Einstellungen');
  };
  _no_name_provided__157.prototype.invoke_81 = function (p1) {
    this.invoke_108(p1 instanceof BUTTON ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__157.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__158() {
  }
  _no_name_provided__158.prototype.invoke_306 = function (_anonymous_parameter_0_) {
    shareRoutine();
  };
  _no_name_provided__158.prototype.invoke_81 = function (p1) {
    this.invoke_306(p1 instanceof Event ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__158.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__159() {
  }
  _no_name_provided__159.prototype.invoke_108 = function (_this__0) {
    _set_id_(_this__0, 'shareBtn');
    var tmp0_receiver_8_16_63 = _this__0;
    _set_classes_(tmp0_receiver_8_16_63, plus(_get_classes_(tmp0_receiver_8_16_63), 'startMenu-btn'));
    var tmp1_receiver_9_17_64 = _this__0;
    _set_classes_(tmp1_receiver_9_17_64, plus(_get_classes_(tmp1_receiver_9_17_64), 'btn'));
    _set_onClickFunction_(_this__0, _no_name_provided_$factory_132());
    _this__0.unaryPlus_54('Teilen');
  };
  _no_name_provided__159.prototype.invoke_81 = function (p1) {
    this.invoke_108(p1 instanceof BUTTON ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__159.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__160() {
  }
  _no_name_provided__160.prototype.invoke_113 = function (_this__0) {
    _set_id_(_this__0, 'startMenu-title');
    _this__0.unaryPlus_54('Trink!Trink!');
  };
  _no_name_provided__160.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__160.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__161() {
  }
  _no_name_provided__161.prototype.invoke_113 = function (_this__0) {
    var tmp0_receiver_5_11 = _this__0;
    _set_classes_(tmp0_receiver_5_11, plus(_get_classes_(tmp0_receiver_5_11), 'startMenu-btns'));
    var tmp0_button_0_6_12 = null;
    var tmp1_button_0_7_13 = null;
    var tmp2_button_0_8_14 = null;
    var tmp3_button_0_9_15 = null;
    var tmp4_button_0_10_16 = null;
    var tmp0_safe_receiver_3_12_18 = tmp0_button_0_6_12;
    var tmp = tmp0_safe_receiver_3_12_18 == null ? null : enumEncode(tmp0_safe_receiver_3_12_18);
    var tmp1_safe_receiver_4_13_19 = tmp1_button_0_7_13;
    var tmp_0 = tmp1_safe_receiver_4_13_19 == null ? null : enumEncode(tmp1_safe_receiver_4_13_19);
    var tmp2_safe_receiver_5_14_20 = tmp3_button_0_9_15;
    var tmp0_visit_0_2_11_17 = new BUTTON(attributesMapOf_0(['formenctype', tmp, 'formmethod', tmp_0, 'name', tmp2_button_0_8_14, 'type', tmp2_safe_receiver_5_14_20 == null ? null : enumEncode(tmp2_safe_receiver_5_14_20), 'class', tmp4_button_0_10_16]), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_11_17, _no_name_provided_$factory_125());
    var tmp5_button_0_20_26 = null;
    var tmp6_button_0_21_27 = null;
    var tmp7_button_0_22_28 = null;
    var tmp8_button_0_23_29 = null;
    var tmp9_button_0_24_30 = null;
    var tmp0_safe_receiver_3_26_32 = tmp5_button_0_20_26;
    var tmp_1 = tmp0_safe_receiver_3_26_32 == null ? null : enumEncode(tmp0_safe_receiver_3_26_32);
    var tmp1_safe_receiver_4_27_33 = tmp6_button_0_21_27;
    var tmp_2 = tmp1_safe_receiver_4_27_33 == null ? null : enumEncode(tmp1_safe_receiver_4_27_33);
    var tmp2_safe_receiver_5_28_34 = tmp8_button_0_23_29;
    var tmp0_visit_0_2_25_31 = new BUTTON(attributesMapOf_0(['formenctype', tmp_1, 'formmethod', tmp_2, 'name', tmp7_button_0_22_28, 'type', tmp2_safe_receiver_5_28_34 == null ? null : enumEncode(tmp2_safe_receiver_5_28_34), 'class', tmp9_button_0_24_30]), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_25_31, _no_name_provided_$factory_126());
  };
  _no_name_provided__161.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__161.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__162() {
  }
  _no_name_provided__162.prototype.invoke_113 = function (_this__0) {
    var tmp0_receiver_5_52 = _this__0;
    _set_classes_(tmp0_receiver_5_52, plus(_get_classes_(tmp0_receiver_5_52), 'startMenu-btns'));
    var tmp0_button_0_6_53 = null;
    var tmp1_button_0_7_54 = null;
    var tmp2_button_0_8_55 = null;
    var tmp3_button_0_9_56 = null;
    var tmp4_button_0_10_57 = null;
    var tmp0_safe_receiver_3_12_59 = tmp0_button_0_6_53;
    var tmp = tmp0_safe_receiver_3_12_59 == null ? null : enumEncode(tmp0_safe_receiver_3_12_59);
    var tmp1_safe_receiver_4_13_60 = tmp1_button_0_7_54;
    var tmp_0 = tmp1_safe_receiver_4_13_60 == null ? null : enumEncode(tmp1_safe_receiver_4_13_60);
    var tmp2_safe_receiver_5_14_61 = tmp3_button_0_9_56;
    var tmp0_visit_0_2_11_58 = new BUTTON(attributesMapOf_0(['formenctype', tmp, 'formmethod', tmp_0, 'name', tmp2_button_0_8_55, 'type', tmp2_safe_receiver_5_14_61 == null ? null : enumEncode(tmp2_safe_receiver_5_14_61), 'class', tmp4_button_0_10_57]), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_11_58, _no_name_provided_$factory_131());
  };
  _no_name_provided__162.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__162.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__163() {
  }
  _no_name_provided__163.prototype.invoke_113 = function (_this__0) {
    _set_id_(_this__0, 'root');
    var tmp0_div_0_5 = null;
    var tmp0_visit_0_2_6 = new DIV(attributesMapOf('class', tmp0_div_0_5), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_6, _no_name_provided_$factory_122());
    var tmp1_div_0_8 = null;
    var tmp0_visit_0_2_9 = new DIV(attributesMapOf('class', tmp1_div_0_8), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_9, _no_name_provided_$factory_123());
    var tmp2_div_0_49 = null;
    var tmp0_visit_0_2_50 = new DIV(attributesMapOf('class', tmp2_div_0_49), _this__0._get_consumer__21());
    visitTag(tmp0_visit_0_2_50, _no_name_provided_$factory_124());
  };
  _no_name_provided__163.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__163.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_121() {
    var i = new _no_name_provided__163();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_122() {
    var i = new _no_name_provided__160();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_123() {
    var i = new _no_name_provided__161();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_124() {
    var i = new _no_name_provided__162();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_125() {
    var i = new _no_name_provided__156();
    return function (p1) {
      i.invoke_108(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_126() {
    var i = new _no_name_provided__157();
    return function (p1) {
      i.invoke_108(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_127() {
    var i = new _no_name_provided__153();
    return function (p1) {
      i.invoke_306(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_128() {
    var i = new _no_name_provided__152();
    return function () {
      i.invoke_302();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_129() {
    var i = new _no_name_provided__155();
    return function (p1) {
      i.invoke_306(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_130() {
    var i = new _no_name_provided__154();
    return function () {
      i.invoke_302();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_131() {
    var i = new _no_name_provided__159();
    return function (p1) {
      i.invoke_108(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_132() {
    var i = new _no_name_provided__158();
    return function (p1) {
      i.invoke_306(p1);
      return Unit_getInstance();
    };
  }
  function main() {
    var tmp = window;
    tmp.onload = _no_name_provided_$factory_133();
  }
  function changePage(compo, doAfter) {
    (function () {
      var $externalVarargReceiverTmp = ensureNotNull(document.getElementById('root'));
      return $externalVarargReceiverTmp.replaceWith.apply($externalVarargReceiverTmp, [].concat([compo]));
    }.call(this));
    doAfter();
  }
  function changePage$default(compo, doAfter, $mask0, $handler) {
    if (!(($mask0 & 2) === 0)) {
      doAfter = _no_name_provided_$factory_134();
    }return changePage(compo, doAfter);
  }
  function _no_name_provided__164() {
  }
  _no_name_provided__164.prototype.invoke_302 = function () {
    playerList_getInstance().update_0();
  };
  _no_name_provided__164.prototype.invoke_73 = function () {
    this.invoke_302();
    return Unit_getInstance();
  };
  _no_name_provided__164.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__165() {
  }
  _no_name_provided__165.prototype.invoke_302 = function () {
    availableCards_getInstance().putCard();
  };
  _no_name_provided__165.prototype.invoke_73 = function () {
    this.invoke_302();
    return Unit_getInstance();
  };
  _no_name_provided__165.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__166() {
  }
  _no_name_provided__166.prototype.invoke_302 = function () {
    var wrapper = document.querySelectorAll('.options-wrapperInside');
    options_getInstance().updateAllViews();
    if (isMobile()) {
      var tmp0_repeat_0 = wrapper.length;
      var inductionVariable = 0;
      if (inductionVariable < tmp0_repeat_0)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp0_asDynamic_0_4 = wrapper[index_2];
          tmp0_asDynamic_0_4.style.flexDirection = 'column';
        }
         while (inductionVariable < tmp0_repeat_0);
    } else {
      var tmp1_repeat_0 = wrapper.length;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < tmp1_repeat_0)
        do {
          var index_2_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var tmp0_asDynamic_0_4_0 = wrapper[index_2_0];
          tmp0_asDynamic_0_4_0.style.flexDirection = 'row';
        }
         while (inductionVariable_0 < tmp1_repeat_0);
    }
  };
  _no_name_provided__166.prototype.invoke_73 = function () {
    this.invoke_302();
    return Unit_getInstance();
  };
  _no_name_provided__166.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__167() {
  }
  _no_name_provided__167.prototype.invoke_306 = function (it) {
    var tmp0_subject = window.location.hash;
    switch (tmp0_subject) {
      case '#startemenu':
        var tmp = startmenu();
        changePage$default(tmp, null, 2, null);
        break;
      case '#pregame':
        var tmp_0 = pregame();
        changePage(tmp_0, _no_name_provided_$factory_135());
        break;
      case '#play':
        var tmp_1 = play();
        changePage(tmp_1, _no_name_provided_$factory_136());
        break;
      case '#options':
        var tmp_2 = options();
        changePage(tmp_2, _no_name_provided_$factory_137());
        break;
      default:var tmp_3 = startmenu();
        changePage$default(tmp_3, null, 2, null);
        break;
    }
  };
  _no_name_provided__167.prototype.invoke_81 = function (p1) {
    this.invoke_306(p1 instanceof Event ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__167.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__168() {
  }
  _no_name_provided__168.prototype.invoke_302 = function () {
    return Unit_getInstance();
  };
  _no_name_provided__168.prototype.invoke_73 = function () {
    this.invoke_302();
    return Unit_getInstance();
  };
  _no_name_provided__168.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_133() {
    var i = new _no_name_provided__167();
    return function (p1) {
      i.invoke_306(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_134() {
    var i = new _no_name_provided__168();
    return function () {
      i.invoke_302();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_135() {
    var i = new _no_name_provided__164();
    return function () {
      i.invoke_302();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_136() {
    var i = new _no_name_provided__165();
    return function () {
      i.invoke_302();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_137() {
    var i = new _no_name_provided__166();
    return function () {
      i.invoke_302();
      return Unit_getInstance();
    };
  }
  function difficulty() {
    difficulty_instance = this;
    this._level_3 = null;
  }
  difficulty.prototype._set_level_ = function (value) {
    session_getInstance().set_27('difficulty.level', value);
    this._level_3 = value;
    this.updateView_0();
  };
  difficulty.prototype._get_level__2 = function () {
    var tmp = this;
    var tmp0_elvis_lhs = this._level_3;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      var tmp_1 = session_getInstance().get_53('difficulty.level');
      tmp_0 = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : null;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp._level_3 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this._level_3;
  };
  difficulty.prototype.updateView_0 = function () {
    var tmp0_subject = this._get_level__2();
    switch (tmp0_subject) {
      case 0:
        var tmp1_safe_receiver = document.querySelector('#options-difficultyWrapper .options-chkbx[data-id="0"]');
        if (tmp1_safe_receiver == null)
          null;
        else {
          tmp1_safe_receiver.setAttribute('active', '');
          Unit_getInstance();
        }

        Unit_getInstance();
        var tmp2_safe_receiver = document.querySelector('#options-difficultyWrapper .options-chkbx[data-id="1"]');
        if (tmp2_safe_receiver == null)
          null;
        else {
          tmp2_safe_receiver.removeAttribute('active');
          Unit_getInstance();
        }

        Unit_getInstance();
        var tmp3_safe_receiver = document.querySelector('#options-difficultyWrapper .options-chkbx[data-id="2"]');
        if (tmp3_safe_receiver == null)
          null;
        else {
          tmp3_safe_receiver.removeAttribute('active');
          Unit_getInstance();
        }

        Unit_getInstance();
        break;
      case 1:
        var tmp4_safe_receiver = document.querySelector('#options-difficultyWrapper .options-chkbx[data-id="0"]');
        if (tmp4_safe_receiver == null)
          null;
        else {
          tmp4_safe_receiver.removeAttribute('active');
          Unit_getInstance();
        }

        Unit_getInstance();
        var tmp5_safe_receiver = document.querySelector('#options-difficultyWrapper .options-chkbx[data-id="1"]');
        if (tmp5_safe_receiver == null)
          null;
        else {
          tmp5_safe_receiver.setAttribute('active', '');
          Unit_getInstance();
        }

        Unit_getInstance();
        var tmp6_safe_receiver = document.querySelector('#options-difficultyWrapper .options-chkbx[data-id="2"]');
        if (tmp6_safe_receiver == null)
          null;
        else {
          tmp6_safe_receiver.removeAttribute('active');
          Unit_getInstance();
        }

        Unit_getInstance();
        break;
      case 2:
        var tmp7_safe_receiver = document.querySelector('#options-difficultyWrapper .options-chkbx[data-id="0"]');
        if (tmp7_safe_receiver == null)
          null;
        else {
          tmp7_safe_receiver.removeAttribute('active');
          Unit_getInstance();
        }

        Unit_getInstance();
        var tmp8_safe_receiver = document.querySelector('#options-difficultyWrapper .options-chkbx[data-id="1"]');
        if (tmp8_safe_receiver == null)
          null;
        else {
          tmp8_safe_receiver.removeAttribute('active');
          Unit_getInstance();
        }

        Unit_getInstance();
        var tmp9_safe_receiver = document.querySelector('#options-difficultyWrapper .options-chkbx[data-id="2"]');
        if (tmp9_safe_receiver == null)
          null;
        else {
          tmp9_safe_receiver.setAttribute('active', '');
          Unit_getInstance();
        }

        Unit_getInstance();
        break;
    }
  };
  difficulty.$metadata$ = {
    simpleName: 'difficulty',
    kind: 'object',
    interfaces: []
  };
  var difficulty_instance;
  function difficulty_getInstance() {
    if (difficulty_instance == null)
      new difficulty();
    return difficulty_instance;
  }
  function rumble() {
    rumble_instance = this;
    this._state_1 = null;
  }
  rumble.prototype._set_state__1 = function (value) {
    session_getInstance().set_27('rumble.state', value);
    this._state_1 = value;
    this.updateView_0();
  };
  rumble.prototype._get_state__0 = function () {
    var tmp = this;
    var tmp0_elvis_lhs = this._state_1;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      var tmp_1 = session_getInstance().get_53('rumble.state');
      tmp_0 = (!(tmp_1 == null) ? typeof tmp_1 === 'boolean' : false) ? tmp_1 : null;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_2;
    if (tmp1_elvis_lhs == null) {
      tmp_2 = true;
    } else {
      tmp_2 = tmp1_elvis_lhs;
    }
    tmp._state_1 = tmp_2;
    return this._state_1;
  };
  rumble.prototype.updateView_0 = function () {
    if (this._get_state__0() === true) {
      var tmp0_safe_receiver = document.querySelector('#options-rumbleWrapper .options-chkbx[data-id="0"]');
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.setAttribute('active', '');
        Unit_getInstance();
      }
      Unit_getInstance();
      var tmp1_safe_receiver = document.querySelector('#options-rumbleWrapper .options-chkbx[data-id="1"]');
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.removeAttribute('active');
        Unit_getInstance();
      }
      Unit_getInstance();
    } else {
      var tmp2_safe_receiver = document.querySelector('#options-rumbleWrapper .options-chkbx[data-id="0"]');
      if (tmp2_safe_receiver == null)
        null;
      else {
        tmp2_safe_receiver.removeAttribute('active');
        Unit_getInstance();
      }
      Unit_getInstance();
      var tmp3_safe_receiver = document.querySelector('#options-rumbleWrapper .options-chkbx[data-id="1"]');
      if (tmp3_safe_receiver == null)
        null;
      else {
        tmp3_safe_receiver.setAttribute('active', '');
        Unit_getInstance();
      }
      Unit_getInstance();
    }
  };
  rumble.$metadata$ = {
    simpleName: 'rumble',
    kind: 'object',
    interfaces: []
  };
  var rumble_instance;
  function rumble_getInstance() {
    if (rumble_instance == null)
      new rumble();
    return rumble_instance;
  }
  function options_0() {
    options_instance = this;
  }
  options_0.prototype.updateAllViews = function () {
    difficulty_getInstance().updateView_0();
    rumble_getInstance().updateView_0();
  };
  options_0.$metadata$ = {
    simpleName: 'options',
    kind: 'object',
    interfaces: []
  };
  var options_instance;
  function options_getInstance() {
    if (options_instance == null)
      new options_0();
    return options_instance;
  }
  function isMobile() {
    return window.navigator.maxTouchPoints > 1;
  }
  function session() {
    session_instance = this;
  }
  session.prototype.set_27 = function (id, content) {
    var tmp;
    if (typeof content === 'object') {
      tmp = JSON.stringify(content);
    } else {
      tmp = content;
    }
    var value = tmp;
    var tmp0_set_0 = sessionStorage;
    var tmp1_set_0 = value;
    tmp0_set_0[id] = tmp1_set_0;
  };
  session.prototype.get_53 = function (id) {
    var tmp0_get_0 = sessionStorage;
    var value = tmp0_get_0[id];
    var tmp0_safe_receiver = value;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp_0;
      try {
        tmp_0 = JSON.parse(tmp0_safe_receiver);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Exception) {
          tmp_1 = tmp0_safe_receiver;
        } else {
          {
            throw $p;
          }
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  session.$metadata$ = {
    simpleName: 'session',
    kind: 'object',
    interfaces: []
  };
  var session_instance;
  function session_getInstance() {
    if (session_instance == null)
      new session();
    return session_instance;
  }
  function coerce(input_0, min, max_0) {
    var tmp;
    if (input_0 < min) {
      tmp = min;
    } else if (input_0 > max_0) {
      tmp = max_0;
    } else {
      tmp = input_0;
    }
    return tmp;
  }
  function shareRoutine() {
    var tmp = rumbler_getInstance();
    tmp.rumble$default(0.0, 1, null);
    try {
      navigator.share({url: 'https://drinkingapp-4376b.web.app/', title: 'Trink! Trink!'}).then(function (d) {
        console.log(d);
      });
    } catch ($p) {
      if ($p instanceof Exception) {
        (function () {
          var $externalVarargReceiverTmp = console;
          return $externalVarargReceiverTmp.log.apply($externalVarargReceiverTmp, [].concat([$p]));
        }.call(this));
      } else {
        {
          throw $p;
        }
      }
    }
  }
  function _no_name_provided__169($cardDyn) {
    this._$cardDyn = $cardDyn;
  }
  _no_name_provided__169.prototype.invoke_302 = function () {
    interactions_getInstance()._isMoving = false;
    this._$cardDyn.style.transition = '' + 'all ' + constants_getInstance()._turnTime + 'ms';
  };
  _no_name_provided__169.prototype.invoke_73 = function () {
    this.invoke_302();
    return Unit_getInstance();
  };
  _no_name_provided__169.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__170($cardDyn) {
    this._$cardDyn_0 = $cardDyn;
  }
  _no_name_provided__170.prototype.invoke_73 = function () {
    this._$cardDyn_0.style.transition = '' + 'all ' + constants_getInstance()._animTimeBounce + 'ms';
    this._$cardDyn_0.style.transform = getMatrix(interactions_getInstance(), 0.0, 0.0, interactions_getInstance()._offsetY);
    var tmp = window;
    return function () {
      var $externalVarargReceiverTmp = tmp;
      return $externalVarargReceiverTmp.setTimeout.apply($externalVarargReceiverTmp, [_no_name_provided_$factory_145(this._$cardDyn_0), constants_getInstance()._animTimeBounce]);
    }.call(this);
  };
  _no_name_provided__170.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__171() {
  }
  _no_name_provided__171.prototype.invoke_302 = function () {
    availableCards_getInstance().putCard();
    rumbler_getInstance().rumble(1.3);
    interactions_getInstance()._isMoving = false;
  };
  _no_name_provided__171.prototype.invoke_73 = function () {
    this.invoke_302();
    return Unit_getInstance();
  };
  _no_name_provided__171.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__172() {
  }
  _no_name_provided__172.prototype.invoke_302 = function () {
    var tmp = startmenu();
    changePage$default(tmp, null, 2, null);
    var tmp_0 = rumbler_getInstance();
    tmp_0.rumble$default(0.0, 1, null);
  };
  _no_name_provided__172.prototype.invoke_73 = function () {
    this.invoke_302();
    return Unit_getInstance();
  };
  _no_name_provided__172.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__173() {
  }
  _no_name_provided__173.prototype.invoke_302 = function () {
    interactions_getInstance()._shouldRotate = true;
  };
  _no_name_provided__173.prototype.invoke_73 = function () {
    this.invoke_302();
    return Unit_getInstance();
  };
  _no_name_provided__173.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__174() {
  }
  _no_name_provided__174.prototype.invoke_302 = function () {
    availableCards_getInstance().putCard();
    interactions_getInstance()._isMoving = false;
  };
  _no_name_provided__174.prototype.invoke_73 = function () {
    this.invoke_302();
    return Unit_getInstance();
  };
  _no_name_provided__174.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__175() {
  }
  _no_name_provided__175.prototype.invoke_302 = function () {
    var tmp = startmenu();
    changePage$default(tmp, null, 2, null);
  };
  _no_name_provided__175.prototype.invoke_73 = function () {
    this.invoke_302();
    return Unit_getInstance();
  };
  _no_name_provided__175.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function constants() {
    constants_instance = this;
    this._animTimeRet = 100;
    this._animTimeBounce = 80;
    this._animTimeOut = 150;
    this._animTimeDef = 150;
    this._turnTime = 5;
  }
  constants.prototype._get_animTimeRet_ = function () {
    return this._animTimeRet;
  };
  constants.prototype._get_animTimeBounce_ = function () {
    return this._animTimeBounce;
  };
  constants.prototype._get_animTimeOut_ = function () {
    return this._animTimeOut;
  };
  constants.prototype._get_animTimeDef_ = function () {
    return this._animTimeDef;
  };
  constants.prototype._get_animTimeIn_ = function () {
    return isMobile() ? 250 : 100;
  };
  constants.prototype._get_turnTime_ = function () {
    return this._turnTime;
  };
  constants.$metadata$ = {
    simpleName: 'constants',
    kind: 'object',
    interfaces: []
  };
  var constants_instance;
  function constants_getInstance() {
    if (constants_instance == null)
      new constants();
    return constants_instance;
  }
  function getMatrix($this, angle, tx, ty) {
    var tmp = Math.cos(angle);
    var tmp_0 = Math.sin(angle);
    var tmp0_sin_0 = -angle;
    var tmp_1 = Math.sin(tmp0_sin_0);
    return '' + 'matrix(' + tmp + ', ' + tmp_0 + ', ' + tmp_1 + ', ' + Math.cos(angle) + ', ' + tx + ', ' + ty + ')';
  }
  function _no_name_provided__176() {
  }
  _no_name_provided__176.prototype.invoke_306 = function (it) {
    var tmp0_asDynamic_0 = it.target;
    tmp0_asDynamic_0.style.transition = '' + 'all ' + constants_getInstance()._turnTime + 'ms';
    interactions_getInstance()._dX = 0.0;
    interactions_getInstance()._dY = 0.0;
    if (!interactions_getInstance()._isMoving) {
      var tmp = interactions_getInstance();
      var tmp_0 = it.touches[0].clientX;
      tmp._oriX = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
      var tmp_1 = interactions_getInstance();
      var tmp_2 = it.touches[0].clientY;
      tmp_1._oriY = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE();
    }};
  _no_name_provided__176.prototype.invoke_81 = function (p1) {
    this.invoke_306(p1 instanceof Event ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__176.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__177() {
  }
  _no_name_provided__177.prototype.invoke_306 = function (it) {
    var tmp0_asDynamic_0 = document.querySelector('#card');
    var cardDyn = tmp0_asDynamic_0;
    var tmp1_asDynamic_0 = document.querySelector('#play-name');
    var playNameDyn = tmp1_asDynamic_0;
    var zoneSize = new Pair(ensureNotNull(document.body).clientWidth * 0.3, ensureNotNull(document.body).clientHeight * 0.33);
    if ((interactions_getInstance()._dX < zoneSize._first ? interactions_getInstance()._dX > -zoneSize._first : false) ? interactions_getInstance()._dY < zoneSize._second : false) {
      interactions_getInstance()._isMoving = true;
      playNameDyn.style.opacity = '1.0';
      cardDyn.style.transition = '' + 'all ' + constants_getInstance()._animTimeRet + 'ms';
      var tmp = interactions_getInstance();
      var tmp2_sin_0 = interactions_getInstance()._dX;
      var tmp_0 = -Math.sin(tmp2_sin_0) * 15;
      var tmp3_sin_0 = interactions_getInstance()._dY;
      cardDyn.style.transform = getMatrix(tmp, 0.0, tmp_0, -Math.sin(tmp3_sin_0) * 15 + interactions_getInstance()._offsetY);
      var tmp_1 = window;
      (function () {
        var $externalVarargReceiverTmp = tmp_1;
        return $externalVarargReceiverTmp.setTimeout.apply($externalVarargReceiverTmp, [_no_name_provided_$factory_142(cardDyn), constants_getInstance()._animTimeRet]);
      }.call(this));
      Unit_getInstance();
    } else {
      if ((interactions_getInstance()._dY > zoneSize._second ? interactions_getInstance()._dX < zoneSize._first : false) ? interactions_getInstance()._dX > -zoneSize._first : false) {
        interactions_getInstance()._isMoving = true;
        cardDyn.style.transition = '' + 'all ' + constants_getInstance()._animTimeOut + 'ms';
        cardDyn.style.transform = getMatrix(interactions_getInstance(), interactions_getInstance()._angle, interactions_getInstance()._dX, interactions_getInstance()._dY + zoneSize._second * 1.5);
      } else {
        interactions_getInstance()._isMoving = true;
        cardDyn.style.transition = '' + 'all ' + constants_getInstance()._animTimeOut + 'ms';
        var tmp_2 = interactions_getInstance();
        var tmp_3 = interactions_getInstance()._angle;
        var tmp_4 = interactions_getInstance()._dX;
        var tmp4_sign_0 = interactions_getInstance()._dX;
        cardDyn.style.transform = getMatrix(tmp_2, tmp_3, tmp_4 + Math.sign(tmp4_sign_0) * zoneSize._first * 2.2, interactions_getInstance()._dY + interactions_getInstance()._offsetY);
      }
      if (game_getInstance()._get_isRunning_() === true) {
        var tmp_5 = window;
        (function () {
          var $externalVarargReceiverTmp = tmp_5;
          return $externalVarargReceiverTmp.setTimeout.apply($externalVarargReceiverTmp, [_no_name_provided_$factory_143(), roundToInt(constants_getInstance()._animTimeOut * 1.5)]);
        }.call(this));
        Unit_getInstance();
      } else {
        var tmp_6 = window;
        (function () {
          var $externalVarargReceiverTmp = tmp_6;
          return $externalVarargReceiverTmp.setTimeout.apply($externalVarargReceiverTmp, [_no_name_provided_$factory_144(), imul(constants_getInstance()._animTimeOut, 2)]);
        }.call(this));
        Unit_getInstance();
      }
    }
  };
  _no_name_provided__177.prototype.invoke_81 = function (p1) {
    this.invoke_306(p1 instanceof Event ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__177.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__178() {
  }
  _no_name_provided__178.prototype.invoke_306 = function (it) {
    if (!interactions_getInstance()._isMoving) {
      if (interactions_getInstance()._shouldRotate) {
        interactions_getInstance()._shouldRotate = false;
        var tmp = window;
        (function () {
          var $externalVarargReceiverTmp = tmp;
          return $externalVarargReceiverTmp.setTimeout.apply($externalVarargReceiverTmp, [_no_name_provided_$factory_146(), interactions_getInstance()._rotateTimeout]);
        }.call(this));
        Unit_getInstance();
        var tmp_0 = interactions_getInstance();
        var tmp_1 = it.touches[0].clientX;
        tmp_0._lastPoint = new Pair(tmp_1, it.touches[0].clientY);
        var tmp_2 = interactions_getInstance();
        var tmp_3 = it.touches[0].clientX - interactions_getInstance()._oriX;
        tmp_2._dX = (!(tmp_3 == null) ? typeof tmp_3 === 'number' : false) ? tmp_3 : THROW_CCE();
        var tmp_4 = interactions_getInstance();
        var tmp_5 = it.touches[0].clientY - interactions_getInstance()._oriY;
        tmp_4._dY = (!(tmp_5 == null) ? typeof tmp_5 === 'number' : false) ? tmp_5 : THROW_CCE();
        if (interactions_getInstance()._dX >= 0.0) {
          interactions_getInstance()._angle = (coerce(interactions_getInstance()._dX, 0.0, 200.0) - 0) / 200 * 20 * 3.141592653589793 / 180;
          var tmp0_asDynamic_0 = document.querySelector('#play-name');
          tmp0_asDynamic_0.style.opacity = (coerce(interactions_getInstance()._dX, 0.0, 100.0) - 0) / 100 * -1.0 + 1.0;
        } else {
          interactions_getInstance()._angle = -((coerce(-interactions_getInstance()._dX, 0.0, 200.0) - 0) / 200 * 20) * 3.141592653589793 / 180;
          var tmp1_asDynamic_0 = document.querySelector('#play-name');
          tmp1_asDynamic_0.style.opacity = (coerce(-interactions_getInstance()._dX, 0.0, 100.0) - 0) / 100 * -1.0 + 1.0;
        }
        var tmp2_asDynamic_0 = it.target;
        tmp2_asDynamic_0.style.transform = getMatrix(interactions_getInstance(), interactions_getInstance()._angle, interactions_getInstance()._dX + interactions_getInstance()._offsetX, interactions_getInstance()._dY + interactions_getInstance()._offsetY);
      }}};
  _no_name_provided__178.prototype.invoke_81 = function (p1) {
    this.invoke_306(p1 instanceof Event ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__178.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__179() {
  }
  _no_name_provided__179.prototype.invoke_299 = function (it) {
    if (((it.code === 'ArrowRight' ? true : it.code === 'ArrowLeft') ? true : it.code === 'ArrowDown') ? !interactions_getInstance()._isMoving : false) {
      var tmp0_subject = it.code;
      {
        var params;
        switch (tmp0_subject) {
          case 'ArrowRight':
            params = new Pair(1.0, 0.0);
            break;
          case 'ArrowLeft':
            params = new Pair(-1.0, 0.0);
            break;
          case 'ArrowDown':
            params = new Pair(0.0, 1.0);
            break;
          default:params = new Pair(0.0, 0.0);
            break;
        }
      }
      var zoneSize = new Pair(ensureNotNull(document.body).clientWidth * 0.3, ensureNotNull(document.body).clientHeight * 0.33);
      interactions_getInstance()._isMoving = true;
      var tmp0_asDynamic_0 = document.querySelector('#card');
      tmp0_asDynamic_0.style.transition = '' + 'all ' + imul(constants_getInstance()._animTimeOut, 2) + 'ms';
      var tmp1_asDynamic_0 = document.querySelector('#play-name');
      tmp1_asDynamic_0.style.transition = '' + 'all ' + imul(constants_getInstance()._animTimeOut, 2) + 'ms';
      var tmp2_asDynamic_0 = document.querySelector('#play-name');
      tmp2_asDynamic_0.style.opacity = '0.0';
      var tmp3_asDynamic_0 = document.querySelector('#card');
      var tmp = interactions_getInstance();
      var tmp4_sin_0 = params._first;
      var tmp_0 = 0.4 * Math.sin(tmp4_sin_0);
      var tmp5_sign_0 = params._first;
      tmp3_asDynamic_0.style.opacity = getMatrix(tmp, tmp_0, Math.sign(tmp5_sign_0) * zoneSize._first * 3.5, interactions_getInstance()._offsetY + params._second * zoneSize._second * 2.3);
      if (game_getInstance()._get_isRunning_() === true) {
        var tmp_1 = window;
        (function () {
          var $externalVarargReceiverTmp = tmp_1;
          return $externalVarargReceiverTmp.setTimeout.apply($externalVarargReceiverTmp, [_no_name_provided_$factory_147(), roundToInt(imul(constants_getInstance()._animTimeOut, 2) * 1.2)]);
        }.call(this));
        Unit_getInstance();
      } else {
        var tmp_2 = window;
        (function () {
          var $externalVarargReceiverTmp = tmp_2;
          return $externalVarargReceiverTmp.setTimeout.apply($externalVarargReceiverTmp, [_no_name_provided_$factory_148(), imul(constants_getInstance()._animTimeOut, 4)]);
        }.call(this));
        Unit_getInstance();
      }
    }};
  _no_name_provided__179.prototype.invoke_81 = function (p1) {
    this.invoke_299(p1 instanceof KeyboardEvent ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__179.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function interactions() {
    interactions_instance = this;
    this._oriX = 0.0;
    this._oriY = 0.0;
    this._dX = 0.0;
    this._dY = 0.0;
    this._offsetX = 0.0;
    this._offsetY = 40.0;
    this._angle = 0.0;
    this._isMoving = false;
    this._shouldRotate = true;
    this._rotateTimeout = 5;
    this._lastPoint = new Pair(0.0, 0.0);
  }
  interactions.prototype._set_oriX_ = function (_set___) {
    this._oriX = _set___;
  };
  interactions.prototype._get_oriX_ = function () {
    return this._oriX;
  };
  interactions.prototype._set_oriY_ = function (_set___) {
    this._oriY = _set___;
  };
  interactions.prototype._get_oriY_ = function () {
    return this._oriY;
  };
  interactions.prototype._set_dX_ = function (_set___) {
    this._dX = _set___;
  };
  interactions.prototype._get_dX_ = function () {
    return this._dX;
  };
  interactions.prototype._set_dY_ = function (_set___) {
    this._dY = _set___;
  };
  interactions.prototype._get_dY_ = function () {
    return this._dY;
  };
  interactions.prototype._set_offsetX_ = function (_set___) {
    this._offsetX = _set___;
  };
  interactions.prototype._get_offsetX_ = function () {
    return this._offsetX;
  };
  interactions.prototype._set_offsetY_ = function (_set___) {
    this._offsetY = _set___;
  };
  interactions.prototype._get_offsetY_ = function () {
    return this._offsetY;
  };
  interactions.prototype._set_angle_ = function (_set___) {
    this._angle = _set___;
  };
  interactions.prototype._get_angle_ = function () {
    return this._angle;
  };
  interactions.prototype._set_isMoving_ = function (_set___) {
    this._isMoving = _set___;
  };
  interactions.prototype._get_isMoving_ = function () {
    return this._isMoving;
  };
  interactions.prototype._set_shouldRotate_ = function (_set___) {
    this._shouldRotate = _set___;
  };
  interactions.prototype._get_shouldRotate_ = function () {
    return this._shouldRotate;
  };
  interactions.prototype._set_rotateTimeout_ = function (_set___) {
    this._rotateTimeout = _set___;
  };
  interactions.prototype._get_rotateTimeout_ = function () {
    return this._rotateTimeout;
  };
  interactions.prototype._set_lastPoint_ = function (_set___) {
    this._lastPoint = _set___;
  };
  interactions.prototype._get_lastPoint_ = function () {
    return this._lastPoint;
  };
  interactions.prototype.addInteractions = function (_this__0) {
    _this__0.addEventListener('touchstart', _no_name_provided_$factory_138());
    _this__0.addEventListener('touchend', _no_name_provided_$factory_139());
    _this__0.addEventListener('touchmove', _no_name_provided_$factory_140());
    var tmp = window;
    tmp.onkeyup = _no_name_provided_$factory_141();
  };
  interactions.$metadata$ = {
    simpleName: 'interactions',
    kind: 'object',
    interfaces: []
  };
  var interactions_instance;
  function interactions_getInstance() {
    if (interactions_instance == null)
      new interactions();
    return interactions_instance;
  }
  function rumbler() {
    rumbler_instance = this;
  }
  rumbler.prototype.rumble = function (mul) {
    if (rumble_getInstance()._get_state__0() === true) {
      window.navigator.vibrate(mul * 80);
      Unit_getInstance();
    }};
  rumbler.prototype.rumble$default = function (mul, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      mul = 1.0;
    return this.rumble(mul);
  };
  rumbler.$metadata$ = {
    simpleName: 'rumbler',
    kind: 'object',
    interfaces: []
  };
  var rumbler_instance;
  function rumbler_getInstance() {
    if (rumbler_instance == null)
      new rumbler();
    return rumbler_instance;
  }
  function _no_name_provided__180() {
  }
  _no_name_provided__180.prototype.invoke_73 = function () {
    return session_getInstance().get_53('askNextOpportunity');
  };
  _no_name_provided__180.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function game() {
    game_instance = this;
    this._isRunning = null;
    this._askNextOpportunity = null;
  }
  game.prototype._set_isRunning_ = function (value) {
    session_getInstance().set_27('isRunning', value);
    this._isRunning = value;
  };
  game.prototype._get_isRunning_ = function () {
    var tmp = session_getInstance().get_53('isRunning');
    return (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : null;
  };
  game.prototype._set_askNextOpportunity_ = function (value) {
    session_getInstance().set_27('askNextOpportunity', true);
    this._askNextOpportunity = value;
  };
  game.prototype._get_askNextOpportunity_ = function () {
    var tmp = whenNull(this, _no_name_provided_$factory_149());
    return (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
  };
  game.prototype.ask = function () {
    var tmp = rumbler_getInstance();
    tmp.rumble$default(0.0, 1, null);
    removeClass(ensureNotNull(document.getElementById('overlay')), ['invisible']);
    Unit_getInstance();
    this._set_askNextOpportunity_(false);
  };
  game.prototype.removeAsk = function () {
    var tmp = rumbler_getInstance();
    tmp.rumble$default(0.0, 1, null);
    addClass(ensureNotNull(document.getElementById('overlay')), ['invisible']);
    Unit_getInstance();
    this._set_askNextOpportunity_(false);
  };
  game.$metadata$ = {
    simpleName: 'game',
    kind: 'object',
    interfaces: []
  };
  var game_instance;
  function game_getInstance() {
    if (game_instance == null)
      new game();
    return game_instance;
  }
  function _no_name_provided__181($cardElement) {
    this._$cardElement = $cardElement;
  }
  _no_name_provided__181.prototype.invoke_302 = function () {
    interactions_getInstance().addInteractions(this._$cardElement);
  };
  _no_name_provided__181.prototype.invoke_73 = function () {
    this.invoke_302();
    return Unit_getInstance();
  };
  _no_name_provided__181.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _set_isLastCard_($this, _set___) {
    $this._isLastCard = _set___;
  }
  function _get_isLastCard_($this) {
    return $this._isLastCard;
  }
  function _set_cardCounter_($this, _set___) {
    $this._cardCounter = _set___;
  }
  function _no_name_provided__182() {
  }
  _no_name_provided__182.prototype.invoke_73 = function () {
    var tmp0_copyOf_0 = cards;
    var tmp1_also_0 = tmp0_copyOf_0.slice();
    shuffle(tmp1_also_0);
    return tmp1_also_0;
  };
  _no_name_provided__182.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__183($cardDynamic, $cardElement) {
    this._$cardDynamic = $cardDynamic;
    this._$cardElement_0 = $cardElement;
  }
  _no_name_provided__183.prototype.invoke_73 = function () {
    this._$cardDynamic.style.transform = '' + 'matrix(1, 0, 0, 1, 0, ' + interactions_getInstance()._offsetY + ')';
    this._$cardDynamic.style.opacity = '1.0';
    var tmp = window;
    return function () {
      var $externalVarargReceiverTmp = tmp;
      return $externalVarargReceiverTmp.setTimeout.apply($externalVarargReceiverTmp, [_no_name_provided_$factory_152(this._$cardElement_0), constants_getInstance()._get_animTimeIn_()]);
    }.call(this);
  };
  _no_name_provided__183.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function availableCards() {
    availableCards_instance = this;
    this._isLastCard = false;
    this._cardLimit = 25;
    this._cardCounter = 0;
    var tmp = this;
    tmp._deck = [];
  }
  availableCards.prototype._get_cardLimit_ = function () {
    return this._cardLimit;
  };
  availableCards.prototype._get_cardCounter_ = function () {
    return this._cardCounter;
  };
  availableCards.prototype._set_deck_ = function (value) {
    session_getInstance().set_27('deck', value);
    this._deck = value;
  };
  availableCards.prototype._get_deck_ = function () {
    this._isLastCard = this._deck.length === 1;
    var tmp0_isEmpty_0 = this._deck;
    if (tmp0_isEmpty_0.length === 0) {
      var tmp = this;
      var tmp_0 = session_getInstance().get_53('deck');
      var tmp_1 = (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : null;
      tmp._deck = whenNull(tmp_1, _no_name_provided_$factory_150());
    } else {
    }
    return this._deck;
  };
  availableCards.prototype.nextCard = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._cardCounter;
    tmp0_this._cardCounter = tmp1 + 1 | 0;
    Unit_getInstance();
    (function () {
      var $externalVarargReceiverTmp = console;
      return $externalVarargReceiverTmp.log.apply($externalVarargReceiverTmp, [].concat(['' + this._cardCounter + '/25']));
    }.call(this));
    var tmp;
    if (!this._isLastCard ? this._cardCounter < 25 : false) {
      var res = first(this._get_deck_());
      var tmp0_toTypedArray_0 = drop(this._get_deck_(), 1);
      this._set_deck_(copyToArray_0(tmp0_toTypedArray_0));
      tmp = res;
    } else {
      game_getInstance()._set_isRunning_(false);
      tmp = endCard;
    }
    return tmp;
  };
  availableCards.prototype.putCard = function () {
    var tmp0_asDynamic_0 = document.querySelector('#play-name');
    tmp0_asDynamic_0.style.opacity = '1.0';
    var nc = this.nextCard();
    ensureNotNull(document.querySelector('#card-wrapper')).innerHTML = cardCompo(nc).outerHTML;
    var cardElement = ensureNotNull(document.querySelector('#card'));
    var cardDynamic = cardElement;
    cardDynamic.style.transition = 'all 0ms';
    cardDynamic.style.transform = '' + 'matrix(0.01, 0, 0, 0.01, 0, ' + interactions_getInstance()._offsetY + ')';
    cardDynamic.style.opacity = '0.01';
    cardDynamic.style.transition = '' + 'all ' + constants_getInstance()._get_animTimeIn_() + 'ms';
    var tmp = window;
    (function () {
      var $externalVarargReceiverTmp = tmp;
      return $externalVarargReceiverTmp.setTimeout.apply($externalVarargReceiverTmp, [_no_name_provided_$factory_151(cardDynamic, cardElement), 20]);
    }.call(this));
    Unit_getInstance();
  };
  availableCards.$metadata$ = {
    simpleName: 'availableCards',
    kind: 'object',
    interfaces: []
  };
  var availableCards_instance;
  function availableCards_getInstance() {
    if (availableCards_instance == null)
      new availableCards();
    return availableCards_instance;
  }
  function _no_name_provided__184($each_4) {
    this._$each_4 = $each_4;
  }
  _no_name_provided__184.prototype.invoke_306 = function (it) {
    playerList_getInstance().remove_34(this._$each_4);
  };
  _no_name_provided__184.prototype.invoke_81 = function (p1) {
    this.invoke_306(p1 instanceof Event ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__184.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__185() {
  }
  _no_name_provided__185.prototype.invoke_73 = function () {
    return [];
  };
  _no_name_provided__185.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__186() {
  }
  _no_name_provided__186.prototype.invoke_113 = function (_this__0) {
    _set_id_(_this__0, 'pregame-playerList');
  };
  _no_name_provided__186.prototype.invoke_81 = function (p1) {
    this.invoke_113(p1 instanceof DIV ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__186.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__187($each_4) {
    this._$each_4_0 = $each_4;
  }
  _no_name_provided__187.prototype.invoke_100 = function (_this__0) {
    _set_onClickFunction_(_this__0, _no_name_provided_$factory_156(this._$each_4_0));
    _this__0.unaryPlus_54(this._$each_4_0);
  };
  _no_name_provided__187.prototype.invoke_81 = function (p1) {
    this.invoke_100(p1 instanceof SPAN ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__187.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function playerList() {
    playerList_instance = this;
    var tmp = this;
    tmp._players = [];
  }
  playerList.prototype._set_players_ = function (value) {
    session_getInstance().set_27('players', value);
    this._players = value;
  };
  playerList.prototype._get_players_ = function () {
    var tmp0_isEmpty_0 = this._players;
    if (tmp0_isEmpty_0.length === 0) {
      var tmp = this;
      var tmp_0 = session_getInstance().get_53('players');
      var tmp_1 = (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : null;
      tmp._players = whenNull(tmp_1, _no_name_provided_$factory_153());
    } else {
    }
    return this._players;
  };
  playerList.prototype.add_26 = function (name) {
    var tmp0_also_0 = toMutableList(this._get_players_());
    tmp0_also_0.add_25(name);
    Unit_getInstance();
    var tmp1_toTypedArray_0 = tmp0_also_0;
    this._set_players_(copyToArray_0(tmp1_toTypedArray_0));
    this.update_0();
  };
  playerList.prototype.remove_34 = function (name) {
    var tmp0_also_0 = toMutableList(this._get_players_());
    tmp0_also_0.remove_31(name);
    Unit_getInstance();
    var tmp1_toTypedArray_0 = tmp0_also_0;
    this._set_players_(copyToArray_0(tmp1_toTypedArray_0));
    this.update_0();
  };
  playerList.prototype.randomPlayer = function () {
    return this._get_players_()[Default_getInstance().nextInt_6(this._get_players_().length)];
  };
  playerList.prototype.update_0 = function () {
    var tmp0_div_0 = _get_create_(document);
    var tmp1_div_0 = null;
    var tmp0_visitAndFinalize_0_2 = new DIV(attributesMapOf('class', tmp1_div_0), tmp0_div_0);
    var tmp = visitTagAndFinalize(tmp0_visitAndFinalize_0_2, tmp0_div_0, _no_name_provided_$factory_154());
    var newList = tmp instanceof HTMLDivElement ? tmp : THROW_CCE();
    var tmp2_forEach_0 = this._get_players_();
    var indexedObject = tmp2_forEach_0;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element_2 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var each_4 = element_2;
      var tmp0_span_0_5 = _get_create_(document);
      var tmp1_span_0_6 = null;
      var tmp0_visitAndFinalize_0_2_7 = new SPAN(attributesMapOf('class', tmp1_span_0_6), tmp0_span_0_5);
      (function () {
        var $externalVarargReceiverTmp = newList;
        return $externalVarargReceiverTmp.append.apply($externalVarargReceiverTmp, [].concat([visitTagAndFinalize(tmp0_visitAndFinalize_0_2_7, tmp0_span_0_5, _no_name_provided_$factory_155(each_4))]));
      }.call(this));
    }
    (function () {
      var $externalVarargReceiverTmp = ensureNotNull(document.querySelector('#pregame-playerList'));
      return $externalVarargReceiverTmp.replaceWith.apply($externalVarargReceiverTmp, [].concat([newList]));
    }.call(this));
  };
  playerList.$metadata$ = {
    simpleName: 'playerList',
    kind: 'object',
    interfaces: []
  };
  var playerList_instance;
  function playerList_getInstance() {
    if (playerList_instance == null)
      new playerList();
    return playerList_instance;
  }
  function whenNull(_this_, function_0) {
    var tmp0_elvis_lhs = _this_;
    return tmp0_elvis_lhs == null ? function_0() : tmp0_elvis_lhs;
  }
  function replaceMultiple(_this_, regex, function_0) {
    var str = _this_;
    var tmp0_repeat_0 = toList_0(regex.findAll$default(_this_, 0, 2, null))._get_size__42();
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat_0)
      do {
        var index_2 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp0_replaceFirst_0_4 = str;
        var tmp1_replaceFirst_0_5 = function_0();
        str = regex.replaceFirst(tmp0_replaceFirst_0_4, tmp1_replaceFirst_0_5);
      }
       while (inductionVariable < tmp0_repeat_0);
    return str;
  }
  function card(title, text, sips, all_0, set_1) {
    this._title = title;
    this._text = text;
    this._sips = sips;
    this._all = all_0;
    this._set = set_1;
  }
  card.prototype._set_title_ = function (_set___) {
    this._title = _set___;
  };
  card.prototype._get_title_ = function () {
    return this._title;
  };
  card.prototype._set_text_ = function (_set___) {
    this._text = _set___;
  };
  card.prototype._get_text_ = function () {
    return this._text;
  };
  card.prototype._set_sips_ = function (_set___) {
    this._sips = _set___;
  };
  card.prototype._get_sips_ = function () {
    return this._sips;
  };
  card.prototype._set_all_ = function (_set___) {
    this._all = _set___;
  };
  card.prototype._get_all_ = function () {
    return this._all;
  };
  card.prototype._set_set_ = function (_set___) {
    this._set = _set___;
  };
  card.prototype._get_set_ = function () {
    return this._set;
  };
  card.prototype.component1_3 = function () {
    return this._title;
  };
  card.prototype.component2_2 = function () {
    return this._text;
  };
  card.prototype.component3_0 = function () {
    return this._sips;
  };
  card.prototype.component4_0 = function () {
    return this._all;
  };
  card.prototype.component5 = function () {
    return this._set;
  };
  card.prototype.copy_4 = function (title, text, sips, all_0, set_1) {
    return new card(title, text, sips, all_0, set_1);
  };
  card.prototype.copy$default_4 = function (title, text, sips, all_0, set_1, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      title = this._title;
    if (!(($mask0 & 2) === 0))
      text = this._text;
    if (!(($mask0 & 4) === 0))
      sips = this._sips;
    if (!(($mask0 & 8) === 0))
      all_0 = this._all;
    if (!(($mask0 & 16) === 0))
      set_1 = this._set;
    return this.copy_4(title, text, sips, all_0, set_1);
  };
  card.prototype.toString = function () {
    return '' + 'card(title=' + this._title + ', text=' + this._text + ', sips=' + this._sips + ', all=' + this._all + ', set=' + this._set + ')';
  };
  card.prototype.hashCode = function () {
    var result = getStringHashCode(this._title);
    result = imul(result, 31) + getStringHashCode(this._text) | 0;
    result = imul(result, 31) + this._sips | 0;
    result = imul(result, 31) + (this._all | 0) | 0;
    result = imul(result, 31) + getStringHashCode(this._set) | 0;
    return result;
  };
  card.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof card))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof card ? other : THROW_CCE();
    if (!(this._title === tmp0_other_with_cast._title))
      return false;
    if (!(this._text === tmp0_other_with_cast._text))
      return false;
    if (!(this._sips === tmp0_other_with_cast._sips))
      return false;
    if (!(this._all === tmp0_other_with_cast._all))
      return false;
    if (!(this._set === tmp0_other_with_cast._set))
      return false;
    return true;
  };
  card.$metadata$ = {
    simpleName: 'card',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_138() {
    var i = new _no_name_provided__176();
    return function (p1) {
      i.invoke_306(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_139() {
    var i = new _no_name_provided__177();
    return function (p1) {
      i.invoke_306(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_140() {
    var i = new _no_name_provided__178();
    return function (p1) {
      i.invoke_306(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_141() {
    var i = new _no_name_provided__179();
    return function (p1) {
      i.invoke_299(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_142($cardDyn) {
    var i = new _no_name_provided__170($cardDyn);
    return function () {
      return i.invoke_73();
    };
  }
  function _no_name_provided_$factory_143() {
    var i = new _no_name_provided__171();
    return function () {
      i.invoke_302();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_144() {
    var i = new _no_name_provided__172();
    return function () {
      i.invoke_302();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_145($cardDyn) {
    var i = new _no_name_provided__169($cardDyn);
    return function () {
      i.invoke_302();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_146() {
    var i = new _no_name_provided__173();
    return function () {
      i.invoke_302();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_147() {
    var i = new _no_name_provided__174();
    return function () {
      i.invoke_302();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_148() {
    var i = new _no_name_provided__175();
    return function () {
      i.invoke_302();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_149() {
    var i = new _no_name_provided__180();
    return function () {
      return i.invoke_73();
    };
  }
  function _no_name_provided_$factory_150() {
    var i = new _no_name_provided__182();
    return function () {
      return i.invoke_73();
    };
  }
  function _no_name_provided_$factory_151($cardDynamic, $cardElement) {
    var i = new _no_name_provided__183($cardDynamic, $cardElement);
    return function () {
      return i.invoke_73();
    };
  }
  function _no_name_provided_$factory_152($cardElement) {
    var i = new _no_name_provided__181($cardElement);
    return function () {
      i.invoke_302();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_153() {
    var i = new _no_name_provided__185();
    return function () {
      return i.invoke_73();
    };
  }
  function _no_name_provided_$factory_154() {
    var i = new _no_name_provided__186();
    return function (p1) {
      i.invoke_113(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_155($each_4) {
    var i = new _no_name_provided__187($each_4);
    return function (p1) {
      i.invoke_100(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_156($each_4) {
    var i = new _no_name_provided__184($each_4);
    return function (p1) {
      i.invoke_306(p1);
      return Unit_getInstance();
    };
  }
  AbstractMap.prototype._get_entries__5 = Map_0.prototype._get_entries__5;
  CombinedContext.prototype.plus_3 = CoroutineContext.prototype.plus_3;
  UByteIterator.prototype.hasNext_49 = Iterator_3.prototype.hasNext_49;
  UIntIterator.prototype.hasNext_49 = Iterator_3.prototype.hasNext_49;
  ULongIterator.prototype.hasNext_49 = Iterator_3.prototype.hasNext_49;
  UShortIterator.prototype.hasNext_49 = Iterator_3.prototype.hasNext_49;
  ByteIterator.prototype.hasNext_49 = Iterator_3.prototype.hasNext_49;
  IntIterator.prototype.hasNext_49 = Iterator_3.prototype.hasNext_49;
  DoubleIterator.prototype.hasNext_49 = Iterator_3.prototype.hasNext_49;
  FloatIterator.prototype.hasNext_49 = Iterator_3.prototype.hasNext_49;
  LongIterator.prototype.hasNext_49 = Iterator_3.prototype.hasNext_49;
  CharIterator.prototype.hasNext_49 = Iterator_3.prototype.hasNext_49;
  BooleanIterator.prototype.hasNext_49 = Iterator_3.prototype.hasNext_49;
  ShortIterator.prototype.hasNext_49 = Iterator_3.prototype.hasNext_49;
  AbstractMutableList.prototype.get_44 = List.prototype.get_44;
  AbstractMutableMap.prototype._get_entries__5 = MutableMap.prototype._get_entries__5;
  InternalHashCodeMap.prototype.createJsMap_0 = InternalMap.prototype.createJsMap_0;
  KClassImpl.prototype._get_simpleName__4 = KClass.prototype._get_simpleName__4;
  KClassImpl.prototype.isInstance_4 = KClass.prototype.isInstance_4;
  _no_name_provided__57.prototype._get_destructured__0 = MatchResult.prototype._get_destructured__0;
  DefaultUnsafe.prototype.unaryPlus_53 = Unsafe.prototype.unaryPlus_53;
  DefaultUnsafe.prototype.raw_2 = Unsafe.prototype.raw_2;
  DefaultUnsafe.prototype.raw_3 = Unsafe.prototype.raw_3;
  DefaultUnsafe.prototype.raw_4 = Unsafe.prototype.raw_4;
  StringEncoder.prototype.empty_4 = AttributeEncoder.prototype.empty_4;
  BooleanEncoder.prototype.empty_4 = AttributeEncoder.prototype.empty_4;
  TickerEncoder.prototype.empty_4 = AttributeEncoder.prototype.empty_4;
  EnumEncoder.prototype.empty_4 = AttributeEncoder.prototype.empty_4;
  HTMLTag.prototype.unaryPlus_53 = Tag.prototype.unaryPlus_53;
  HTMLTag.prototype.unaryPlus_54 = Tag.prototype.unaryPlus_54;
  HTMLTag.prototype.text_44 = Tag.prototype.text_44;
  HTMLTag.prototype.text_45 = Tag.prototype.text_45;
  HTMLTag.prototype.entity_21 = Tag.prototype.entity_21;
  HTMLTag.prototype.comment_21 = Tag.prototype.comment_21;
  BUTTON.prototype.unaryPlus_53 = Tag.prototype.unaryPlus_53;
  BUTTON.prototype.unaryPlus_54 = Tag.prototype.unaryPlus_54;
  BUTTON.prototype.text_44 = Tag.prototype.text_44;
  BUTTON.prototype.text_45 = Tag.prototype.text_45;
  BUTTON.prototype.entity_21 = Tag.prototype.entity_21;
  BUTTON.prototype.comment_21 = Tag.prototype.comment_21;
  DIV.prototype.unaryPlus_53 = Tag.prototype.unaryPlus_53;
  DIV.prototype.unaryPlus_54 = Tag.prototype.unaryPlus_54;
  DIV.prototype.text_44 = Tag.prototype.text_44;
  DIV.prototype.text_45 = Tag.prototype.text_45;
  DIV.prototype.entity_21 = Tag.prototype.entity_21;
  DIV.prototype.comment_21 = Tag.prototype.comment_21;
  INPUT.prototype.unaryPlus_53 = Tag.prototype.unaryPlus_53;
  INPUT.prototype.unaryPlus_54 = Tag.prototype.unaryPlus_54;
  INPUT.prototype.text_44 = Tag.prototype.text_44;
  INPUT.prototype.text_45 = Tag.prototype.text_45;
  INPUT.prototype.entity_21 = Tag.prototype.entity_21;
  INPUT.prototype.comment_21 = Tag.prototype.comment_21;
  SPAN.prototype.unaryPlus_53 = Tag.prototype.unaryPlus_53;
  SPAN.prototype.unaryPlus_54 = Tag.prototype.unaryPlus_54;
  SPAN.prototype.text_44 = Tag.prototype.text_44;
  SPAN.prototype.text_45 = Tag.prototype.text_45;
  SPAN.prototype.entity_21 = Tag.prototype.entity_21;
  SPAN.prototype.comment_21 = Tag.prototype.comment_21;
  JSDOMBuilder.prototype.onTagError_0 = TagConsumer.prototype.onTagError_0;
  PI = 3.141592653589793;
  UNDEFINED_RESULT = UNDEFINED_RESULT$init$();
  _stableSortingIsSupported = null;
  output = output$init$();
  EmptyContinuation = EmptyContinuation$init$();
  INV_2_26 = INV_2_26$init$();
  INV_2_53 = INV_2_53$init$();
  functionClasses = functionClasses$init$();
  STRING_CASE_INSENSITIVE_ORDER = STRING_CASE_INSENSITIVE_ORDER$init$();
  REPLACEMENT_BYTE_SEQUENCE = REPLACEMENT_BYTE_SEQUENCE$init$();
  buf = new ArrayBuffer(8);
  bufFloat64 = bufFloat64$init$();
  bufFloat32 = bufFloat32$init$();
  bufInt32 = bufInt32$init$();
  lowIndex = lowIndex$init$();
  highIndex = 1 - lowIndex | 0;
  OBJECT_HASH_CODE_PROPERTY_NAME = 'kotlinHashCodeValue$';
  POW_2_32 = 4.294967296E9;
  ZERO = fromInt(0);
  ONE = fromInt(1);
  NEG_ONE = fromInt(-1);
  MAX_VALUE = new Long(-1, 2147483647);
  MIN_VALUE = new Long(0, -2147483648);
  TWO_PWR_24_ = fromInt(16777216);
  TWO_PWR_32_DBL_ = 4.294967296E9;
  TWO_PWR_63_DBL_ = 9.223372036854776E18;
  propertyRefClassMetadataCache = propertyRefClassMetadataCache$init$();
  emptyMap_0 = emptyMap();
  attributeStringString = new StringAttribute();
  attributeSetStringStringSet = new StringSetAttribute();
  attributeBooleanBoolean = BooleanAttribute_init_$Create$(null, null, 3, null);
  attributeBooleanBooleanOnOff = new BooleanAttribute('on', 'off');
  attributeBooleanTicker = new TickerAttribute();
  attributeButtonFormEncTypeEnumButtonFormEncTypeValues = new EnumAttribute(buttonFormEncTypeValues);
  attributeButtonFormMethodEnumButtonFormMethodValues = new EnumAttribute(buttonFormMethodValues);
  attributeButtonTypeEnumButtonTypeValues = new EnumAttribute(buttonTypeValues);
  attributeCommandTypeEnumCommandTypeValues = new EnumAttribute(commandTypeValues);
  attributeDirEnumDirValues = new EnumAttribute(dirValues);
  attributeDraggableEnumDraggableValues = new EnumAttribute(draggableValues);
  attributeFormEncTypeEnumFormEncTypeValues = new EnumAttribute(formEncTypeValues);
  attributeFormMethodEnumFormMethodValues = new EnumAttribute(formMethodValues);
  attributeIframeSandboxEnumIframeSandboxValues = new EnumAttribute(iframeSandboxValues);
  attributeInputFormEncTypeEnumInputFormEncTypeValues = new EnumAttribute(inputFormEncTypeValues);
  attributeInputFormMethodEnumInputFormMethodValues = new EnumAttribute(inputFormMethodValues);
  attributeInputTypeEnumInputTypeValues = new EnumAttribute(inputTypeValues);
  attributeKeyGenKeyTypeEnumKeyGenKeyTypeValues = new EnumAttribute(keyGenKeyTypeValues);
  attributeRunAtEnumRunAtValues = new EnumAttribute(runAtValues);
  attributeTextAreaWrapEnumTextAreaWrapValues = new EnumAttribute(textAreaWrapValues);
  attributeThScopeEnumThScopeValues = new EnumAttribute(thScopeValues);
  dirValues = dirValues$init$();
  draggableValues = draggableValues$init$();
  runAtValues = runAtValues$init$();
  areaShapeValues = areaShapeValues$init$();
  buttonFormEncTypeValues = buttonFormEncTypeValues$init$();
  buttonFormMethodValues = buttonFormMethodValues$init$();
  buttonTypeValues = buttonTypeValues$init$();
  commandTypeValues = commandTypeValues$init$();
  formEncTypeValues = formEncTypeValues$init$();
  formMethodValues = formMethodValues$init$();
  iframeSandboxValues = iframeSandboxValues$init$();
  inputTypeValues = inputTypeValues$init$();
  inputFormEncTypeValues = inputFormEncTypeValues$init$();
  inputFormMethodValues = inputFormMethodValues$init$();
  keyGenKeyTypeValues = keyGenKeyTypeValues$init$();
  textAreaWrapValues = textAreaWrapValues$init$();
  thScopeValues = thScopeValues$init$();
  AVERAGE_PAGE_SIZE = 32768;
  escapeMap = escapeMap$init$();
  letterRangeLowerCase = (new Char_0(97)).rangeTo(new Char_0(122));
  letterRangeUpperCase = (new Char_0(65)).rangeTo(new Char_0(90));
  digitRange = (new Char_0(48)).rangeTo(new Char_0(57));
  main();
  return _;
}));
