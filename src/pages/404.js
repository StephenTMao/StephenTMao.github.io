import * as React from 'react';
import TopLevelLayout from '../components/TopLevelLayout';


const NotFoundPage = () => {
  return (
    <TopLevelLayout pageTitle="Error 404">
      <p>
        Sorry about that! Please contact me if something is deprecated (or just in general actually).
      </p>
    </TopLevelLayout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
