import Category from "../models/category";
import Exercise from "../models/exercise";
import PreLoadedPlaylist from "../models/preloadedPlaylists";

export const CATEGORIES = [
  new Category("c1", "ARMS", "arms"),
  new Category("c2", "LEGS", "legs"),
  new Category("c3", "CORE", "core"),
  new Category("c4", "BALANCE", "balance"),
  new Category("c5", "STRETCH", "flexibility"),
  new Category("c6", "CARDIO", "lungs"),
  new Category("c7", "CUSTOM", "custom"),
];

export const EXERCISES = [
  new Exercise(
    "e1",
    ["arms"],
    "Decline Push Ups",
    "moderate",
    "yes",
    "https://www.spotebi.com/wp-content/uploads/2016/03/decline-push-up-exercise-illustration-spotebi.gif",
    "Keep your body in a straight line, with your head in line with your torso and your torso in line with your hips. Engage your core and breathe in as you slowly bend your elbows and lower your chest to the floor. Exhale as you straighten your arms and push back to the starting position."
  ),
  new Exercise(
    "e2",
    ["legs"],
    "Alternating Side Lunge",
    "easy",
    "no",
    "https://www.spotebi.com/wp-content/uploads/2015/02/alternating-side-lunge-exercise-illustration.gif",
    "Keep your abs tight to give back support, face front, and breathe in as you step out to the side with your left leg. Keep your right leg straight, bend your left knee and push your hips back. Breathe out as you use your left foot to push you back into the starting position."
  ),
  new Exercise(
    "e3",
    ["core"],
    "Burpees",
    "moderate",
    "no",
    "https://www.spotebi.com/wp-content/uploads/2014/10/burpees-exercise-illustration.gif",
    "Keep your back straight and your core engaged at all times and maintain a natural and regular breathing pattern throughout the exercise. If done incorrectly, burpees can put your body at high risk of injury."
  ),
  new Exercise(
    "e4",
    ["balance"],
    "Crescent Lunge",
    "easy",
    "no",
    "https://www.spotebi.com/wp-content/uploads/2016/03/crescent-lunge-pose-anjaneyasana-spotebi.jpg",
    "Straighten your right leg, relax the hips and keep the front knee directly over the ankle. Lift your chest, elongate the spine and neck, look up, and keep your arms perpendicular to the floor."
  ),
  new Exercise(
    "e5",
    ["flexibility"],
    "Cobra Pose",
    "easy",
    "no",
    "https://www.spotebi.com/wp-content/uploads/2015/12/cobra-pose-bhujangasana.jpg",
    "Root your pelvis, thighs, and tops of the feet to the floor. Be mindful as you extend your arms and distribute the stretch evenly along the spine. Do not fully extend your arms if this feels uncomfortable. Feel your hips narrowing and keep your shoulders and lower back relaxed."
  ),
  new Exercise(
    "e6",
    ["cardio"],
    "Jump Rope",
    "easy",
    "no",
    "https://www.spotebi.com/wp-content/uploads/2014/10/jump-rope-exercise-illustration.gif",
    "Engage your abs, loosen your shoulders and turn the rope only with your wrists, not the entire arms. Keep the upper body straight, knees slightly bent, and jump on the balls of your feet. For a low-impact exercise, focus on doing faster and smaller jumps. Breathe deeply and naturally, keeping a smooth and steady rhythm."
  ),
  new Exercise(
    "e7",
    ["arms"],
    "Bicep Curls",
    "easy",
    "yes",
    "https://www.spotebi.com/wp-content/uploads/2014/10/biceps-curl-exercise-illustration.gif",
    "While doing bicep curls keep your knees and elbow joints loose, engage your core muscles and keep your palms facing front. Breathe out as you lift the dumbbells and maintain your back straight, your shoulders back and your head up."
  ),
];

export const PLAYLISTS = [
  new PreLoadedPlaylist("pl1", "EASY START"),
  new PreLoadedPlaylist("pl2", "CARDIO"),
  new PreLoadedPlaylist("pl3", "CORE"),
  new PreLoadedPlaylist("pl4", "FULL BODY"),
  new PreLoadedPlaylist("pl5", "YOGA"),
  new PreLoadedPlaylist("pl6", "HIIT"),
];
