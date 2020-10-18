// @ts-nocheck
// Generated from ./src/Calculator.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { IntContext } from "./CalculatorParser";
import { AddSubContext } from "./CalculatorParser";
import { ParenthesisContext } from "./CalculatorParser";
import { MulContext } from "./CalculatorParser";
import { CalculatorContext } from "./CalculatorParser";
import { CompileUnitContext } from "./CalculatorParser";
import { ExpressionContext } from "./CalculatorParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CalculatorParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CalculatorVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `int`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInt?: (ctx: IntContext) => Result;

	/**
	 * Visit a parse tree produced by the `AddSub`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddSub?: (ctx: AddSubContext) => Result;

	/**
	 * Visit a parse tree produced by the `Parenthesis`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesis?: (ctx: ParenthesisContext) => Result;

	/**
	 * Visit a parse tree produced by the `Mul`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMul?: (ctx: MulContext) => Result;

	/**
	 * Visit a parse tree produced by `CalculatorParser.calculator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalculator?: (ctx: CalculatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CalculatorParser.compileUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompileUnit?: (ctx: CompileUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
}

