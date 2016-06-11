# todo-react-coflux

> Todo app based on [redux example](https://github.com/reactjs/redux/tree/b04e7e4ea719db518faaab09e36d20112241fedd/examples/todos) written with [coflux](https://github.com/blainekasten/coflux).

# Install

    git clone https://github.com/ppoulsen/todo-react-coflux.git
    npm install
    npm start

**NOTE:** Visiblity filter renders will not update the active link until blainekasten/coflux#17 is merged and published. Until then, will need to pull that coflux branch to run:

    git clone https://github.com/blainekasten/coflux.git
    cd coflux
    git remote add ppoulsen https://github.com/ppoulsen/coflux.git
    git fetch ppoulsen
    git checkout -b AllowTextChildren ppoulsen/AllowTextChildren
    npm install && npm run build && npm link
    cd path/to/todo-react-coflux
    npm link coflux

# LICENSE (MIT)

Copyright (c) Paul Poulsen ("Author")

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.