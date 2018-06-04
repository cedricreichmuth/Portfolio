


if('youAreInterestedInMe' == true) {
  .click('aboutMe')
} else if ('youAreInterestedInMe' == true && 'YouAreLookingForADev' == true) {
  .click('contact')
} else {
  return 'toHome';
  alert('thankYouForVisitingMyPage')
}
