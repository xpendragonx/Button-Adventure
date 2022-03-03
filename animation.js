let movingDot = [
'.',' .','  .','       .','          .','               .','                    .','                        .','                           .','                             .','                              .','                               .','                               .','                               .','                               .','                               .','                               .','                              .','                             .','                           .','                        .','                    .','               .','          .','       .','  .',' .','.','!','!!!',"end"
];

let biomeArray3Origional = 
' * + + + + + + +/-                                          {}       {}           {}               {}  #     ###    #     ###   #### ###     #          ####     ###      ' +
'   ######         #         ###               ########                  ####           _    A   wwA    __  / \\    A__/\\  %\\  A  _/-              _  /-  A  A  /\\/\\/\\ A /\\/\\ /\\       '+
'          /-      /-  /\\%\\ /\\/\\/\\A /\\/\\A/\\ %\\/\\/\\/\\ /\\A/\\                                                _         ....            <<>> <<>> <<o>   <>  <<>> <<o> <<>>           <<>>'+
'  <<>>    <___________> <___________>@@@@@<======><_______>@@@@@@@@<===>@@@@@@@@##||##||##||##||##@@@@@@@@ ///////  \\\\\\\\\\\\\\\\        @@@@@@@@           @@@@@@@@    //////#########\\\\\\\\\\\\ '+
'           ~~~~~ ~~~~~~~~~~~~  ~~~~~ ~~~~~~~~  --(((O)))-- ~~~~ ~~~~~~~~  ~~~~~ ~~~~~~~~    /////////////|||\\\\\\\\\\\\\\\\\\\\\\M M M M M M M M M M M M M M M M M M M M M=M=M=M=M=M=M=M=M=M=M=M='

let biomeArray3 = 
' * + + + + + + +/-                                          {}       {}           {}               {}  #     ###    #     ###   #### ###     #          ####     ###      ' +
'   ######         #         ###               ########                  ####           _    A   wwA    __  / \\    A__/\\  %\\  A  _/-              _  /-  A  A  /\\/\\/\\ A /\\/\\ /\\       '+
'          /-      /-  /\\%\\ /\\/\\/\\A /\\/\\A/\\ %\\/\\/\\/\\ /\\A/\\                                                _         ....            <<>> <<>> <<o>   <>  <<>> <<o> <<>>           <<>>'+
'  <<>>    <___________> <___________>@@@@@<======><_______>@@@@@@@@<===>@@@@@@@@##||##||##||##||##@@@@@@@@ ///////  \\\\\\\\\\\\\\\\        @@@@@@@@           @@@@@@@@    //////#########\\\\\\\\\\\\ '+
'           ~~~~~ ~~~~~~~~~~~~  ~~~~~ ~~~~~~~~  --(((O)))-- ~~~~ ~~~~~~~~  ~~~~~ ~~~~~~~~    /////////////|||\\\\\\\\\\\\\\\\\\\\\\M M M M M M M M M M M M M M M M M M M M M=M=M=M=M=M=M=M=M=M=M=M='

let biomeArray4Origional = 
'* + + + + + /\\_/  \\...#.........#....{}......#.......#......{}...{}..{}....{}.....{}..#....##..#...{}..#..{}..|....###.....|.....||...|w....###..{}..w...||.w.w...|..wW.Ww'+
'...wW||Ww.w...w.w.##wwwwwwwww|ww..w..www/\\.www.w.||wwwww...WW/\\...WWWww..|.w.w..WWWWWW/ \\WWW|WW/   \\ww/  \\%   \\ww/     \\/  \\/ \\/   \\w~~~~~~~~~~w/ \\/  \\,| A|,,][][][,|,][][,][(~~~~~~'+
'~~~~~)/\\_/  \\_/\\_/  \\,][][ ][][][| ][][|][ ][][][][ ][|][~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~<-q->~~~~~~~~~~~~/ \\~~~~~~~/    \\~~~~cC......][...][...][...<<>>..][...][...][...><><..>.<.][<'+
'<>>][qp@ @ qp | |qp   @@@ qp | |  qp  ] [    | |  qp | |     ]  [    |    ]  [####||##||##||##||### ]  [  /////// () \\\\\\\\\\\\\\\\www,,wwww]  [WWWww,,,,wwW,ww]  [Wwww,//////###########\\\\\\\\\\\\'+
'....))~~ ~~~~~~~~~~~~~~ ~~~~~~~~ ~~~~~~~~ ~~~~~~~/~/~\\~\\~~~~~~~~~ ~~~~~~~~ ~~~~~~~~ ~~~~~~~/////////////|||||\\\\\\\\\\\\\\\\\\\\\\W W W W W W W W W W W W W W W W W W W W W W=W=W=W=W=W=W=W=W=W=W'

