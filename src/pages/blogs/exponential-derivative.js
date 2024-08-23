import * as React from 'react';
import BlogLayout from "../../components/BlogLayout";
import { MathJax as MJ, MathJaxContext as MJC } from "better-react-mathjax";

const exp_deriv_blog = () => {
    return (
        <BlogLayout>
            <h3>Differentiating the Exponential</h3>
            <h4>Introduction</h4>
                <p>
                    In high school, Calculus BC was the medium by which I came to love mathematics, 
                    facilitated by various personalities. Specifically something that I really came to enjoy was that,
                    other than a few axiomatic assumptions about the derivative and integral, and some later axiomatic injections, 
                    the course was largely self contained, with an overarching narrative as previous results were used to derive new ones.
                </p>
                
                <p>
                    This narrative was in large part driven by 3blue1brown (
                    <a href={"https://www.3blue1brown.com/topics/calculus"}>
                        his calculus series
                    </a>), 
                    of which I am eternally grateful. However, I found the segment on the exponential derivative lacking, 
                    which has left me wanting resolution, that I satisfy here.
                </p>
            <h4>Exposition</h4>
                <p>
                    The derivative has some nice properties, of which we will modestly make use.
                </p>
                <p>
                    <u>Homogeneity: </u> 
                    <MJC><MJ>{"Let \\(f: \\mathbb{R} \\to \\mathbb{R}\\) be a function (from the reals to the reals), and let \\(c \\in \\mathbb{R}\\) be a constant."}</MJ></MJC>
                    <MJC><MJ>{"Then, \\( (c \\cdot f)' = c \\cdot (f')\\)"}</MJ></MJC>
                    In English, scaling a function by a constant also scales its derivative by that constant.
                </p>
                <p>
                    <u>Translation: </u>
                    <MJC><MJ>{"Let \\(f: \\mathbb{R} \\to \\mathbb{R}\\) be a function (from the reals to the reals), and let \\(x, c \\in \\mathbb{R}\\) be a constant."}</MJ></MJC>
                    <MJC><MJ>{"Then, \\((f(x - c))' = f'(x - c) \\)"}</MJ></MJC>
                    In English, translating a function horizontally also translates its derivative function the same way.
                </p>
                <p>
                    I will also make use of the following algebraic property of real exponentiation: 
                    <MJC><MJ>{"\\( x^{a + b} = x^a \\cdot x^b \\)"}</MJ></MJC>

                    <MJC><MJ>{"I will also assume without proof that the exponential is differentiable at \\( 0 \\), which turns out will show that the exponential is differentiable everywhere."}</MJ></MJC>
                </p>
            <h4>Development</h4>
                <MJC><MJ>
                    {"Let \\(f(x) = b^x\\), the function which we are investigating (with \\(b \\geq 0\\)), and define \\(c = f'(0) \\) \
                    (known to exist by assumption). Now define \\(g(x) = f(x - a)\\), for some real number \\(a\\)."}
                </MJ></MJC>
                <p>
                    Some calculations:
                </p>
                <MJC><MJ>
                    {"\\begin{align} \
                        g(x) &= f(x - a) \\\\\
                        &= b^{(x - a)} \\\\\
                        &= \\frac{b^x}{b^a} \\\\\\\\\
                        \\implies g(x) &= f(x) \\cdot b^a \
                    \\end{align}"}
                </MJ></MJC>
                <MJC><MJ>
                    {"Semantically, shifting a exponential function \\(b^x\\) horizontally by \\(a\\) corresponds to scaling it by \\(b^a\\)."}
                </MJ></MJC>
                <p>
                    Some more calculations abound:
                </p>
                <MJC><MJ>
                    {"\\begin{align} \
                        f'(a) &= g'(0) \\\\\
                        &= (b^a \\cdot f)'(0) \\\\\
                        &= b^a \\cdot (f'(0)) \\\\\
                        &= b^a \\cdot c \\\\\
                        &= f(a) \\cdot c \
                    \\end{align}"}
                </MJ></MJC>
                <MJC><MJ>{"Now, \\(a\\) was arbitrary, which means the above equation is true for any real number I could feed into \\(f\\), and therefore \\(f'(x) = c \\cdot f(x)\\)"}</MJ></MJC>
                <p>
                    What?? What just happened? The derivative of an exponential is just scaling itself?
                </p>
            <h4>Recapitulation</h4>
                <p>
                    The property at play here is that exponentials are self similar: if you move horizontally along the graph, 
                    and then scale the vertical axis, you get the exact same shape! And of course, if you scale the vertical axis, 
                    then all slopes get scaled by that amount as well. You can see a hint of this displayed here, 
                    and you're welcome to open Desmos and try it for yourself.
                </p>
            <h4>Coda</h4>
                <p>
                    <MJC><MJ>{"We saw that for \\(f(x) = b^x, f'(x) = c \\cdot f(x) \\). Can we have some choice of \\(b\\) where \\(c = 1\\), and then \\(f(x) = f'(x)\\)?"}</MJ></MJC>
                </p>
                <p>
                    If you play around in Desmos, it's certainly believable: but more than that, it's provable within calculus! 
                    Later on in the course, Taylor series are introduced, and it turns out that exponentials have Taylor series that converge everywhere.
                    <MJC><MJ>{"Thus, you can plug in \\(c = 1\\), and this leads to a very good approximation/convergent series for \\(e\\), the famous constant."}</MJ></MJC>
                </p>
                <p>
                    I hope you enjoyed this post, and there will be accompanying visuals and brief expansions soon!
                </p>
        </BlogLayout>
    );
};
/* axiomatic -> yet acceptable, 
eternally -> lowercase e eternal, 
algebraic properties of real exponentiation -> this is load bearing, and also type checks by context
i leave as an exercise that these results as well as a few others from calculus show that all exponentials are differentiable everywhere */
/*
nested footnote -> i got to do the thing (leave as exercise)
*/

export default exp_deriv_blog;