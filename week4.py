def modify_file_content(line):
    """
    Modify the content of a line. 
    For example, convert the line to uppercase.
    
    Parameters:
    line (str): A line of text from the file.
    
    Returns:
    str: Modified line of text.
    """
    return line.upper()  # Example modification: Convert to uppercase

try:
    # Ask the user for the input filename
    input_filename = input("Enter the name of the file to read: ")
    
    # Attempt to open the file for reading
    with open(input_filename, 'r') as input_file:
        # Read all lines from the file
        lines = input_file.readlines()

    # Ask the user for the output filename
    output_filename = input("Enter the name of the file to write the modified content: ")
    
    # Write the modified content to the new file
    with open(output_filename, 'w') as output_file:
        for line in lines:
            modified_line = modify_file_content(line)
            output_file.write(modified_line)
    
    print(f"Modified content has been written to '{output_filename}'.")

except FileNotFoundError:
    print(f"Error: The file '{input_filename}' does not exist.")
except PermissionError:
    print(f"Error: You don't have permission to access the file '{input_filename}'.")
except Exception as e:
    print(f"An unexpected error occurred: {e}")
