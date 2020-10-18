grammar Calculator;

calculator : expression compileUnit;
compileUnit    :    EOF;

expression : INT #int
           | expression op=(ADD|SUB) expression #AddSub
           | '(' expression ')'                 #Parenthesis
           | expression MUL expression          #Mul
           ;

/* Lexer rules */
INT : [0-9]+ ;
ADD : '+' ;
SUB : '-' ;
WS : ' ' -> skip ;
MUL : '*' ;