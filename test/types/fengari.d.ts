/* eslint-disable @typescript-eslint/naming-convention, @typescript-eslint/explicit-member-accessibility, @typescript-eslint/class-name-casing */

export const FENGARI_AUTHORS: string;
export const FENGARI_COPYRIGHT: string;
export const FENGARI_RELEASE: string;
export const FENGARI_VERSION: string;
export const FENGARI_VERSION_MAJOR: string;
export const FENGARI_VERSION_MINOR: string;
export const FENGARI_VERSION_NUM: number;
export const FENGARI_VERSION_RELEASE: string;
export namespace lauxlib {
    const LUA_ERRFILE: number;
    const LUA_FILEHANDLE: Uint8Array;
    const LUA_LOADED_TABLE: Uint8Array;
    const LUA_NOREF: number;
    const LUA_PRELOAD_TABLE: Uint8Array;
    const LUA_REFNIL: number;
    class luaL_Buffer {
        L: any;
        b: any;
        n: any;
    }
    function luaL_addchar(B: any, c: any): void;
    function luaL_addlstring(B: any, s: any, l: any): void;
    function luaL_addsize(B: any, s: any): void;
    function luaL_addstring(B: any, s: any): void;
    function luaL_addvalue(B: any): void;
    function luaL_argcheck(L: any, cond: any, arg: any, extramsg: any): void;
    function luaL_argerror(L: any, arg: any, extramsg: any): any;
    function luaL_buffinit(L: any, B: any): void;
    function luaL_buffinitsize(L: any, B: any, sz: any): any;
    function luaL_callmeta(L: any, obj: any, event: any): any;
    function luaL_checkany(L: any, arg: any): void;
    function luaL_checkinteger(L: any, arg: any): any;
    function luaL_checklstring(L: any, arg: any): any;
    function luaL_checknumber(L: any, arg: any): any;
    function luaL_checkoption(L: any, arg: any, def: any, lst: any): any;
    function luaL_checkstack(L: any, space: any, msg: any): void;
    function luaL_checkstring(L: any, arg: any): any;
    function luaL_checktype(L: any, arg: any, t: any): void;
    function luaL_checkudata(L: any, ud: any, tname: any): any;
    function luaL_checkversion(L: any): void;
    function luaL_checkversion_(L: any, ver: any, sz: any): void;
    function luaL_dofile(L: any, filename: any): any;
    function luaL_dostring(L: any, s: any): any;
    function luaL_error(L: any, fmt: any, argp: any): any;
    function luaL_execresult(L: any, e: any): any;
    function luaL_fileresult(L: any, stat: any, fname: any, e: any): any;
    function luaL_getmetafield(L: any, obj: any, event: any): any;
    function luaL_getmetatable(L: any, n: any): any;
    function luaL_getsubtable(L: any, idx: any, fname: any): any;
    function luaL_gsub(L: any, s: any, p: any, r: any): any;
    function luaL_len(L: any, idx: any): any;
    function luaL_loadbuffer(L: any, s: any, sz: any, n: any): any;
    function luaL_loadbufferx(L: any, buff: any, size: any, name: any, mode: any): any;
    function luaL_loadfile(L: any, filename: any): any;
    function luaL_loadfilex(L: any, filename: any, mode: any): any;
    function luaL_loadstring(L: any, s: any): any;
    function luaL_newlib(L: any, l: any): void;
    function luaL_newlibtable(L: any): void;
    function luaL_newmetatable(L: any, tname: any): any;
    function luaL_newstate(): any;
    function luaL_opt(L: any, f: any, n: any, d: any): any;
    function luaL_optinteger(L: any, arg: any, def: any): any;
    function luaL_optlstring(L: any, arg: any, def: any): any;
    function luaL_optnumber(L: any, arg: any, def: any): any;
    function luaL_optstring(L: any, arg: any, def: any): any;
    function luaL_prepbuffer(B: any): any;
    function luaL_prepbuffsize(B: any, sz: any): any;
    function luaL_pushresult(B: any): void;
    function luaL_pushresultsize(B: any, sz: any): void;
    function luaL_ref(L: any, t: any): any;
    function luaL_requiref(L: any, modname: any, openf: any, glb: any): void;
    function luaL_setfuncs(L: any, l: any, nup: any): void;
    function luaL_setmetatable(L: any, tname: any): void;
    function luaL_testudata(L: any, ud: any, tname: any): any;
    function luaL_tolstring(L: any, idx: any): any;
    function luaL_traceback(L: any, L1: any, msg: any, level: any): void;
    function luaL_typename(L: any, i: any): any;
    function luaL_unref(L: any, t: any, ref: any): void;
    function luaL_where(L: any, level: any): void;
    function lua_writestringerror(...args: any[]): void;
}
export namespace lua {
    const LUA_AUTHORS: string;
    const LUA_COPYRIGHT: string;
    const LUA_ERRERR: number;
    const LUA_ERRGCMM: number;
    const LUA_ERRMEM: number;
    const LUA_ERRRUN: number;
    const LUA_ERRSYNTAX: number;
    const LUA_HOOKCALL: number;
    const LUA_HOOKCOUNT: number;
    const LUA_HOOKLINE: number;
    const LUA_HOOKRET: number;
    const LUA_HOOKTAILCALL: number;
    const LUA_MASKCALL: number;
    const LUA_MASKCOUNT: number;
    const LUA_MASKLINE: number;
    const LUA_MASKRET: number;
    const LUA_MINSTACK: number;
    const LUA_MULTRET: number;
    const LUA_NUMTAGS: number;
    const LUA_OK: number;
    const LUA_OPADD: number;
    const LUA_OPBAND: number;
    const LUA_OPBNOT: number;
    const LUA_OPBOR: number;
    const LUA_OPBXOR: number;
    const LUA_OPDIV: number;
    const LUA_OPEQ: number;
    const LUA_OPIDIV: number;
    const LUA_OPLE: number;
    const LUA_OPLT: number;
    const LUA_OPMOD: number;
    const LUA_OPMUL: number;
    const LUA_OPPOW: number;
    const LUA_OPSHL: number;
    const LUA_OPSHR: number;
    const LUA_OPSUB: number;
    const LUA_OPUNM: number;
    const LUA_REGISTRYINDEX: number;
    const LUA_RELEASE: string;
    const LUA_RIDX_GLOBALS: number;
    const LUA_RIDX_LAST: number;
    const LUA_RIDX_MAINTHREAD: number;
    const LUA_SIGNATURE: Uint8Array;
    const LUA_TBOOLEAN: number;
    const LUA_TFUNCTION: number;
    const LUA_TLIGHTUSERDATA: number;
    const LUA_TNIL: number;
    const LUA_TNONE: number;
    const LUA_TNUMBER: number;
    const LUA_TSTRING: number;
    const LUA_TTABLE: number;
    const LUA_TTHREAD: number;
    const LUA_TUSERDATA: number;
    const LUA_VERSION: string;
    const LUA_VERSION_MAJOR: string;
    const LUA_VERSION_MINOR: string;
    const LUA_VERSION_NUM: number;
    const LUA_VERSION_RELEASE: string;
    const LUA_YIELD: number;
    class lua_Debug {
        event: any;
        name: any;
        namewhat: any;
        what: any;
        source: any;
        currentline: any;
        linedefined: any;
        lastlinedefined: any;
        nups: any;
        nparams: any;
        isvararg: any;
        istailcall: any;
        short_src: any;
        i_ci: any;
    }
    function lua_absindex(L: any, idx: any): any;
    function lua_arith(L: any, op: any): void;
    function lua_atnativeerror(L: any, errorf: any): any;
    function lua_atpanic(L: any, panicf: any): any;
    function lua_call(L: any, n: any, r: any): void;
    function lua_callk(L: any, nargs: any, nresults: any, ctx: any, k: any): void;
    function lua_checkstack(L: any, n: any): any;
    function lua_close(L: any): void;
    function lua_compare(L: any, index1: any, index2: any, op: any): any;
    function lua_concat(L: any, n: any): void;
    function lua_copy(L: any, fromidx: any, toidx: any): void;
    function lua_createtable(L: any, narray: any, nrec: any): void;
    function lua_dump(L: any, writer: any, data: any, strip: any): any;
    function lua_error(L: any): void;
    function lua_gc(): void;
    function lua_getallocf(): any;
    function lua_getextraspace(): any;
    function lua_getfield(L: any, idx: any, k: any): any;
    function lua_getglobal(L: any, name: any): any;
    function lua_gethook(L: any): any;
    function lua_gethookcount(L: any): any;
    function lua_gethookmask(L: any): any;
    function lua_geti(L: any, idx: any, n: any): any;
    function lua_getinfo(L: any, what: any, ar: any): any;
    function lua_getlocal(L: any, ar: any, n: any): any;
    function lua_getmetatable(L: any, objindex: any): any;
    function lua_getstack(L: any, level: any, ar: any): any;
    function lua_gettable(L: any, idx: any): any;
    function lua_gettop(L: any): any;
    function lua_getupvalue(L: any, funcindex: any, n: any): any;
    function lua_getuservalue(L: any, idx: any): any;
    function lua_insert(L: any, idx: any): void;
    function lua_isboolean(L: any, n: any): any;
    function lua_iscfunction(L: any, idx: any): any;
    function lua_isfunction(L: any, idx: any): any;
    function lua_isinteger(L: any, idx: any): any;
    function lua_islightuserdata(L: any, idx: any): any;
    function lua_isnil(L: any, n: any): any;
    function lua_isnone(L: any, n: any): any;
    function lua_isnoneornil(L: any, n: any): any;
    function lua_isnumber(L: any, idx: any): any;
    function lua_isproxy(p: any, L: any): any;
    function lua_isstring(L: any, idx: any): any;
    function lua_istable(L: any, idx: any): any;
    function lua_isthread(L: any, idx: any): any;
    function lua_isuserdata(L: any, idx: any): any;
    function lua_isyieldable(L: any): any;
    function lua_len(L: any, idx: any): void;
    function lua_load(L: any, reader: any, data: any, chunkname: any, mode: any): any;
    function lua_newstate(): any;
    function lua_newtable(L: any): void;
    function lua_newthread(L: any): any;
    function lua_newuserdata(L: any, size: any): any;
    function lua_next(L: any, idx: any): any;
    function lua_pcall(L: any, n: any, r: any, f: any): any;
    function lua_pcallk(L: any, nargs: any, nresults: any, errfunc: any, ctx: any, k: any): any;
    function lua_pop(L: any, n: any): void;
    function lua_pushboolean(L: any, b: any): void;
    function lua_pushcclosure(L: any, fn: any, n: any): void;
    function lua_pushcfunction(L: any, fn: any): void;
    function lua_pushfstring(L: any, fmt: any, argp: any): any;
    function lua_pushglobaltable(L: any): void;
    function lua_pushinteger(L: any, n: any): void;
    function lua_pushjsclosure(L: any, fn: any, n: any): void;
    function lua_pushjsfunction(L: any, fn: any): void;
    function lua_pushlightuserdata(L: any, p: any): void;
    function lua_pushliteral(L: any, s: any): any;
    function lua_pushlstring(L: any, s: any, len: any): any;
    function lua_pushnil(L: any): void;
    function lua_pushnumber(L: any, n: any): void;
    function lua_pushstring(L: any, s: any): any;
    function lua_pushthread(L: any): any;
    function lua_pushvalue(L: any, idx: any): void;
    function lua_pushvfstring(L: any, fmt: any, argp: any): any;
    function lua_rawequal(L: any, index1: any, index2: any): any;
    function lua_rawget(L: any, idx: any): any;
    function lua_rawgeti(L: any, idx: any, n: any): any;
    function lua_rawgetp(L: any, idx: any, p: any): any;
    function lua_rawlen(L: any, idx: any): any;
    function lua_rawset(L: any, idx: any): void;
    function lua_rawseti(L: any, idx: any, n: any): void;
    function lua_rawsetp(L: any, idx: any, p: any): void;
    function lua_register(L: any, n: any, f: any): void;
    function lua_remove(L: any, idx: any): void;
    function lua_replace(L: any, idx: any): void;
    function lua_resume(L: any, from: any, nargs: any): any;
    function lua_rotate(L: any, idx: any, n: any): void;
    const lua_setallof: any;
    function lua_setfield(L: any, idx: any, k: any): void;
    function lua_setglobal(L: any, name: any): void;
    function lua_sethook(L: any, func: any, mask: any, count: any): void;
    function lua_seti(L: any, idx: any, n: any): void;
    function lua_setlocal(L: any, ar: any, n: any): any;
    function lua_setmetatable(L: any, objindex: any): any;
    function lua_settable(L: any, idx: any): void;
    function lua_settop(L: any, idx: any): void;
    function lua_setupvalue(L: any, funcindex: any, n: any): any;
    function lua_setuservalue(L: any, idx: any): void;
    function lua_status(L: any): any;
    function lua_stringtonumber(L: any, s: any): any;
    function lua_toboolean(L: any, idx: any): any;
    function lua_tocfunction(L: any, idx: any): any;
    function lua_todataview(L: any, idx: any): any;
    function lua_tointeger(L: any, idx: any): any;
    function lua_tointegerx(L: any, idx: any): any;
    function lua_tojsstring(L: any, idx: any): any;
    function lua_tolstring(L: any, idx: any): any;
    function lua_tonumber(L: any, idx: any): any;
    function lua_tonumberx(L: any, idx: any): any;
    function lua_topointer(L: any, idx: any): any;
    function lua_toproxy(L: any, idx: any): any;
    function lua_tostring(L: any, idx: any): LuaString;
    function lua_tothread(L: any, idx: any): any;
    function lua_touserdata(L: any, idx: any): any;
    function lua_type(L: any, idx: any): any;
    function lua_typename(L: any, t: any): any;
    function lua_upvalueid(L: any, fidx: any, n: any): any;
    function lua_upvalueindex(i: any): any;
    function lua_upvaluejoin(L: any, fidx1: any, n1: any, fidx2: any, n2: any): void;
    function lua_version(L: any): any;
    function lua_xmove(from: any, to: any, n: any): void;
    function lua_yield(L: any, n: any): void;
    function lua_yieldk(L: any, nresults: any, ctx: any, k: any): any;
}
export namespace luaconf {
    const LUAI_MAXSTACK: number;
    const LUAL_BUFFERSIZE: number;
    const LUA_COMPAT_FLOATSTRING: boolean;
    const LUA_DIRSEP: string;
    const LUA_EXEC_DIR: string;
    const LUA_IDSIZE: number;
    const LUA_INTEGER_FMT: string;
    const LUA_INTEGER_FRMLEN: string;
    const LUA_JSDIR: string;
    const LUA_JSPATH_DEFAULT: Uint8Array;
    const LUA_LDIR: string;
    const LUA_MAXINTEGER: number;
    const LUA_MININTEGER: number;
    const LUA_NUMBER_FMT: string;
    const LUA_NUMBER_FRMLEN: string;
    const LUA_PATH_DEFAULT: Uint8Array;
    const LUA_PATH_MARK: string;
    const LUA_PATH_SEP: string;
    const LUA_SHRDIR: string;
    const LUA_VDIR: string;
    function frexp(value: any): any;
    function ldexp(mantissa: any, exponent: any): any;
    function lua_getlocaledecpoint(): any;
    function lua_integer2str(n: any): any;
    function lua_number2str(n: any): any;
    function lua_numbertointeger(n: any): any;
    function luai_apicheck(l: any, e: any): void;
}
export namespace lualib {
    const LUA_BITLIBNAME: string;
    const LUA_COLIBNAME: string;
    const LUA_DBLIBNAME: string;
    const LUA_FENGARILIBNAME: string;
    const LUA_IOLIBNAME: string;
    const LUA_LOADLIBNAME: string;
    const LUA_MATHLIBNAME: string;
    const LUA_OSLIBNAME: string;
    const LUA_STRLIBNAME: string;
    const LUA_TABLIBNAME: string;
    const LUA_UTF8LIBNAME: string;
    const LUA_VERSUFFIX: string;
    function luaL_openlibs(L: any): void;
    function lua_assert(c: any): void;
    function luaopen_coroutine(L: any): any;
    function luaopen_debug(L: any): any;
    function luaopen_fengari(L: any): any;
    function luaopen_io(L: any): any;
    function luaopen_math(L: any): any;
    function luaopen_os(L: any): any;
    function luaopen_package(L: any): any;
    function luaopen_string(L: any): any;
    function luaopen_table(L: any): any;
    function luaopen_utf8(L: any): any;
}

export type LuaString = number[];

export function luastring_eq(a: any, b: any): any;
export function luastring_indexOf(s: any, v: any, i: any): any;
export function luastring_of(): any;
export function to_jsstring(value: LuaString, from?: any, to?: any, replacement_char?: any): string;
export function to_luastring(str: string, cache?: any): LuaString;
export function to_uristring(a: any): any;
