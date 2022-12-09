As part of this homework, you will build on homework 1 by lighting and drawing triangles. 
For lighting, you will use the Phong model with point lights (no ambient light and no decay of intensity with distance). 
To draw triangles correctly, you will implement the painter's algorithm and depth image. The use of external libraries is again prohibited.

For the purposes of this task, the JSON description of the scene is supplemented with normals for each vertex -- 
in addition to the vertices and indices tables, there is also a normals table in the root object of the JSON file, 
where the normal components for successive vertices are stored: nx0, ny0, nz0, nx1 , ny1, nz1, nx2 ... You can assume that the normals are of uniform length.

In addition, you will need information about the material and the lights.

The material parameters will be available in the material object in the root object in the JSON file. It will consist of the following data:
- color: A list of three numbers representing the RGB color components of the material. These values can range from 0 to 1.
- shininess: A number used as a power in Phong's lighting model. This value will range from 0 to infinity.

The lights parameters will be available in the lights list in the root object 
in the JSON file. Each light in the list will be specified with the following information:
- color: List of three numbers representing RGB components of light intensity. These values can range from 0 to infinity.
- position: A list of three numbers representing the coordinates of the light's location in the room.

step (1 point): Perform lighting calculation based on the Phong lighting model for individual nodes of the 3D model.

step (1 point): Draw a wireframe 3D model where the line colors should flow between the colors calculated for the individual vertices.

step (2 points): Implement flat shading where the color of the triangle should be calculated as the average color of the vertices of the triangle. 
For a correct result, you must also take care of the correct order of drawing the triangles (painter's algorithm). Realize this by arranging the triangles 
according to the Z coordinate of the centroid of the triangle after multiplying by the transformation matrix (before perspective division).

step (3 points): Build on point 3 by implementing a depth image instead of the painter's rendering algorithm. For perspective-correct interpolation 
of depths and attributes, you will need hyperbolic interpolation, which you learned about in the lectures.

To check the correctness of the painter's algorithm and the depth image, you must enable interactive rotation of the model.

Submit the assignment in the form of a ZIP file, which should contain the source code in the root directory (only files with the extension html and js).
 Use the JavaScript language without external libraries, and render with a 2D canvas (HTML canvas).