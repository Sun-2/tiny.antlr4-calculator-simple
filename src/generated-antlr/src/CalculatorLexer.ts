// @ts-nocheck
// Generated from ./src/Calculator.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class CalculatorLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly INT = 3;
	public static readonly ADD = 4;
	public static readonly SUB = 5;
	public static readonly WS = 6;
	public static readonly MUL = 7;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "INT", "ADD", "SUB", "WS", "MUL",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", undefined, "'+'", "'-'", "' '", "'*'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "INT", "ADD", "SUB", "WS", "MUL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CalculatorLexer._LITERAL_NAMES, CalculatorLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CalculatorLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(CalculatorLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Calculator.g4"; }

	// @Override
	public get ruleNames(): string[] { return CalculatorLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return CalculatorLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return CalculatorLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return CalculatorLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\t$\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x06\x04\x17" +
		"\n\x04\r\x04\x0E\x04\x18\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\b\x03\b\x02\x02\x02\t\x03\x02\x03\x05\x02\x04\x07" +
		"\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x03\x02\x03\x03\x022;\x02" +
		"$\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02" +
		"\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02" +
		"\x02\x0F\x03\x02\x02\x02\x03\x11\x03\x02\x02\x02\x05\x13\x03\x02\x02\x02" +
		"\x07\x16\x03\x02\x02\x02\t\x1A\x03\x02\x02\x02\v\x1C\x03\x02\x02\x02\r" +
		"\x1E\x03\x02\x02\x02\x0F\"\x03\x02\x02\x02\x11\x12\x07*\x02\x02\x12\x04" +
		"\x03\x02\x02\x02\x13\x14\x07+\x02\x02\x14\x06\x03\x02\x02\x02\x15\x17" +
		"\t\x02\x02\x02\x16\x15\x03\x02\x02\x02\x17\x18\x03\x02\x02\x02\x18\x16" +
		"\x03\x02\x02\x02\x18\x19\x03\x02\x02\x02\x19\b\x03\x02\x02\x02\x1A\x1B" +
		"\x07-\x02\x02\x1B\n\x03\x02\x02\x02\x1C\x1D\x07/\x02\x02\x1D\f\x03\x02" +
		"\x02\x02\x1E\x1F\x07\"\x02\x02\x1F \x03\x02\x02\x02 !\b\x07\x02\x02!\x0E" +
		"\x03\x02\x02\x02\"#\x07,\x02\x02#\x10\x03\x02\x02\x02\x04\x02\x18\x03" +
		"\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CalculatorLexer.__ATN) {
			CalculatorLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CalculatorLexer._serializedATN));
		}

		return CalculatorLexer.__ATN;
	}

}

