import * as React from 'react';
import TopLevelLayout from '../components/TopLevelLayout';

const ProjectsPage = () => {
    return (
        <TopLevelLayout pageTitle="Projects">
            <p>Under development!</p>
        </TopLevelLayout>
    );
};


// This is the title, a feature only in Gatsby
export const Head = () => <title>About Me</title>;

export default ProjectsPage;