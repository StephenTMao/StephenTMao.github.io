import * as React from 'react';
import { MathJax, MathJaxContext } from "better-react-mathjax";
import * as layout from '../components/layout.module.css';
import { fn_body, fn_signal } from '../components/components';

const TestPage = () => {
    const delta = "$\\beta$";
    return (
        <div>
            <MathJaxContext>
                <MathJax>{"\\( \\left( \\frac{10}{4x} \\approx 2^{12}\\right) \\)"}</MathJax>
            </MathJaxContext>
            <p>footnote signal
            <div>
            <sup>
                <a href={"#1"}>
                    {1}
                </a>
            </sup>
            <p>
                test
            </p>
        </div>
            </p>
            <fn_body fn_number={"1"}>
                <p>
                    Body
                </p>
            </fn_body>
        </div>
    );
};

export const Head = () => <title>Test Page</title>;

export default TestPage;