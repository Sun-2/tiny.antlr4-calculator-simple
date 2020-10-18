// @ts-nocheck
// Generated from ./src/Calculator.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { IntContext } from "./CalculatorParser";
import { AddSubContext } from "./CalculatorParser";
import { ParenthesisContext } from "./CalculatorParser";
import { MulContext } from "./CalculatorParser";
import { CalculatorContext } from "./CalculatorParser";
import { CompileUnitContext } from "./CalculatorParser";
import { ExpressionContext } from "./CalculatorParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CalculatorParser`.
 */
export interface CalculatorListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `int`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterInt?: (ctx: IntContext) => void;
	/**
	 * Exit a parse tree produced by the `int`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitInt?: (ctx: IntContext) => void;

	/**
	 * Enter a parse tree produced by the `AddSub`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAddSub?: (ctx: AddSubContext) => void;
	/**
	 * Exit a parse tree produced by the `AddSub`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAddSub?: (ctx: AddSubContext) => void;

	/**
	 * Enter a parse tree produced by the `Parenthesis`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterParenthesis?: (ctx: ParenthesisContext) => void;
	/**
	 * Exit a parse tree produced by the `Parenthesis`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitParenthesis?: (ctx: ParenthesisContext) => void;

	/**
	 * Enter a parse tree produced by the `Mul`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMul?: (ctx: MulContext) => void;
	/**
	 * Exit a parse tree produced by the `Mul`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMul?: (ctx: MulContext) => void;

	/**
	 * Enter a parse tree produced by `CalculatorParser.calculator`.
	 * @param ctx the parse tree
	 */
	enterCalculator?: (ctx: CalculatorContext) => void;
	/**
	 * Exit a parse tree produced by `CalculatorParser.calculator`.
	 * @param ctx the parse tree
	 */
	exitCalculator?: (ctx: CalculatorContext) => void;

	/**
	 * Enter a parse tree produced by `CalculatorParser.compileUnit`.
	 * @param ctx the parse tree
	 */
	enterCompileUnit?: (ctx: CompileUnitContext) => void;
	/**
	 * Exit a parse tree produced by `CalculatorParser.compileUnit`.
	 * @param ctx the parse tree
	 */
	exitCompileUnit?: (ctx: CompileUnitContext) => void;

	/**
	 * Enter a parse tree produced by `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
}

