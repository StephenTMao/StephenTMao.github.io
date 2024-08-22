import * as React from 'react';
import { MathJax, MathJaxContext } from "better-react-mathjax";
import * as layout from '../components/layout.module.css';

const TestPage = () => {
    const delta = "$\\beta$";
    return (
        <div>
            <MathJaxContext>
                <MathJax>{"\\( \\left( \\frac{10}{4x} \\approx 2^{12}\\right) \\)"}</MathJax>
            </MathJaxContext>
        </div>
    );
};

export const Head = () => <title>Test Page</title>;

export default TestPage;