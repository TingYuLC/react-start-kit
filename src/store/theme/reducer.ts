import UPDATE_THEME, { ThemeState, UpdateThemeAction } from './types';

const initialState: ThemeState = {
  color: '#1E90FF',
};

const updateTheme = (state = initialState, action: UpdateThemeAction): ThemeState => {
  switch (action.type) {
    case UPDATE_THEME:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default updateTheme;
