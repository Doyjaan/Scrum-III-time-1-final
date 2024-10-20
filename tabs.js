// Função para abrir as tabs
function openTab(evt, tabName) {
    const contentDiv = document.getElementById('content');

    // Carregar o conteúdo correto da aba clicada
    if (tabName === 'Empresas') {
        loadEmpresas();
    } else if (tabName === 'ONGs') {
        loadONGs();
    }

    // Alterar os botões para ativos/inativos
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
}

// Função para carregar o conteúdo da aba "Empresas"
function loadEmpresas() {
    document.getElementById('content').innerHTML = `
        <div id="Empresas" class="tabcontent active">
            <h2>Cadastro de Empresas</h2>
            <form id="empresaForm">
                <!-- Informações da Empresa -->
                <fieldset>
                    <legend>Informações da Empresa</legend>
                    <label for="nome_empresa">Nome da Empresa:</label>
                    <input type="text" id="nome_empresa" name="nome_empresa" placeholder="Digite o nome da empresa" required>

                    <label for="cnpj_empresa">CNPJ:</label>
                    <input type="text" id="cnpj_empresa" name="cnpj_empresa" placeholder="Digite o CNPJ" required>

                    <label for="responsavel_empresa">Nome do Responsável:</label>
                    <input type="text" id="responsavel_empresa" name="responsavel_empresa" placeholder="Digite o nome do responsável" required>

                    <label for="email_empresa">E-mail:</label>
                    <input type="email" id="email_empresa" name="email_empresa" placeholder="exemplo@dominio.com" required>

                    <label for="telefone_empresa">Telefone:</label>
                    <input type="tel" id="telefone_empresa" name="telefone_empresa" placeholder="(XX) XXXXX-XXXX" required>
                </fieldset>

                <!-- Localização da Empresa -->
                <fieldset>
                    <legend>Localização da Empresa</legend>
                    <label for="endereco_empresa">Endereço:</label>
                    <input type="text" id="endereco_empresa" name="endereco_empresa" placeholder="Digite o endereço da empresa" required>

                    <label for="cidade_empresa">Cidade:</label>
                    <input type="text" id="cidade_empresa" name="cidade_empresa" required>

                    <label for="estado_empresa">Estado:</label>
                    <select id="estado_empresa" name="estado_empresa" required>
                        <option value="" disabled selected>Selecione seu estado</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </select>

                    <label for="cep_empresa">CEP:</label>
                    <input type="text" id="cep_empresa" name="cep_empresa" placeholder="XXXXX-XXX" required>
                </fieldset>

                <!-- O que a empresa pode doar -->
                <fieldset>
                    <legend>O que a empresa pode doar</legend>
                    
                    <label for="itens_doados">Selecione os itens que a empresa pode doar:</label>
                    <select id="itens_doados" name="itens_doados" required>
                        <option value="" disabled selected>Selecione o item</option>
                        <option value="Alimentos">Alimentos</option>
                        <option value="Roupas">Roupas</option>
                        <option value="Produtos de Limpeza">Produtos de Limpeza</option>
                        <option value="Equipamentos">Equipamentos</option>
                        <option value="Outros">Outros</option>
                    </select>

                    <!-- Campo para outros itens -->
                    <label for="descricao_outros">Descreva outros itens (caso haja):</label>
                    <textarea id="descricao_outros" name="descricao_outros" placeholder="Descreva os itens que a empresa pode doar"></textarea>

                    <!-- Estado de uso do material -->
                    <label for="estado_uso">Estado de uso do material:</label>
                    <select id="estado_uso" name="estado_uso" required>
                        <option value="" disabled selected>Selecione o estado de uso</option>
                        <option value="Novo">Novo</option>
                        <option value="Semi-novo">Semi-novo</option>
                        <option value="Usado">Usado</option>
                    </select>

                    <label for="data_doacao">Data disponível para doação:</label>
                    <input type="date" id="data_doacao" name="data_doacao" required>
                </fieldset>

                <!-- Botão de envio -->
                <input type="submit" value="Cadastrar Empresa">
            </form>

            <p id="empresaMessage" style="display:none;color:green;">Empresa cadastrada com sucesso, iremos entrar em contato com você para concluir seu cadastro!</p>
        </div>
    `;

    // Adicionar evento de submissão do formulário
    document.getElementById('empresaForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio do formulário
        document.getElementById('empresaMessage').style.display = 'block'; // Exibe a mensagem de sucesso
        this.reset(); // Limpa o formulário
    });
}

// Função para carregar o conteúdo da aba "ONGs"
function loadONGs() {
    document.getElementById('content').innerHTML = `
        <div id="ONGs" class="tabcontent active">
            <h2>Cadastro de ONGs</h2>
            <form id="ongForm">
                <!-- Informações da ONG -->
                <fieldset>
                    <legend>Informações da ONG</legend>
                    <label for="nome_ong">Nome da ONG:</label>
                    <input type="text" id="nome_ong" name="nome_ong" placeholder="Digite o nome da ONG" required>

                    <label for="cnpj_ong">CNPJ:</label>
                    <input type="text" id="cnpj_ong" name="cnpj_ong" placeholder="Digite o CNPJ" required>

                    <label for="responsavel_ong">Nome do Responsável:</label>
                    <input type="text" id="responsavel_ong" name="responsavel_ong" placeholder="Digite o nome do responsável" required>

                    <label for="email_ong">E-mail:</label>
                    <input type="email" id="email_ong" name="email_ong" placeholder="exemplo@dominio.com" required>

                    <label for="telefone_ong">Telefone:</label>
                    <input type="tel" id="telefone_ong" name="telefone_ong" placeholder="(XX) XXXXX-XXXX" required>
                </fieldset>

                <!-- Localização da ONG -->
                <fieldset>
                    <legend>Localização da ONG</legend>
                    <label for="endereco_ong">Endereço:</label>
                    <input type="text" id="endereco_ong" name="endereco_ong" placeholder="Digite o endereço da ONG" required>

                    <label for="cidade_ong">Cidade:</label>
                    <input type="text" id="cidade_ong" name="cidade_ong" required>

                    <label for="estado_ong">Estado:</label>
                    <select id="estado_ong" name="estado_ong" required>
                        <option value="" disabled selected>Selecione seu estado</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </select>

                    <label for="cep_ong">CEP:</label>
                    <input type="text" id="cep_ong" name="cep_ong" placeholder="XXXXX-XXX" required>
                </fieldset>

                <!-- O que a ONG deseja receber -->
                <fieldset>
                    <legend>O que a ONG deseja receber</legend>
                    <label for="itens_desejados">Itens desejados:</label>
                    <textarea id="itens_desejados" name="itens_desejados" placeholder="Descreva os itens que a ONG deseja receber" required></textarea>
                </fieldset>

                <!-- Botão de envio -->
                <input type="submit" value="Cadastrar ONG">
            </form>

            <p id="ongMessage" style="display:none;color:green;">ONG cadastrada com sucesso, iremos entrar em contato para concluir o cadastro!</p>
        </div>
    `;

    // Adicionar evento de submissão do formulário
    document.getElementById('ongForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio do formulário
        document.getElementById('ongMessage').style.display = 'block'; // Exibe a mensagem de sucesso
        this.reset(); // Limpa o formulário
    });
}

// Definir a aba padrão
document.getElementById('defaultOpen').click();
