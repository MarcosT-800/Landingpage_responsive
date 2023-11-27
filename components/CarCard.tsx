// MortalKombatCharacterCard.js

import React from 'react';
import Image from "next/image";
import CustomButton from "./CustomButton";

interface MortalKombatCharacterCardProps {
  character: {
    id: string;
    name: string;
    image: string;
    fightingStyle: string;
    specialMove: string;
  };
}

const MortalKombatCharacterCard = ({ character }: MortalKombatCharacterCardProps) => {
  return (
    <div className="character-card group">
      <div className="character-card__content">
        <h2 className="character-card__content-title">{character.name}</h2>
      </div>

      <div className='relative w-full h-40 my-3'>
        <Image
          src={character.image}
          alt={`${character.name} model`}
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
          priority
        />
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray-400'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/fighting-style-icon.svg' width={20} height={20} alt='fighting style' />
            <p className='text-[14px] leading-[17px]'>{character.fightingStyle}</p>
          </div>
          <div className="character-card__icon">
            <Image src="/special-move-icon.svg" width={20} height={20} alt="special move" />
            <p className="character-card__icon-text">{character.specialMove}</p>
          </div>
        </div>

        <div className="character-card__btn-container">
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-red'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            // Add your custom click handler if needed
          />
        </div>
      </div>

      {/* Add additional details or modal if needed */}
    </div>
  );
};

export default MortalKombatCharacterCard;
