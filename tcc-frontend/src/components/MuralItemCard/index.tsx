import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Component } from "react";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd"
import { MuralItemModel } from "../../model/MuralItemModel";
import { DeleteModal } from "../DeleteModal";
import MuralItemModal from "../MuralItemModal";


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
                {listItems.map((muralItem, index) => {
                  return (
                    <Draggable key={muralItem.id} draggableId={muralItem.id.toString()} index={index}>
                      {(provided) => (
                        <Grid container justifyContent='center'>
                          <Card 
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              sx={{ width:'90%', 
                              marginTop: '1rem',
                              backgroundColor: '#808080', 
                              border: '1px solid black'}}>
                              <CardContent>
                                {/* CARD TITLE*/}
                                <Grid sx={{backgroundColor: '#373737', borderRadius:'4px 4px 0 0'}}>
                                  <Typography variant="h6">
                                    {muralItem.title}
                                  </Typography>
                                </Grid>
                                {!!muralItem.srcImage &&
                                  <CardMedia
                                    component="img"
                                    image={muralItem.srcImage}
                                  />
                                }
                                {/* CARD DESCRIPTION*/}
                                <Grid sx={{backgroundColor: '#696969', padding: '0.8rem'}}>
                                  <Typography variant="body2" color="text.secondary">
                                    {muralItem.description}
                                  </Typography>
                                </Grid>
                                {/* EDIT BUTTON */}
                                <Grid textAlign="center" sx={{backgroundColor: '#373737'}}>
                                  <MuralItemModal isInsertModal={false} muralItem={muralItem}/>
                                </Grid>
                                {/* DELETE BUTTON */}
                                <Grid textAlign="center" sx={{backgroundColor: '#373737', borderRadius:'0 0 4px 4px'}}>
                                  <DeleteModal item="Card"/>
                                </Grid>
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