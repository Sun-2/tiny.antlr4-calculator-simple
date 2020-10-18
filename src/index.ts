import { CalculatorLexer } from "./generated-antlr/src/CalculatorLexer";
import {
  AddSubContext,
  CalculatorContext,
  CalculatorParser,
  ExpressionContext,
  IntContext,
  MulContext,
  ParenthesisContext,
} from "./generated-antlr/src/CalculatorParser";
import type { CalculatorVisitor } from "./generated-antlr/src/CalculatorVisitor";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import {
  AbstractParseTreeVisitor,
  ParseTreeWalker,
  TerminalNode,
} from "antlr4ts/tree";
import { CalculatorListener } from "./generated-antlr/src/CalculatorListener";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

class Vis
  extends AbstractParseTreeVisitor<number>
  implements CalculatorVisitor<number> {
  protected defaultResult(): number {
    return 0;
  }

  visitCalculator(context: CalculatorContext) {
    return context.expression().accept(this);
  }

  visitExpression(context: ExpressionContext) {
    return context.accept(this);
  }

  visitAddSub(context: AddSubContext) {
    return context._op.text === "+"
      ? this.visitExpression(context.expression(0)) +
          this.visitExpression(context.expression(1))
      : this.visitExpression(context.expression(0)) -
          this.visitExpression(context.expression(1));
  }

  visitParenthesis(context: ParenthesisContext) {
    return this.visitExpression(context.expression());
  }

  visitMul(context: MulContext) {
    return (
      this.visitExpression(context.expression(0)) *
      this.visitExpression(context.expression(1))
    );
  }

  visitInt(ctx: IntContext) {
    return parseInt(ctx.text);
  }
}

const calculate = (formula: string) => {
  const stream = CharStreams.fromString(formula);
  const lexer = new CalculatorLexer(stream);
  const commonTokenStream = new CommonTokenStream(lexer);
  const parser = new CalculatorParser(commonTokenStream);
  const tree = parser.calculator();

  const visitor = new Vis();

  const result = visitor.visit(tree);
  return result;
};

console.log(calculate("1 + 4 + 2 * 3"));
