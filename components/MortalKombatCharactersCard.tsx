// @components/MortalKombatCharacterCard.tsx

import React from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';

interface MortalKombatCharacter {
  id: string;
  name: string;
  image: string;
  fightingStyle: string;
  specialMove: string;
}

interface MortalKombatCharacterCardProps {
  character: MortalKombatCharacter;
}

const MortalKombatCharacterCard: React.FC<MortalKombatCharacterCardProps> = ({ character }) => {
  return (
    <div className="character-card group bg-white p-4 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 mb-8 mr-6">
      <div className="character-card__content mb-4">
        <h2 className="text-xl font-bold">{character.name}</h2>
      </div>
      
      <div className='relative w-full h-40 mb-4 overflow-hidden rounded-md'>
        <div className='aspect-w-4 aspect-h-5'>
          <Image
            src={character.image} // Updated path
            alt={`${character.name} model`}
            layout="fill" // Use layout="fill" to fill the parent container
            objectFit="cover" // Maintain the aspect ratio and cover the container
          />
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <div className='flex flex-col items-center text-gray-700'>
          <div className='flex items-center'>
            <span className='mr-1'>
              <Image src='/special_fighter.png' width={18} height={18} alt='fighting style' />
            </span>
            <p className='text-sm'>{character.fightingStyle}</p>
          </div>
          <div className='flex items-center'>
            <span className='mr-1'>
              <Image src="/fighter.png" width={18} height={18} alt="special move" />
            </span>
            <p className='text-sm'>{character.specialMove}</p>
          </div>
        </div>

        <div className="character-card__btn-container">
          <CustomButton
            title='View More'
            containerStyles='w-full py-2 rounded-full bg-primary-red hover:bg-red-700 text-white text-sm font-bold'
            rightIcon='/right-arrow.svg'
            // Add your custom click handler if needed
          />
        </div>
      </div>
    </div>
  );
};

export default MortalKombatCharacterCard;
