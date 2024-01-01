import React from 'react'

export default function About(props) {
  document.title="TextUtils - About" 
  return (
    <div className="container mt-5" style={props.mystyle}>
       
    <div className="row">
        <div className="col-md-8 offset-md-2" style={props.mystyle}>
            <h2 className="text-center">About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac enim in urna tincidunt vestibulum.
                Integer vel libero nunc. Morbi id tellus ut libero cursus luctus. Duis vitae consectetur eros.
                Proin nec justo ut ligula efficitur consequat. Sed posuere dolor vel justo consectetur, in
                pellentesque mauris tincidunt. In hac habitasse platea dictumst. Vivamus a massa nec purus
                blandit scelerisque. Phasellus in eros vel arcu ultrices tincidunt eu ac elit. Nulla facilisi.
                Etiam gravida, libero nec tincidunt euismod, elit ligula eleifend massa, ac facilisis lacus
                turpis id nunc.</p>

            <p>Curabitur ut fermentum purus. Fusce euismod eleifend augue, et lacinia mi tincidunt eu. Duis
                rhoncus vitae odio eget congue. Integer eu ex elit. Curabitur vehicula, metus in hendrerit
                tincidunt, augue massa vulputate nisi, vel egestas nisl metus non nisl. Ut vestibulum augue
                id elit dictum, id dictum lacus volutpat. Phasellus nec felis vel velit hendrerit interdum.
                Fusce in quam tristique, auctor ex eu, lacinia lectus. Sed ultricies quam eu nunc tincidunt,
                non hendrerit ligula ullamcorper.</p>

        </div>
    </div>
</div>
  )
}
