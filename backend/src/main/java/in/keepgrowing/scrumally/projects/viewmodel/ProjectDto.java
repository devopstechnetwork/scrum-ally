package in.keepgrowing.scrumally.projects.viewmodel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProjectDto {

    private Long id;

    @NotBlank(message = "Provide a project name")
    private String name;

    private String description;
}
