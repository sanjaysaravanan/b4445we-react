import React from 'react'

import CardLink from './CardLink';
import './app.css';

const App = () => {
  return (
    <div className='container'>
      {/* JSX Component **should not** invoked like normal function */}
      {/* {CardLink('Self Paced', 'Learn more concepts', 'https://www.guvi.in/courses')} */}
      {/* Execute the jsx returning as a tag  */}
      <CardLink
        title='Self Paced Courses'
        description="Learn & Upskill via Online Courses"
        link="https://www.guvi.in/courses"
      />
      <CardLink
        title='LIVE Classes'
        description="Live Classes offering Guaranteed Job Placement Support"
        link="https://www.guvi.in/zen-class/?utm_source=guvi-homepage&utm_medium=body_zen_widget&utm_campaign=mid-body_button&utm_content=zen_common"
      />
      <CardLink
        title='Interactive Practice Platforms'
        description="Learn through Hands-on Coding Experience"
        link="https://www.guvi.in/code-kata"
      />
      <CardLink
        title='For Corporates'
        description="Meet your hiring needs at ease"
        link="https://www.guvi.in/mlp/GUVI-for-corporates"
      />
    </div>
  )
}

export default App;