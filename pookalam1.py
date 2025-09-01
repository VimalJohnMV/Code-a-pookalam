import turtle
import math

from matplotlib.pylab import size

# Setup screen
screen = turtle.Screen()
screen.bgcolor('black')
screen.setup(width=700, height=700)

t = turtle.Turtle()
t.hideturtle()
t.speed(0)
t.pensize(2)
t.pencolor('white')


colors = ['yellow', 'red', 'blue', 'orange']  # List of colors for each circle
radii = [280, 250, 180, 150]             # List of radii for each circle

for color, r in zip(colors, radii):
    t.up()
    t.goto(0, -r)
    t.setheading(0)
    t.down()
    t.fillcolor(color)      # Set the fill color for this circle
    t.begin_fill()          # Start filling
    t.circle(r)             # Draw the circle
    t.end_fill()            # End filling
# Draw lotus petals
petal_radius = 25
petal_distance = 240
for i in range(12):
    angle = i * 30
    t.up()
    t.goto(0, 0)
    t.setheading(angle)
    t.forward(petal_distance)
    t.down()
    t.setheading(angle+90)
    t.circle(petal_radius)
    t.fillcolor('green')      # Set the fill color for this circle
    t.begin_fill()          # Start filling
    t.circle(petal_radius)             # Draw the circle
    t.end_fill()
# Draw swastika
def draw_swastika(center_x, center_y, size):
    t.up()
    t.goto(center_x, center_y)
    t.down()
    for i in range(4):
        t.setheading(i*90)
        t.forward(size)
        t.right(90)
        t.forward(size/2)
        t.backward(size/2)
        t.left(90)
        t.backward(size)
        t.right(90)
    for i in range(4):
        t.setheading(i*45)
        t.forward(size)
        t.right(90)
        t.forward(size/2)
        t.backward(size/2)
        t.left(90)
        t.backward(size)
        t.right(90)
    for i in range(4):
        t.setheading(i*-45)
        t.forward(size)
        t.right(90)
        t.forward(size/2)
        t.backward(size/2)
        t.left(90)
        t.backward(size)
        t.right(90)
    

draw_swastika(0, 0, 120)
# Hide turtle and finish
t.hideturtle()
turtle.done()