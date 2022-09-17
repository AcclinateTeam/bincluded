import React from 'react';
import ResPartner from '../ResPartner';

const Education = () =>
{
    return (
        <>
            {/* <ResPartner title="" image="" description="" benefit="" url=""/> */}
            
            <ResPartner title="i3 Academy" image="i3.webp" description="I3 Academy is a tuition-free, public charter school located in the heart of the Woodlawn community of Birmingham, Alabama. Serving kindergarten through fifth grade students." benefit="Parents looking for a high quality school for their kindergarten through 5th grade children." url="https://www.i3academy.org/" tags="i3academy" />

            <ResPartner title="Rushton Early Learning Center" image="jrush.png" description="The James Rushton Early Learning Center provides children with exceptionally high standards of learning and development opportunities building minds and curiosity today for growth, development and learning in years ahead." benefit="Any parent looking for an early learning center for their young children" url="https://jrelc.org/" tags="Rushton" />

            <ResPartner title="Breakthrough Birmingham" image="breakbham.png" description="Breakthrough Birmingham strives to reverse educational inequity by providing free, year-round, high quality, multi-year programs for middle and high school students. As a proud member of the Birmingham community, we constantly strive for equity and seek to create opportunities for our families." benefit="Families looking for low cost high quality educational programs for their middle or high schooler" url="https://breakthroughbham.org/" tags="Breakthrough" />

        </>
    );


}

export default Education;