let biomeArray4 = 
'* + + + + + /\\_/  \\...#.........#....{}......#.......#......{}...{}..{}....{}.....{}..#....##..#...{}..#..{}..|....###.....|.....||...|w....###..{}..w...||.w.w...|..wW.Ww'+
'...wW||Ww.w...w.w.##wwwwwwwww|ww..w..www/\\.www.w.||wwwww...WW/\\...WWWww..|.w.w..WWWWWW/ \\WWW|WW/   \\ww/  \\%   \\ww/     \\/  \\/ \\/   \\w~~~~~~~~~~w/ \\/  \\,| A|,,][][][,|,][][,][(~~~~~~'+
'~~~~~)/\\_/  \\_/\\_/  \\,][][ ][][][| ][][|][ ][][][][ ][|][~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~<-q->~~~~~~~~~~~~/ \\~~~~~~~/    \\~~~~cC......][...][...][...<<>>..][...][...][...><><..>.<.][<'+
'<>>][qp@ @ qp | |qp   @@@ qp | |  qp  ] [    | |  qp | |     ]  [    |    ]  [####||##||##||##||### ]  [  /////// () \\\\\\\\\\\\\\\\www,,wwww]  [WWWww,,,,wwW,ww]  [Wwww,//////###########\\\\\\\\\\\\'+
'....))~~ ~~~~~~~~~~~~~~ ~~~~~~~~ ~~~~~~~~ ~~~~~~~/~/~\\~\\~~~~~~~~~ ~~~~~~~~ ~~~~~~~~ ~~~~~~~/////////////|||||\\\\\\\\\\\\\\\\\\\\\\W W W W W W W W W W W W W W W W W W W W W W=W=W=W=W=W=W=W=W=W=W'


let biomeArray1 = 
' * * * * * * * * * * * *'
    


let biomeArray2 =
'* * * * * * * * * * * * '






let fiberDrawing1 = 
'/\\/\\/\\/\\/\\/\\/\\/\\';

let fiberDrawing2 = 
'\\/\\/\\/\\/\\/\\/\\/\\/';

let caveDrawing = [
  '(_)____  |',
  '      /_ |',
  '      ___|',
  '   ___\\  * ',
  ' ___  ',
  ' \\ /   ',
  ' | |___   ',
  ' |    /_  |',
  '__($)_____|',
  '  ___  ',
  '  \\ /  ',
  '  | |     |',
  '__ \\/    |',
  ' /___    *|',
  '    /___  |',
  '       __ |',
  '       \\| |',
  '       || /',
  '       ___|',
  '       \\  ',
  '      _|  ',
  '_($)__\\   ',
  ' ___      ',
  ' \\ |      ',
  '_  /      ',
  '__ \\     |',
  '|____      ',
  '    /_     ',
  '  _____   ',
  '| \\  */  |',
  '| |   |  |',
  '\\_    |  |',
  '| \\_  |  |',
  '|   \\___ |',
  '|_| ($)___|',
  '|*| __\\***',
  '|_______ *|',
  '|____ ____|',
  '|** ___ **|',
  '|   \\ /   |',
  '|____ ____|',
  ' \\  ___  /',
  '  | | ||  ',
  '  ___|_ __| ',
  '  | |*| | ',
  ' _| |*|__ |',
  '_ | |*| | ',
  ' __ |*| | ',
  ' || |*| | ',
  ' || |*| | ',
  '_ | |*| | ',
  '|_____ ___|',
  '_$$$$$____|',
  '           ',
  '           '
]




