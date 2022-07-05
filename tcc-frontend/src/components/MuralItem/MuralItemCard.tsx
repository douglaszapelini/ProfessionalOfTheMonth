import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Component } from "react";
import { MuralItemModel } from "../../Model/MuralItemModel";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd"

interface MuralItemCardProps {
    listMuralItem: Array<MuralItemModel>
}
 
interface MuralItemCardState {
    listItems: Array<MuralItemModel>
}
class MuralItemCard extends Component<MuralItemCardProps, MuralItemCardState> {
    constructor(props: MuralItemCardProps) {
        super(props);
        this.state = {listItems: props.listMuralItem};
    }

    setListItems(newList: Array<MuralItemModel>){
      
      this.setState({listItems: newList})
    }

    onDragEnd = (result: DropResult) => {
      const { source, destination } = result
      if (!destination) return
  
      const items = Array.from(this.state.listItems)
      const [ newOrder ] = items.splice(source.index, 1)
      items.splice(destination.index, 0, newOrder)
      this.setListItems(items)
    }

    render() { 
      const {listItems} = this.state;

      return (
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="items">
            {(droppableProvided) => (
              <div className="items" {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
                {listItems.map(({ id, title, srcImage, description, sequence }, index) => {
                  return (
                    <Draggable key={id} draggableId={sequence.toString()} index={index}>
                      {(provided) => (
                        <Grid container justifyContent='center'>
                          <Card 
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              sx={{ width:'90%', 
                              marginTop: '1rem',
                              backgroundColor: '#808080', 
                              border: '1px solid white'}}>
                              {!!srcImage &&
                                <CardMedia
                                  component="img"
                                  image={srcImage}
                                />
                              }
                              <CardContent>
                                {/* CARD TITLE*/}
                                <Grid sx={{backgroundColor: '#373737', borderRadius:'4px'}}>
                                  <Typography variant="h6">
                                    {title}
                                  </Typography>
                                </Grid>
                                {/* CARD DESCRIPTION*/}
                                <Typography variant="body2" color="text.secondary">
                                  {description}
                                </Typography>
                              </CardContent>
                          </Card>
                        </Grid>
                      )}
                    </Draggable>
                  )
                })}
                {droppableProvided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      );
    }
}
 
export default MuralItemCard;