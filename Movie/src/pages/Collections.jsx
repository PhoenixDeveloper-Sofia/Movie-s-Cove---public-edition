import React from 'react';
import EnteredSliderCollections from '../сomponents/Collections/EnteredSliderCollections/EnteredSliderCollections';
import FamilyCollections from '../сomponents/Collections/FamilyCollections/FamilyCollections';
import LoveCollections from '../сomponents/Collections/LoveCollections/LoveCollections';
import ComicsCollections from '../сomponents/Collections/ComicsCollections/ComicsCollections';
import KidsAnimationCollections from '../сomponents/Collections/KidsAnimationCollections/KidsAnimationCollections';
import CatastropheCollections from '../сomponents/Collections/CatastropheCollections/CatastropheCollections';
import ZombieCollections from '../сomponents/Collections/ZombieCollections/ZombieCollections';
import VampireCollections from '../сomponents/Collections/VampireCollections/VampireCollections';

const Collections = () => {
    return (
        <>
            <EnteredSliderCollections />
            <div className='contentContainer'>
                <FamilyCollections />
                <KidsAnimationCollections />
                <LoveCollections />
                <ComicsCollections />
                <CatastropheCollections />
                <ZombieCollections/>
                <VampireCollections/>
            </div>
        </>
    );
};

export default Collections;