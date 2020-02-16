import { DISPLAY_QUIZ } from 'src/actions/quiz';

const initialState = {
  quizz: [
    {
      questions: 'Est-ce que chaque image décorative doit être dotée d\'une balise alt complétée ?',
      id: 1,
      rubrique: 'Alternatives',
      goodAnswer: 'oui',
      wrongAnswer: 'non',
      quote: 'Chaque image décorative est dotée d\'une laternative textuelle appropriée',
      goals: 'Éviter aux utilisateurs placés dans des contextes où les images ne sont pas perceptibles (navigateur texte, lecteur d’écran, navigateur avec images désactivées) d’être perturbés par des informations sur des images qui leur sont inutiles. Fournir aux robots d’indexation uniquement des informations pertinentes.',
      link: 'https://checklists.opquast.com/fr/qualiteweb/chaque-image-decorative-est-dotee-dune-alternative-textuelle-appropriee',
    },
    {
      questions: 'Est-ce que chaque image lien doit être dotée d\'une balise alt complétée ?',
      id: 2,
      rubrique: 'Alternatives',
      goodAnswer: 'oui',
      wrongAnswer: 'non',
      quote: 'Chaque image-lien est dotée d\'une alternative textuelle appropriée',
      goals: 'Permettre aux utilisateurs placés dans des contextes où les images ne sont pas perceptibles (navigateur texte, lecteur d’écran, navigateur avec images désactivées) de comprendre le sens des liens présents sur des images qu’ils ne peuvent voir. Permettre aux robots d’exploiter l’information véhiculée par les images-liens (pour le référencement, l’indexation, la traduction automatique des alternatives d’images-texte). Permettre l’affichage d’un texte pertinent pendant le chargement des images.',
      link: 'https://checklists.opquast.com/fr/qualiteweb/chaque-image-lien-est-dotee-dune-alternative-textuelle-appropriee',
    },
    {
      questions: 'Est-ce que chaque image qui porte une information doit être dotée d\'une balise alt complétée ?',
      id: 3,
      rubrique: 'Alternatives',
      goodAnswer: 'oui',
      wrongAnswer: 'non',
      quote: 'Chaque image porteuse d\'information est dotée d\'une alternative textuelle appropriée',
      goals: 'Permettre aux utilisateurs placés dans des contextes où les images ne sont pas perceptibles (navigateur texte, lecteur d\'écran, navigateur avec images désactivées) de comprendre le sens des images qu\'ils ne peuvent voir. Permettre aux robots d\'exploiter l\'information véhiculée par les images (référencement, indexation, traduction automatique des alternatives d\'images-texte). Permettre l\'affichage d\'un texte pendant le chargement des images.',
      link: 'https://checklists.opquast.com/fr/qualiteweb/chaque-image-porteuse-dinformation-est-dotee-dune-alternative-textuelle-appropriee',
    },
    {
      questions: 'Est-ce que les objets inclus dans le site doivent comporter une balise alt complétée ?',
      id: 4,
      rubrique: 'Alternatives',
      goodAnswer: 'oui',
      wrongAnswer: 'non',
      quote: 'Les objets inclus sont dotés d\'une alternative textuelle appropriée',
      goals: 'Fournir un accès à l\'information pour les utilisateurs dont le navigateur ou la plateforme ne supporte pas l\'inclusion d\'objets ou les technologies utilisées dans les objets inclus.',
      link: 'https://checklists.opquast.com/fr/qualiteweb/les-objets-inclus-sont-dotes-dune-alternative-textuelle-appropriee',
    },
    {
      questions: 'Est-ce que les contenus générés via le style doivent comporter une alternatives appropriée ?',
      id: 5,
      rubrique: 'Alternatives',
      goodAnswer: 'oui',
      wrongAnswer: 'non',
      quote: 'Les contenus générés via les styles sont dotés d\'une alternative appropriée.',
      goals: 'Permettre aux utilisateurs placés dans des contextes où les styles ne sont pas restitués (navigateur texte, lecteur d\'écran, navigateur avec styles désactivés) d’accéder à l’information présente sous forme de contenus générés en CSS (images d’arrière-plan notamment). Permettre aux robots d\'exploiter l\'information véhiculée par les styles CSS (référencement, indexation, traduction automatique des alternatives).',
      link: 'https://checklists.opquast.com/fr/qualiteweb/les-contenus-generes-via-les-styles-sont-dotes-dune-alternative-appropriee',
    },
  ],
  statut: true,
};

const quizReducer = (state = initialState, action = {}) => {
  console.log('quiz reducer : ', action);

  switch (action.type) {
    case DISPLAY_QUIZ:
      return {
        ...state,
        statut: false,
      };
    default:
      return state;
  }
};

export default quizReducer;
