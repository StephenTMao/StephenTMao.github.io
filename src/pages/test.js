import * as React from 'react';

import * as layout from '../components/layout.module.css';

const TestPage = () => {
    return (
        <div>
            <p>
                test
            </p>
            <table class={layout.posts}>
                table
                <thead class={layout.post}>
                    thead foo
                    <a href={"localhost:8000"}>bruh</a>
                    <p class={layout.date}>date</p>
                </thead>
            </table>
            <ol class={layout.posts}>
                <li class={layout.post}>
                    <date>date</date>
                    <a href={"https://google.com"}>google</a>
                </li>
            </ol>
        </div>
    );
};

export const Head = () => <title>Test Page</title>;

export default TestPage;