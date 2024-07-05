import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },

  header: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 25,
    marginTop: 25,
    color: '#333',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    fontSize: 15,
  },

  addButton: {
    padding: 10,
    borderRadius: 10,
  },

  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },

  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  },

  taskInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  taskTitle: {
    fontSize: 15,
    marginRight: 10,
    flex: 1,
  },

  taskDone: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },

  deleteButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 5,
    marginLeft: 20,
  },

  noTasksContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  noTasksText: {
    fontSize: 15,
    color: 'gray',
  },
});

export default styles;
