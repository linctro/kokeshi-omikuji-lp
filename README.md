# kokeshi-omikuji-lp
こけしおみくじを紹介するLP
Implementation Plan - User Feedback Integration
Goal Description
Update the landing page to reflect specific user feedback regarding image assets, layout, and game rules.

User Review Required
3D Layout: The "X-axis depth" layout for omikuji images is interpreted as a perspective gallery.
Token Cost: "30 Kokeshi Tokens" will be added to the game description.
Proposed Changes
HTML (
index.html
)
[MODIFY] index.html
Hero Section: Change src of hero image to 
images/kokesi.png
.
Omikuji Gallery Section: Add a new section to display the 5 omikuji result images (
omikujidaikichi.jpg
, etc.) with a structure supporting 3D CSS transforms.
Usage Scenario Section: Add a section or update existing areas to use 
images/person_using_app.png
 and 
images/social_share_x.png
.
Token Cost: Add text "1回 30こけしトークン" to the relevant feature description.
CSS (
style.css
)
[MODIFY] style.css
3D Gallery Styles: Implement perspective and transform properties to create the X-axis depth effect for the omikuji images.
Usage Section Styles: Style the new image sections for proper layout and responsiveness.
Verification Plan
Manual Verification
Open 
index.html
 in browser.
Verify hero image is correct.
Verify omikuji images are displayed with a 3D depth effect.
Verify usage images are present and look good.
Verify token cost text is visible.
