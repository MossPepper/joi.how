import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Divider,
  SettingsTile,
  SettingsTitle,
  Surrounded,
  ToggleTile,
} from '../../common';
import {
  PlayerBody,
  PlayerBodyDescriptions,
  PlayerBodyLabels,
  PlayerGender,
  PlayerGenderDescriptions,
  PlayerGenderLabels,
} from '../../types';
import { useSetting } from '../SettingsProvider';
import {
  faMars,
  faMarsAndVenus,
  faVenus,
} from '@fortawesome/free-solid-svg-icons';

export const PlayerSettings = () => {
  const [gender, setGender] = useSetting('gender');
  const [body, setBody] = useSetting('body');

  return (
    <SettingsTile label={'Player'}>
      <SettingsTitle>Select your gender</SettingsTitle>
      {Object.keys(PlayerGender).map(key => {
        const current = PlayerGender[key as keyof typeof PlayerGender];
        return (
          <ToggleTile
            key={current}
            enabled={gender === current}
            onClick={() => setGender(current)}
          >
            <Surrounded
              trailing={
                <FontAwesomeIcon
                  style={{ aspectRatio: 1 }}
                  icon={(() => {
                    switch (current) {
                      case PlayerGender.male:
                        return faMars;
                      case PlayerGender.female:
                        return faVenus;
                      case PlayerGender.other:
                        return faMarsAndVenus;
                    }
                  })()}
                />
              }
            >
              <strong>{PlayerGenderLabels[current]}</strong>
              <p>{PlayerGenderDescriptions[current]}</p>
            </Surrounded>
          </ToggleTile>
        );
      })}
      <Divider />
      <SettingsTitle>Select your body</SettingsTitle>
      {Object.keys(PlayerBody).map(key => {
        const current = PlayerBody[key as keyof typeof PlayerBody];
        return (
          <ToggleTile
            key={current}
            enabled={body === current}
            onClick={() => setBody(current)}
          >
            <Surrounded
              trailing={(() => {
                switch (current) {
                  case PlayerBody.penis:
                    return '🍆';
                  case PlayerBody.vagina:
                    return '🍑';
                  case PlayerBody.neuter:
                    return '🥝';
                }
              })()}
            >
              <strong>{PlayerBodyLabels[current]}</strong>
              <p>{PlayerBodyDescriptions[current]}</p>
            </Surrounded>
          </ToggleTile>
        );
      })}
    </SettingsTile>
  );
};