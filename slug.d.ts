declare function slug (string: string, opts?: 'replacement' | slug.Options): string;

declare namespace slug {
  export interface Options {
    mode?: string;
    replacement?: string;
    charmap?: CharMap;
    multicharmap?: MultiCharMap;
    remove?: RegExp;
    lower?: boolean;
    symbols?: boolean;
  }

  export interface CharMap {
    [char: string]: string;
  }

  export interface MultiCharMap {
    [string: string]: string;
  }

  export var defaults: {
    mode: string;
    multicharmap: MultiCharMap;
    charmap: CharMap;
    modes: {
      rfc3986: Options;
      pretty: Options;
      [mode: string]: Options;
    };
  };

  export var multicharmap: MultiCharMap;
  export var charmap: CharMap;
}

export = slug;
